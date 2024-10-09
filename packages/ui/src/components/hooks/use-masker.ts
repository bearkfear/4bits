import { type ChangeEvent, type RefObject, useCallback } from "react";
import masker from "../../lib/mask/masker";
import defaultTokens from "../../lib/mask/tokens";

export function useMasker(
	el: RefObject<HTMLInputElement>,
	masks: string[],
	onChange: (newValue: string) => void,
	tokens = defaultTokens,
) {
	const handleOnChangeMasker = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			if (masks.length === 0) {
				onChange(event.target.value);
				return;
			}

			if (el.current === null) return;

			if (el.current.selectionEnd !== null) {
				// by default, keep cursor at same position as before the mask
				let position = el.current.selectionEnd;

				// save the character just inserted
				const digit = el.current.value[position - 1];
				const newValue = masker(event.target.value, masks, tokens, true);

				onChange(newValue);
				// if the digit was changed, increment position until find the digit again
				while (
					position < newValue.length &&
					newValue.charAt(position - 1) !== digit
				) {
					position++;
				}
				if (el.current === document.activeElement) {
					el.current.setSelectionRange(position, position);
				}
			}
		},
		[onChange, masks, tokens, el],
	);

	return { handleOnChangeMasker };
}
