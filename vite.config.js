import path from "path";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "useModal",
      fileName: (format) => `use-modal.${format}.js`,
    },
  },
  resolve: {
    alias: [{ find: "@/*", replacement: path.resolve(__dirname, "src") }],
  },
  plugins: [vue()],
  rollupOptions: {
    external: ["vue"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
  },
});
