import { Table } from "src";

export function RowEmpty({ colsQuantity }: { colsQuantity: number }) {
	return (
		<Table.Row>
			<Table.Cell colSpan={colsQuantity}>
				<div className="italic w-full text-center p-4">Sem registros</div>
			</Table.Cell>
		</Table.Row>
	);
}
