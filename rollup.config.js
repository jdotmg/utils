const { terser } = require("rollup-plugin-terser");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");

const override = {};

module.exports = {
  input: "src/index.ts",

  output: {
    file: "dist/index.min.js",
    format: "cjs",
    exports: "named",
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      tsconfigOverride: override,
    }),
    commonjs(),
    terser(),
  ],
};
