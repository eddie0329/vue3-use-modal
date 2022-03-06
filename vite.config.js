import path from 'path';
import vue from '@vitejs/plugin-vue';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'useModal',
      fileName: (format) => `use-modal.${format}.js`,
    },
  },
  plugins: [vue(), peerDepsExternal()],
  optimizeDeps: {
    exclude: ['vue']
  },
  rollupOptions: {
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue',
      },
    },
  },
});
