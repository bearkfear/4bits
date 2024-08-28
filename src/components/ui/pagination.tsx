import {
	LuChevronLeft,
	LuChevronRight,
	LuChevronsLeft,
	LuChevronsRight,
} from "react-icons/lu";
import { SingleSelector } from "./form/selector";

interface PaginationProps {
	total: number;
	limit: number;
	page: number;
	onChange: (params: { page: number; limit: number }) => void;
}

const BUTTON_COMMON_CLASSES =
	"py-[6px] px-4 border-gray-8 dark:border-graydark-6 dark:hover:bg-graydark-2 dark:text-graydark-11 hover:bg-gray-2 text-gray-11 rounded-md border";

export function Pagination({ total, limit, onChange, page }: PaginationProps) {
	const lastPage = Math.ceil(total / limit);

	const onLimitChange = (newLimit: number) => {
		onChange({ page: 1, limit: newLimit });
	};

	const onPageChange = (newPage: number) => {
		if (newPage < 1 || newPage > lastPage) return;

		onChange({ page: newPage, limit });
	};

	return (
		<div className="space-x-6 flex items-center w-full justify-end">
			<div className="flex items-center space-x-2">
				<span className="text-nowrap text-gray-11 dark:text-graydark-11">
					Linhas por página:
				</span>
				<SingleSelector
					labelPath="label"
					valuePath="value"
					messages={{
						empty: "Sem registros",
						searchPlaceholder: "Pesquisar",
					}}
					value={limit}
					options={[
						{ label: 5, value: 5 },
						{ label: 10, value: 10 },
						{ label: 25, value: 25 },
						{ label: 50, value: 50 },
					]}
					onChange={onLimitChange}
				/>
			</div>
			<span className="text-gray-11 dark:text-graydark-11">
				Página {page} de {lastPage}
			</span>
			<div className="flex space-x-2">
				<button
					type="button"
					disabled={page === 1}
					className={BUTTON_COMMON_CLASSES}
					onClick={() => onPageChange(1)}
				>
					<LuChevronsLeft size={20} />
				</button>

				<button
					type="button"
					disabled={page === 1}
					className={BUTTON_COMMON_CLASSES}
					onClick={() => onPageChange(page - 1)}
				>
					<LuChevronLeft size={20} />
				</button>

				<button
					type="button"
					disabled={page === lastPage}
					className={BUTTON_COMMON_CLASSES}
					onClick={() => onPageChange(page + 1)}
				>
					<LuChevronRight size={20} />
				</button>

				<button
					type="button"
					disabled={page === lastPage}
					className={BUTTON_COMMON_CLASSES}
					onClick={() => onPageChange(lastPage)}
				>
					<LuChevronsRight size={20} />
				</button>
			</div>
		</div>
	);
}
