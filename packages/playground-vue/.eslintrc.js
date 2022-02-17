module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
};
