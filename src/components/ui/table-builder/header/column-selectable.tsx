import { Table, Checkbox } from "src";

type ColumnSelectableProps = {
	allRowsChecked: boolean;
	checkAllRows: (checked: boolean) => void;
};

export function ColumnSelectable(props: ColumnSelectableProps) {
	const { allRowsChecked, checkAllRows } = props;

	return (
		<Table.Head className="w-[50px] border-r">
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
