import type { Meta } from "@storybook/react";
import { Loader, PageLoader } from "../../index";

export const Default = () => {
	return <PageLoader />;
};

export default {
	title: "Elements/Loaders/PageLoader",
	component: PageLoader,
} satisfies Meta<typeof PageLoader>;
