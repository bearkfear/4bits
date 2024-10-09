"use client";
import get from "lodash.get";
import isEqual from "lodash.isequal";
import { CheckSquare2, ChevronsUpDown, Square } from "lucide-react";
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import type { FieldPath } from "react-hook-form";
import { LuX } from "react-icons/lu";
import { mergeRefs } from "react-merge-refs";
import { cn } from "../../../../lib/utils";
import { Popover } from "../../popover";
import { selectInputVariants } from "../input";
import { SelectorContent } from "./content";
import type { SelectorCommonProps, TOption } from "./model";

export type MultiSelectorProps<
	O extends TOption,
	VP extends FieldPath<O>,
	TV = O[VP],
> = SelectorCommonProps & {
	className?: string;
	style?: React.CSSProperties;
	checkAll?: boolean;
	options: O[];
	labelPath: FieldPath<O>;
	valuePath: VP;
	value: TV[];
	onChange?(value?: TV[]): void;
	onSearch?: (search: string) => void;
	loadingOptions?: boolean;
	page?: number;
	onChangePage?: (page: number) => void;
	onCloseSelect?: () => void;
};

function MultiSelectorInner<O extends TOption, VP extends FieldPath<O>>(
	{
		extraActions,
		onChange = () => {},
		value = [],
		className,
		checkAll = false,
		style,
		onSearch,
		loadingOptions,
		page,
		onChangePage,
		onCloseSelect,
		...props
	}: MultiSelectorProps<O, VP>,
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	const [width, setWidth] = useState(1);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!open) onCloseSelect?.();
	}, [open, onCloseSelect]);

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

	const onSelectAll = useCallback(() => {
		const v = value || [];

		if (props.options.length === v.length) {
			onChange([]);
			return;
		}

		onChange(props.options.map((option) => get(option, props.valuePath)));
	}, [onChange, props.valuePath, props.options, value]);

	function onUpdateWidthBasedOnElement(el: HTMLButtonElement | null) {
		if (!el) return;
		setWidth(el.getBoundingClientRect().width);
	}

	return (
		<Popover.Root modal open={open} onOpenChange={setOpen}>
			<Popover.Trigger
				role="combobox"
				className={cn(
					selectInputVariants(),
					"justify-between items-center min-h-8 max-h-24 z-20 overflow-hidden",
					selectedOptions.length === 0 && "text-gray-11 dark:text-graydark-11",
					className,
				)}
				style={style}
				ref={mergeRefs([ref, onUpdateWidthBasedOnElement])}
				disabled={props.disabled}
				onClick={() => setOpen((oldValue) => !oldValue)}
			>
				{selectedOptions.length > 0 ? (
					<ul className="flex flex-wrap justify-start gap-1 max-h-20 py-2 overflow-y-auto">
						{selectedOptions.map((option) => (
							<li
								key={getValue(option)}
								className="rounded bg-gray-3 dark:bg-graydark-3 border divide-x divide-gray-7 dark:divide-graydark-6 border-gray-7 dark:border-graydark-6 text-xs flex items-center"
							>
								<span className="text-ellipsis overflow-hidden whitespace-nowrap max-w-40 text-left px-2">
									{getLabel(option)}
								</span>
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: just click a span, to not have a button inside of a button */}
								<span
									className="px-px"
									onClick={(e) => {
										onSelect(option);
										e.stopPropagation();
									}}
								>
									<LuX className="text-gray-11  dark:text-gray-8" size={13} />
								</span>
							</li>
						))}
					</ul>
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
				onSelectAll={onSelectAll}
				getIsSelected={getIsSelected}
				searchable={props.searchable}
				onSearch={onSearch}
				loadingOptions={loadingOptions}
				page={page}
				onChangePage={onChangePage}
				checkAll={checkAll}
				checkeds={value.length}
				width={width}
				message={{
					...props.messages,
					optionSelected: (
						<CheckSquare2 className={cn("mr-2 h-4 min-w-4 w-4")} />
					),
					optionUnselected: <Square className={cn("mr-2 h-4 min-w-4 w-4")} />,
				}}
			/>
		</Popover.Root>
	);
}

export const MultiSelector = forwardRef(MultiSelectorInner);
