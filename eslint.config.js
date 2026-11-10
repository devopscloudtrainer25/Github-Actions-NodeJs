const js = require("@eslint/js");

module.exports = [
  {
    ignores: ["node_modules/**", "dist/**"]
  },
  js.configs.recommended
];
