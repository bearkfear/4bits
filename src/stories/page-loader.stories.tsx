import { PageLoader } from "~/components/ui/page-loader";
import type { Meta } from "@storybook/react";

export const Default = () => {
  return <PageLoader />;
};

export default {
  title: "PageLoader",
  component: PageLoader,
} satisfies Meta<typeof PageLoader>;
