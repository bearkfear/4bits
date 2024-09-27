"use client";
import { LuSettings } from "react-icons/lu";
import { Table } from "../../table";

export function ColumnAction() {
	return (
		<Table.Head className="w-12">
			<div className="flex justify-center">
				<LuSettings />
			</div>
		</Table.Head>
	);
}
