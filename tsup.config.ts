import { defineConfig } from "tsup";

export default defineConfig({
	// The file we created above that will be the entrypoint to the library.
	entry: ["src/**/*.ts", "src/**/*.tsx", "!src/stories", "src/styles/*.css"],
	minify: true,
	target: "es2018",
	external: ["react", "react-dom"],
	sourcemap: false,
	dts: true,
	format: ["esm", "cjs"],
	clean: true,
	bundle: false,
	tsconfig: "./tsconfig.json",
});
