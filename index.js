const isFixMode = process.argv.some((arg) => arg.startsWith('--fix'));

const defaults = {
  plugins: ['eslint-plugin-unicorn', 'prettier', 'simple-import-sort'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    complexity: 'off',
    'constructor-super': 'error',
    'dot-notation': 'off',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'id-match': 'error',
    indent: 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'new-parens': 'error',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-empty-function': 'off',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-invalid-this': 'off',
    'no-new-wrappers': 'error',
    'no-shadow': 'off',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    quotes: 'off',
    radix: 'error',
    'simple-import-sort/imports': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    // Disabling this for now because it's spamming up lint logs and like there's probably > 500 files named like
    // this total across all our repos and
    // 'unicorn/filename-case': ['warn', { cases: { camelCase: true, pascalCase: true }, ignore: [/QC/] }],
    'unicorn/numeric-separators-style': [
      'error',
      {
        number: {
          minimumDigits: 5,
          groupLength: 3,
        },
        onlyIfContainsSeparator: false,
      },
    ],
    'use-isnan': 'error',
    'valid-typeof': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@neatcapital/*/src'],
      },
    ],
  },
};

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  // Default parser is Espree (see https://eslint.org/docs/latest/use/configure/parser)
  parserOptions: {
    // see https://github.com/eslint/espree#options
    ecmaVersion: 2020,
  },
  ignorePatterns: ['build', 'coverage', 'dist', 'docs', 'lib', 'node_modules', 'vendor'],
  root: true,
  // All eslint configurations will be in overrides so that we don't need all the rules running
  // e.g.; json linting doesn't need all the rules
  overrides: [
    // JavaScript files
    {
      ...defaults,
      files: ['.*.js', '**/*.{js,jsx}'],
      rules: {
        ...defaults.rules,
        // Keeping separate formatting rules for js vs ts files for now since it would be a big pain to
        // merge formatting rules and also if we are converting everything to ts anyway we don't gain much
        // merging the linting rules
        'no-confusing-arrow': 'error',
        'new-cap': ['error', { capIsNewExceptionPattern: '^financial' }],
        'no-use-before-define': 'error',
        'spaced-comment': 'off',
        'object-shorthand': 'off',
        'id-blacklist': 'off',
        'no-duplicate-imports': 'error',
        'no-multiple-empty-lines': 'off',
        'quote-props': 'off',
      },
    },
    // TypeScript files
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
      },
      plugins: [...defaults.plugins, '@typescript-eslint'],
      extends: [...defaults.extends, 'plugin:@typescript-eslint/recommended'],
      rules: {
        ...defaults.rules,
        // Disabled for now but we may want in the future
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        // warn but don't autofix
        '@typescript-eslint/no-unnecessary-type-assertion': isFixMode ? 'off' : 'warn',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        // End
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              Object: {
                message: 'Avoid using the `Object` type. Did you mean `object`?',
              },
              Function: {
                message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
              },
              Boolean: {
                message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
              },
              Number: {
                message: 'Avoid using the `Number` type. Did you mean `number`?',
              },
              String: {
                message: 'Avoid using the `String` type. Did you mean `string`?',
              },
              Symbol: {
                message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
              },
            },
          },
        ],
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
        ],
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: true,
          },
        ],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-shadow': [
          'error',
          {
            hoist: 'all',
            ignoreTypeValueShadow: true,
          },
        ],
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        // Use prettier rules
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            path: 'always',
            types: 'prefer-import',
            lib: 'always',
          },
        ],
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/unified-signatures': 'warn',
      },
    },
  ],
};

