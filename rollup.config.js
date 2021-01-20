import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import scss from "rollup-plugin-scss";

const config = {
  input: pkg.source,
  output: [
    {
      file: "demo/src/teal-comp-lib/index.js",
      format: "esm",
      banner: "/* eslint-disable */",
    },
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    external(),
    babel({
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
    scss(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};

export default config;
