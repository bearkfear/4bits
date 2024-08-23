import { useRouter } from "next/router";
import { LuArrowDownNarrowWide, LuArrowUpNarrowWide } from "react-icons/lu";

interface ButtonSortProps {
	sortBy: string;
	sortDirection: string;
	columnId: string;
}

export function ButtonSort(props: ButtonSortProps) {
	const { columnId, sortBy, sortDirection } = props;
	const router = useRouter();

	const handleSort = (columnId: string) => {
		const newSortDirection =
			sortBy === columnId ? (sortDirection === "ASC" ? "DESC" : "ASC") : "ASC";

		const newQuery = {
			...router.query,
			sortBy: columnId,
			sortDirection: newSortDirection,
		};

		router.push({
			pathname: router.pathname,
			query: newQuery,
		});
	};

	return (
		<button
			type="button"
			onClick={() => handleSort(columnId)}
			className="hover:bg-gray-1 px-2 py-1 rounded"
		>
			{sortBy === columnId && (
				<>
					{sortDirection === "ASC" ? (
						<LuArrowUpNarrowWide className="text-blue-9" />
					) : (
						<LuArrowDownNarrowWide className="text-blue-9" />
					)}
				</>
			)}

			{sortBy !== columnId && <LuArrowUpNarrowWide />}
		</button>
	);
}
