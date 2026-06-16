// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Building a static `dist/` locally for now. When hosted on a subdomain root
  // (e.g. https://dthq.minafoundation.com), set `site` below for canonical URLs,
  // sitemap, and OG tags — no `base` needed since it's served at the domain root.
  // site: 'https://dthq.minafoundation.com',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
