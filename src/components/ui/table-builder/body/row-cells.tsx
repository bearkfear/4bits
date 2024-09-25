import { Table } from "../../table";

interface RowCellsProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	rowColData: any;
	className?: string;
}

export function RowCells({ className, rowColData }: RowCellsProps) {
	return (
		<Table.Cell className={className}>
			<div className="flex">{rowColData}</div>
		</Table.Cell>
	);
}
