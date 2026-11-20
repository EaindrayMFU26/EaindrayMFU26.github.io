import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite-plus";

export default defineConfig({
	plugins: [
		cloudflare({
			// Local D1 data normally lives in .cloudflare/state. CF_STATE_DIR moves it to a shorter
			// path when the project sits in a folder too deep for Windows' 260-character limit.
			persistState: process.env.CF_STATE_DIR ? { path: process.env.CF_STATE_DIR } : true,
		}),
	],
	fmt: { useTabs: true },
	lint: {
		options: { typeAware: true, typeCheck: true },
	},
});
