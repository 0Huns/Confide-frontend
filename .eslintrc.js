module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    "cypress/globals": true,
  },
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:cypress/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: ["cypress"],
  rules: {
    "cypress/no-unnecessary-waiting": "warn",
    "react/prop-types": "off",
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
