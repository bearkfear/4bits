import type { Meta } from "@storybook/react";
import { Tag } from "../../index";

export const Light = () => {
	return <Tag variant="light">light</Tag>;
};

export const Black = () => {
	return <Tag variant="black">black</Tag>;
};

export const White = () => {
	return <Tag variant="white">white</Tag>;
};

export const Info = () => {
	return <Tag variant="info">info</Tag>;
};

export const Success = () => {
	return <Tag variant="success">success</Tag>;
};

export const Warning = () => {
	return <Tag variant="warning">warning</Tag>;
};

export const Danger = () => {
	return <Tag variant="danger">danger</Tag>;
};

export default {
	title: "Elements/Tag/Variants",
	component: Tag,
} satisfies Meta<typeof Tag>;
