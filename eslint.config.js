import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        requireConfigFile: false,
      },
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': ['error', { varsIgnorePattern: '^React$' }],
      'react/jsx-no-target-blank': 'off',
    },
  },
];
