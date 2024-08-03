import { Loader } from "@/components/ui/loader";
import type { Meta } from "@storybook/react";

export const Default = () => {
  return <Loader />;
};

export default {
  title: "Loader",
  component: Loader,
} satisfies Meta<typeof Loader>;
