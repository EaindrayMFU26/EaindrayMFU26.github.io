/**
 * Cookie-free visit counter and stats API for eaindrayiscoding.com.
 *
 * The site sends a small beacon for each page view, how long it stayed open, which sections were
 * seen, and a few clicks (CV, email, links, viewers). The admin panel at /admin reads the totals
 * from GET /stats with the admin key.
 *
 * Privacy: no cookies and no IP addresses are stored. A visitor is counted with a hash of
 * IP + browser + a random salt that changes every day and is then deleted, so visits cannot be
 * linked across days or traced back to a person. Location comes from Cloudflare (country, region,
 * city, coordinates rounded to about 10 km).
 */

type Json = Record<string, unknown>;
type Row = Record<string, unknown>;

const HOUR = 3600_000;
const DAY = 24 * HOUR;
/** Thailand time (UTC+7, no daylight saving), so "today" matches the admin's calendar. */
const TZ = 7 * HOUR;
const KEEP_DAYS = 400;

const LANGS = new Set(["en", "th", "zh-Hans", "nan", "de"]);
const DEVICES = new Set(["desktop", "mobile", "tablet"]);
const EVENTS = new Set([
	"cv",
	"email",
	"copy",
	"linkedin",
	"github",
	"video",
	"cert",
	"photo",
	"lang",
	"theme",
	"outbound",
]);
/** Crawlers, link previews and scripted clients are not visitors. */
const BOT_UA =
	/bot\b|bot\/|crawl|spider|slurp|headless|lighthouse|pagespeed|preview|facebookexternalhit|embedly|whatsapp|telegram|discord|skype|slack|python|curl|wget|axios|node-fetch|undici|go-http|java\/|okhttp|phantom|selenium|puppeteer|playwright/i;

const SCHEMA = [
	`CREATE TABLE IF NOT EXISTS views (
		id TEXT PRIMARY KEY, ts INTEGER NOT NULL, last INTEGER NOT NULL, day TEXT NOT NULL, vid TEXT NOT NULL,
		country TEXT, region TEXT, city TEXT, lat REAL, lon REAL,
		device TEXT, browser TEXT, os TEXT, ref TEXT, lang TEXT, blang TEXT,
		secs INTEGER NOT NULL DEFAULT 0, depth INTEGER NOT NULL DEFAULT 0)`,
	`CREATE INDEX IF NOT EXISTS views_ts ON views (ts)`,
	`CREATE INDEX IF NOT EXISTS views_last ON views (last)`,
	`CREATE TABLE IF NOT EXISTS events (
		ts INTEGER NOT NULL, day TEXT NOT NULL, vid TEXT NOT NULL, pid TEXT, name TEXT NOT NULL, label TEXT)`,
	`CREATE INDEX IF NOT EXISTS events_ts ON events (ts)`,
	`CREATE TABLE IF NOT EXISTS salts (day TEXT PRIMARY KEY, salt TEXT NOT NULL)`,
	`CREATE TABLE IF NOT EXISTS authfail (k TEXT NOT NULL, ts INTEGER NOT NULL)`,
];

export default {
	async fetch(req, env, ctx) {
		const url = new URL(req.url);
		const origins = env.ORIGINS.split(",");
		const origin = req.headers.get("Origin") ?? "";
		const cors = corsHeaders(origin, origins);
		if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });

		try {
			await ensureSchema(env.DB);

			if (req.method === "POST" && (url.pathname === "/v" || url.pathname === "/l" || url.pathname === "/e")) {
				if (!origins.includes(origin)) return new Response(null, { status: 403, headers: cors });
				const ua = req.headers.get("User-Agent") ?? "";
				if (BOT_UA.test(ua)) return new Response(null, { status: 204, headers: cors });
				const body = await readJson(req);
				if (!body) return new Response(null, { status: 400, headers: cors });
				ctx.waitUntil(record(url.pathname, body, req, env, ua).catch((e: unknown) => console.error("record", e)));
				return new Response(null, { status: 204, headers: cors });
			}

			if (req.method === "GET" && url.pathname === "/stats") return withHeaders(await stats(req, url, env), cors);

			if (req.method === "POST" && url.pathname === "/dev/seed" && devTools(env, url)) {
				return withHeaders(await seed(env.DB, url), cors);
			}

			if (req.method === "GET" && url.pathname === "/") {
				return new Response("eaindray-stats: cookie-free visit counter for eaindrayiscoding.com\n", {
					headers: { ...cors, "Content-Type": "text/plain; charset=utf-8" },
				});
			}
			return new Response("Not found", { status: 404, headers: cors });
		} catch (e) {
			console.error("request", e);
			return new Response("Server error", { status: 500, headers: cors });
		}
	},

	async scheduled(_controller, env) {
		await ensureSchema(env.DB);
		await prune(env.DB);
	},
} satisfies ExportedHandler<Env>;

/* ───────────── collecting ───────────── */

async function record(path: string, b: Json, req: Request, env: Env, ua: string) {
	const id = str(b.id, 40);
	if (!/^[A-Za-z0-9-]{8,40}$/.test(id)) return;
	const db = env.DB;
	const now = Date.now();

	if (path === "/l") {
		// Time on page and sections seen, sent every 30 s while the tab is visible and when it closes.
		await db
			.prepare("UPDATE views SET secs = MAX(secs, ?), depth = depth | ?, last = ? WHERE id = ? AND ts > ?")
			.bind(int(b.s, 0, 7200), int(b.d, 0, 255), now, id, now - 6 * HOUR)
			.run();
		return;
	}

	const day = bkkDay(now);
	const ip = req.headers.get("CF-Connecting-IP") ?? "";
	const vid = (await sha256hex(`${await daySalt(db, day)}|${ip}|${ua}`)).slice(0, 16);

	if (path === "/e") {
		const name = str(b.n, 20);
		if (!EVENTS.has(name)) return;
		await db
			.prepare("INSERT INTO events (ts, day, vid, pid, name, label) VALUES (?, ?, ?, ?, ?, ?)")
			.bind(now, day, vid, id, name, str(b.l, 120) || null)
			.run();
		return;
	}

	const cf = (req.cf ?? {}) as Partial<IncomingRequestCfProperties>;
	const device = DEVICES.has(str(b.dv, 10)) ? str(b.dv, 10) : "desktop";
	const lang = str(b.lg, 10);
	const lat = Number(cf.latitude);
	const lon = Number(cf.longitude);
	await db
		.prepare(
			`INSERT OR IGNORE INTO views (id, ts, last, day, vid, country, region, city, lat, lon, device, browser, os, ref, lang, blang)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		)
		.bind(
			id,
			now,
			now,
			day,
			vid,
			cf.country ?? null,
			cf.region || null,
			cf.city || null,
			cf.latitude && Number.isFinite(lat) ? Math.round(lat * 10) / 10 : null,
			cf.longitude && Number.isFinite(lon) ? Math.round(lon * 10) / 10 : null,
			device,
			browserOf(ua),
			osOf(ua, device),
			refOf(str(b.s, 60), str(b.r, 100)),
			LANGS.has(lang) ? lang : "en",
			str(b.bl, 16) || null,
		)
		.run();
}

let saltCache: { day: string; salt: string } | null = null;

/** Today's random salt. Older salts are deleted, so old visitor hashes can never be recomputed. */
async function daySalt(db: D1Database, day: string) {
	if (saltCache?.day === day) return saltCache.salt;
	const fresh = hex(crypto.getRandomValues(new Uint8Array(16)));
	await db.batch([
		db.prepare("INSERT OR IGNORE INTO salts (day, salt) VALUES (?, ?)").bind(day, fresh),
		db.prepare("DELETE FROM salts WHERE day < ?").bind(day),
	]);
	const row = await db.prepare("SELECT salt FROM salts WHERE day = ?").bind(day).first<{ salt: string }>();
	saltCache = { day, salt: row?.salt ?? fresh };
	return saltCache.salt;
}

function browserOf(ua: string) {
	if (/\bLine\//i.test(ua)) return "LINE app";
	if (/FBAN|FBAV|FB_IAB/.test(ua)) return "Facebook app";
	if (/Instagram/.test(ua)) return "Instagram app";
	if (/Edg(e|A|iOS)?\//.test(ua)) return "Edge";
	if (/OPR\/|Opera/.test(ua)) return "Opera";
	if (/SamsungBrowser/.test(ua)) return "Samsung Internet";
	if (/Firefox|FxiOS/.test(ua)) return "Firefox";
	if (/Chrome|CriOS|Chromium/.test(ua)) return "Chrome";
	if (/Safari/.test(ua)) return "Safari";
	return "Other";
}

function osOf(ua: string, device: string) {
	if (/Windows/.test(ua)) return "Windows";
	if (/iPhone|iPod/.test(ua)) return "iOS";
	if (/iPad/.test(ua)) return "iPadOS";
	if (/Android/.test(ua)) return "Android";
	if (/CrOS/.test(ua)) return "ChromeOS";
	// iPads ask for the desktop site and report macOS; the page tells us it is a touch tablet.
	if (/Macintosh|Mac OS X/.test(ua)) return device === "tablet" ? "iPadOS" : "macOS";
	if (/Linux/.test(ua)) return "Linux";
	return "Other";
}

const REF_HOSTS: [RegExp, string][] = [
	[/(^|\.)gemini\.google\.com$/, "Gemini"],
	[/(^|\.)google\.[a-z.]+$/, "Google"],
	[/(^|\.)bing\.com$/, "Bing"],
	[/(^|\.)duckduckgo\.com$/, "DuckDuckGo"],
	[/(^|\.)yahoo\.[a-z.]+$/, "Yahoo"],
	[/(^|\.)baidu\.com$/, "Baidu"],
	[/(^|\.)yandex\.[a-z.]+$/, "Yandex"],
	[/(^|\.)linkedin\.com$|^lnkd\.in$/, "LinkedIn"],
	[/(^|\.)github\.com$/, "GitHub"],
	[/(^|\.)facebook\.com$|^fb\.me$/, "Facebook"],
	[/(^|\.)instagram\.com$/, "Instagram"],
	[/^t\.co$|(^|\.)x\.com$|(^|\.)twitter\.com$/, "X (Twitter)"],
	[/(^|\.)line\.me$/, "LINE"],
	[/(^|\.)youtube\.com$|^youtu\.be$/, "YouTube"],
	[/(^|\.)reddit\.com$/, "Reddit"],
	[/(^|\.)chatgpt\.com$|(^|\.)openai\.com$/, "ChatGPT"],
	[/(^|\.)perplexity\.ai$/, "Perplexity"],
	[/(^|\.)claude\.ai$/, "Claude"],
];
const REF_SOURCES: Record<string, string> = {
	linkedin: "LinkedIn",
	github: "GitHub",
	facebook: "Facebook",
	line: "LINE",
	cv: "CV (PDF)",
	resume: "CV (PDF)",
	email: "Email",
	qr: "QR code",
};

/** "Google", "LinkedIn", a plain host name, or "" for direct visits. ?ref= / ?utm_source= wins. */
function refOf(source: string, host: string) {
	if (source) return REF_SOURCES[source.toLowerCase()] ?? source.toLowerCase();
	const h = host.toLowerCase().replace(/^www\./, "");
	if (!h || h === "eaindrayiscoding.com") return "";
	for (const [re, name] of REF_HOSTS) if (re.test(h)) return name;
	return h;
}

/* ───────────── stats for the admin panel ───────────── */

const RANGES: Record<string, number> = { today: 1, "7d": 7, "30d": 30, "90d": 90, "12m": 365 };

async function stats(req: Request, url: URL, env: Env): Promise<Response> {
	const db = env.DB;
	const now = Date.now();

	// At most 10 wrong keys per 15 minutes from one network.
	const who = (await sha256hex(`auth|${req.headers.get("CF-Connecting-IP") ?? "local"}`)).slice(0, 16);
	const fails = await db
		.prepare("SELECT COUNT(*) AS n FROM authfail WHERE k = ? AND ts > ?")
		.bind(who, now - 15 * 60_000)
		.first<{ n: number }>();
	if ((fails?.n ?? 0) >= 10) return json({ error: "Too many wrong keys. Try again in 15 minutes." }, 429);
	if (!env.ADMIN_KEY) return json({ error: "The admin key has not been set yet." }, 503);
	const given = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
	if (!given || !(await sameSecret(given, env.ADMIN_KEY))) {
		await db.prepare("INSERT INTO authfail (k, ts) VALUES (?, ?)").bind(who, now).run();
		return json({ error: "That admin key is not right." }, 401);
	}

	const range = url.searchParams.get("range") ?? "30d";
	const days = RANGES[range] ?? 30;
	const todayStart = Math.floor((now + TZ) / DAY) * DAY - TZ;
	const from = todayStart - (days - 1) * DAY;
	const prevFrom = from - days * DAY;
	// Hours for one day, months for a year, days otherwise. Fixed strings, never user input.
	const bucket =
		days === 1
			? `CAST(((ts + ${TZ}) % ${DAY}) / ${HOUR} AS INTEGER)`
			: days > 90
				? "substr(day, 1, 7)"
				: "day";

	const W = "ts >= ?1 AND ts < ?2";
	const U = "COUNT(DISTINCT day || vid)";
	const sum = `COUNT(*) AS views, ${U} AS visitors, ROUND(AVG(CASE WHEN secs > 0 THEN secs END)) AS avgSecs,
		COUNT(DISTINCT country) AS countries, SUM(secs >= 10) AS engaged`;
	const by = (col: string, limit: number) =>
		db
			.prepare(`SELECT ${col} AS k, ${U} AS visitors, COUNT(*) AS views FROM views WHERE ${W} GROUP BY k ORDER BY visitors DESC, views DESC LIMIT ${limit}`)
			.bind(from, now);
	const sections = Array.from({ length: 8 }, (_, i) => `SUM((depth >> ${i}) & 1) AS s${i}`).join(", ");
	const local = `(ts + ${TZ}) / 1000, 'unixepoch'`;

	const r = await db.batch([
		db.prepare(`SELECT ${sum} FROM views WHERE ${W}`).bind(from, now),
		db.prepare(`SELECT ${sum} FROM views WHERE ${W}`).bind(prevFrom, from),
		db.prepare(`SELECT ${bucket} AS k, COUNT(*) AS views, ${U} AS visitors FROM views WHERE ${W} GROUP BY k ORDER BY k`).bind(from, now),
		by("country", 80),
		db
			.prepare(
				`SELECT city, region, country, ROUND(AVG(lat), 1) AS lat, ROUND(AVG(lon), 1) AS lon, ${U} AS visitors, COUNT(*) AS views
				 FROM views WHERE ${W} AND city IS NOT NULL GROUP BY city, country ORDER BY visitors DESC LIMIT 300`,
			)
			.bind(from, now),
		by("ref", 20),
		by("device", 5),
		by("browser", 12),
		by("os", 10),
		by("lang", 10),
		db.prepare(`SELECT COUNT(*) AS n, ${sections} FROM views WHERE ${W}`).bind(from, now),
		db
			.prepare(`SELECT name, label, COUNT(*) AS n, ${U} AS visitors FROM events WHERE ${W} GROUP BY name, label ORDER BY n DESC LIMIT 300`)
			.bind(from, now),
		db
			.prepare(
				`SELECT CAST(strftime('%w', ${local}) AS INTEGER) AS d, CAST(strftime('%H', ${local}) AS INTEGER) AS h, COUNT(*) AS n
				 FROM views WHERE ${W} GROUP BY d, h`,
			)
			.bind(from, now),
		db.prepare("SELECT COUNT(DISTINCT vid) AS n FROM views WHERE last > ?1").bind(now - 5 * 60_000),
		db
			.prepare(
				"SELECT ts, last, country, region, city, device, browser, os, ref, lang, secs, depth FROM views ORDER BY ts DESC LIMIT 30",
			),
	]);
	const rows = (i: number) => (r[i]?.results ?? []) as Row[];

	return json({
		range,
		from,
		now,
		bucket: days === 1 ? "hour" : days > 90 ? "month" : "day",
		totals: rows(0)[0] ?? {},
		previous: rows(1)[0] ?? {},
		series: rows(2),
		countries: rows(3),
		cities: rows(4),
		refs: rows(5),
		devices: rows(6),
		browsers: rows(7),
		os: rows(8),
		langs: rows(9),
		depth: rows(10)[0] ?? {},
		events: rows(11),
		heat: rows(12),
		live: Number(rows(13)[0]?.n ?? 0),
		recent: rows(14),
	});
}

async function sameSecret(a: string, b: string) {
	const enc = new TextEncoder();
	const [x, y] = await Promise.all([
		crypto.subtle.digest("SHA-256", enc.encode(a)),
		crypto.subtle.digest("SHA-256", enc.encode(b)),
	]);
	return crypto.subtle.timingSafeEqual(x, y);
}

/* ───────────── housekeeping ───────────── */

async function prune(db: D1Database) {
	const now = Date.now();
	await db.batch([
		db.prepare("DELETE FROM views WHERE ts < ?").bind(now - KEEP_DAYS * DAY),
		db.prepare("DELETE FROM events WHERE ts < ?").bind(now - KEEP_DAYS * DAY),
		db.prepare("DELETE FROM salts WHERE day < ?").bind(bkkDay(now)),
		db.prepare("DELETE FROM authfail WHERE ts < ?").bind(now - DAY),
	]);
}

let schemaReady: Promise<unknown> | null = null;

function ensureSchema(db: D1Database) {
	schemaReady ??= db.batch(SCHEMA.map((s) => db.prepare(s))).catch((e: unknown) => {
		schemaReady = null;
		throw e;
	});
	return schemaReady;
}

/* ───────────── sample data, local development only ───────────── */

function devTools(env: Env, url: URL) {
	const flag = (env as unknown as { DEV_TOOLS?: string }).DEV_TOOLS;
	return flag === "1" && (url.hostname === "127.0.0.1" || url.hostname === "localhost");
}

async function seed(db: D1Database, url: URL) {
	const n = int(url.searchParams.get("n") ?? 900, 1, 5000);
	const now = Date.now();
	type City = [country: string, city: string, region: string, lat: number, lon: number, weight: number, lang: string];
	const cities: City[] = [
		["TH", "Chiang Rai", "Chiang Rai", 19.9, 99.8, 26, "th"],
		["TH", "Bangkok", "Bangkok", 13.8, 100.5, 34, "th"],
		["TH", "Chiang Mai", "Chiang Mai", 18.8, 99.0, 12, "en"],
		["MM", "Yangon", "Yangon", 16.8, 96.2, 16, "en"],
		["MM", "Mandalay", "Mandalay", 22.0, 96.1, 5, "en"],
		["ID", "Malang", "East Java", -8.0, 112.6, 7, "en"],
		["ID", "Jakarta", "Jakarta", -6.2, 106.8, 5, "en"],
		["SG", "Singapore", "Singapore", 1.3, 103.8, 8, "en"],
		["DE", "Berlin", "Berlin", 52.5, 13.4, 6, "de"],
		["DE", "Munich", "Bavaria", 48.1, 11.6, 4, "de"],
		["TW", "Taipei", "Taipei", 25.0, 121.5, 6, "nan"],
		["CN", "Shanghai", "Shanghai", 31.2, 121.5, 4, "zh-Hans"],
		["US", "San Francisco", "California", 37.8, -122.4, 7, "en"],
		["US", "New York", "New York", 40.7, -74.0, 4, "en"],
		["GB", "London", "England", 51.5, -0.1, 4, "en"],
		["JP", "Tokyo", "Tokyo", 35.7, 139.7, 4, "en"],
		["IN", "Bengaluru", "Karnataka", 13.0, 77.6, 4, "en"],
		["AU", "Sydney", "New South Wales", -33.9, 151.2, 2, "en"],
		["VN", "Ho Chi Minh City", "Ho Chi Minh", 10.8, 106.7, 3, "en"],
		["KR", "Seoul", "Seoul", 37.6, 127.0, 3, "en"],
	];
	const pick = <T>(items: [T, number][]): T => {
		let x = Math.random() * items.reduce((s, [, w]) => s + w, 0);
		for (const [v, w] of items) if ((x -= w) <= 0) return v;
		return items[0]![0];
	};
	const certs = ["Agentic AI", "Retrieval Augmented Generation (RAG)", "Machine Learning in Production", "TensorFlow Developer Professional Certificate", "Hackathon Coach, ADT Open Space 2025"];
	const stmts: D1PreparedStatement[] = [];
	for (let i = 0; i < n; i++) {
		const c = pick(cities.map((x) => [x, x[5]] as [City, number]));
		const ts = now - Math.floor(Math.pow(Math.random(), 1.6) * 90 * DAY);
		const device = pick<string>([["desktop", 52], ["mobile", 42], ["tablet", 6]]);
		const browser =
			device === "desktop"
				? pick<string>([["Chrome", 60], ["Edge", 18], ["Safari", 12], ["Firefox", 10]])
				: pick<string>([["Chrome", 40], ["Safari", 34], ["LINE app", 16], ["Facebook app", 6], ["Samsung Internet", 4]]);
		const os =
			device === "desktop"
				? pick<string>([["Windows", 62], ["macOS", 30], ["Linux", 8]])
				: device === "tablet"
					? "iPadOS"
					: browser === "Safari"
						? "iOS"
						: pick<string>([["Android", 60], ["iOS", 40]]);
		const ref = pick<string>([["", 44], ["Google", 18], ["LinkedIn", 16], ["GitHub", 7], ["LINE", 6], ["Facebook", 4], ["ChatGPT", 3], ["Bing", 2]]);
		const secs = Math.min(1800, Math.round(-Math.log(1 - Math.random()) * 70));
		let depth = 0;
		const reach = Math.min(8, Math.floor((secs / 25) * Math.random() * 2.2));
		for (let s = 0; s < reach; s++) depth |= 1 << s;
		if (Math.random() < 0.15) depth |= 1 << 7;
		const id = crypto.randomUUID();
		const vid = hex(crypto.getRandomValues(new Uint8Array(8)));
		const day = bkkDay(ts);
		stmts.push(
			db
				.prepare(
					`INSERT INTO views (id, ts, last, day, vid, country, region, city, lat, lon, device, browser, os, ref, lang, blang, secs, depth)
					 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
				)
				.bind(id, ts, ts + secs * 1000, day, vid, c[0], c[2], c[1], c[3], c[4], device, browser, os, ref, Math.random() < 0.7 ? c[6] : "en", c[6] === "th" ? "th-TH" : "en-US", secs, depth),
		);
		const events: [string, string | null, number][] = [
			["cv", null, 0.09],
			["email", null, 0.04],
			["copy", null, 0.02],
			["linkedin", null, 0.06],
			["github", null, 0.05],
			["video", "Autonomous Mobile Robot", 0.1],
			["cert", certs[Math.floor(Math.random() * certs.length)]!, 0.12],
			["photo", "6-DOF Robotic Arm", 0.05],
			["lang", pick<string>([["th", 4], ["de", 2], ["zh-Hans", 2], ["nan", 1], ["en", 2]]), 0.06],
			["theme", "dark", 0.03],
		];
		for (const [name, label, p] of events) {
			if (Math.random() < p) {
				stmts.push(db.prepare("INSERT INTO events (ts, day, vid, pid, name, label) VALUES (?, ?, ?, ?, ?, ?)").bind(ts + 20_000, day, vid, id, name, label));
			}
		}
	}
	// A few visitors on the site right now.
	for (let i = 0; i < 3; i++) {
		const c = cities[i]!;
		stmts.push(
			db
				.prepare(
					`INSERT INTO views (id, ts, last, day, vid, country, region, city, lat, lon, device, browser, os, ref, lang, secs, depth)
					 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'mobile', 'Chrome', 'Android', 'LinkedIn', 'en', 40, 3)`,
				)
				.bind(crypto.randomUUID(), now - 60_000 * (i + 1), now - 20_000, bkkDay(now), hex(crypto.getRandomValues(new Uint8Array(8))), c[0], c[2], c[1], c[3], c[4]),
		);
	}
	for (let i = 0; i < stmts.length; i += 80) await db.batch(stmts.slice(i, i + 80));
	return json({ inserted: stmts.length });
}

/* ───────────── helpers ───────────── */

function bkkDay(ts: number) {
	return new Date(ts + TZ).toISOString().slice(0, 10);
}

function str(v: unknown, max: number) {
	return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function int(v: unknown, min: number, max: number) {
	const n = Math.round(Number(v));
	return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : min;
}

function hex(a: Uint8Array) {
	return Array.from(a, (b) => b.toString(16).padStart(2, "0")).join("");
}

async function sha256hex(s: string) {
	return hex(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s))));
}

async function readJson(req: Request): Promise<Json | null> {
	const text = await req.text();
	if (!text || text.length > 4000) return null;
	try {
		const v: unknown = JSON.parse(text);
		return v && typeof v === "object" && !Array.isArray(v) ? (v as Json) : null;
	} catch {
		return null;
	}
}

function corsHeaders(origin: string, allowed: string[]): Record<string, string> {
	return {
		"Access-Control-Allow-Origin": allowed.includes(origin) ? origin : (allowed[0] ?? ""),
		"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
		"Access-Control-Allow-Headers": "Authorization, Content-Type",
		"Access-Control-Max-Age": "86400",
		Vary: "Origin",
	};
}

function json(data: unknown, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
	});
}

function withHeaders(res: Response, headers: Record<string, string>) {
	const out = new Response(res.body, res);
	for (const [k, v] of Object.entries(headers)) out.headers.set(k, v);
	return out;
}
