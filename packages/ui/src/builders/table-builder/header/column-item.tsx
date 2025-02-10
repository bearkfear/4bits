"use client";


import { Table } from "../../../elements/table";
import { cn } from "../../../lib/utils";
import type { Column, Columns, SortableType } from "../types";
import { ButtonSort } from "./button-sort";

type ColumnDefaultProps<C extends Columns> = SortableType<C> & {
  column: Column;
};

export function ColumnItem<C extends Columns>({
  column,
  sortable,
}: ColumnDefaultProps<C>) {
  return (
    <Table.Head key={column.id} className={column.className}>
      <div
        className={cn(
          "flex space-x-1 items-center",
          column.position && `justify-${column.position}`
        )}
      >
        <div className="text-xs">{column.title}</div>
        {sortable?.cols.includes(column.id) && (
          <ButtonSort
            columnId={column.id}
            sortBy={sortable.sortBy}
            sortDirection={sortable.sortDirection}
            onSort={sortable.onSort}
          />
        )}
      </div>
    </Table.Head>
  );
}
