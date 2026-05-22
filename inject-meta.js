import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Apna pagesData yahan import karo
const { pagesData } = await import('./src/pages/city-wise-pages-data.js');

for (const page of pagesData) {
  const slug = page.slug.toLowerCase();
  const htmlPath = join(__dirname, 'dist', 'city', slug, 'index.html');

  let html;
  try {
    html = readFileSync(htmlPath, 'utf-8');
  } catch {
    console.warn(`Skipping ${slug} - file not found`);
    continue;
  }

  const meta = page.metaDetails;
  const img = `https://safeshiftingpackers.com/assets/CityPages/${slug}.webp`; // ya jo bhi aapka img path hai

  const tags = `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.ogDescription}" />
    <meta property="og:image" content="${img}" />
    <meta property="og:url" content="https://safeshiftingpackers.com/city/${slug}" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.twitterDescription}" />
    <meta name="twitter:image" content="${img}" />
    <link rel="canonical" href="https://safeshiftingpackers.com/city/${slug}" />
  `;

  // <head> ke andar inject karo
  html = html.replace('</head>', `${tags}</head>`);
  writeFileSync(htmlPath, html);
  console.log(`✅ Injected: /city/${slug}`);
}