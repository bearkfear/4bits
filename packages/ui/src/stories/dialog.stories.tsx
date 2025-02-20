import type { Meta } from "@storybook/react";
import { Button, Dialog } from "../index";

export default {
	title: "Elements/Dialog/Modal",
	component: Dialog.Root,
} satisfies Meta<typeof Dialog.Root>;

export const Default = () => {
	return (
		<Dialog.Root defaultOpen>
			<Dialog.Trigger asChild>
				<Button variant="info">Open</Button>
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header className="flex flex-row items-center justify-between">
					<div className="space-y-1">
						<Dialog.Title>Are you absolutely sure?</Dialog.Title>
						<Dialog.Description>This will remove your data</Dialog.Description>
					</div>

					<Dialog.CloseX />
				</Dialog.Header>
				<Dialog.Body>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maxime
					eius. Placeat voluptas ab, molestiae magni ut quis labore aperiam amet
					quia! Commodi eos ad, cumque vitae consequatur ab aut?
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
