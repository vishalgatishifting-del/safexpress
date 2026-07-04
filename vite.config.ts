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
      routes: ['/city/ghaziabad', '/city/agra', '/city/gurgaon', '/city/delhi', '/city/guwahati', '/city/mumbai', '/city/amritsar', '/city/ajmer', '/city/aligarh', '/city/hyderabad', '/city/bengaluru', '/city/noida', '/city/chennai', '/city/ahmedabad', '/city/almora', '/city/ahmednagar', '/city/alappuzha', '/city/angul', '/city/ankleshwar', '/city/arrah', '/city/asansol', '/city/anantnag', '/city/anantapur', '/city/amravati', '/city/along', '/city/akola', '/city/aizawl', '/city/adilabad', '/city/bhilai', '/city/agartala', '/city/bhagalpur', '/city/adoni', '/city/bareilly', '/city/ambala', '/city/ballari', '/city/bagalkot', '/city/aurangabad', '/city/balasore', '/city/ayodhya', '/city/bandipora', '/city/banashankari', '/city/baramulla', '/city/bardhaman', '/city/baripada', '/city/bargarh', '/city/basavanagudi', '/city/bathinda', '/city/belagavi', '/city/begusarai', '/city/belgaum', '/city/berhampore',  '/city/berhampur','/city/bhadrak', '/city/bhavnagar', '/city/bharuch', '/city/bhiwandi', '/city/bhopal', '/city/bhubaneswar', '/city/bicholim', '/city/bidar', '/city/bikaner', '/city/bilaspur', '/city/bishnupur', '/city/buxar', '/city/bomdila', '/city/calicut', '/city/chamba', '/city/chandannagar', '/city/champhai', '/city/chandrapur', '/city/chandigarh', '/city/changlang', '/city/chhapra', '/city/chungthang', '/city/chittoor', '/city/chhattisgarh', '/city/chitradurga', '/city/mangalore', '/city/varanasi', '/city/nashik', '/city/kanpur', '/city/churachandpur', '/city/cuttack', '/city/goa', '/city/coimbatore', '/city/cuddalore', '/city/daporijo', '/city/greater-noida', '/city/kottayam', '/city/darbhanga', '/city/darjeeling', '/city/dharamshala', '/city/dhanbad', '/city/dehradun', '/city/dharwad', '/city/dibrugarh', '/city/dhule', '/city/dimapur', '/city/dindigul', '/city/durg', '/city/doda', '/city/erode', '/city/eluru', '/city/durgapur', '/city/dwarka', '/city/firozabad', '/city/faridabad', '/city/ganderbal', '/city/gandhidham', '/city/gorakhpur', '/city/gaya', '/city/gandhinagar', '/city/gangtok', '/city/gyalshing', '/city/gwalior', '/city/gulbarga', '/city/guntur', '/city/haridwar', '/city/hamirpur', '/city/hajipur', '/city/haldia', '/city/hassan', '/city/haldwani', '/city/hazaribagh', '/city/hebbal', '/city/hindupur', '/city/hisar', '/city/hsr-layout', '/city/btm-layout', '/city/hnahthial', '/city/hospet', '/city/howrah', '/city/hosur', '/city/hubli', '/city/idukki', '/city/indiranagar', '/city/imphal', '/city/indore', '/city/itanagar', '/city/jaipur', '/city/jabalpur', '/city/jalgaon', '/city/jalandhar', '/city/jalpaiguri', '/city/jammu', '/city/jeypore', '/city/jayanagar', '/city/jamnagar', '/city/jamshedpur', '/city/jodhpur', '/city/jiribam', '/city/jhansi', '/city/jharsuguda', '/city/jorethang', '/city/jorhat', '/city/kadapa', '/city/junagadh', '/city/kakching', '/city/kakinada', '/city/kannur', '/city/kangra', '/city/kalaburagi', '/city/kanchipuram', '/city/karwar', '/city/karnal', '/city/kargil', '/city/karimnagar', '/city/kashipur', '/city/kasaragod', '/city/kathua', '/city/katni', '/city/keylong', '/city/kendrapara', '/city/khammam', '/city/kharagpur', '/city/davanagere', '/city/bokaro-steel-city', '/city/kalyan-dombivli', '/city/electronic-city', '/city/khawzawl', '/city/khonsa'],
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