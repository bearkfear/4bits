import type { Config } from "tailwindcss";
// @ts-ignore
import pluginAnimate from "tailwindcss-animate";
import pluginRadixColors from "tailwindcss-radix-colors";

export function tailwindcssPreset(): Omit<Config, "content"> {
	return {
		theme: {
			container: {
				center: true,
				padding: "2rem",
				screens: {
					"2xl": "1400px",
				},
			},
			fontFamily: {
				sans: ["var(--font-sans)"],
			},
			extend: {
				keyframes: {
					"accordion-down": {
						from: { height: "0" },
						to: { height: "var(--radix-accordion-content-height)" },
					},
					"accordion-up": {
						from: { height: "var(--radix-accordion-content-height)" },
						to: { height: "0" },
					},
				},
				animation: {
					"accordion-down": "accordion-down 0.2s ease-out",
					"accordion-up": "accordion-up 0.2s ease-out",
				},
			},
		},
		plugins: [pluginAnimate, pluginRadixColors],
	};
}
