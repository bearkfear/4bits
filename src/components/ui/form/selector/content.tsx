import { Check } from "lucide-react";
import { cn } from "~/lib/utils";
import * as Command from "../../command";
import * as Popover from "../../popover";
import type { SelectorCommonProps, TOption } from "./model";

type SelectorContentProps<Option> = {
	onSelect(option?: Option): void;
	getValue<T>(option: Option): T;
	getLabel<T>(option: Option): T;
	getIsSelect(option: Option): boolean;
	options: Option[];
	width: number;
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
					<Command.Input className="text-xs" placeholder="Search" />
				)}

				<Command.List>
					<Command.Empty className="text-xs">No language found.</Command.Empty>
					<Command.Group>
						{props.options.map((option) => {
							const optionValue = props.getValue(option);

							return (
								<Command.Item
									value={optionValue as string}
									key={optionValue as string}
									className="text-xs"
									onSelect={() => props.onSelect(option)}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											props.getIsSelect(option) ? "opacity-100" : "opacity-0",
										)}
									/>
									{props.getLabel(option)}
								</Command.Item>
							);
						})}
					</Command.Group>
				</Command.List>
			</Command.Root>
			<Popover.Arrow className="fill-gray-6 dark:fill-graydark-6" />
		</Popover.Content>
	);
}
