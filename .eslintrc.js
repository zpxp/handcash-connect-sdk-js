module.exports = {
   'env': {
      'node': true,
      'es6': true,
      'mocha': true,
   },
   'parser': '@typescript-eslint/parser',
   'extends': 'airbnb-typescript/base',
   'ignorePatterns': ['**/.eslintrc.js', "types/**/*.d.ts"],
   'parserOptions': {
      'requireConfigFile': false,
      'sourceType': 'module',
      'ecmaVersion': 2020,
      'allowImportExportEverywhere': false,
      'codeFrame': true,
      'tsconfigRootDir': __dirname,
      'project': './tsconfig.json',
      'ecmaFeatures': {
         'jsx': true,
         'modules': true,
         'experimentalObjectRestSpread': true
      }
   },
   'settings': {
      'import/resolver': 'webpack',
   },
   'rules': {
      'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
      'quote-props': ['error', 'consistent'],
      'no-return-assign': ['error', 'except-parens'],
      'no-param-reassign': ['error', { 'props': false }],
      'no-underscore-dangle': 'off',
      'max-len': ['warn', { 'code': 120 }],
      'indent': ['warn', 3],
      '@typescript-eslint/indent': ['warn', 3],
      'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
   },
   'plugins': [
      'mocha',
      'import',
   ],
   'overrides': [
      {
         'files': ['*.api-definition.js', '*.test.js', '*.ts'],
         'rules': {
            'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
            'no-unused-expressions': 'off',
            'init-declarations': 'off',
            'mocha/handle-done-callback': 'error',
            'mocha/max-top-level-suites': 'error',
            'mocha/no-exclusive-tests': 'error',
            'mocha/no-global-tests': 'error',
            'mocha/no-identical-title': 'error',
            'mocha/no-nested-tests': 'error',
            'mocha/no-return-and-callback': 'error',
            'mocha/no-setup-in-describe': 'error',
            'mocha/no-sibling-hooks': 'error',
            'mocha/no-synchronous-tests': 'error',
            'mocha/no-top-level-hooks': 'error',
            'mocha/prefer-arrow-callback': 'error',
            'mocha/valid-suite-description': 'error',
            'mocha/no-async-describe': 'error',
            'mocha/valid-test-description': 'error',
         },
      },
   ],
};
