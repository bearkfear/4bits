import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { SingleSelector } from "../../../../elements/form/types/selectors/selector";

const options = new Array(100)
	.fill({ label: "", value: "" })
	.map((item, index) => ({ value: index, label: `Label index ${index}` }));

const meta = {
	component: SingleSelector,
	title: "Elements/Form/Selectors",
} satisfies Meta<typeof SingleSelector>;

export default meta;

export function Select() {
	const [state, setState] = useState(null);
	return (
		<SingleSelector
			labelPath="label"
			valuePath="value"
			options={options}
			value={state}
			onChange={setState}
		/>
	);
}
