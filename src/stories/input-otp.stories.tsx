import type { Meta, StoryObj } from '@storybook/react';
import { InputOTP } from '~/components/ui/input-otp';


const meta = {
  component: InputOTP,
  title: "Form/InputOTP"
} satisfies Meta<typeof InputOTP>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder Text"
  }
};