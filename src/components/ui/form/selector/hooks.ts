import get from "lodash.get";
import { useCallback } from "react";

export function useSelectorHelpers<O, VP extends keyof O, LP extends keyof O>(
	labelPath: LP,
	valuePath: VP,
) {
	const getValue = useCallback(
		(option: O) => {
			return get(option, valuePath);
		},
		[valuePath],
	);
	const getLabel = useCallback(
		(option: O) => {
			return get(option, labelPath);
		},
		[labelPath],
	);

	return {
		getLabel,
		getValue,
	};
}
