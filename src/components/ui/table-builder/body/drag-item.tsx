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
		<Table.Cell className="border-r" {...attributes} {...listeners} ref={ref}>
			<LuGripVertical size={18} />
		</Table.Cell>
	);
}
