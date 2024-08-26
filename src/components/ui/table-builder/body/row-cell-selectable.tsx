import { Checkbox } from "../../form/checkbox";
import { Table } from "../../table";
import type { Columns, Row } from "../types";

interface RowCellSelectableProps<C extends Columns> {
	row: Row<C>;
	rowIsChecked: boolean;
	checkRow: (row: Row<C>) => void;
}

export function RowCellSelectable<C extends Columns>({
	checkRow,
	row,
	rowIsChecked,
}: RowCellSelectableProps<C>) {
	return (
		<Table.Cell className="p-0">
			<label className="w-full flex cursor-pointer py-2">
				<Checkbox
					checked={rowIsChecked}
					onChange={() => checkRow(row)}
					className="cursor-pointer m-auto"
				/>
			</label>
		</Table.Cell>
	);
}
