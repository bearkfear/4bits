"use client";
import get from "lodash.get";
import isEqual from "lodash.isequal";
import { CheckSquare2, ChevronsUpDown, Square } from "lucide-react";
import { forwardRef, useCallback, useMemo, useState } from "react";
import type { FieldPath } from "react-hook-form";
import { LuX } from "react-icons/lu";
import { mergeRefs } from "react-merge-refs";
import { cn } from "../../../lib/utils";
import { Popover } from "../../popover"; 
import { SelectorContent } from "./content";
import type { SelectorCommonProps, TOption } from "./model";
import { inputVariants } from "../input";

const OBJECT_SIZE = 18;
const PADDING_Y = 8;
const GAP = 6;

export type MultiSelectorProps<
	O extends TOption,
	VP extends FieldPath<O>,
	TV = O[VP],
> = SelectorCommonProps & {
	className?: string;
	style?: React.CSSProperties;
	lines?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "noLimit";
	color?: "default" | "selected";
	checkAll?: boolean;
	options: O[];
	labelPath: FieldPath<O>;
	valuePath: VP;
	value: TV[];
	onChange?(value?: TV[]): void;
	onSearch?: (search: string) => void;
	loadingOptions?: boolean;
	pagination?: {
		selectedOptions: O[];
		page: number;
		onChangePage: (page: number) => void;
	};
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
		lines = 3,
		color = "default",
		onSearch,
		loadingOptions,
		pagination,
		onCloseSelect,
		...props
	}: MultiSelectorProps<O, VP>,
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

	const getSelectedOption = useCallback(() => {
		if (
			(pagination && pagination.selectedOptions.length > 0) ||
			selectedOptions.length > 0
		) {
			const list =
				pagination && pagination.selectedOptions.length > 0
					? pagination.selectedOptions
					: selectedOptions;
			return (
				<ul
					className={cn(
						"flex flex-wrap justify-start gap-1.5 py-1",
						lines !== "noLimit" && "overflow-y-auto",
					)}
					style={{
						maxHeight:
							lines !== "noLimit"
								? `${lines * OBJECT_SIZE + PADDING_Y + (lines - 1) * GAP}px`
								: undefined,
					}}
				>
					{list.map((option) => (
						<li
							key={getValue(option)}
							className={cn(
								"rounded-sm border divide-x text-xs flex items-center",
								color === "default" &&
									"bg-gray-3 dark:bg-graydark-3 divide-gray-7 dark:divide-graydark-6 border-gray-7 dark:border-graydark-6",
								color === "selected" &&
									"bg-blue-5 dark:bg-bluedark-5 divide-blue-7 dark:divide-bluedark-6 border-blue-7 dark:border-bluedark-6",
							)}
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
								<LuX
									className={cn(
										color === "default" && "text-gray-11  dark:text-gray-8",
									)}
									size={13}
								/>
							</span>
						</li>
					))}
				</ul>
			);
		}
		return <span>{props.placeholder}</span>;
	}, [
		pagination,
		lines,
		color,
		selectedOptions,
		props.placeholder,
		getLabel,
		getValue,
		onSelect,
	]);

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
					"justify-between items-center min-h-8 z-20",
					(!pagination || pagination.selectedOptions.length === 0) &&
						selectedOptions.length === 0 &&
						"text-gray-11 dark:text-graydark-11",
					className,
				)}
				style={style}
				ref={mergeRefs([ref, onUpdateWidthBasedOnElement])}
				disabled={props.disabled}
				onClick={() => setOpen((oldValue) => !oldValue)}
			>
				{getSelectedOption()}
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
				pagination={pagination}
				checkAll={checkAll}
				checkeds={value.length}
				width={width}
				message={{
					...props.messages,
					empty: props.messages?.empty || "Nenhuma opção disponível",
					searchPlaceholder:
						props.messages?.searchPlaceholder || "Pesquisar por um item",
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
