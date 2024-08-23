import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { type ReactNode, useEffect, useMemo, useState } from "react";
import { Table } from "src";
import { Body } from "./body";
import { Footer } from "./footer";
import { Header } from "./header";
import { ToolBar } from "./toolbar";
import type {
	Action,
	Columns,
	ReorderType,
	Row,
	Rows,
	SelectorRows,
	SortableType,
	ToolbarActions,
} from "./types";
import { reoderList } from "./utils/functions";

export type TableBuilderProps<C extends Columns> = ToolbarActions<C> &
	SortableType &
	SelectorRows<C> &
	ReorderType<C> & {
		columns: C;
		rows: Rows<C>;
		actions?: Action<C>[];
		title?: string | ReactNode;
	};

export function TableBuilder<C extends Columns>(props: TableBuilderProps<C>) {
	const [rowsChecked, setRowsChecked] = useState<Rows<C>>([]);

	/** quantidade de colunas na tabela */
	const colsQuantity = useMemo(() => {
		let totalCols = props.columns.length;
		if (props.actions) totalCols += 1;
		if (props.selectable) totalCols += 1;
		if (props.reorder) totalCols += 1;
		return totalCols;
	}, [props]);

	/** reordena a lista de linhas na tabela */
	const onDragEnd = (event: DragEndEvent) => {
		if (!props.reorder) return;

		const result = reoderList(event, props.rows);

		if (!result) return;

		props.reorder(result);
	};

	/** verifica se a ação foi de selecionar todas as linhas ou remover */
	const checkAllRows = (value: boolean) => {
		if (!value) setRowsChecked([]);
		else setRowsChecked(props.rows);
	};

	/**
	 * verifica se a linha esta no array de linhas selecionadas
	 * se estiver no array, remove a linha do array ao contrario adiciona
	 */
	const checkRow = (row: Row<C>) => {
		if (rowsChecked.some((rowChecked) => rowChecked.key === row.key)) {
			setRowsChecked(rowsChecked.filter((r) => r !== row));
		} else {
			setRowsChecked([...rowsChecked, row]);
		}
	};

	/** verifica se todas as linhas foram selecionadas */
	const allRowsChecked =
		rowsChecked.length === props.rows.length && props.rows.length > 0;

	/** limpa o array de linhas seleciondas quando as linhas mudarem */
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setRowsChecked([]);
	}, [props.rows, setRowsChecked]);

	return (
		<div className="flex flex-col justify-end">
			<ToolBar
				{...props}
				rowsChecked={rowsChecked}
				setRowsChecked={setRowsChecked}
			/>

			<div className="border rounded-sm border-gray-6 overflow-hidden">
				<DndContext onDragEnd={onDragEnd}>
					<Table.Root className="table-fixed">
						<Header
							{...props}
							allRowsChecked={allRowsChecked}
							checkAllRows={checkAllRows}
						/>
						<Body
							{...props}
							checkRow={checkRow}
							rowsChecked={rowsChecked}
							colsQuantity={colsQuantity}
						/>
						<Footer
							{...props}
							colsQuantity={colsQuantity}
							rowsChecked={rowsChecked}
						/>
					</Table.Root>
				</DndContext>
			</div>
		</div>
	);
}
