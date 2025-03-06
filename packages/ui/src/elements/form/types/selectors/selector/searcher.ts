import { useMemo, useState } from "react";
import type { TOption } from "./model";
import Fuse from "fuse.js";

export function useSearcher<Option extends TOption>(
	options: Option[],
	searchable = false,
) {
	const [value, onChange] = useState("");
	const searcher = useMemo(() => {
		if (searchable) {
			return new Fuse(options, { 
				keys: ['label', 'value'],
				
				threshold: 0.1,
				minMatchCharLength: 2,
				isCaseSensitive: false,
			});
		}
	}, [searchable, options]);

	function search(text: string) {
		if (!text) return options;
		if (!searcher) return [];
		const searchResult = searcher?.search(text)
		return searchResult.map((it) => it.item);
	}

	return {
		search,
		value,
		onChange,
	};
}
