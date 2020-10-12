module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@src', './src'],
          ['@components', './src/components'],
        ],
        extensions: ['.js', '.jsx', '.ts', 'tsx', '.json'],
      },
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-use-before-define': ['off'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'global-require': ['off'],
    'no-dynamic-require': ['off'],
  },
};
