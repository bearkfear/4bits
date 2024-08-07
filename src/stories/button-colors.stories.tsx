import type { Meta } from "@storybook/react";
import { Button } from "~/components/ui/button";

export default {
	title: "Button/Colors",
	component: Button,
} satisfies Meta<typeof Button>;

export const Default = () => {
	return <Button>Like</Button>;
};

export const Danger = () => {
	return <Button variant={"danger"}>Like</Button>;
};
export const DangerLight = () => {
	return <Button variant={"danger__light"}>Like</Button>;
};
export const Warning = () => {
	return <Button variant={"warning"}>Like</Button>;
};
export const WarningLight = () => {
	return <Button variant={"warning__light"}>Like</Button>;
};
export const Success = () => {
	return <Button variant={"success"}>Like</Button>;
};
export const SuccessLight = () => {
	return <Button variant={"success__light"}>Like</Button>;
};

export const Info = () => {
	return <Button variant={"info"}>Like</Button>;
};
export const InfoLight = () => {
	return <Button variant={"info__light"}>Like</Button>;
};
