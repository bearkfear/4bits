import type { Meta } from "@storybook/react";

import { FormItem } from "../../../elements/form/item";

const meta = {
	component: FormItem.Label,
	title: "Elements/Form/Label",
} satisfies Meta<typeof FormItem.Root>;

export default meta;

export function Default() {
	return <FormItem.Label required={false}>E-mail</FormItem.Label>;
}

export function Required() {
	return <FormItem.Label required={true}>E-mail</FormItem.Label>;
}
