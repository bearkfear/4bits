import type { Meta } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button, FormBuilder } from "../../index";

const meta = {
	title: "Form/Builder",
	component: FormBuilder.FormFields,
} satisfies Meta<typeof FormBuilder.FormFields>;

export default meta;

export const Builder = () => {
	const form = useForm({
		values: {
			age: null,
			username: "",
			person: "",
			users: [],
			useremail: "",
			userpass: "",
			userbio: "",
			terms_ok: false,
			gender: 3,
			money: 0,
			date: new Date(),
			acceptReceiveNotifications: false,
			notifyNewUsers: false,
			acceptReceiveEmails: false,
			color: undefined,
		},
	});

	return (
		<form onSubmit={form.handleSubmit(() => {})}>
			<FormBuilder.Root>
				<FormBuilder.FormFields
					control={form.control}
					onChangeField={(name, value) => {
						console.log(name, value);
					}}
					fields={[
						{
							name: "username",
							type: "text",
							label: "Username",
							size: 4,
							helperText: "helper text",
							placeholder: "placeholder text",
							required: true,
						},
						{
							name: "person",
							type: "select",
							label: "Person",
							size: 4,
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
						{
							name: "users",
							type: "multi-select",
							label: "Users",
							size: 4,
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
						{
							name: "useremail",
							type: "email",
							label: "E-mail",
							size: 4,
							helperText: "You must provide an email",
							placeholder: "Type your email",
							required: true,
						},
						{
							name: "userpass",
							type: "password",
							label: "Password",
							size: 4,
							helperText: "You must a secure password",
							placeholder: "Type your password",
							required: true,
						},
						{
							name: "userbio",
							type: "textarea",
							label: "Bio",
							size: 4,
							helperText: "Provide a user bio",
							placeholder: "You can tell something about you",
							required: true,
						},
						{
							name: "terms_ok",
							type: "checkbox",
							label: "Accept terms and agreements",
							size: 4,
							helperText: "You must agree with terms to proceed",
							required: true,
						},
						{
							name: "gender",
							type: "radio",
							label: "Your gender",
							size: 4,
							helperText: "You can select a gender",
							required: true,
							options: [
								{ label: "Male", value: 1 },
								{ label: "Female", value: 2 },
								{ label: "Other", value: 3 },
							],
						},
						{
							name: "age",
							type: "number",
							label: "User Age",
							size: 4,
							placeholder: "Age placeholder",
							helperText: "Tell your age to the others",
						},
						{
							name: "money",
							type: "money",
							label: "User payment",
							size: 4,
							placeholder: "user payment placeholder",
							helperText: "Describe how much you want to pay",
						},
						{
							name: "date",
							type: "date",
							label: "date of birth",
							size: 4,
							placeholder: "User calendar placeholder",
							helperText: "Date of birth is used to determine your age",
						},
						{
							name: "notifyNewUsers",
							type: "switch",
							label: "Notify new users?",
							valueLabels: {
								false: "Não",
								true: "Sim",
							},
							size: 4,
							helperText:
								"When a new user is created, you will receive an notification",
						},
						{
							name: "acceptReceiveEmails",
							type: "switch",
							label: "Accept Receive Emails?",
							size: 4,
							helperText:
								"When a new user is created, you will receive an notification",
						},
						{
							name: "color",
							type: "color",
							label: "Color",
							size: 4,
							helperText: "Definition color",
						},
					]}
				/>
			</FormBuilder.Root>
			<Button type="submit">Submeter</Button>
		</form>
	);
};
