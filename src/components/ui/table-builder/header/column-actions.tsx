import { LuSettings } from "react-icons/lu";
import { Table } from "src";

export function ColumnAction() {
	return (
		<Table.Head className="w-[100px]">
			<div className="flex justify-center items-center space-x-1">
				<span>Ações</span>
				<LuSettings />
			</div>
		</Table.Head>
	);
}
