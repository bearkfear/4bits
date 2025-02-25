"use client";

import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useEffect, useMemo, useState } from "react";
import { PageLoader } from "../../elements/page-loader";
import { Table } from "../../elements/table";
import { Body } from "./body";
import { Footer } from "./footer";
import { Header } from "./header";
import { ToolBar } from "./toolbar";
import type { Columns, Row, Rows, TableBuilderProps } from "./types";
import { reOrderList } from "./utils/functions";

export function TableBuilder<C extends Columns>(props: TableBuilderProps<C>) {
	const [rowsChecked, setRowsChecked] = useState<Rows<C>>([]);

	/** quantidade de colunas na tabela */
	const colsQuantity = useMemo(() => {
		let totalCols = props.columns.length;
		if (props.actions) totalCols += 1;
		if (props.selectable) totalCols += 1;
		if (props.draggable) totalCols += 1;
		return totalCols;
	}, [props]);

	/** reordena a lista de linhas na tabela */
	const onDragEnd = (event: DragEndEvent) => {
		if (!props.draggable) return;

		const result = reOrderList(event, props.rows);

		if (!result) return;

		props.draggable(result);
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
			<DndContext onDragEnd={onDragEnd}>
				<Table.Root className="table-fixed overflow-hidden">
					<Header
						{...props}
						allRowsChecked={allRowsChecked}
						checkAllRows={checkAllRows}
					/>
					{props.loading && (
						<Table.Cell colSpan={colsQuantity}>
							<PageLoader />
						</Table.Cell>
					)}

					{!props.loading && (
						<>
							<Body
								{...props}
								checkRow={checkRow}
								rowsChecked={rowsChecked}
								colsQuantity={colsQuantity}
							/>
							{!props.hideFooter && (
								<Footer
									{...props}
									colsQuantity={colsQuantity}
									rowsChecked={rowsChecked}
								/>
							)}
						</>
					)}
				</Table.Root>
			</DndContext>
		</div>
	);
}
