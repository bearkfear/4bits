import get from "lodash.get";
import isEqual from "lodash.isequal";
import { ChevronsUpDown } from "lucide-react";
import { createContext, useCallback, useMemo, useState } from "react";
import type { FieldPath } from "react-hook-form";
import { cn } from "~/lib/utils";
import { Button } from "../../button";
import * as Popover from "../../popover";
import { SelectorContent } from "./content";
import type { SelectorCommonProps, TOption } from "./model";

export interface SelectorProps<
	O extends TOption,
	VP extends FieldPath<O>,
	TV = O[VP],
> extends SelectorCommonProps {
	options: O[];
	labelPath: FieldPath<O>;
	valuePath: VP;
	value: TV;
	onChange?(value?: TV): void;
}

export function Selector<O extends TOption, VP extends FieldPath<O>>(
	{ extraActions, onChange = () => {}, value, ...props }: SelectorProps<O, VP>,
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
			<Popover.Trigger asChild>
				<Button
					variant="outline"
					role="combobox"
					className={cn(
						"w-full justify-between",
						!selectedOption && "text-gray-9 dark:text-graydark-9",
					)}
					ref={(ref) => setWidth(ref?.getBoundingClientRect().width || 1)}
				>
					<span>
						{selectedOption ? getLabel(selectedOption) : props.placeholder}
					</span>
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</Popover.Trigger>
			<SelectorContent
				getLabel={getLabel}
				getValue={getValue}
				options={props.options}
				onSelect={onSelect}
				getIsSelect={getIsSelected}
				searchable={props.searchable}
				width={width}
			/>
		</Popover.Root>
	);
}
