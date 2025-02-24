import type { Meta } from "@storybook/react";
import { Button, Card, Dialog, FormBuilder, Panel } from "../../index";
import { useForm } from "react-hook-form";

export default {
	title: "Elements/Dialog/Modal",
	component: Dialog.Root,
} satisfies Meta<typeof Dialog.Root>;

export const Default = () => {
	const form = useForm();

	return (
		<Dialog.Root defaultOpen>
			<Dialog.Trigger asChild>
				<Button variant="info">Open</Button>
			</Dialog.Trigger>
			<Dialog.Content className="w-[96%]">
				<Dialog.Header className="flex flex-row items-center justify-between">
					<div className="space-y-1">
						<Dialog.Title>User Registration</Dialog.Title>
						<Dialog.Description>
							Register yours users to be used in a organization
						</Dialog.Description>
					</div>

					<Dialog.CloseX />
				</Dialog.Header>
				<Dialog.Body className="space-y-3">
					<Panel.Root>
						<Panel.Header>
							<Panel.Title>1. Dados do usuário</Panel.Title>
							<Panel.Description>
								Preencha os campos e envie-os para a próxima instância
							</Panel.Description>
						</Panel.Header>
						<Panel.Content>
							<FormBuilder.Root>
								<FormBuilder.Fields
									fields={[
										{
											name: "name",
											type: "text",
											label: "Name",
											placeholder: "Digite o seu nome",
											size: 4,
											required: true,
										},
										{
											name: "email",
											type: "email",
											placeholder: "Digite o seu email",
											label: "Email",
											size: 4,
											required: true,
										},
										{
											name: "age",
											type: "number",
											placeholder: "Digite sua idade",
											label: "Age",
											size: 2,
											required: true,
										},
										{
											name: "phone",
											type: "text",
											label: "Phone Number",
											size: 2,
											masks: ["(##) #####-####"],
											placeholder: "e.g. (123) 456-7890",
										},
										{
											name: "address",
											type: "text",
											label: "Address",
											size: 6,
										},
										{
											name: "city",
											type: "text",
											label: "City",
											size: 4,
										},
										{
											name: "state",
											type: "text",
											label: "State",
											size: 2,
										},
										{
											name: "zip",
											type: "text",
											label: "Zip Code",
											size: 6,
										},
										{
											name: "country",
											type: "text",
											label: "Country",
											size: 6,
										},
										{
											name: "bio",
											type: "textarea",
											label: "Bio",
											size: 12,
										},
									]}
									control={form.control}
								/>
							</FormBuilder.Root>
						</Panel.Content>
					</Panel.Root>
				</Dialog.Body>
				<Dialog.Footer>
					<Dialog.Close asChild>
						<Button type="button">Cancelar</Button>
					</Dialog.Close>
					<Button type="button" variant="success">
						Salvar
					</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	);
};
