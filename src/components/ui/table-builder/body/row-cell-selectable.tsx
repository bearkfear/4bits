import { Checkbox, Table } from "src";
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
		<Table.Cell className="border-r p-0">
			<label className="flex m-auto justify-center h-[40px] cursor-pointer">
				<Checkbox
					checked={rowIsChecked}
					onChange={() => checkRow(row)}
					className="cursor-pointer"
				/>
			</label>
		</Table.Cell>
	);
}
