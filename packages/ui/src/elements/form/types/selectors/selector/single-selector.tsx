"use client";

import get from "lodash.get";
import isEqual from "lodash.isequal";
import { Check, ChevronsUpDown } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import type { FieldPath } from "react-hook-form";
import { mergeRefs } from "react-merge-refs";
import { cn } from "../../../../../lib/utils";
import { Popover } from "../../../../popover";
import { inputVariants } from "../../inputs/input";
import { SelectorContent } from "./content";
import type { SelectorCommonProps, TOption } from "./model";

export type SingleSelectorProps<
	O extends TOption,
	VP extends FieldPath<O>,
	TV = O[VP],
> = SelectorCommonProps & {
	ref?: React.ForwardedRef<HTMLButtonElement>;
	className?: string;
	style?: React.CSSProperties;
	options: O[];
	labelPath: FieldPath<O>;
	valuePath: VP;
	value: TV;
	onChange?(value?: TV | null): void;
	onSearch?: (search: string) => void;
	loadingOptions?: boolean;
	onCloseSelect?: () => void;
	pagination?: {
		selectedOption: O;
		page: number;
		onChangePage: (page: number) => void;
	};
};

export function SingleSelector<O extends TOption, VP extends FieldPath<O>>({
	extraActions,
	onChange = () => {},
	value,
	className,
	style,
	onSearch,
	loadingOptions,
	pagination,
	onCloseSelect,
	ref,
	...props
}: SingleSelectorProps<O, VP>) {
	const [width, setWidth] = useState(1);
	const [open, setOpen] = useState(false);

	const getValue = useCallback(
		(option: O) => {
			if (Object.keys(option).includes(props.valuePath)) {
				return option[props.valuePath];
			}
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
		return props.options.find((option) => {
			if (!option) return false;

			const optionValue = getValue(option);

			return isEqual(optionValue, value);
		});
	}, [props.options, value, getValue]);

	const getSelectedOption = useCallback(() => {
		if (
			pagination &&
			pagination.selectedOption !== undefined &&
			pagination.selectedOption !== null
		) {
			return getLabel(pagination.selectedOption);
		}
		if (selectedOption) {
			return getLabel(selectedOption);
		}
		return props.placeholder;
	}, [pagination, selectedOption, props.placeholder, getLabel]);

	const onSelect = useCallback(
		(option: O) => {
			const optionValue = get(option, props.valuePath);

			onChange(
				isEqual(optionValue, value) && !props.required ? null : optionValue,
			);
			setOpen(false);
		},
		[onChange, props.valuePath, props.required, value],
	);

	const getIsSelected = useCallback(
		(option: O) => {
			return isEqual(getValue(option), value);
		},
		[value, getValue],
	);

	function onUpdateWidthBasedOnElement(el: HTMLButtonElement | null) {
		if (!el) return;
		setWidth(el.getBoundingClientRect().width);
	}

	const onOpenChange = useCallback(
		(newValue: boolean) => {
			setOpen(newValue);

			if (!newValue) onCloseSelect?.();
		},
		[onCloseSelect],
	);

	return (
		<Popover.Root modal open={open} onOpenChange={onOpenChange}>
			<Popover.Trigger
				className={cn(
					inputVariants,
					(!pagination || !pagination.selectedOption) &&
						!selectedOption &&
						"text-gray-11 dark:text-graydark-11",
					className,
				)}
				style={style}
				disabled={props.disabled}
				ref={mergeRefs([ref, onUpdateWidthBasedOnElement])}
				onClick={() => setOpen((oldValue) => !oldValue)}
			>
				<span className="text-ellipsis overflow-hidden whitespace-nowrap w-full text-left">
					{getSelectedOption()}
				</span>
				<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
			</Popover.Trigger>
			<Popover.Content className="p-0" align="start">
				<SelectorContent
					getLabel={getLabel}
					getValue={getValue}
					options={props.options}
					onSelect={onSelect}
					getIsSelected={getIsSelected}
					searchable={props.searchable}
					onSearch={onSearch}
					loadingOptions={loadingOptions}
					pagination={pagination}
					width={width}
					message={{
						empty: props.messages?.empty || "Nenhuma opção disponível",
						searchPlaceholder:
							props.messages?.searchPlaceholder || "Pesquisar por um item",
						optionSelected: <Check className={cn("mr-2 h-4 w-4 min-w-4")} />,
						optionUnselected: (
							<Check className={cn("mr-2 h-4 w-4 min-w-4 opacity-0")} />
						),
					}}
				/>
				<Popover.Arrow className="fill-gray-6 dark:fill-graydark-6" />
			</Popover.Content>
		</Popover.Root>
	);
}
