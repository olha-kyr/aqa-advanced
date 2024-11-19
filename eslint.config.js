import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	{
		rules: {
			indent: ['error', 2, { SwitchCase: 1 }],
			quotes: ['warn', 'double', { avoidEscape: true, allowTemplateLiterals: true }],
			'arrow-parens': ['error', 'always'],
		},
	},
];
