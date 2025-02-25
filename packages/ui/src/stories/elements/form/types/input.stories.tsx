import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../../../../elements/form/types/inputs/input";

const meta = {
	component: Input,
	title: "Elements/Form/Input",
} satisfies Meta<typeof Input>;

export default meta;

export function InputText() {
	return <Input type="text" />;
}

export function InputPassword() {
	return <Input type="password" />;
}

export function InputEmail() {
	return <Input type="email" />;
}

export function InputNumber() {
	return <Input type="number" />;
}

export function InputColor() {
	return <Input type="color" />;
}

export function InputDate() {
	return <Input type="date" />;
}

export function InputDateTimeLocal() {
	return <Input type="datetime-local" />;
}
