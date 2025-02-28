module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    "cypress/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:cypress/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "cypress"],
  rules: {
    "cypress/no-unnecessary-waiting": "warn",
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["cypress/**/*.cy.js", "cypress/**/*.cy.ts"],
      env: {
        mocha: true,
      },
      extends: ["plugin:cypress/recommended"],
    },
  ],
};
