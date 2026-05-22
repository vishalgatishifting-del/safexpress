import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const vitePrerender = require('vite-plugin-prerender');
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer');

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/about', '/contact-us', '/services'],
      renderer: new PuppeteerRenderer({
        launchOptions: {
          executablePath: '/snap/bin/chromium',
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        }
      }),
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