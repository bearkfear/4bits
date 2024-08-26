import { cn } from "src/lib/utils";
import { Table } from "../../table";
import type { Column, SortableType } from "../types";
import { ButtonSort } from "./button-sort";

type ColumnDefaultProps = SortableType & {
	column: Column;
};

export function ColumnItem({ column, sortable }: ColumnDefaultProps) {
	return (
		<Table.Head
			key={column.id}
			className="border-r"
			style={column.width ? { width: `${column.width}%` } : {}}
		>
			<div className={cn("flex space-x-1 items-center", column.className)}>
				<div className="text-xs">{column.title}</div>
				{sortable && column.sortable && (
					<ButtonSort
						columnId={column.id}
						sortBy={sortable.sortBy}
						sortDirection={sortable.sortDirection}
					/>
				)}
			</div>
		</Table.Head>
	);
}
