import type { Meta } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button, Card, FormBuilder } from "../../index";

export default {
	title: "Elements/Card",
	component: Card.Root,
} satisfies Meta<typeof Card.Root>;

export const Default = () => {
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	return (
		<Card.Root className="w-[400px]">
			<Card.Header>
				<Card.Title>Acessar</Card.Title>
				<Card.Description>Bem vindo de novo, acesse sua conta</Card.Description>
			</Card.Header>
			<Card.Content>
				<FormBuilder.Root>
					<FormBuilder.FormFields
						control={form.control}
						fields={[
							{
								name: "email",
								type: "email",
								size: 12,
								label: "Conta",
								placeholder: "Digite a sua conta",
								helperText:
									"Se voce tem cadastro, esta relacionado a essa conta",
								required: true,
							},
							{
								name: "password",
								type: "password",
								size: 12,
								label: "Senha",
								placeholder: "Digite o seu email que esta cadastrado a conta",
								helperText: "Senha senha super segura",
								required: true,
							},
						]}
					/>
				</FormBuilder.Root>
			</Card.Content>
			<Card.Footer>
				<Button className="w-full" variant="success">
					Acessar
				</Button>
			</Card.Footer>
		</Card.Root>
	);
};
