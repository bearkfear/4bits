"use client";

import { Search } from "lucide-react";
import { cn } from "../../../../lib/utils";
import { Command } from "../../command";
import { PageLoader } from "../../page-loader";
import { Popover } from "../../popover";
import type { SelectorCommonProps, SelectorMessages, TOption } from "./model";

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
	...props
}: SelectorContentProps<Option>) {
	return (
		<Popover.Content
			className="p-0"
			style={{ width: props.width }}
			align="start"
		>
			<Command.Root>
				{props.searchable && props.onSearch === undefined && (
					<Command.Input
						className="text-xs"
						placeholder={props.message.searchPlaceholder}
					/>
				)}

				{props.onSearch !== undefined && (
					<div className="flex items-center border-b border-gray-6 dark:border-graydark-6 px-3">
						<Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
						<input
							className="text-xs flex h-8 w-full rounded-md bg-transparent py-3 outline-hidden placeholder:text-gray-10 dark:placeholder:text-graydark-10 disabled:cursor-not-allowed disabled:opacity-50"
							placeholder={props.message.searchPlaceholder}
							onChange={(event) => props.onSearch?.(event.target.value)}
						/>
					</div>
				)}

				{props.loadingOptions && <PageLoader />}

				{!props.loadingOptions && (
					<Command.List>
						<Command.Empty className="text-xs px-2 pt-1.5">
							{props.message.empty}
						</Command.Empty>
						<Command.Group>
							{props.checkAll && (
								<Command.Item
									className="text-xs flex mb-0.5"
									onSelect={() => props.onSelectAll?.()}
								>
									{props.options.length === props.checkeds
										? props.message.optionSelected
										: props.message.optionUnselected}
									<span>Todos</span>
								</Command.Item>
							)}
							{props.options.map((option, index) => {
								const optionValue = props.getValue(option);

								return (
									<Command.Item
										key={`${index} ${optionValue as string}`}
										value={optionValue as string}
										className={cn(
											"text-xs flex",
											index > 0 && "mt-0.5",
											props.getIsSelected(option) &&
												"bg-blue-5! dark:bg-bluedark-5! hover:bg-blue-4! dark:hover:bg-bluedark-4!",
										)}
										onSelect={() => props.onSelect(option)}
									>
										{props.getIsSelected(option)
											? props.message.optionSelected
											: props.message.optionUnselected}
										<span>{props.getLabel(option)}</span>
									</Command.Item>
								);
							})}
						</Command.Group>
					</Command.List>
				)}

				{pagination && (
					<Command.Page
						page={pagination.page}
						onClick={(newPage) => pagination.onChangePage(newPage)}
						total={
							pagination.totalItems
								? pagination.totalItems
								: props.options.length
						}
					/>
				)}
			</Command.Root>
			<Popover.Arrow className="fill-gray-6 dark:fill-graydark-6" />
		</Popover.Content>
	);
}
