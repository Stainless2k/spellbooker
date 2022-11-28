/** @type {import("prettier").Config} */
module.exports = {
  "printWidth": 80,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
