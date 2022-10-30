module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    typescript: true,
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    'plugin:vue/recommended',
  ],
  // add your custom rules here
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "semi": ["error", "never"],
    "valid-jsdoc": [2, {
      "requireParamDescription": false,
      "requireReturnDescription": false
    }],
    "block-spacing": [2, "always"],
    "no-multi-spaces": "error",
    "padded-blocks": ["error", "never"],
    "quotes": ["error", "single"],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "space-before-function-paren": ['error', 'never'],
    "key-spacing": ["error", { "mode": "minimum" }],
    "space-infix-ops": ["error", { "int32Hint": false }],
    "no-unused-vars": 0,
    "typescript/no-var-requires": 0,
    "comma-spacing": ["error", { "before": false, "after": true }],
    "object-curly-spacing": ["error", "always"],
    "curly": "error",
    "prefer-arrow-callback": "error",
    "no-empty-function": "error",
    "space-before-blocks": "error",
    "typescript/member-delimiter-style": 0,
    "space-in-parens": ["error", "never"],
    "typescript/no-angle-bracket-type-assertion": 0
  },
  overrides: [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off",
        'rest-spread-spacing': ["error", "never"],
        'padded-blocks': ["error", "never"],
        "vue/html-indent": ["error", 4],
        "vue/component-name-in-template-casing": ["error", "kebab-case"],
        "vue/html-closing-bracket-spacing": "off",
        "vue/script-indent": ["error", 4, {
          "baseIndent": 1
        }],
        "vue/max-attributes-per-line": ["error", {
          "singleline": 3
        }],
        "vue/attributes-order": "off",
        "vue/no-multi-spaces": ["error", {
          "ignoreProperties": false
        }],
        "no-extra-boolean-cast": "off",
        "vue/use-v-on-exact": "off",
        "vue/no-v-html": "off",
        "vue/html-self-closing": ["error", {
          "html": {
            "void": "never",
            "normal": "never",
            "component": "always"
          },
          "svg": "any",
          "math": "any"
        }]
      }
    }
  ]
}
