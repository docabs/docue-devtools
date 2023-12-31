module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    // 'plugin:docue/recommended',
    // '@docue/standard',
    // '@docue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  globals: {
    bridge: true,
    chrome: true,
    localStorage: 'off',
    HTMLDocument: true,
    name: 'off',
    browser: true,
  },
  rules: {
    // "docue/html-closing-bracket-newline": [
    //   "error",
    //   {
    //     singleline: "never",
    //     multiline: "always",
    //   },
    // ],
    'no-var': ['error'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
        },
        singleline: {
          delimiter: 'comma',
        },
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    camelcase: 'warn',
    'no-prototype-builtins': 'off',
    'no-use-before-define': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
  ignorePatterns: [
    'node_modules/',
    '/packages/*/lib/',
    'dist/',
    'build/',
    'build-node/',
    '/legacy',
  ],
  overrides: [
    {
      files: [
        'release.js',
        'sign-firefox.js',
        'extension-zips.js',
        'packages/build-tools/**',
        'packages/shell-electron/**',
        '**webpack.config.js',
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/camelcase': 'off',
      },
    },
    // {
    //   files: ["packages/shell-dev-docue3/**"],
    //   rules: {
    //     "docue/valid-template-root": "off",
    //   },
    // },
    // {
    //   files: ["packages/shell-dev-docue2/**", "packages/shell-dev-docue3/**"],
    //   rules: {
    //     "@typescript-eslint/no-unused-vars": "off",
    //     "docue/require-default-prop": "off",
    //     "docue/require-prop-types": "off",
    //     "no-console": "off",
    //   },
    // },
    {
      files: ['packages/shell-host/**'],
      globals: {
        localStorage: false,
      },
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['packages/app-backend-core/src/hook.ts'],
      rules: {
        'no-restricted-syntax': [
          'error',
          {
            selector: 'ImportDeclaration',
            message:
              'File is injected with a `Function.toString()`, imports will not work',
          },
          {
            selector: `CallExpression[callee.name='require']`,
            message:
              'File is injected with a `Function.toString()`, require will not work',
          },
        ],
      },
    },
  ],
}
