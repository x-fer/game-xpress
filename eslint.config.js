/** @type {import("eslint").Linter.Config} */
export default {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'next/core-web-vitals',
		'next/typescript',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked'
	],
	rules: {
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-empty-object-type': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/consistent-indexed-object-style': 'off',
		'@typescript-eslint/no-require-imports': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'import/no-anonymous-default-export': 'off',
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports'
			}
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_'
			}
		],
		'@typescript-eslint/require-await': 'off',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: {
					attributes: false
				}
			}
		],
		'@next/next/no-img-element': 'off',
		'react-hooks/exhaustive-deps': 'off'
	}
};
