import { Table } from "../../table";
import type { Columns, Rows, SelectorRows } from "../types";

type FooterProps<C extends Columns> = SelectorRows<C> & {
	rows: Rows<C>;
	rowsChecked: Rows<C>;
	colsQuantity: number;
};

export function Footer<C extends Columns>(props: FooterProps<C>) {
	const { colsQuantity, rows, rowsChecked, selectable } = props;

	return (
		<Table.Footer>
			<Table.Row>
				{selectable ? (
					<Table.Cell colSpan={colsQuantity} className="py-2">
						<span>
							{rows.length > 1
								? `${rowsChecked.length} de ${rows.length} linhas selecionadas`
								: `${rowsChecked.length} de ${rows.length} linha selecionada`}
						</span>
					</Table.Cell>
				) : (
					<Table.Cell colSpan={colsQuantity} className="py-2">
						<span>Total de linhas: {rows.length}</span>
					</Table.Cell>
				)}
			</Table.Row>
		</Table.Footer>
	);
}