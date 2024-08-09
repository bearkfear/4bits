import get from "lodash.get";
import isEqual from "lodash.isequal";
import { Check, ChevronsUpDown } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import type { FieldPath } from "react-hook-form";
import { cn } from "~/lib/utils";
import { Button } from "../../button";
import * as Popover from "../../popover";
import { SelectorContent } from "./content";
import type { SelectorCommonProps, TOption } from "./model";
import { inputVariants } from "../input";

export type SingleSelectorProps<
	O extends TOption,
	VP extends FieldPath<O>,
	TV = O[VP],
> = SelectorCommonProps & {
	options: O[];
	labelPath: FieldPath<O>;
	valuePath: VP;
	value: TV;
	onChange?(value?: TV): void;
};

export function SingleSelector<O extends TOption, VP extends FieldPath<O>>(
	{
		extraActions,
		onChange = () => {},
		value,
		...props
	}: SingleSelectorProps<O, VP>,
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

	const selectedOption = useMemo(() => {
		return props.options.find((option) => isEqual(getValue(option), value));
	}, [props.options, value, getValue]);

	const onSelect = useCallback(
		(option: O) => {
			if (!onChange) return;

			const optionValue = get(option, props.valuePath);

			onChange(isEqual(optionValue, value) ? undefined : optionValue);
		},
		[onChange, props.valuePath, value],
	);

	const getIsSelected = useCallback(
		(option: O) => isEqual(getValue(option), value),
		[value, getValue],
	);

	return (
		<Popover.Root>
			<Popover.Trigger
				role="combobox"
				className={cn(
					inputVariants(),
					"justify-between",
					!selectedOption && "text-gray-11 dark:text-graydark-11",
				)}
				ref={(ref) => setWidth(ref?.getBoundingClientRect().width || 1)}
			>
				<span>
					{selectedOption ? getLabel(selectedOption) : props.placeholder}
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
					optionSelected: <Check className={cn("mr-2 h-4 w-4")} />,
					optionUnselected: <Check className={cn("mr-2 h-4 w-4 opacity-0")} />,
				}}
			/>
		</Popover.Root>
	);
}
