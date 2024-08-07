import type { Meta } from "@storybook/react";
import * as AlertDialog from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";

export default {
	title: "Dialog/Alert",
	component: AlertDialog.Root,
} satisfies Meta<typeof AlertDialog.Root>;

export const Default = () => {
	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger>
				<Button variant="info">Open</Button>
			</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Header>
					<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
					<AlertDialog.Description>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</AlertDialog.Description>
				</AlertDialog.Header>
				<AlertDialog.Footer>
					<AlertDialog.Cancel variant="default">Cancel</AlertDialog.Cancel>
					<AlertDialog.Action variant="danger">Continue</AlertDialog.Action>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog.Root>
	);
};
