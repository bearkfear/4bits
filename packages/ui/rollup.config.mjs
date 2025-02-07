import peerDepsExternal from 'rollup-plugin-peer-deps-external'; // Important!
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser'; // For minification (optional)
import preserveDirectives from 'rollup-plugin-preserve-directives'; // Import the plugin
import fs from "node:fs"
import del from "rollup-plugin-delete"
const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"))
const externals = Object.keys(pkg.devDependencies)

/** @type {import('rollup').RollupOptions} */
export default {
    input: './src/index.ts',
    output: [
        {
            dir: 'dist', // Use "dir" instead of "file" for multiple outputs
            format: 'cjs',
            entryFileNames: '[name].cjs.js', // Important: Name the output files
            sourcemap: true,
            preserveModules: true
        },
        {
            dir: 'dist',
            format: 'esm',
            entryFileNames: '[name].esm.js', // Important: Name the output files
            sourcemap: true,
            preserveModules: true
        },
    ],
    plugins: [
        del(),
        preserveDirectives(), // Add the plugin FIRST
        peerDepsExternal(), // Crucial: Prevents bundling React
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json', // Your tsconfig path
            declaration: true, // Generate .d.ts files (highly recommended)
            declarationDir: 'dist', // Where to put the .d.ts files
        }),
        terser(), // Minify in production
    ],
    external: [...externals, "@4bits/formbuilder"], // Important: Don't bundle React!
}