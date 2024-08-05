import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "../src/lib/utils";
import { gray, grayDark } from "@radix-ui/colors";

const inter = Inter({ subsets: ["latin"] });

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (story) => (
      <div className={cn(inter.className, "bg-gray-1 dark:bg-graydark-1 p-10")}>
        {story()}
      </div>
    ),
  ],
  globalTypes: {
    darkMode: {
      defaultValue: true, // Enable dark mode by default on all stories
    },
  },
};

export default preview;
