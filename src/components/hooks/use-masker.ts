import { type ChangeEvent, useCallback } from "react";
import masker from "../../lib/mask/masker";
import defaultTokens from "../../lib/mask/tokens";

export function useMasker(
	el: HTMLInputElement | null,
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

			if (el === null) return;

			if (el.selectionEnd !== null) {
				// by default, keep cursor at same position as before the mask
				let position = el.selectionEnd;

				// save the character just inserted
				const digit = el.value[position - 1];
				const newValue = masker(event.target.value, masks, tokens, true);

				onChange(newValue);
				// if the digit was changed, increment position until find the digit again
				while (
					position < newValue.length &&
					newValue.charAt(position - 1) !== digit
				) {
					position++;
				}
				if (el === document.activeElement) {
					el.setSelectionRange(position, position);
				}
			}
		},
		[onChange, masks, tokens, el],
	);

	return { handleOnChangeMasker };
}
