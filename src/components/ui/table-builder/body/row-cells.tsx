import { Table } from "../../table";

interface RowCellsProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	rowColData: any;
}

export function RowCells({ rowColData }: RowCellsProps) {
	return (
		<Table.Cell>
			<div className="flex">{rowColData}</div>
		</Table.Cell>
	);
}
