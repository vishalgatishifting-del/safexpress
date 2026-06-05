import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// pagesData import
const { pagesData } = await import("./src/pages/Data.js");

// First letter capital
const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

// Hyphen support
const formatImageName = (slug) =>
  slug
    .split("-")
    .map((word) => capitalize(word))
    .join("");

for (const page of pagesData) {
  const slug = page.slug.toLowerCase();

  const htmlPath = join(
    __dirname,
    "dist",
    "city",
    slug,
    "index.html"
  );

  let html;

  try {
    html = readFileSync(htmlPath, "utf-8");
  } catch {
    console.warn(`Skipping ${slug} - file not found`);
    continue;
  }

  const meta = page.metaDetails;
  console.log(meta)
  // Dynamic image from public/CityPage/
  const imageName = formatImageName(slug);

  const img = `https://safeshiftingpackers.com/CityPages/${imageName}.webp`;

  // Remove old meta tags if already exist
  html = html
    .replace(/<title>.*?<\/title>/gs, "")
    .replace(/<meta[^>]*name="description"[^>]*>/gs, "")
    .replace(/<meta[^>]*property="og:[^"]*"[^>]*>/gs, "")
    .replace(/<meta[^>]*name="twitter:[^"]*"[^>]*>/gs, "")
    .replace(/<link[^>]*rel="canonical"[^>]*>/gs, "");

  const tags = `
    <title>${meta.title}</title>

    <meta name="description" content="${meta.description}" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.ogDescription}" />
    <meta property="og:image" content="${img}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/webp" />
    <meta property="og:url" content="https://safeshiftingpackers.com/city/${slug}/" />
    <meta property="og:site_name" content="Safexpress" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.twitterDescription}" />
    <meta name="twitter:image" content="${img}" />

    <link rel="canonical" href="https://safeshiftingpackers.com/city/${slug}/" />
  `;

  // Inject inside head
  html = html.replace("</head>", `${tags}</head>`);

  // Save file
  writeFileSync(htmlPath, html);

  console.log(`Injected meta: /city/${slug}`);
}

console.log("All meta tags injected successfully!");