# eslint-config-neatcapital
ESLint configurations for Neat Capital Inc.

To use, add a `.eslintrc` file in the root of your project. Then put this in that file:

```javascript
{
  "extends": [
    "eslint-config-neatcapital",
    "eslint-config-neatcapital/react",
    "eslint-config-neatcapital/mocha",
    //etc
  ]
}
```

Pick and choose what you need. Here's an overview of what's available:

**eslint-config-neatcapital**
The base configuration, you should always include this.

**eslint-config-neatcapital/react**
Used for projects that use react.

**eslint-config-neatcapital/mocha**
Used for projects that use the mocha test framework.



## Peer dependencies

Note that you may also need to install any peer dedendencies! Don't forget to do that. `npm` will yell at you if you forget to do this.
