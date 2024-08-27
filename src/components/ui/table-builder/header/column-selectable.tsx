import { Checkbox } from "../../form/checkbox";
import { Table } from "../../table";

type ColumnSelectableProps = {
	allRowsChecked: boolean;
	checkAllRows: (checked: boolean) => void;
};

export function ColumnSelectable(props: ColumnSelectableProps) {
	const { allRowsChecked, checkAllRows } = props;

	return (
		<Table.Head className="w-[50px]">
			<div className="flex justify-center">
				<Checkbox
					checked={allRowsChecked}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						checkAllRows(event.target.checked);
					}}
				/>
			</div>
		</Table.Head>
	);
}