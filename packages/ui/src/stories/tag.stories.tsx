import type { Meta } from "@storybook/react";
import { Tag } from "../index";

export const Default = () => {
	return <Tag>Oi</Tag>;
};

export default {
	title: "Elements/Tag",
	component: Tag,
} satisfies Meta<typeof Tag>;
