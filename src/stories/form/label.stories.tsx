import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "~/index";

const meta = {
	component: Label,
	title: "Form/Label",
	args: {
		required: false,
	},
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Label value",
	},
};

export const Required: Story = {
	args: {
		children: "Label value",
		required: true,
	},
};
