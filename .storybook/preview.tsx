import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import { gray, grayDark } from "@radix-ui/colors";
import { Inter } from "next/font/google";
// @ts-ignore
import { version } from "../package.json";

function getModuleVersion(version: string) {
	const [major, minor, patch] = version.split(".");

	return { major, minor, patch };
}

const backgrounds = {
	dark: {
		name: "dark",
		value: grayDark.gray1,
	},
	light: {
		name: "light",
		value: gray.gray1,
	},
};

const interFont = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

const preview: Preview = {
	decorators: [
		(story, ctx) => {
			const isDarkTheme =
				ctx.globals.backgrounds &&
				ctx.globals.backgrounds.value === backgrounds.dark.value;

			if (isDarkTheme) {
				if (document.documentElement.classList.contains("dark") === false) {
					document.documentElement.classList.add("dark");
				}
			} else {
				document.documentElement.classList.remove("dark");
			}

			if (
				document.documentElement.classList.contains(interFont.variable) ===
				false
			) {
				document.documentElement.classList.add(interFont.variable);
			}

			return story();
		},
	],
	parameters: {
		backgrounds: {
			default: "light",
			values: [backgrounds.light, backgrounds.dark],
		},
		version: getModuleVersion(version),
	},
	//👇 Enables auto-generated documentation for all stories
	tags: ["autodocs"],
};

export default preview;
