"use client";

import { Checkbox } from "../../../elements/form/checkbox";
import { Table } from "../../../elements/table";
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
		<Table.Cell className="">
			{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
			<label className="flex cursor-pointer w-full h-full">
				<Checkbox
					checked={rowIsChecked}
					onChange={() => checkRow(row)}
					className="cursor-pointer m-auto"
				/>
			</label>
		</Table.Cell>
	);
}
