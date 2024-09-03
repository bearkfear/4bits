import { tailwindcssPreset } from "./src/tailwindcss-preset";
import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
	presets: [tailwindcssPreset()],
} satisfies Config;
