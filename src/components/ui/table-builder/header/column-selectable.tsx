import { Checkbox } from "../../form/checkbox";
import { Table } from "../../table";

type ColumnSelectableProps = {
	allRowsChecked: boolean;
	checkAllRows: (checked: boolean) => void;
};

export function ColumnSelectable(props: ColumnSelectableProps) {
	const { allRowsChecked, checkAllRows } = props;

	return (
		<Table.Head className="w-12">
			<div className="flex justify-center">
				<Checkbox
					checked={allRowsChecked}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						checkAllRows(event.target.checked);
					}}
					className="cursor-pointer"
				/>
			</div>
		</Table.Head>
	);
}
