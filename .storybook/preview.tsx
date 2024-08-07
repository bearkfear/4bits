import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import { gray, grayDark } from "@radix-ui/colors";
import { Inter } from "next/font/google";
import { cn } from "../src/lib/utils";

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

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const preview: Preview = {
	decorators: [
		(story, ctx) => {
			const isDarkTheme =
				ctx.globals.backgrounds && ctx.globals.backgrounds.value === backgrounds.dark.value;

			return (
				<div className={cn(inter.variable, isDarkTheme && "dark", "font-sans")}>
					{story()}
				</div>
			);
		},
	],
	parameters: {
		backgrounds: {
			default: "light",
			values: [backgrounds.light, backgrounds.dark],
		},
	},
	//👇 Enables auto-generated documentation for all stories
	tags: ["autodocs"],
};

export default preview;
