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

export const SingleSelector = () => {
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

export const MultiSelector = () => {
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
						type: "multi-select",
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

export const Email = () => {
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
						name: "useremail",
						type: "email",
						label: "E-mail",
						size: 12,
						helperText: "You must provide an email",
						placeholder: "Type your email",
						required: true,
					},
				]}
			/>
		</FormBuilder.Root>
	);
};
export const Password = () => {
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
						name: "userpass",
						type: "password",
						label: "Password",
						size: 12,
						helperText: "You must a secure password",
						placeholder: "Type your password",
						required: true,
					},
				]}
			/>
		</FormBuilder.Root>
	);
};

export const Textarea = () => {
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
						name: "userbio",
						type: "textarea",
						label: "Bio",
						size: 12,
						helperText: "Provide a user bio",
						placeholder: "You can tell something about you",
						required: true,
					},
				]}
			/>
		</FormBuilder.Root>
	);
};

export const Checkbox = () => {
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
						name: "terms_ok",
						type: "checkbox",
						label: "Accept terms and agreements",
						size: 12,
						helperText: "You must agree with terms to proceed",
						required: true,
					},
				]}
			/>
		</FormBuilder.Root>
	);
};

export const Radio = () => {
	const form = useForm({
		defaultValues: {
			gender: "",
		},
	});

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "gender",
						type: "radio",
						label: "Your gender",
						size: 12,
						helperText: "You can select a gender",
						required: true,
						options: [
							{ label: "Male", value: 1 },
							{ label: "Female", value: 2 },
						],
					},
				]}
			/>
		</FormBuilder.Root>
	);
};
