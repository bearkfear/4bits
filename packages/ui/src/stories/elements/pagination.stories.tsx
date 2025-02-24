import type { Meta } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "../../index";

const meta = {
	title: "Elements/Pagination",
	component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;

export const Basic = () => {
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(5);

	return (
		<Pagination
			total={255}
			page={page}
			limit={limit}
			onChange={({ limit, page }) => {
				setPage(page);
				setLimit(limit);
			}}
		/>
	);
};
