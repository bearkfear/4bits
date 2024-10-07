"use client";
import { Command } from "../../command";
import { Popover } from "../../popover";
import type { SelectorCommonProps, SelectorMessages, TOption } from "./model";
import { cn } from "../../../../lib/utils";
import { PageLoader } from "../../page-loader";

type SelectorContentProps<Option> = {
	onSelect(option?: Option): void;
	getValue<T>(option: Option): T;
	getLabel<T>(option: Option): T;
	getIsSelected(option: Option): boolean;
	onSelectAll?: () => void;
	onSearch?: (search: string) => void;
	onChangePage?: (page: number) => void;
	page?: number;
	loadingOptions?: boolean;
	checkAll?: boolean;
	checkeds?: number;
	options: Option[];
	width: number;
	message: SelectorMessages;
} & Pick<SelectorCommonProps, "searchable">;

export function SelectorContent<Option extends TOption>(
	props: SelectorContentProps<Option>,
) {
	return (
		<Popover.Content
			className="p-0"
			style={{ width: props.width }}
			align="start"
		>
			<Command.Root>
				{props.searchable && (
					<Command.Input
						className="text-xs"
						placeholder={props.message.searchPlaceholder}
						onSearch={props.onSearch}
					/>
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
										value={optionValue as string}
										key={optionValue as string}
										className={cn(
											"text-xs flex",
											index > 0 && "mt-0.5",
											props.getIsSelected(option) &&
												"!bg-blue-5 dark:!bg-bluedark-5 hover:!bg-blue-4 dark:hover:!bg-bluedark-4",
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

				{props.page && (
					<Command.Page
						page={props.page}
						onClick={(newPage) => props.onChangePage?.(newPage)}
						total={props.options.length}
					/>
				)}
			</Command.Root>
			<Popover.Arrow className="fill-gray-6 dark:fill-graydark-6" />
		</Popover.Content>
	);
}
