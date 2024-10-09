import type { Config } from "tailwindcss";
import { tailwindcssPreset } from "./src/tailwindcss-preset";

export default {
	darkMode: "class",
	content: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
	presets: [tailwindcssPreset()],
} satisfies Config;
