import theme from "@/data/theme";

export default function convertAsteriskToStrongTag(str: string) {
  return str.replace(
    /\*{1,2}(.*?)\*{1,2}/g,
    `<strong class="font-normal text-primary-12">$1</strong>`
  );
}
