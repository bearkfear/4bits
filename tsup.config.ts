import { defineConfig } from "tsup";

export default defineConfig({
  // The file we created above that will be the entrypoint to the library.
  entry: ["src/index.ts"],
  minify: true,
  target: "es2018",
  external: ["react"],
  sourcemap: true,
  dts: true,
  format: ["esm", "cjs"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
