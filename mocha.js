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
    "mocha/max-top-level-suites": ["error", { "limit": 1 }],
    "mocha/no-exclusive-tests": "error",
    "mocha/no-mocha-arrows": "error",
    "mocha/no-nested-tests": "error",
    "mocha/no-return-and-callback": "error",
    "mocha/no-sibling-hooks": "error"
  }
};
