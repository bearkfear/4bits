import type { Meta } from "@storybook/react";
import { Loader } from "~/components/ui/loader";

export const Default = () => {
	return <Loader />;
};

export default {
	title: "Loader",
	component: Loader,
} satisfies Meta<typeof Loader>;
