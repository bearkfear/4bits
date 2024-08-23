import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import { createContext, useContext } from "react";
import { LuGripVertical } from "react-icons/lu";
import { Table } from "../../table";

interface Context {
	attributes: Record<string, any>;
	listeners: DraggableSyntheticListeners;
	ref(node: HTMLElement | null): void;
}

export const SortableItemContext = createContext<Context>({
	attributes: {},
	listeners: undefined,
	ref() {},
});

export function DragItem() {
	const { attributes, listeners, ref } = useContext(SortableItemContext);

	return (
		<Table.Cell className="border-r">
			<div
				{...attributes}
				{...listeners}
				ref={ref}
				className="flex justify-center w-full h-full"
			>
				<LuGripVertical size={18} />
			</div>
		</Table.Cell>
	);
}
