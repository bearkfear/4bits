import type {Tokens} from "./tokens";
import type {MaskKit} from "./maskit";

export default function dynamicMask(maskit: MaskKit, masks: string[], tokens: Tokens) {
  const sortedAndCleanMasks = masks.map((mask) => mask.trim()).sort((a, b) => a.length - b.length);
  return (value: string, masked = true) => {
    let i = 0;
    while (i < sortedAndCleanMasks.length) {
      const currentMask = sortedAndCleanMasks[i];
      i++;
      const nextMask = sortedAndCleanMasks[i];
      if (!(nextMask && maskit(value, nextMask, tokens, true).length > currentMask.length)) {
        return maskit(value, currentMask, tokens, masked);
      }
    }
    return ""; // empty masks
  };
}
