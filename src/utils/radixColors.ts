export interface RadixColor {
  [key: string]: string;
}

// Utility to convert colors into more usable name format
export function convertRadixToTailwind(colorObj: RadixColor) {
  return Object.keys(colorObj).reduce(
    (acc: RadixColor, curr: string, idx: number) => {
      const num = idx + 1;
      acc[num] = colorObj[curr];
      return acc;
    },
    {}
  );
}
