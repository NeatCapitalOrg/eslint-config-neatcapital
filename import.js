'use strict';

module.exports = {
  "plugins": [
    "import"
  ],
  "rules": {
    "import/default": "error",
    "import/export": "error",
    "import/extensions": ["error", "never"],
    "import/first": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-anonymous-default-export": "error",
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-default": "error",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": true, "peerDependencies": false}],
    "import/no-unresolved": ["error", { "caseSensitive": true }],
    "import/no-webpack-loader-syntax": "error",
    "import/order": ["error", { "newlines-between": "never" }],
  }
};
