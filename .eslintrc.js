module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@emotion'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    'react/prop-types': 'off',
    // emotion
    '@emotion/jsx-import': 'error',
    '@emotion/pkg-renaming': 'error',
    '@emotion/no-vanilla': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',
  },
  env: {
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
