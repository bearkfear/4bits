import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "~/components/ui/form/textarea";

const meta = {
  component: Textarea,
  title: "Form/Textarea",
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder Text",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Placeholder Text",
    disabled: true,
  },
};
