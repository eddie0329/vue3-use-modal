import typescript from "rollup-plugin-typescript2";
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
    vue(),
    typescript(),
  ],
};
