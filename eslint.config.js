import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "module" } },
  { languageOptions: { globals: {...globals.browser, ...globals.node, ...globals.jest } } },
  pluginJs.configs.recommended,
  {
    rules: {
      indent: ["error", 2, { SwitchCase: 1 }],
      quotes: ["warn", "double", { avoidEscape: true, allowTemplateLiterals: true }],
      "arrow-parens": ["error", "always"],
    },
  },
];
