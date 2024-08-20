import maskit from "./maskit";
import dynamicMask from "./dynamic-mask";
import type {Tokens} from "./tokens";

export default function masker(value: string, mask: string | string[], tokens: Tokens, masked = true) {
  return Array.isArray(mask) ? dynamicMask(maskit, mask, tokens)(value, masked) : maskit(value, mask, tokens, masked);
}
