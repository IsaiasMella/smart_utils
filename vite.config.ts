import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'smart-utils',
      fileName: (format) => `smart-utils.${format}.js`,
    },
  },
  plugins:[dts({outDir: 'dist', exclude: '**/*.tests.ts'})]
});


