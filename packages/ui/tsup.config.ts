import { Format, defineConfig } from "tsup";

export default defineConfig({
	// The file we created above that will be the entrypoint to the library.
	entry: ["src/**/*.{ts,tsx}", "src/styles/globals.css", "!src/stories"],
	target: "es2019",
	external: ["react", "react-dom"],
	dts: true,
	clean: true,
	format: ["cjs", "esm"],
	tsconfig: "./tsconfig.json",
	platform: "browser",
	bundle: false,
	legacyOutput: true,
});
