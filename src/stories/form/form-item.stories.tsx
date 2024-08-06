import type { Meta, StoryObj } from "@storybook/react";
import { FormBuilder, FormFields } from "~/components/ui/form/form-builder";
import { useForm } from "react-hook-form";

const meta = {
  title: "Form/FormItem",
  component: FormFields,
} satisfies Meta<typeof FormFields>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Text: Story = (args) => {
  const form = useForm({
    defaultValues: {
      username: "",
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        {...args}
        control={form.control}
        fields={[
          {
            name: "username",
            type: "text",
            label: "Username",
            size: 12,
            helperText: "helper text",
            placeholder: "placeholder text",
            required: true,
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const Selector: Story = (args) => {
  const form = useForm({
    defaultValues: {
      person: "",
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        {...args}
        control={form.control}
        fields={[
          {
            name: "person",
            type: "select",
            label: "Person",
            size: 12,
            helperText: "You must select a person",
            placeholder: "selecting a person",
            required: true,
            options: [
              { label: "Person 1", value: 1 },
              { label: "Person 2", value: 2 },
              { label: "Person 3", value: 3 },
              { label: "Person 4", value: 4 },
            ],
          },
        ]}
      />
    </FormBuilder.Root>
  );
};
