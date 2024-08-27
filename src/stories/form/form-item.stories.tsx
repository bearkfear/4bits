import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { FormBuilder } from "../../index";
import {
	CEP_MASK,
	CNPJ_MASK,
	CPF_CNPJ_MASK,
	CPF_MASK,
	PHONE_MASK,
} from "../../lib/mask/common-masks";

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

export const CPF = () => {
	const form = useForm({
		defaultValues: {
			cpf: "",
		},
	});

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "cpf",
						type: "text",
						label: "CPF",
						size: 12,
						helperText: "helper text",
						placeholder: "placeholder text",
						required: true,
						masks: CPF_MASK,
					},
				]}
			/>
		</FormBuilder.Root>
	);
};

export const CEP = () => {
	const form = useForm({
		defaultValues: {
			CEP: "",
		},
	});

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "CEP",
						type: "text",
						label: "CEP",
						size: 12,
						helperText: "helper text",
						placeholder: "placeholder text",
						required: true,
						masks: CEP_MASK,
					},
				]}
			/>
		</FormBuilder.Root>
	);
};

export const CNPJ = () => {
	const form = useForm({
		defaultValues: {
			CNPJ_MASK: "",
		},
	});

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "CNPJ_MASK",
						type: "text",
						label: "CNPJ",
						size: 12,
						helperText: "helper text",
						placeholder: "placeholder text",
						required: true,
						masks: CNPJ_MASK,
					},
				]}
			/>
		</FormBuilder.Root>
	);
};

export const CPF_CNPJ = () => {
	const form = useForm({
		defaultValues: {
			CPF_CNPJ_MASK: "",
		},
	});

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "CPF_CNPJ_MASK",
						type: "text",
						label: "CPF CNPJ",
						size: 12,
						helperText: "helper text",
						placeholder: "placeholder text",
						required: true,
						masks: CPF_CNPJ_MASK,
					},
				]}
			/>
		</FormBuilder.Root>
	);
};

export const PHONE = () => {
	const form = useForm({
		defaultValues: {
			PHONE_MASK: "",
		},
	});

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "PHONE_MASK",
						type: "text",
						label: "Telefone",
						size: 12,
						helperText: "helper text",
						placeholder: "placeholder text",
						required: true,
						masks: PHONE_MASK,
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
			useremail: "",
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
			userpass: "",
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
			userbio: "",
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
			terms_ok: "",
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

export const Switch = () => {
	const form = useForm({
		defaultValues: {
			acceptReceiveNotifications: "",
		},
	});

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "acceptReceiveNotifications",
						type: "switch",
						label: "Notify new users?",
						size: 12,
						helperText:
							"When a new user is created, you will receive an notification",
					},
				]}
			/>
		</FormBuilder.Root>
	);
};

export const SwitchWithValuesLabels = () => {
	const form = useForm({
		defaultValues: {
			acceptReceiveNotifications: "",
		},
	});

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "acceptReceiveNotifications",
						type: "switch",
						label: "Notify new users?",
						valueLabels: {
							false: "Não",
							true: "Sim",
						},
						size: 12,
						helperText:
							"When a new user is created, you will receive an notification",
					},
				]}
			/>
		</FormBuilder.Root>
	);
};

export const Calendar = () => {
	const form = useForm({
		defaultValues: {
			date: null,
		},
	});

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "date",
						type: "date",
						label: "date of birth",
						size: 12,
						placeholder: "User calendar placeholder",
						helperText: "Date of birth is used to determine your age",
					},
				]}
			/>
		</FormBuilder.Root>
	);
};

export const Money = () => {
	const form = useForm({
		defaultValues: {
			money: null,
		},
	});

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "money",
						type: "money",
						label: "User payment",
						size: 12,
						placeholder: "user payment placeholder",
						helperText: "Describe how much you want to pay",
					},
				]}
			/>
		</FormBuilder.Root>
	);
};

export const Numeric = () => {
	const form = useForm({
		values: {
			age: null,
		},
	});

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "age",
						type: "number",
						label: "User Age",
						size: 12,
						placeholder: "Age placeholder",
						helperText: "Tell your age to the others",
					},
				]}
			/>
		</FormBuilder.Root>
	);
};

export const File = () => {
	const form = useForm({
		values: {
			file: null,
		},
	});

	console.log(form.watch("file"));

	return (
		<FormBuilder.Root>
			<FormBuilder.FormFields
				control={form.control}
				fields={[
					{
						name: "file",
						type: "file",
						label: "User image profile",
						size: 12,
						placeholder: "Age placeholder",
						helperText: "Show your image profile to others",
					},
				]}
			/>
		</FormBuilder.Root>
	);
};
