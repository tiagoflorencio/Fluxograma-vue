module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],

  ecmaVersion: 12,
  parser: "@babel/eslint-parser",
  requireConfigFile: false,
  sourceType: "module",
};
