import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(story) => <div className={inter.className}>{story()}</div>],
};

export default preview;
