import type { Meta } from "@storybook/react";
import { Loader } from "~/index";

export const Default = () => {
	return <Loader />;
};

export default {
	title: "Loader",
	component: Loader,
} satisfies Meta<typeof Loader>;
