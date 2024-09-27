"use client";
import get from "lodash.get";
import isEqual from "lodash.isequal";
import { Check, ChevronsUpDown } from "lucide-react";
import { forwardRef, useCallback, useMemo, useState } from "react";
import type { FieldPath } from "react-hook-form";
import { mergeRefs } from "react-merge-refs";
import { cn } from "../../../../lib/utils";
import { Popover } from "../../popover";
import { inputVariants } from "../input";
import { SelectorContent } from "./content";
import type { SelectorCommonProps, TOption } from "./model";

export type SingleSelectorProps<
	O extends TOption,
	VP extends FieldPath<O>,
	TV = O[VP],
> = SelectorCommonProps & {
	className?: string;
	style?: React.CSSProperties;
	options: O[];
	labelPath: FieldPath<O>;
	valuePath: VP;
	value: TV;
	onChange?(value?: TV): void;
};

function SingleSelectorInner<O extends TOption, VP extends FieldPath<O>>(
	{
		extraActions,
		onChange = () => {},
		value,
		className,
		style,
		...props
	}: SingleSelectorProps<O, VP>,
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	const [width, setWidth] = useState(1);
	const [open, setOpen] = useState(false);
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
			const optionValue = get(option, props.valuePath);

			onChange(
				isEqual(optionValue, value) && !props.required
					? undefined
					: optionValue,
			);
			setOpen(false);
		},
		[onChange, props.valuePath, props.required, value],
	);

	const getIsSelected = useCallback(
		(option: O) => isEqual(getValue(option), value),
		[value, getValue],
	);

	function onUpdateWidthBasedOnElement(el: HTMLButtonElement | null) {
		if (!el) return;
		setWidth(el.getBoundingClientRect().width);
	}

	return (
		<Popover.Root modal open={open} onOpenChange={setOpen}>
			<Popover.Trigger
				role="combobox"
				className={cn(
					inputVariants(),
					"justify-between",
					!selectedOption && "text-gray-11 dark:text-graydark-11",
					className,
				)}
				style={style}
				disabled={props.disabled}
				ref={mergeRefs([ref, onUpdateWidthBasedOnElement])}
				onClick={() => setOpen((oldValue) => !oldValue)}
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

export const SingleSelector = forwardRef(SingleSelectorInner);
