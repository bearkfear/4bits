import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '~/components/ui/label';


const meta = {
  component: Label,
  title: "Form/Label"
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label value"
  }
};