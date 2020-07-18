module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "prettier/vue",
    "prettier/@typescript-eslint"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["vue", "prettier", "@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-namespace": ["off"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ]
  }
}
