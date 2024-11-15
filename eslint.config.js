import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginCypress from 'eslint-plugin-cypress/flat';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			react: react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'jsx-a11y': jsxA11y,
			cypress: pluginCypress,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
			'cypress/unsafe-to-chain-command': 'error',
			'cypress/no-unnecessary-waiting': 'off',
			'jsx-a11y/alt-text': 'error',
			'react-refresh/only-export-components': [
				'warn',

				{ allowConstantExport: true },
			],
		},
	}
);
