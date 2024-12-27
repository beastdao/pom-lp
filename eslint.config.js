import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintPluginTailwindCSS from "eslint-plugin-tailwindcss";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {eslintPluginTailwindCSS},
    rules: {...eslintPluginTailwindCSS.rules.recommended,
      "react/react-in-jsx-scope": "off",
    }
  }
];