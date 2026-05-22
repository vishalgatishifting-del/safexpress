import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// import fs from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const vitePrerender = require('vite-plugin-prerender');
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer');


// AUTO GENERATE CITY ROUTES
// const cityFolder = path.resolve('src/assets/CityPages');

// const cityRoutes = fs
//   .readdirSync(cityFolder)
//   .filter(file => file.endsWith('.webp'))
//   .map(file => {
//     const slug = file
//       .replace('.webp', '')
//       .toLowerCase();

//     return `/city/${slug}`;
//   });


export default defineConfig({
  plugins: [
    react(),

    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),

      routes: [
        '/',
        '/about',
        '/contact-us',
        '/services',

        "/city/delhi"
      ],

      renderer: new PuppeteerRenderer({
        launchOptions: {
          executablePath: '/snap/bin/chromium',
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        },
        renderAfterDocumentEvent: 'render-event',
        maxConcurrentRoutes: 1,
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