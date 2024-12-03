import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 2015, // ES6
      sourceType: "module", // Use module format
    },
    rules: {
      "semi": 1,
      "no-console": "off",
    },
  },
  pluginJs.configs.recommended,
];