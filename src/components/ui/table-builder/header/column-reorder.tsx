import { LuUnfoldVertical } from "react-icons/lu";
import { Table } from "src";

export function ColumnReorder() {
	return (
		<Table.Head className="w-[60px] border-r">
			<div className="flex justify-center">
				<LuUnfoldVertical />
			</div>
		</Table.Head>
	);
}
