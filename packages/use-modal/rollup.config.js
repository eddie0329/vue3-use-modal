import autoExternal from "rollup-plugin-auto-external";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import vue from "rollup-plugin-vue";

export default {
  input: "src/index.ts",
  output: [
    {
      name: "use-modal",
      sourcemap: false,
    },
  ],
  plugins: [
    typescript({ tsconfig: 'tsconfig.json' }),
    vue(),
    commonjs(),
    autoExternal(),
    terser(),
  ],
};
