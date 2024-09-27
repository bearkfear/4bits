import { defineConfig } from "tsup";

export default defineConfig({
	// The file we created above that will be the entrypoint to the library.
	entry: ["src", "!src/stories"],
	target: "es2019",
	external: ["react", "react-dom"],
	dts: true,
	clean: true,
	format: ["cjs", "esm"],
	banner() {
		return { js: '"use client";' };
	},
	tsconfig: "./tsconfig.json",
	bundle: false,
});
