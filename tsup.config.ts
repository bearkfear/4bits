import { defineConfig } from "tsup";

export default defineConfig({
  // The file we created above that will be the entrypoint to the library.
  entry: ["src/**/*.ts", "src/**/*.tsx", "!src/stories", "src/styles/*.css"],
  minify: false,
  target: "es2018",
  external: ["react", "react-dom"],
  sourcemap: true,
  dts: true,
  format: ["esm", "cjs"],
  bundle: false,
  tsconfig: "./tsconfig.json",
  clean: true
});
