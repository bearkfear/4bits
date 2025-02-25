"use client";
import debounce from "lodash.debounce";
import type { ToolbarProps } from ".";
import { Button } from "../../../elements/button";
import { Input } from "../../../elements/form/types/inputs/input";
import { SingleSelector } from "../../../elements/form/types/selectors/selector";
import type { Columns } from "../types";

export function Tools<C extends Columns>(props: ToolbarProps<C>) {
	const { rows, rowsChecked, setRowsChecked, selectable, toolBar } = props;

	return (
		<div className="flex justify-end py-2 ml-auto space-x-2">
			{toolBar?.controlStatus?.map((control, index) => (
				<SingleSelector
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					className="w-[150px]"
					messages={{
						empty: "Selecione uma opção",
						searchPlaceholder: "Pesquisar",
					}}
					labelPath="label"
					valuePath="value"
					placeholder={control.placeholder || "Selecione uma opção"}
					value={control.status}
					disabled={control.disabled}
					onChange={control.onChange}
					options={control.options}
				/>
			))}

			{toolBar?.searchable && (
				<Input
					type="text"
					placeholder="Pesquisar"
					className="w-[150px]"
					defaultValue={toolBar.searchable.search}
					onChange={debounce(toolBar.searchable.onSearch, 1000)}
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
