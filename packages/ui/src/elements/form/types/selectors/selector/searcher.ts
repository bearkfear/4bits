import { useState } from "react";
import type { TOption } from "./model";

export function useSearcher<Option extends TOption>(
	options: Option[],
	searchable = false,
) {
	const [value, onChange] = useState("");

	function search(text: string) {
		if (!text) return options;
		if (!searchable) return options;

		const results = [];

		const searchText = String(text).toLowerCase();

		for (const option of options) {
			if (
				String(option.label).toLowerCase().includes(searchText) ||
				String(option.value).toLowerCase().includes(searchText)
			) {
				results.push(option);
			}
		}

		return results;
	}

	return {
		search,
		value,
		onChange,
	};
}
