import type { Meta } from "@storybook/react";
import { Tag } from "../../../index";

export const Normal = () => {
	return <Tag>Normal</Tag>;
};

export const Medium = () => {
	return <Tag size="md">Medium</Tag>;
};

export const Large = () => {
	return <Tag size="lg">Large</Tag>;
};

export default {
	title: "Elements/Tag/Sizes",
	component: Tag,
} satisfies Meta<typeof Tag>;
