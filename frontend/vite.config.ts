import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import autoprefixer from 'autoprefixer';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@wails': path.resolve(__dirname, './wailsjs'),
    },
  },
  css: {
    postcss: {
      // 自动追加前缀
      plugins: [autoprefixer],
    },
  },
});
