import type { Meta } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button, Card, FormBuilder, Tabs } from "../index";

export default {
	title: "Tabs",
	component: Tabs.Root,
} satisfies Meta<typeof Tabs.Root>;

export const Default = () => {
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	return (
		<Tabs.Root defaultValue="account" className="w-[400px]">
			<Tabs.List className="w-full grid grid-cols-2">
				<Tabs.Trigger value="account">Acessar conta</Tabs.Trigger>
				<Tabs.Trigger value="password">Restaurar senha</Tabs.Trigger>
			</Tabs.List>

			<Tabs.Content value="account">
				<Card.Root>
					<Card.Header>
						<Card.Title>Acessar</Card.Title>
						<Card.Description>
							Bem vindo de novo, acesse sua conta
						</Card.Description>
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
									},
									{
										name: "password",
										type: "password",
										size: 12,
										label: "Senha",
										placeholder:
											"Digite o seu email que esta cadastrado a conta",
										helperText: "Senha senha super segura",
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
			</Tabs.Content>
			<Tabs.Content value="password">
				<Card.Root>
					<Card.Header>
						<Card.Title>Restaurar conta</Card.Title>
						<Card.Description>
							Com suas informacões em mãos, restaure sua conta
						</Card.Description>
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
										label: "E-mail para restaurar conta",
										placeholder:
											"Digite o seu email que esta cadastrado a conta",
										helperText:
											"Iremos enviar uma mensagem para voce acessar sua conta",
									},
								]}
							/>
						</FormBuilder.Root>
					</Card.Content>
					<Card.Footer>
						<Button variant="success" className="w-full">
							Confirmar
						</Button>
					</Card.Footer>
				</Card.Root>
			</Tabs.Content>
		</Tabs.Root>
	);
};
