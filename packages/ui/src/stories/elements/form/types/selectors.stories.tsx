import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { SingleSelector } from "../../../../elements/form/types/selectors/selector";

const options = new Array(6)
	.fill({ label: "", value: "" })
	.map((item, index) => ({ value: index, label: `Label index ${index}` }));

import * as LucideIcons from "lucide-react";
import { HomeIcon } from "lucide-react";

const meta = {
	component: SingleSelector,
	title: "Elements/Form/Selectors",
} satisfies Meta<typeof SingleSelector>;

export default meta;

export function Select() {
	const [state, setState] = useState<number | null>(null);
	return (
		<SingleSelector
			labelPath="label"
			valuePath="value"
			options={options}
			value={state}
			searchable
			onChange={setState}
		/>
	);
}

export function SelectAnIcon() {
	const [state, setState] = useState<string | null>(null);
	const Icon = LucideIcons[state] as
		| React.ForwardRefExoticComponent<
				Omit<LucideIcons.LucideProps, "ref"> &
					React.RefAttributes<SVGSVGElement>
		  >
		| undefined;
	return (
		<div>
			<SingleSelector
				labelPath="label"
				valuePath="value"
				options={Object.keys(LucideIcons).map((k) => ({ label: k, value: k }))}
				value={state}
				searchable
				onChange={setState}
			/>

			{Icon && (
				<span>
					<Icon size={24} />
				</span>
			)}
		</div>
	);
}
