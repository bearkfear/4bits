import type { Meta, StoryObj } from "@storybook/react";

import { SingleSelector } from "../../../../elements/form/types/selectors/selector";
import { useState } from "react";

const meta = {
  component: SingleSelector,
  title: "Elements/Form/Selectors",
} satisfies Meta<typeof SingleSelector>;

export default meta;

export function Select() {
  const [state, setState] = useState(null)
  return (
    <SingleSelector
      labelPath="label"
      valuePath="value"
      options={[{ label: "None", value: undefined }, { label: "One", value: 'one' }]}
      value={state}
      onChange={setState}
    />
  );
}
