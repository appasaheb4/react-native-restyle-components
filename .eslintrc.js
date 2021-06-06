module.exports = {
	root: true,
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				moduleDirectory: ['node_modules', 'src/'],
			},
		},
	},
	// parser: 'babel-eslint',
	rules: {
		// indent: [2, 'tab'],
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'react/jsx-filename-extension': 0,
		'import/extensions': 0,
		'react/jsx-indent-props': [1, 'tab'],
		'react/jsx-props-no-spreading': 0,
		'no-tabs': 0,
		'react/require-default-props': 0,
		'react/jsx-indent': [2, 'tab'],
		'object-curly-newline': 0,
		'import/prefer-default-export': 0,
		'import/no-extraneous-dependencies': 0, // ['error', { devDependencies: true }],
		'implicit-arrow-linebreak': 'off', // Conflicts with max length if enabled
		'@typescript-eslint/no-unsafe-assignment': 0,
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 0
	},
};
