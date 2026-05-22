import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { createRequire } from 'module'; // <-- Yeh line add karo

const require = createRequire(import.meta.url); // <-- Yeh line add karo
const vitePrerender = require('vite-plugin-prerender'); // <-- import ki jagah require se load karo

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/about', '/contact-us', '/services'], // Apne routes yaha dalo
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    }),
  ],
});