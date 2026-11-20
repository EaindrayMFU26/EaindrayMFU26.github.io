import { bindings, defineConfig, triggers } from "cf/config";
import * as entrypoint from "./src/index.ts" with { type: "cf-worker" };

/** Pages allowed to send visits and read stats. */
const SITE = "https://eaindrayiscoding.com,https://www.eaindrayiscoding.com";
/** The local preview of the site, allowed only while developing. */
const LOCAL = "http://localhost:5173,http://127.0.0.1:5173";

export default defineConfig(({ mode }) => {
	const dev = mode === "development";
	return {
		worker: {
			name: "eaindray-stats",
			compatibilityDate: "2026-11-17",
			entrypoint,
			workersDev: true,
			/** Only the main address is public; no extra per-version preview addresses. */
			previewUrls: false,
			env: {
				DB: bindings.d1({ name: "eaindray-stats" }),
				/** Password for the admin panel. Set it with `npm run set-admin-key`. */
				ADMIN_KEY: bindings.secret(),
				ORIGINS: bindings.text(dev ? `${SITE},${LOCAL}` : SITE),
				/** Turns on the sample-data endpoint, only during local development. */
				DEV_TOOLS: dev && bindings.text("1"),
			},
			/** 00:05 in Thailand: delete yesterday's visitor salt and data older than 400 days. */
			triggers: [triggers.scheduled({ schedule: "5 17 * * *" })],
		},
	};
});
