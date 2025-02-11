"use client";

import { LuArrowDownNarrowWide, LuArrowUpNarrowWide } from "react-icons/lu";
import type { SortableParams } from "../types";

type ButtonSortProps = SortableParams & {
	onSort: (params: SortableParams) => void;
	columnId: string;
};

export function ButtonSort(props: ButtonSortProps) {
	const { columnId, sortBy, sortDirection, onSort } = props;

	const handleSort = (columnId: string) => {
		const newSortDirection =
			sortBy === columnId ? (sortDirection === "ASC" ? "DESC" : "ASC") : "ASC";

		onSort({ sortBy: columnId, sortDirection: newSortDirection });
	};

	return (
		<button
			type="button"
			onClick={() => handleSort(columnId)}
			className="hover:bg-gray-1 text-gray-11 dark:text-graydark-11 dark:hover:bg-graydark-2 px-2 py-1 rounded-sm"
		>
			{sortBy === columnId &&
				(sortDirection === "ASC" ? (
					<LuArrowUpNarrowWide className="text-blue-9 dark:text-bluedark-9" />
				) : (
					<LuArrowDownNarrowWide className="text-blue-9 dark:text-bluedark-9" />
				))}

			{sortBy !== columnId && <LuArrowUpNarrowWide />}
		</button>
	);
}
