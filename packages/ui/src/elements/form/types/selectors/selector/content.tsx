"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { Search } from "lucide-react";
import { useEffect, useRef } from "react";
import { cn } from "../../../../../lib/utils";
import { Command } from "../../../../command";
import { PageLoader } from "../../../../page-loader";
import type { SelectorCommonProps, SelectorMessages, TOption } from "./model";
import { useSearcher } from "./searcher";

type SelectorContentProps<Option> = {
	onSelect(option?: Option): void;
	getValue<T>(option: Option): T;
	getLabel<T>(option: Option): T;
	getIsSelected(option: Option): boolean;
	onSelectAll?: () => void;
	onSearch?: (search: string) => void;
	pagination?: {
		page: number;
		onChangePage: (page: number) => void;
		totalItems?: number;
	};
	loadingOptions?: boolean;
	checkAll?: boolean;
	checkeds?: number;
	options: Option[];
	width: number;
	message: SelectorMessages;
} & Pick<SelectorCommonProps, "searchable">;

export function SelectorContent<Option extends TOption>({
	pagination,
	options,
	onSearch = () => {},
	...props
}: SelectorContentProps<Option>) {
	const isFirstRender = useRef(false);
	const parentRef = useRef<HTMLDivElement>(null);

	const { onChange, value, search } = useSearcher(options, props.searchable);

	const list = props.searchable ? search(value) : options;

	const { getVirtualItems, scrollToIndex, getTotalSize, measureElement } =
		useVirtualizer({
			count: list.length,
			getScrollElement: () => parentRef.current,
			estimateSize: () => 32,
		});

	useEffect(() => {
		if (isFirstRender.current) return;

		const selectedItem = list.findIndex((option) =>
			props.getIsSelected(option),
		);

		if (selectedItem === -1) {
			return;
		}

		scrollToIndex(selectedItem);
		
		isFirstRender.current = true;
	}, [list, props.getIsSelected, scrollToIndex]);

	const onChangeSearch = (newValue: string) => {
		onChange(newValue);
		onSearch(newValue);
	};

	const items = getVirtualItems();

	return (
		<Command.Root
			className="min-h-[400px]"
			style={{
				width: props.width,
			}}
		>
			{/* usa o search externo */}

			{props.searchable && (
				<div className="flex items-center border-b border-gray-6 dark:border-graydark-6 px-3">
					<Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
					<input
						className="text-xs flex h-8 w-full rounded-md bg-transparent py-3 outline-hidden placeholder:text-gray-10 dark:placeholder:text-graydark-10 disabled:cursor-not-allowed disabled:opacity-50"
						placeholder={props.message.searchPlaceholder}
						onChange={({ target }) => onChangeSearch(target.value)}
						value={value}
					/>
				</div>
			)}

			{props.loadingOptions && <PageLoader />}

			<Command.List className="h-full">
				<Command.Empty className="text-xs px-4 py-3">
					{props.message.empty}
				</Command.Empty>

				<Command.Group className="w-full h-full">
					{props.checkAll && (
						<Command.Item
							className="text-xs flex mb-0.5"
							onSelect={() => props.onSelectAll?.()}
						>
							{options.length === props.checkeds
								? props.message.optionSelected
								: props.message.optionUnselected}
							<span>Todos</span>
						</Command.Item>
					)}
					<div
						ref={parentRef}
						className="w-full p-0 m-0"
						style={{
							minHeight: 400,
							overflowY: "auto",
							contain: "strict",
						}}
					>
						<div
							className="w-full"
							style={{
								height: getTotalSize() + 40,
							}}
						>
							<div
								className="absolute left-0 top-0 w-full px-1"
								style={{
									transform: `translateY(${items[0]?.start ?? 0}px)`,
								}}
							>
								{items.map((virtualRow) => {
									const index = virtualRow.index;
									const option = list[index];
									const optionValue = props.getValue(option);
									const isSelected = props.getIsSelected(option);
									return (
										<Command.Item
											data-index={index}
											key={virtualRow.key}
											ref={measureElement}
											value={optionValue as string}
											tabIndex={0}
											className={cn(
												"text-xs flex",
												index > 0 && "mt-0.5",
												isSelected &&
													"bg-blue-5! dark:bg-bluedark-5! hover:bg-blue-4! dark:hover:bg-bluedark-4!",
											)}
											onSelect={() => props.onSelect(option)}
										>
											{isSelected
												? props.message.optionSelected
												: props.message.optionUnselected}
											<span>{props.getLabel(option)}</span>
										</Command.Item>
									);
								})}
							</div>
						</div>
					</div>
				</Command.Group>
			</Command.List>

			{pagination && (
				<Command.Page
					page={pagination.page}
					onClick={(newPage) => pagination.onChangePage(newPage)}
					total={pagination.totalItems ? pagination.totalItems : list.length}
				/>
			)}
		</Command.Root>
	);
}
