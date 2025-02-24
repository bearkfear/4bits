import type { Meta } from "@storybook/react";

import { FormItem } from "../../../elements/form/item";
import { Input } from "../../../elements/form/types/inputs/input";

const meta = {
  component: FormItem.Root,
  title: "Elements/Form/Item",
  // tags: ["autodocs"],
} satisfies Meta<typeof FormItem.Root>;

export default meta;

export function Default() {
  return (
    <FormItem.Root className="col-span-1">
      <FormItem.Label required={true}>E-mail</FormItem.Label>

      <Input type="email" placeholder="Please fill your email account" />

      <FormItem.HelperText>message helper</FormItem.HelperText>
    </FormItem.Root>
  );
}
