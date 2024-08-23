import { Table } from "src";

interface RowCellsProps {
	rowColData: any;
}

export function RowCells({ rowColData }: RowCellsProps) {
	return (
		<Table.Cell className="border-r">
			<div className="flex">{rowColData}</div>
		</Table.Cell>
	);
}
