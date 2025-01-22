import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Asegurándote de que 'root' apunte a la carpeta 'src'
  root: path.resolve(__dirname, 'src'),

  publicDir: path.resolve(__dirname, 'public'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // 'dist' se creará en la raíz del proyecto
    outDir: path.resolve(__dirname, 'dist'),
  },
});
