'use strict';

module.exports = {
  "extends": ["plugin:react/recommended"],
  "env": {
    "browser": true,
    "mocha": true,
    "node": true,
    "es6": true
  },
  "globals": {
    "$": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "allowImportExportEverywhere": true,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "jsx-quotes": ["error", "prefer-single"],
    "no-console": "error",
    "no-underscore-dangle": ["error", { "allow": ["_maxListeners", "_id"] }],
    "react/jsx-boolean-value": "error",
    "react/jsx-closing-bracket-location": ["warn", "props-aligned"],
    "react/jsx-curly-spacing": "error",
    "react/jsx-equals-spacing": "error",
    "react/jsx-handler-names": "error",
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-key": "error",
    "react/jsx-no-literals": "off",
    "react/jsx-no-target-blank": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-sort-props": "off",
    "react/jsx-space-before-closing": "warn",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "off",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-find-dom-node": "off",
    "react/no-multi-comp": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unused-prop-types": "error",
    "react/prop-types": "off",
    "react/self-closing-comp": "error",
    "react/sort-comp": "error",
    "react/sort-prop-types": ["warn", { "callbacksLast": true }],
    "react/style-prop-object": "error"
  }
};
