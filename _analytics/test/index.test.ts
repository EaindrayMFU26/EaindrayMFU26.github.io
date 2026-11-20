import { SELF } from "cloudflare:test";
import { expect, it } from "vite-plus/test";

const SITE = "https://eaindrayiscoding.com";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36";

const beacon = (path: string, body: unknown, headers: Record<string, string> = {}) =>
	SELF.fetch(`https://stats.test${path}`, {
		method: "POST",
		body: JSON.stringify(body),
		headers: { Origin: SITE, "User-Agent": UA, "Content-Type": "text/plain", ...headers },
	});

const statsWith = (key: string) =>
	SELF.fetch("https://stats.test/stats?range=7d", { headers: { Origin: SITE, Authorization: `Bearer ${key}` } });

it("rejects a wrong admin key", async () => {
	const res = await statsWith("not-the-key");
	expect(res.status).toBe(401);
});

it("counts a visit with time, sections and a click, and ignores bots and other sites", async () => {
	const id = "test-view-0001";
	expect((await beacon("/v", { id, dv: "mobile", lg: "th", r: "www.linkedin.com", bl: "th-TH" })).status).toBe(204);
	expect((await beacon("/l", { id, s: 95, d: 0b101 })).status).toBe(204);
	expect((await beacon("/e", { id, n: "cv" })).status).toBe(204);
	expect((await beacon("/v", { id: "bot-view-0001" }, { "User-Agent": "Googlebot/2.1" })).status).toBe(204);
	expect((await beacon("/v", { id: "other-site-01" }, { Origin: "https://example.com" })).status).toBe(403);

	// Recording happens after the response; give it a moment.
	await new Promise((r) => setTimeout(r, 200));

	const res = await statsWith("local-test-key");
	expect(res.status).toBe(200);
	const data = (await res.json()) as {
		totals: { views: number; visitors: number; avgSecs: number };
		refs: { k: string }[];
		devices: { k: string }[];
		langs: { k: string }[];
		depth: { n: number; s0: number; s1: number; s2: number };
		events: { name: string; n: number }[];
		live: number;
	};
	expect(data.totals.views).toBe(1);
	expect(data.totals.visitors).toBe(1);
	expect(data.totals.avgSecs).toBe(95);
	expect(data.refs[0]?.k).toBe("LinkedIn");
	expect(data.devices[0]?.k).toBe("mobile");
	expect(data.langs[0]?.k).toBe("th");
	expect([data.depth.s0, data.depth.s1, data.depth.s2]).toEqual([1, 0, 1]);
	expect(data.events).toEqual([expect.objectContaining({ name: "cv", n: 1 })]);
	expect(data.live).toBe(1);
});
