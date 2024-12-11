// import globals from "globals";
// import pluginJs from "@eslint/js";

// export default [
//   pluginJs.configs.recommended,
//   {
//     files: ['src/**/*.js'],
//     languageOptions: { globals: globals.node },
//     rules: {
// 	    semi: 'error',
// 	    'no-unused-vars': ['error', { args: 'none' }],
// 	    'no-undef': 'error'
// 	  },
//   },
// ];

import globals from "globals";
import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";

export default [
  pluginJs.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: "module",
      },
    },
    plugins: { import: pluginImport },
    rules: {
      semi: 'error',
      'no-unused-vars': ['error', { args: 'none' }],
      'no-undef': 'off', // Отключаем это правило, чтобы избежать ошибок с module
      'import/extensions': 'off',
      'import/no-unresolved': ['error', { commonjs: true }],
    },
    env: {
      node: true, // Указываем, что код запускается в среде Node.js
      browser: true, // Если необходимо, добавьте поддержку браузера
    },
  },
];
