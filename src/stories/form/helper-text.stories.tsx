import type { Meta, StoryObj } from "@storybook/react";

import { HelperText } from "~/components/ui/form/helper-text";

const meta = {
  component: HelperText,
  title: "Form/HelperText",
  argTypes: {
    color: {
      options: ["danger", "success", "default"],
      control: "radio"
    },
  },
  args: {
    children: "Coloque sua mensagem super informativa",
  },
} satisfies Meta<typeof HelperText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "default",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
  },
};

export const Success: Story = {
  args: {
    color: "success",
  },
};
