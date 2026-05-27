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
      routes: ['/city/ghaziabad', '/city/agra', '/city/gurgaon', '/city/delhi', '/city/guwahati', '/city/mumbai', '/city/amritsar', '/city/ajmer', '/city/aligarh', '/city/hyderabad', '/city/bengaluru', '/city/noida', '/city/chennai', '/city/ahmedabad', '/city/almora', '/city/ahmednagar', '/city/alappuzha', '/city/angul', '/city/ankleshwar', '/city/arrah', '/city/asansol', '/city/anantnag', '/city/anantapur', '/city/amravati', '/city/along', '/city/akola', '/city/aizawl', '/city/adilabad', '/city/bhilai', '/city/agartala', '/city/bhagalpur', '/city/adoni', '/city/bareilly', '/city/ambala', '/city/ballari', '/city/bagalkot', '/city/aurangabad', '/city/balasore', '/city/ayodhya', '/city/bandipora', '/city/banashankari', '/city/baramulla', '/city/bardhaman', '/city/baripada', '/city/Bargarh', '/city/Basavanagudi', '/city/Bathinda', '/city/Belagavi', '/city/Begusarai', '/city/Belgaum', '/city/Berhampore',  '/city/Berhampur','/city/Bhadrak', '/city/Bhavnagar', '/city/Bharuch', '/city/Bhiwandi', '/city/Bhopal', '/city/Bhubaneswar', '/city/Bicholim', '/city/Bidar', '/city/Bikaner'],
      renderer: new PuppeteerRenderer({
        renderAfterDocumentEvent: 'prerender-ready',
        maxConcurrentRoutes: 4,
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