import type { Meta, StoryObj } from "@storybook/react";

import { FormItem } from "../../../elements/form/item";

const meta = {
	component: FormItem.HelperText,
	title: "Elements/Form/HelperText",
} satisfies Meta<typeof FormItem.HelperText>;

export default meta;

export function Default() {
	return <FormItem.HelperText>Application helper message</FormItem.HelperText>;
}

export function WithError() {
	return (
		<FormItem.HelperText color="danger">
			Application helper message
		</FormItem.HelperText>
	);
}

export function WithSuccess() {
	return (
		<FormItem.HelperText color="success">
			Application helper message
		</FormItem.HelperText>
	);
}
