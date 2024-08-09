import get from "lodash.get";
import isEqual from "lodash.isequal";
import { Check, CheckSquare2, ChevronsUpDown, Square } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import type { FieldPath } from "react-hook-form";
import { cn } from "~/lib/utils";
import { Button } from "../../button";
import * as Popover from "../../popover";
import { inputVariants } from "../input";
import { SelectorContent } from "./content";
import type { SelectorCommonProps, TOption } from "./model";

export type MultiSelectorProps<
	O extends TOption,
	VP extends FieldPath<O>,
	TV = O[VP],
> = SelectorCommonProps & {
	options: O[];
	labelPath: FieldPath<O>;
	valuePath: VP;
	value: TV[];
	onChange?(value?: TV[]): void;
};

export function MultiSelector<O extends TOption, VP extends FieldPath<O>>(
	{
		extraActions,
		onChange = () => {},
		value = [],
		...props
	}: MultiSelectorProps<O, VP>,
	// TODO: verificar onde por esse ref dentro do button
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	const [width, setWidth] = useState(1);
	const getValue = useCallback(
		(option: O) => {
			return get(option, props.valuePath);
		},
		[props.valuePath],
	);
	const getLabel = useCallback(
		(option: O) => {
			return get(option, props.labelPath);
		},
		[props.labelPath],
	);

	const getIsSelected = useCallback(
		(option: O) => {
			return (value || []).some((it) => isEqual(getValue(option), it));
		},
		[value, getValue],
	);

	const selectedOptions = useMemo(() => {
		return props.options.filter(getIsSelected);
	}, [props.options, getIsSelected]);

	const onSelect = useCallback(
		(option: O) => {
			if (!onChange) return;

			const v = value || [];

			const optionValue = get(option, props.valuePath);

			if (value.includes(optionValue)) {
				onChange(v.filter((it) => it !== optionValue));
				return;
			}

			onChange(v.concat(optionValue));
		},
		[onChange, props.valuePath, value],
	);

	return (
		<Popover.Root>
			<Popover.Trigger
				role="combobox"
				className={cn(
					inputVariants(),
					"justify-between",
					selectedOptions.length === 0 && "text-gray-11 dark:text-graydark-11",
				)}
				ref={(ref) => setWidth(ref?.getBoundingClientRect().width || 1)}
			>
				<span>
					{selectedOptions.length > 0
						? selectedOptions.map((option) => getLabel(option)).join(", ")
						: props.placeholder}
				</span>
				<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
			</Popover.Trigger>
			<SelectorContent
				getLabel={getLabel}
				getValue={getValue}
				options={props.options}
				onSelect={onSelect}
				getIsSelect={getIsSelected}
				searchable={props.searchable}
				width={width}
				message={{
					...props.messages,
					optionSelected: <CheckSquare2 className={cn("mr-2 h-4 w-4")} />,
					optionUnselected: <Square className={cn("mr-2 h-4 w-4")} />,
				}}
			/>
		</Popover.Root>
	);
}
