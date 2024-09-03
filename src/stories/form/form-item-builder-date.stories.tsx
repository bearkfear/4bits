import type { Meta } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button, FormBuilder } from "../../index";

const meta = {
  title: "Form/DateOnBuilder",
  component: FormBuilder.FormFields,
} satisfies Meta<typeof FormBuilder.FormFields>;

export default meta;

export const DateOnBuilder = () => {
  const form = useForm({
    values: {
      date: null,
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit((data) => {
        console.log(data);
      })}
    >
      <FormBuilder.Root>
        <FormBuilder.FormFields
          control={form.control}
          fields={[
            {
              name: "date",
              type: "date",
              label: "Date",
              required: true,
              size: 6,
            },
          ]}
        />
      </FormBuilder.Root>
      <Button type="submit">Submeter</Button>
    </form>
  );
};
