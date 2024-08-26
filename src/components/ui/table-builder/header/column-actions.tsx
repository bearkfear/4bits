import { LuSettings } from "react-icons/lu";
import { Table } from "../../table";

export function ColumnAction() {
	return (
		<Table.Head className="w-[50px]">
			<div className="flex justify-center">
				<LuSettings />
			</div>
		</Table.Head>
	);
}
