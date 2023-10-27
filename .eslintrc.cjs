module.exports = {
  extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
        "no-case-declarations": "off",
        "no-useless-escape": "off",
        "import/order": [
          "error",
          {
            groups: [
              "type",
              "builtin",
              "external",
              "parent",
              "sibling",
              "index",
            ],
          },
        ],
      },
    },
  ],
};
