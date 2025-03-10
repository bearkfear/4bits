import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button, FormBuilder } from "../../index";
import {
  CEP_MASK,
  CNPJ_MASK,
  CPF_CNPJ_MASK,
  CPF_MASK,
  PHONE_MASK,
} from "../../lib/mask/common-masks";

const meta = {
  title: "Form/FormItem",
  component: FormBuilder.FormFields,
} satisfies Meta<typeof FormBuilder.FormFields>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Text = () => {
  const form = useForm({
    defaultValues: {
      username: "",
    },
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <FormBuilder.Root>
        <FormBuilder.FormFields
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
      <Button type="submit">Submeter</Button>
    </form>
  );
};

export const TextMask = () => {
  const form = useForm({
    defaultValues: {
      mask: "",
    },
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <FormBuilder.Root>
        <FormBuilder.FormFields
          control={form.control}
          fields={[
            {
              name: "mask",
              type: "text",
              label: "Máscara",
              size: 12,
              helperText: "helper text",
              placeholder: "placeholder text",
              required: true,
              masks: "S9999-A",
              tokens: {
                9: { pattern: /\d/ },
                A: { pattern: /[0-9a-zA-Z]/ },
                S: { pattern: /[a-zA-Z]/ },
              },
            },
          ]}
        />
      </FormBuilder.Root>
      <Button type="submit">Submeter</Button>
    </form>
  );
};

export const Color = () => {
  const form = useForm({
    defaultValues: {
      color: "",
    },
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <FormBuilder.Root>
        <FormBuilder.FormFields
          control={form.control}
          fields={[
            {
              name: "color",
              type: "color",
              label: "Color",
              size: 12,
              required: true,
            },
          ]}
        />
      </FormBuilder.Root>
      <Button type="submit">Submeter</Button>
    </form>
  );
};

export const CPF = () => {
  const form = useForm({
    defaultValues: {
      cpf: "",
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "cpf",
            type: "text",
            label: "CPF",
            size: 12,
            helperText: "helper text",
            placeholder: "placeholder text",
            required: true,
            masks: CPF_MASK,
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const CEP = () => {
  const form = useForm({
    defaultValues: {
      CEP: "",
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "CEP",
            type: "text",
            label: "CEP",
            size: 12,
            helperText: "helper text",
            placeholder: "placeholder text",
            required: true,
            masks: CEP_MASK,
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const CNPJ = () => {
  const form = useForm({
    defaultValues: {
      CNPJ_MASK: "",
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "CNPJ_MASK",
            type: "text",
            label: "CNPJ",
            size: 12,
            helperText: "helper text",
            placeholder: "placeholder text",
            required: true,
            masks: CNPJ_MASK,
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const CPF_CNPJ = () => {
  const form = useForm({
    defaultValues: {
      CPF_CNPJ_MASK: "",
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "CPF_CNPJ_MASK",
            type: "text",
            label: "CPF CNPJ",
            size: 12,
            helperText: "helper text",
            placeholder: "placeholder text",
            required: true,
            masks: CPF_CNPJ_MASK,
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const PHONE = () => {
  const form = useForm({
    defaultValues: {
      PHONE_MASK: "",
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "PHONE_MASK",
            type: "text",
            label: "Telefone",
            size: 12,
            helperText: "helper text",
            placeholder: "placeholder text",
            required: true,
            masks: PHONE_MASK,
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const SingleSelector = () => {
  const form = useForm({
    defaultValues: {
      person: null,
    },
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <FormBuilder.Root>
        <FormBuilder.FormFields
          control={form.control}
          fields={[
            {
              name: "person",
              type: "select",
              label: "Person",
              size: 12,
              helperText: "You must select a person",
              placeholder: "selecting a person",
              searchable: true,
              required: true,
              options: [
                { label: "Person 1", value: 1 },
                { label: "Person 2", value: 2 },
                { label: "Person 3", value: 3 },
                {
                  label:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  value: 4,
                },
                { label: "Person 5", value: 5 },
                { label: "Person 6", value: 6 },
                { label: "Person 7", value: 7 },
                { label: "Person 8", value: 8 },
                { label: "Person 9", value: 9 },
                { label: "Person 10", value: 10 },
                { label: "Person 11", value: 11 },
                { label: "Person 12", value: 12 },
                { label: "Person 13", value: 13 },
                { label: "Person 14", value: 14 },
                { label: "Person 15", value: 15 },
                { label: "Person 16", value: 16 },
                { label: "Person 17", value: 17 },
                { label: "Person 18", value: 18 },
                { label: "Person 19", value: 19 },
                { label: "Person 20", value: 20 },
                { label: "Person 21", value: 21 },
                { label: "Person 22", value: 22 },
                { label: "Person 23", value: 23 },
                { label: "Person 24", value: 24 },
                { label: "Person 25", value: 25 },
                { label: "Person 26", value: 26 },
                { label: "Person 27", value: 27 },
                { label: "Person 28", value: 28 },
              ],
            },
          ]}
        />
      </FormBuilder.Root>
      <Button type="submit">Submeter</Button>
    </form>
  );
};

export const MultiSelector = () => {
  const form = useForm({
    defaultValues: {
      persons: [1, 2, 3, 4, 5],
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "persons",
            type: "multi-select",
            label: "Person",
            size: 12,
            helperText: "You must select a person",
            placeholder: "selecting a person",
            searchable: true,
            required: true,
            checkAll: true,
            lines: 5,
            color: "selected",
            options: [
              { label: "Person 1", value: 1 },
              {
                label:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                value: 2,
              },
              {
                label: "Lorem ipsum dolor sit amet.",
                value: 3,
              },
              { label: "Person 4", value: 4 },
              { label: "Person 5", value: 5 },
              { label: "Person 6", value: 6 },
              { label: "Person 7", value: 7 },
              { label: "Person 8", value: 8 },
              { label: "Person 9", value: 9 },
              { label: "Person 10", value: 10 },
              { label: "Person 11", value: 11 },
              { label: "Person 12", value: 12 },
              { label: "Person 13", value: 13 },
              { label: "Person 14", value: 14 },
              { label: "Person 15", value: 15 },
              { label: "Person 16", value: 16 },
              { label: "Person 17", value: 17 },
              { label: "Person 18", value: 18 },
              { label: "Person 19", value: 19 },
              { label: "Person 20", value: 20 },
              { label: "Person 21", value: 21 },
              { label: "Person 22", value: 22 },
              { label: "Person 23", value: 23 },
              { label: "Person 24", value: 24 },
              { label: "Person 25", value: 25 },
              { label: "Person 26", value: 26 },
              { label: "Person 27", value: 27 },
              { label: "Person 28", value: 28 },
              { label: "Person 28", value: 29 },
              { label: "Person 31", value: 31 },
              { label: "Person 32", value: 32 },
              { label: "Person 33", value: 33 },
              { label: "Person 34", value: 34 },
              { label: "Person 35", value: 35 },
              { label: "Person 36", value: 36 },
            ],
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const Email = () => {
  const form = useForm({
    defaultValues: {
      useremail: "",
    },
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <FormBuilder.Root>
        <FormBuilder.FormFields
          control={form.control}
          fields={[
            {
              name: "useremail",
              type: "email",
              label: "E-mail",
              size: 12,
              helperText: "You must provide an email",
              placeholder: "Type your email",
              required: true,
            },
          ]}
        />
      </FormBuilder.Root>
      <Button type="submit">Submeter</Button>
    </form>
  );
};
export const Password = () => {
  const form = useForm({
    defaultValues: {
      userpass: "",
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "userpass",
            type: "password",
            label: "Password",
            size: 12,
            helperText: "You must a secure password",
            placeholder: "Type your password",
            required: true,
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const Textarea = () => {
  const form = useForm({
    defaultValues: {
      userbio: "",
    },
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <FormBuilder.Root>
        <FormBuilder.FormFields
          control={form.control}
          fields={[
            {
              name: "userbio",
              type: "textarea",
              label: "Bio",
              size: 12,
              helperText: "Provide a user bio",
              placeholder: "You can tell something about you",
              required: true,
            },
          ]}
        />
      </FormBuilder.Root>
      <Button type="submit">Submeter</Button>
    </form>
  );
};

export const Checkbox = () => {
  const form = useForm({
    defaultValues: {
      terms_ok: "",
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "terms_ok",
            type: "checkbox",
            label: "Accept terms and agreements",
            size: 12,
            helperText: "You must agree with terms to proceed",
            required: true,
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const Radio = () => {
  const form = useForm({
    defaultValues: {
      gender: "",
    },
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <FormBuilder.Root>
        <FormBuilder.FormFields
          control={form.control}
          fields={[
            {
              name: "gender",
              type: "radio",
              label: "Your gender",
              size: 4,
              helperText: "You can select a gender",
              required: true,
              options: [
                { label: "Male", value: 1 },
                { label: "Female", value: 2 },
              ],
            },
          ]}
        />
      </FormBuilder.Root>
      <Button type="submit">Submeter</Button>
    </form>
  );
};

export const MultiCheckbox = () => {
  const form = useForm({
    defaultValues: {
      elements: [],
    },
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <FormBuilder.Root>
        <FormBuilder.FormFields
          control={form.control}
          fields={[
            {
              name: "elements",
              type: "multi-checkbox",
              label: "Select some options",
              size: 12,
              helperText: "Select some options",
              options: [
                { label: "Test 1", value: 1 },
                { label: "Test 2", value: 2 },
              ],
            },
          ]}
        />
      </FormBuilder.Root>
      <Button type="submit">Submeter</Button>
    </form>
  );
};

export const Switch = () => {
  const form = useForm({
    defaultValues: {
      acceptReceiveNotifications: "",
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "acceptReceiveNotifications",
            type: "switch",
            label: "Notify new users?",
            size: 12,
            helperText:
              "When a new user is created, you will receive an notification",
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const SwitchWithValuesLabels = () => {
  const form = useForm({
    defaultValues: {
      acceptReceiveNotifications: "",
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "acceptReceiveNotifications",
            type: "switch",
            label: "Notify new users?",
            valueLabels: {
              false: "Não",
              true: "Sim",
            },
            size: 12,
            helperText:
              "When a new user is created, you will receive an notification",
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const InputDate = () => {
  const form = useForm({
    defaultValues: {
      date: null,
    },
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <FormBuilder.Root>
        <FormBuilder.FormFields
          control={form.control}
          fields={[
            {
              name: "date",
              type: "date",
              label: "date of birth",
              size: 12,
              placeholder: "User calendar placeholder",
              helperText: "Date of birth is used to determine your age",
              max: new Date(),
            },
          ]}
        />
      </FormBuilder.Root>
      <Button type="submit">Submeter</Button>
    </form>
  );
};

export const InputDatetime = () => {
  const form = useForm<{ datetime: Date }>();

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <FormBuilder.Root>
        <FormBuilder.FormFields
          control={form.control}
          fields={[
            {
              name: "datetime",
              type: "datetime",
              label: "Datetime",
              size: 12,
              placeholder: "Datetime",
              helperText: "Datetime",
              max: new Date(2024, 1, 1, 0, 0),
              required: true,
            },
          ]}
        />
      </FormBuilder.Root>
      <Button type="submit">Submeter</Button>
    </form>
  );
};

export const InputTime = () => {
  const form = useForm<{ time: Date }>();

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <FormBuilder.Root>
        <FormBuilder.FormFields
          control={form.control}
          fields={[
            {
              name: "time",
              type: "time",
              label: "Time",
              size: 12,
              placeholder: "Time",
              helperText: "Time",
              required: true,
            },
          ]}
        />
      </FormBuilder.Root>
      <Button type="submit">Submeter</Button>
    </form>
  );
};

export const InputMonth = () => {
  const form = useForm<{ month: Date }>();

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <FormBuilder.Root>
        <FormBuilder.FormFields
          control={form.control}
          fields={[
            {
              name: "month",
              type: "month",
              label: "Month",
              size: 12,
              placeholder: "Month",
              helperText: "Month",
              max: new Date(2024, 1),
              required: true,
            },
          ]}
        />
      </FormBuilder.Root>
      <Button type="submit">Submeter</Button>
    </form>
  );
};

export const Money = () => {
  const form = useForm({
    defaultValues: {
      money: null,
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "money",
            type: "money",
            label: "User payment",
            size: 12,
            placeholder: "user payment placeholder",
            helperText: "Describe how much you want to pay",
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const Numeric = () => {
  const form = useForm({
    values: {
      age: null,
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "age",
            type: "number",
            label: "User Age",
            size: 12,
            placeholder: "Age placeholder",
            helperText: "Tell your age to the others",
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const File = () => {
  const form = useForm({
    values: {
      file: null,
    },
  });

  console.log(form.watch("file"));

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "file",
            type: "file",
            label: "User image profile",
            size: 12,
            placeholder: "Age placeholder",
            helperText: "Show your image profile to others",
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const Hyperlink = () => {
  const form = useForm({
    values: {
      hyperlink: null,
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "hyperlink",
            type: "hyperlink",
            label: "Hyperlink",
            size: 12,
            placeholder: "Hyperlink",
            helperText: "Hyperlink",
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const DynamicCheckbox = () => {
  const form = useForm({
    values: {
      dynamic: null,
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "dynamic",
            type: "dynamic-checkbox",
            label: "Dynamic Checkbox",
            size: 12,
            placeholder: "Dynamic Checkbox",
            helperText: "Dynamic Checkbox",
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const Rate = () => {
  const form = useForm({
    defaultValues: {
      rate: 0,
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "rate",
            type: "rate",
            label: "Rate",
            size: 12,
            max: 10,
            helperText: "Rate",
          },
        ]}
      />
    </FormBuilder.Root>
  );
};

export const Tag = () => {
  const form = useForm({
    defaultValues: {
      tags: [],
    },
  });

  return (
    <FormBuilder.Root>
      <FormBuilder.FormFields
        control={form.control}
        fields={[
          {
            name: "tags",
            type: "tag",
            label: "Tags",
            size: 12,
            placeholder: "Crie uma nova tag",
            helperText: "Digite um nome para a tag e pressione enter",
            variant: "info",
            defaultTags: ["/", "tag", "/", "padrão", "/"],
          },
        ]}
      />
    </FormBuilder.Root>
  );
};
