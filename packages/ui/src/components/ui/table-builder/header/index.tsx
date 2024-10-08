"use client";
import { Table } from "../../table";
import type { Columns, CommonPropsBodyHeader, SortableType } from "../types";
import { ColumnAction } from "./column-actions";
import { ColumnDraggable } from "./column-draggable";
import { ColumnItem } from "./column-item";
import { ColumnSelectable } from "./column-selectable";

type HeaderProps<C extends Columns> = CommonPropsBodyHeader<C> &
	SortableType<C> & {
		allRowsChecked: boolean;
		checkAllRows: (value: boolean) => void;
	};

export function Header<C extends Columns>(props: HeaderProps<C>) {
	const {
		draggable,
		allRowsChecked,
		checkAllRows,
		columns,
		actions,
		selectable,
		sortable,
	} = props;

	return (
		<Table.Header>
			<Table.Row className="hover:opacity-100">
				{/** adiciona a coluna com o componente para drag das linhas */}
				{draggable && <ColumnDraggable />}

				{/** adiciona a coluna com o campo checkbox */}
				{selectable && (
					<ColumnSelectable
						allRowsChecked={allRowsChecked}
						checkAllRows={checkAllRows}
					/>
				)}

				{/** adiciona colunas normais da tabela */}
				{columns.map((column) => (
					<ColumnItem key={column.id} column={column} sortable={sortable} />
				))}

				{/** adiciona a coluna com os botões de ações */}
				{actions && actions.length > 0 && <ColumnAction />}
			</Table.Row>
		</Table.Header>
	);
}
