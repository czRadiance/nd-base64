module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
      "no-console": 0,
      "camelcase": 0,
      "arrow-parens": [2, "as-needed"],
      "comma-dangle": [2],
      "eqeqeq": 2,
      "indent": [1, 2, {
        "SwitchCase": 1
      }],
      "linebreak-style": [2, "unix"],
      "prefer-arrow-callback": 2,
      "prefer-const": 1,
      "quotes": [2, "single"],
      "semi": [2, "never"],
      "strict": [2, "never"],
      "yoda": [2, "never"],

      "no-alert": 2,
      "no-const-assign": 2,
      "no-else-return": 2,
      "no-this-before-super": 2,
      "no-unexpected-multiline": 2,
      "no-undef": 2,
      "no-var": 2,
      "no-warning-comments": 1,
      "no-throw-literal": 0,
      "no-unused-expressions": 0,
      "no-inner-declarations": 2,
      "max-params": 0
    }
};
