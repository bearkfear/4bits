import type {Tokens} from "./tokens";

export default function maskit(value: string, mask: string, tokens: Tokens, masked = true) {
  value = value || "";
  mask = mask || "";
  let iMask = 0;
  let iValue = 0;
  let output = "";
  while (iMask < mask.length && iValue < value.length) {
    let cMask = mask[iMask];
    const masker = tokens[cMask];
    const cValue = value[iValue];
    if (masker && !masker.escape) {
      if (masker.pattern?.test(cValue)) {
        output += masker.transform ? masker.transform(cValue) : cValue;
        iMask++;
      }
      iValue++;
    } else {
      if (masker?.escape) {
        iMask++; // take the next mask char and treat it as char
        cMask = mask[iMask];
      }
      if (masked) output += cMask;
      if (cValue === cMask) iValue++; // user typed the same char
      iMask++;
    }
  }

  // fix mask that ends with a char: (#)
  let restOutput = "";
  while (iMask < mask.length && masked) {
    const cMask = mask[iMask];
    if (tokens[cMask]) {
      restOutput = "";
      break;
    }
    restOutput += cMask;
    iMask++;
  }

  return output + restOutput;
}
export type MaskKit = typeof maskit;
