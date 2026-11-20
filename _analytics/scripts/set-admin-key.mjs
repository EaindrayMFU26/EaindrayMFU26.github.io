// Sets the admin panel password on the deployed Worker.
// Run it yourself in a terminal:  npm run set-admin-key
// The key is typed with hidden input, written to a private temporary file only for the upload,
// sent with `cf deploy --secrets-file`, and the file is deleted straight after.
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

function ask(prompt) {
	return new Promise((resolve, reject) => {
		const { stdin, stdout } = process;
		if (!stdin.isTTY) return reject(new Error("Run this in an interactive terminal so the key can be typed hidden."));
		stdout.write(prompt);
		let value = "";
		stdin.setRawMode(true);
		stdin.resume();
		stdin.setEncoding("utf8");
		const done = (err) => {
			stdin.setRawMode(false);
			stdin.pause();
			stdin.off("data", onData);
			stdout.write("\n");
			err ? reject(err) : resolve(value);
		};
		const onData = (chunk) => {
			for (const ch of chunk) {
				if (ch === "\r" || ch === "\n") return done();
				if (ch === "\u0003") return done(new Error("Cancelled."));
				if (ch === "\u007f" || ch === "\b") {
					if (value) {
						value = value.slice(0, -1);
						stdout.write("\b \b");
					}
				} else if (ch >= " ") {
					value += ch;
					stdout.write("•");
				}
			}
		};
		stdin.on("data", onData);
	});
}

try {
	console.log("Choose the admin key for eaindrayiscoding.com/admin (at least 12 characters).");
	const key = await ask("Admin key: ");
	if (key.length < 12) throw new Error("Use at least 12 characters.");
	if ((await ask("Type it again: ")) !== key) throw new Error("The two keys do not match.");

	const dir = mkdtempSync(join(tmpdir(), "eaindray-stats-"));
	const file = join(dir, "secrets.json");
	try {
		writeFileSync(file, JSON.stringify({ ADMIN_KEY: key }), { mode: 0o600 });
		// One command string (with the path quoted) works on Windows, macOS and Linux.
		const r = spawnSync(`npx cf deploy --secrets-file "${file}"`, { stdio: "inherit", shell: true });
		if (r.status !== 0) throw new Error("Deploy failed, so the key was not saved.");
		console.log("\nSaved. Sign in at https://eaindrayiscoding.com/admin/ with this key.");
	} finally {
		rmSync(dir, { recursive: true, force: true });
	}
} catch (e) {
	console.error(`\n${e instanceof Error ? e.message : e}`);
	process.exitCode = 1;
}
