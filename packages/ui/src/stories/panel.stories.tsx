import type { Meta } from "@storybook/react";
import { Panel, Tabs } from "../index";

export default {
	title: "Elements/Panel",
	component: Panel.Root,
} satisfies Meta<typeof Panel.Root>;

export const Default = () => {
	return (
		<Panel.Root>
			<Panel.Header>
				<Panel.Title>Repositories</Panel.Title>
				<Panel.Description>With a total of 9 files</Panel.Description>
			</Panel.Header>
			<Panel.Content className="text-gray-12 dark:text-graydark-12">
				This is a panel
			</Panel.Content>
		</Panel.Root>
	);
};

export const WithTabs = () => {
	return (
		<Tabs.Root asChild defaultValue="all">
			<Panel.Root>
				<Panel.Header>
					<Tabs.List>
						<Tabs.Trigger value="all" className="text-xs space-x-2">
							<span>All</span>
						</Tabs.Trigger>
						<Tabs.Trigger value="docs" className="text-xs">
							Documents
						</Tabs.Trigger>
					</Tabs.List>
				</Panel.Header>
				<Panel.Content>
					<Tabs.Content value="all">all elements</Tabs.Content>
					<Tabs.Content value="docs">showing your documents</Tabs.Content>
				</Panel.Content>
			</Panel.Root>
		</Tabs.Root>
	);
};
