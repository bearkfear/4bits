import { type ChangeEvent, useCallback } from "react";
import masker from "../../lib/mask/masker";
import defaultTokens from "../../lib/mask/tokens";

export function useMasker(
  el: HTMLInputElement | null,
  masks: string[],
  onChange: (newValue: string) => void,
  tokens = defaultTokens
) {
  const handleOnChangeMasker = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      if (evt.isTrusted === false || el === null) return;

      if (masks.length === 0) {
        onChange(el.value);
        return;
      }

      if (el.selectionEnd !== null) {
        // by default, keep cursor at same position as before the mask
        let position = el.selectionEnd;

        // save the character just inserted
        const digit = el.value[position - 1];
        const newValue = masker(el.value, masks, tokens, true);

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
    [onChange, masks, tokens, el]
  );

  return { handleOnChangeMasker };
}
