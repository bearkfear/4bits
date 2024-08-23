import { Button, Input, SingleSelector } from "src";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import type { ToolbarProps } from ".";
import type { Columns } from "../types";

export function Tools<C extends Columns>(props: ToolbarProps<C>) {
	const { rows, rowsChecked, setRowsChecked, selectable, toolBar } = props;
	const router = useRouter();
	const { status = toolBar?.controlStatus?.default, search = "" } =
		router.query;

	const handleSelectStatus = (status: string) => {
		const newQuery = {
			...router.query,
			status: status,
		};

		router.push({
			pathname: router.pathname,
			query: newQuery,
		});
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		router.push({
			pathname: router.pathname,
			query: { ...router.query, search: event.target.value },
		});
	};

	return (
		<div className="flex justify-end py-2 ml-auto space-x-2">
			{toolBar?.controlStatus && (
				<div className="w-[150px]">
					<SingleSelector
						messages={{
							empty: "Selecione um status",
							searchPlaceholder: "Pesquisar",
						}}
						value={status as string}
						labelPath="label"
						valuePath="value"
						disabled={toolBar.controlStatus.disabled}
						onChange={handleSelectStatus}
						options={toolBar?.controlStatus.options}
					/>
				</div>
			)}

			{toolBar?.searchable && (
				<Input
					type="text"
					placeholder="Pesquisar"
					className="w-[150px]"
					defaultValue={search}
					onChange={debounce(handleSearch, 1000)}
				/>
			)}

			{toolBar?.extraActions?.map((action) =>
				action({ rows, rowsChecked, setRowsChecked }),
			)}

			{selectable && (
				<Button
					type="button"
					variant={selectable.variant || "default"}
					size={selectable.size || "default"}
					disabled={rowsChecked.length === 0}
					onClick={() => selectable.onClick({ rowsChecked, setRowsChecked })}
				>
					{selectable.title}
				</Button>
			)}
		</div>
	);
}
