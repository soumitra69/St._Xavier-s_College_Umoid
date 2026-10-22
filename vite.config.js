import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  publicDir: false,
  plugins: [
    {
      name: 'dev-entry-rewrite',
      apply: 'serve',
      enforce: 'pre',
      transformIndexHtml(html) {
        return html.replace('./dist/bundle.js', '/src/main.jsx');
      },
    },
    react(),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './src/main.jsx',
      output: {
        entryFileNames: 'bundle.js',
        chunkFileNames: 'chunk-[name].js',
        assetFileNames: 'bundle[extname]',
      },
    },
  },
});
