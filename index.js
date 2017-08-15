'use strict';

module.exports = {
  "env": {
    "es6": true,
    "mocha": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "plugins": [
    "mocha"
  ],
  "rules": {
    "array-bracket-spacing": "error",
    "arrow-spacing": "error",
    "block-spacing": "error",
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "camelcase": "off",
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "constructor-super": "error",
    "curly": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": "error",
    "func-call-spacing": "error",
    "handle-callback-err": "error",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": "error",
    "max-len": ["warn", 160, { "ignoreStrings": true, "ignoreTemplateLiterals": true }],
    "mocha/handle-done-callback": "error",
    "mocha/max-top-level-suites": ["error", { "limit": 1 }],
    "mocha/no-exclusive-tests": "error",
    "mocha/no-mocha-arrows": "error",
    "mocha/no-nested-tests": "error",
    "mocha/no-return-and-callback": "error",
    "mocha/no-sibling-hooks": "error",
    "new-cap": ["error", { "capIsNewExceptionPattern": "^financial" }],
    "new-parens": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-class-assign": "error",
    "no-confusing-arrow": "error",
    "no-console": "warn",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-parens": "error",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-labels": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-process-env": "error",
    "no-proto": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-tabs": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": ["error", { "allow": ["_id", "__set__", "__get__"] }],
    "no-unsafe-negation": "error",
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-var": "error",
    "no-void": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "one-var": ["error", "never"],
    "prefer-const": "error",
    "prefer-rest-params": "off",
    "prefer-spread": "off",
    "prefer-template": "error",
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "radix": "error",
    "semi": ["error", "always"],
    "semi-spacing": ["error", { "before": false, "after": true }],
    "sort-imports": "off",
    "sort-keys": "off",
    "space-before-blocks": "error",
    "space-before-function-paren": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "strict": "error",
    "template-curly-spacing": "error",
    "wrap-regex": "error",
    "yield-star-spacing": "error",
    "yoda": "error"
  }
};
