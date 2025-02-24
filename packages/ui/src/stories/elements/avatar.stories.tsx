import type { Meta } from "@storybook/react";
import { Avatar } from "../../index";

export default {
	title: "Elements/Avatar",
	component: Avatar.Root,
} satisfies Meta<typeof Avatar.Root>;

export const Default = () => {
	return (
		<Avatar.Root>
			<Avatar.Image src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" />
			<Avatar.Fallback>EE</Avatar.Fallback>
		</Avatar.Root>
	);
};

export const Fallbacked = () => {
	return (
		<Avatar.Root>
			<Avatar.Image src="" />
			<Avatar.Fallback>EE</Avatar.Fallback>
		</Avatar.Root>
	);
};
