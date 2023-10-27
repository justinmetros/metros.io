import { convertRadixToTailwind, type RadixColor } from "../utils/radixColors";

import { jadeDark, mintDark, sageDark } from "@radix-ui/colors";

export const neutral = convertRadixToTailwind(sageDark);
export const primary = convertRadixToTailwind(mintDark);
export const secondary = convertRadixToTailwind(jadeDark);

export const neutralContrast = "#ffffff";
export const primaryContrast = "#ffffff";
export const secondaryContrast = "#000000";
