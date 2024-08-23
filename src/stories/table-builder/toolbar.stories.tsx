import type { Meta } from "@storybook/react";
import { Button, TableBuilder } from "../../index";

const meta = {
	title: "Table-builder/Toolbar",
	component: TableBuilder,
} satisfies Meta<typeof TableBuilder>;

export default meta;

export const Toolbar = () => {
	return (
		<TableBuilder
			title={<span className="text-gray-11 py-1">Table with toolbar</span>}
			toolBar={{
				controlStatus: {
					default: "all",
					options: [
						{ label: "All", value: "all" },
						{ label: "Active", value: "active" },
						{ label: "Inactive", value: "inactive" },
					],
				},
				searchable: true,
				extraActions: [
					({ rows }) => (
						<Button
							variant="outline"
							onClick={() => alert(`Rows: ${rows.length}`)}
						>
							Show quantity rows
						</Button>
					),
				],
			}}
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
		/>
	);
};
