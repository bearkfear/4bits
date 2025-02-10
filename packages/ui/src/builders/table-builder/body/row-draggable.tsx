"use client";

import { useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS, type Transform } from "@dnd-kit/utilities";
import { useMemo } from "react";
import type { BodyProps } from ".";
import { Table } from "../../../elements/table";

import type { Columns, Row } from "../types";
import { DragItem, SortableItemContext } from "./drag-item";
import { RowCellActions } from "./row-cell-actions";
import { RowCellSelectable } from "./row-cell-selectable";
import { RowCells } from "./row-cells";
import { cn } from "../../../lib/utils";

export function RowDraggable<C extends Columns>({
	columns,
	actions,
	row,
	selectable,
	rowIsChecked,
	classNameCol,
	checkRow,
	draggable,
}: { row: Row<C>; rowIsChecked: boolean } & BodyProps<C>) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		setActivatorNodeRef,
		isDragging,
		isOver,
	} = useSortable({
		id: row.key,
		strategy: verticalListSortingStrategy,
		transition: {
			duration: 500,
			easing: "cubic-bezier(0.25, 1, 0.5, 1)",
		},
	});

	const context = useMemo(
		() => ({
			attributes,
			listeners,
			ref: setActivatorNodeRef,
		}),
		[attributes, listeners, setActivatorNodeRef],
	);

	return (
		<SortableItemContext.Provider value={context}>
			<Table.Row
				ref={setNodeRef}
				style={{
					transform: CSS.Translate.toString({
						...transform,
					} as Transform),
				}}
				className={cn(
					rowIsChecked &&
					"bg-blue-2 even:bg-blue-3 dark:bg-bluedark-3/50 dark:even:bg-bluedark-3",
					isDragging && "bg-green-5! dark:bg-greendark-5! opacity-100!",
					isOver &&
					"even:bg-green-3! hover:opacity-100! bg-green-4! dark:even:bg-greendark-3! dark:bg-greendark-4!",
				)}
			>
				{draggable && <DragItem />}

				{selectable && (
					<RowCellSelectable
						checkRow={checkRow}
						row={row}
						rowIsChecked={rowIsChecked}
					/>
				)}

				{columns.map((col) => {
					const rowColData = row[col.id as keyof typeof row];
					const rowClassNameCol = classNameCol?.[col.id as keyof typeof row];
					const rowClassNameCell =
						row.classNameCell?.[col.id as keyof typeof row];
					return (
						<RowCells
							key={`row-${col.id}`}
							className={cn(
								rowClassNameCol,
								row.classNameRow,
								rowClassNameCell,
							)}
							rowColData={rowColData}
						/>
					);
				})}

				{actions && actions.length > 0 && (
					<RowCellActions actions={actions} row={row} />
				)}
			</Table.Row>
		</SortableItemContext.Provider>
	);
}
