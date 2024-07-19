import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Toaster, toast } from "@/components/ui/sonner";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Toaster/Toaster",
  component: Toaster,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

type TKS = keyof typeof toast;

type ATKS = Exclude<TKS, "getHistory" | "custom" | "promise">;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = () => {
  return (
    <>
      <button
        type="button"
        className="bg-green-9"
        onClick={() => {
          const actions: ATKS[] = [
            "loading",
            "success",
            "warning",
            "error",
            "info",
          ];

          for (const item of actions) {
            toast[item](item, {
              description: `${item} description`,
            });
          }
        }}
      >
        Clica aqui
      </button>
      <Toaster />
    </>
  );
};
