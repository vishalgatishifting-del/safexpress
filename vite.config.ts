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
      routes: ['/city/ghaziabad', '/city/agra', '/city/gurgaon', '/city/delhi', '/city/guwahati', '/city/mumbai', '/city/amritsar', '/city/ajmer', '/city/aligarh', '/city/hyderabad', '/city/bengaluru', '/city/noida', '/city/chennai', '/city/ahmedabad', '/city/almora', '/city/ahmednagar', '/city/alappuzha', '/city/angul', '/city/ankleshwar', '/city/arrah', '/city/asansol', '/city/anantnag', '/city/anantapur', '/city/amravati', '/city/along', '/city/akola', '/city/aizawl', '/city/adilabad', '/city/bhilai', '/city/agartala', '/city/bhagalpur', '/city/adoni', '/city/bareilly', '/city/ambala', '/city/ballari', '/city/bagalkot', '/city/aurangabad', '/city/balasore', '/city/ayodhya', '/city/bandipora', '/city/banashankari', '/city/baramulla', '/city/bardhaman', '/city/baripada', '/city/bargarh', '/city/basavanagudi', '/city/bathinda', '/city/belagavi', '/city/begusarai', '/city/belgaum', '/city/berhampore',  '/city/berhampur','/city/bhadrak', '/city/bhavnagar', '/city/bharuch', '/city/bhiwandi', '/city/bhopal', '/city/bhubaneswar', '/city/bicholim', '/city/bidar', '/city/bikaner', '/city/bilaspur', '/city/bishnupur', '/city/buxar', '/city/bomdila', '/city/calicut', '/city/chamba', '/city/chandannagar', '/city/champhai', '/city/chandrapur', '/city/chandigarh', '/city/changlang', '/city/chhapra', '/city/chungthang', '/city/chittoor', '/city/chhattisgarh', '/city/chitradurga', '/city/mangalore', '/city/varanasi', '/city/nashik', '/city/kanpur', '/city/churachandpur', '/city/cuttack', '/city/goa', '/city/coimbatore', '/city/cuddalore', '/city/daporijo', '/city/greater-noida', '/city/kottayam', '/city/darbhanga', '/city/darjeeling', '/city/dharamshala', '/city/dhanbad', '/city/dehradun', '/city/dharwad', '/city/dibrugarh', '/city/dhule', '/city/dimapur', '/city/dindigul', '/city/durg', '/city/doda', '/city/erode', '/city/eluru', '/city/durgapur', '/city/dwarka', '/city/firozabad', '/city/faridabad'],
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