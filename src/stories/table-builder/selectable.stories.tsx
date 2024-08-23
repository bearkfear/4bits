import type { Meta } from "@storybook/react";
import { TableBuilder } from "../../index";

const meta = {
	title: "Table-builder/Selecionavel",
	component: TableBuilder,
} satisfies Meta<typeof TableBuilder>;

export default meta;

export const Selectable = () => {
	return (
		<TableBuilder
			title={
				<span className="text-gray-11 py-1">Table with selectable rows</span>
			}
			columns={
				[
					{ id: "name", title: "Name" },
					{ id: "age", title: "Age" },
					{ id: "sex", title: "Sex" },
				] as const
			}
			rows={[
				{ key: 1, name: "John Doe", age: 30, sex: "Man" },
				{ key: 2, name: "Jane Doe", age: 20, sex: "Woman" },
				{ key: 3, name: "Alice Smith", age: 25, sex: "Woman" },
				{ key: 4, name: "Bob Johnson", age: 40, sex: "Man" },
				{ key: 5, name: "Charlie Brown", age: 35, sex: "Man" },
			]}
			selectable={{
				onClick: ({ rowsChecked }) => {
					alert(`Rows checked: ${rowsChecked.length}`);
				},
				title: "Remove selected",
				variant: "danger__light",
				size: "sm",
			}}
		/>
	);
};
