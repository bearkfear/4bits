import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '~/components/ui/form/input';

const meta = {
  component: Input,
  title: "Form/Checkbox"
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder Text"
  }
};