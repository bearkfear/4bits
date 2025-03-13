import type { Meta } from "@storybook/react";

import { useState } from "react";
import {
	MultiSelector,
	SingleSelector,
} from "../../../../elements/form/types/selectors/selector";

const options = new Array(6)
	.fill({ label: "", value: "" })
	.map((_, index) => ({ value: index, label: `Label index ${index}` }));

import * as LucideIcons from "lucide-react";

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

const iconsAsOptions = Object.keys(LucideIcons).map((k) => ({
	label: k,
	value: k,
}));
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
				options={iconsAsOptions}
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

export function SelectMultipleIcons() {
	const [state, setState] = useState<string[]>([]);

	return (
		<div className="max-w-60">
			<MultiSelector
				labelPath="label"
				valuePath="value"
				options={iconsAsOptions}
				value={state}
				searchable
				onChange={setState}
			/>

			<div className="flex gap-2">
				{state.map((icon) => {
					const Icon = LucideIcons[icon] as
						| React.ForwardRefExoticComponent<
								Omit<LucideIcons.LucideProps, "ref"> &
									React.RefAttributes<SVGSVGElement>
						  >
						| undefined;

					return (
						<span key={icon}>
							<Icon size={24} />
						</span>
					);
				})}
			</div>
		</div>
	);
}

export function SelectMultipleIconsNative() {
	const [state, setState] = useState<string[]>([]);

	return (
		<div className="max-w-60">
			<select
				value={state}
				onChange={(e) =>
					setState((st) => [...st, iconsAsOptions[st.target.value].value])
				}
				multiple
			>
				{iconsAsOptions.map((it) => (
					<option value={it.value} key={it.value}>
						{it.label}
					</option>
				))}
			</select>
			{JSON.stringify(state)}
		</div>
	);
}
