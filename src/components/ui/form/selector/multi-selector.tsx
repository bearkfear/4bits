"use client";

import get from "lodash.get";
import isEqual from "lodash.isequal";
import { CheckSquare2, ChevronsUpDown, Square, X } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import type { FieldPath } from "react-hook-form";
import { cn } from "../../../../lib/utils";
import { Popover } from "../../popover";
import { inputVariants } from "../input";
import { SelectorContent } from "./content";
import type { SelectorCommonProps, TOption } from "./model";

export type MultiSelectorProps<
	O extends TOption,
	VP extends FieldPath<O>,
	TV = O[VP],
> = SelectorCommonProps & {
	className?: string;
	style?: React.CSSProperties;
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
		className,
		style,
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
		<Popover.Root modal>
			<Popover.Trigger
				role="combobox"
				className={cn(
					inputVariants(),
					"justify-between z-20 overflow-hidden",
					selectedOptions.length === 0 && "text-gray-11 dark:text-graydark-11",
					className,
				)}
				style={style}
				ref={(ref) => setWidth(ref?.getBoundingClientRect().width || 1)}
			>
				{selectedOptions.length > 0 ? (
					<div className="flex gap-2 overflow-x-auto">
						{selectedOptions.map((option) => (
							<div
								key={getValue(option)}
								className="bg-gray-5 rounded flex items-center border dark:border-white"
							>
								<span className="text-nowrap px-2">{getLabel(option)}</span>
								{/* <button
									type="button"
									className="flex items-center border-l dark:border-white"
									onClick={() => onSelect(option)}
								>
									<X className="h-4 w-4" />
								</button> */}
							</div>
						))}
					</div>
				) : (
					<span>{props.placeholder}</span>
				)}
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
