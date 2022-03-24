'use strict';

module.exports = {
  "env": {
    "mocha": true
  },
  "plugins": [
    "mocha"
  ],
  "rules": {
    "mocha/handle-done-callback": "error",
    "mocha/max-top-level-suites": 'off',
    "mocha/no-exclusive-tests": "error",
    "mocha/no-mocha-arrows": "error",
    "mocha/no-nested-tests": "error",
    "mocha/no-return-and-callback": "error",
    "mocha/no-sibling-hooks": "error"
  },
  "overrides": [
    {
      files: ['**/*test.ts'],
      rules: {
        // Off because lots of old ts tests have arrows in mocha tests and its NBD
        // since it just effects if you use stuff like this.timeout which is like 1
        // or 2 tests
        'mocha/max-top-level-suites': 'off',
        'mocha/no-mocha-arrows': 'off',
        // Off because chai types are bad and hits this in a lot of places
        '@typescript-eslint/no-unused-expressions': 'off'
      }
    },
    {
      files: ['**/*test.js'],
      rules: {
        // Off because chai types are bad and hits this in a lot of places
        '@typescript-eslint/no-unused-expressions': 'off'
      }
    }
  ]
};
