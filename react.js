'use strict';

module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  env: {
    browser: true,
    mocha: true,
    node: true,
    es6: true,
    jest: true
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    allowImportExportEverywhere: true,
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks"
  ],
  rules: {
    "jsx-quotes": ["error", "prefer-single"],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-underscore-dangle": ["error", { "allow": ["_maxListeners", "_id"] }],
    "react/jsx-boolean-value": "error",
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "react/jsx-curly-spacing": "error",
    "react/jsx-equals-spacing": "error",
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-key": "error",
    "react/jsx-no-literals": "off",
    "react/jsx-no-target-blank": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-sort-props": "off",
    "react/jsx-tag-spacing": "warn",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "off",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-find-dom-node": "off",
    "react/no-unescaped-entities": "error",
    "react/self-closing-comp": "error",
    "react/style-prop-object": "error",
    "react/prop-types": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
