import type { Meta } from "@storybook/react";
import { PageLoader, Loader } from "../../index";

export const Default = () => {
  return <PageLoader />;
};

export default {
  title: "Elements/Loaders/PageLoader",
  component: PageLoader,
} satisfies Meta<typeof PageLoader>;
