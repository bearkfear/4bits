import { Table } from "../../table";
import type { Action, Columns, Row } from "../types";
import { Actions } from "./actions";

type RowCellActionsProps<C extends Columns> = {
	actions: Action<C>[];
	row: Row<C>;
};

export function RowCellActions<C extends Columns>({
	actions,
	row,
}: RowCellActionsProps<C>) {
	return (
		<Table.Cell className="w-12 h-12">
			<div className="flex justify-center">
				<Actions actions={actions} row={row} />
			</div>
		</Table.Cell>
	);
}
