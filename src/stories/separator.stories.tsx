import type { Meta } from "@storybook/react";
import { Separator } from "~/index";

export const Vertical = () => {
	return <Separator className="h-10 w-px" />;
};

export const Horizontal = () => {
	return <Separator className="h-px w-full" />;
};

export default {
	title: "Separator",
	component: Separator,
} satisfies Meta<typeof Separator>;
