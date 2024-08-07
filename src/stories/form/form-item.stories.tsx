import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { FormBuilder } from "~/index";

const meta = {
	title: "Form/FormItem",
	component: FormBuilder.FormFields,
} satisfies Meta<typeof FormBuilder.FormFields>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Text = () => {
	const form = useForm({
		defaultValues: {
			username: "",
		},
	});

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "username",
						type: "text",
						label: "Username",
						size: 12,
						helperText: "helper text",
						placeholder: "placeholder text",
						required: true,
					},
				]}
			/>
		</FormBuilder.Root>
	);
};

export const Selector = () => {
	const form = useForm({
		defaultValues: {
			person: "",
		},
	});

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "person",
						type: "select",
						label: "Person",
						size: 12,
						helperText: "You must select a person",
						placeholder: "selecting a person",
						searchable: true,
						required: true,
						options: [
							{ label: "Person 1", value: 1 },
							{ label: "Person 2", value: 2 },
							{ label: "Person 3", value: 3 },
							{ label: "Person 4", value: 4 },
						],
					},
				]}
			/>
		</FormBuilder.Root>
	);
};
