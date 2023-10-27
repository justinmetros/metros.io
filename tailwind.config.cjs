const defaultTheme = require("tailwindcss/defaultTheme");
const {
  neutral,
  neutralContrast,
  primary,
  primaryContrast,
  secondary,
  secondaryContrast,
} = require("./src/data/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        neutral: neutral,
        primary: primary,
        secondary: secondary,
        "neutral-contrast": neutralContrast,
        "primary-contrast": primaryContrast,
        "secondary-contrast": secondaryContrast,
      },
      fontFamily: {
        base: ["Matter", ...defaultTheme.fontFamily.sans],
        display: ["Reckless Neue", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
