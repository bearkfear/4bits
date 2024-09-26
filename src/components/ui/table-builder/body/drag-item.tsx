import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import { createContext, useContext } from "react";
import { LuGripVertical } from "react-icons/lu";
import { Table } from "../../table";

interface Context {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
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
		<Table.Cell {...attributes} {...listeners} ref={ref} className="">
			<div className="flex justify-center">
				<LuGripVertical size={18} />
			</div>
		</Table.Cell>
	);
}
