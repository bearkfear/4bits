import { Fragment, type ReactNode } from "react";
import { LuMoreHorizontal } from "react-icons/lu";
import { cn } from "../../../../lib/utils";
import { Button } from "../../button";
import { Dropdown } from "../../dropdown";
import type { Action, Columns, Row } from "../types";

type ActionsProps<C extends Columns> = {
	actions: Action<C>[];
	row: Row<C>;
};

export function Actions<C extends Columns>(props: ActionsProps<C>) {
	return (
		<Dropdown.Root>
			<Dropdown.Trigger asChild>
				<Button
					className="p-2 rounded hover:bg-gray-3 dark:hover:bg-graydark-3"
					variant="link"
					size="icon"
				>
					<LuMoreHorizontal size={18} />
				</Button>
			</Dropdown.Trigger>
			<ActionContent {...props} />
		</Dropdown.Root>
	);
}

function ActionContent<C extends Columns>({ actions, row }: ActionsProps<C>) {
	return (
		<Dropdown.Content className="w-[150px] m-0" side="left" align="start">
			<div className="space-y-1">
				<Dropdown.Label className="flex space-x-3 items-center pb-0">
					<span>Ações</span>
				</Dropdown.Label>
			</div>
			<Dropdown.Separator />
			{actions.map((action, index) => {
				let ActionOption: ReactNode = <Fragment />;

				if (typeof action === "function") {
					ActionOption = action(row);
				} else {
					ActionOption = (
						<Dropdown.Item
							className={cn("space-x-3", action.disabled && "hidden")}
							onClick={() => action.action(row)}
						>
							<div className="w-4">{action.icon}</div>
							<span>{action.label}</span>
						</Dropdown.Item>
					);
				}

				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				return <Fragment key={index}>{ActionOption}</Fragment>;
			})}
		</Dropdown.Content>
	);
}
