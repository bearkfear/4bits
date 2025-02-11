import type { Meta } from "@storybook/react";
import { Button } from "../../elements/button";
import { LuActivity } from "react-icons/lu";

export default {
	title: "Elements/Button/Sizes",
	component: Button,
} satisfies Meta<typeof Button>;

export const DefaultSize = () => {
	return (
		<Button size={"default"} variant={"info"}>
			Like
		</Button>
	);
};

export const LargeSize = () => {
	return (
		<Button size={"lg"} variant={"info"}>
			Like
		</Button>
	);
};

export const SmallSize = () => {
	return (
		<Button size={"sm"} variant={"info"}>
			Like
		</Button>
	);
};

export const IconSize = () => {
	return (
		<Button size={"icon"} variant={"info"}>
			<LuActivity size={18} />
		</Button>
	);
};
