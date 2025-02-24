import type { Meta } from "@storybook/react";
import { Breadcrumb } from "../../index";

export default {
	title: "Elements/Breadcrumb",
	component: Breadcrumb.Root,
} satisfies Meta<typeof Breadcrumb.Root>;

export const Default = () => {
	return (
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/">Application</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/components">Parameters</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Page>Organization</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	);
};
