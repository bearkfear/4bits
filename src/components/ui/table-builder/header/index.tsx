import { Table } from "src";
import type { Columns, CommonPropsBodyHeader, SortableType } from "../types";
import { ColumnAction } from "./column-actions";
import { ColumnItem } from "./column-item";
import { ColumnReorder } from "./column-reorder";
import { ColumnSelectable } from "./column-selectable";

type HeaderProps<C extends Columns> = CommonPropsBodyHeader<C> &
	SortableType & {
		allRowsChecked: boolean;
		checkAllRows: (value: boolean) => void;
	};

export function Header<C extends Columns>(props: HeaderProps<C>) {
	const {
		reorder,
		allRowsChecked,
		checkAllRows,
		columns,
		actions,
		selectable,
		sortable,
	} = props;

	return (
		<Table.Header>
			<Table.Row>
				{/** adiciona a coluna com o componente para drag das linhas */}
				{reorder && <ColumnReorder />}

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
