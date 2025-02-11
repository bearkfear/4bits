"use client";

import { Table } from "../../../elements/table";

interface RowCellsProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	rowColData: any;
	className?: string;
}

export function RowCells({ className, rowColData }: RowCellsProps) {
	return <Table.Cell className={className}>{rowColData}</Table.Cell>;
}
