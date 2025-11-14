module.exports = {
  root: true,
  env: { es6: true, node: true, jest: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'react-native',
    '@typescript-eslint',
    'simple-import-sort',
    'import',
    'unused-imports',
  ],
  extends: [
    '@react-native/eslint-config',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    // React hooks tuning
    'react-hooks/refs': 'off',

    // Unused imports/vars
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

    // Import sorting - React must be first
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // React import must come first (exact match for 'react')
          ['^react$'],
          // Then other React-related packages
          ['^react-'],
          // Then other external packages
          ['^@?\\w'],
          // Internal packages
          ['^(@|@company|@ui|components|utils|config|vendored-editor)(/.*|$)'],
          // Parent imports
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    // Import plugin
    'import/order': 'off',
    'import/no-unresolved': 'off',
    'import/namespace': 'off',

    // RN plugin tuning
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/sort-styles': 'off',
  },
  settings: {
    react: { version: 'detect' },
    'import/ignore': ['node_modules/react-native/.*'],
  },
  ignorePatterns: ['node_modules/**/*'],
};
