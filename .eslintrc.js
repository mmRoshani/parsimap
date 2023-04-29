const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  root: true,
  modules: {
    auto: true,
    graphql: false,
    typescript: { resolverProject: './tsconfig.json', parserProject: './tsconfig.eslint.json' },
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    'max-params': ['warn', 8],
    'fp/no-mutating-assign': 'off',
    'fp/no-let': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/require-await': 'warn',
  },
});
