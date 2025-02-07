import type { Config } from "tailwindcss";
import { tailwindcssPreset } from "./tailwindcss-preset";

const config: Config = {
	darkMode: "class",
	content: [],
	presets: [tailwindcssPreset()],
};

export default config;
