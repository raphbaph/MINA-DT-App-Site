import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each community update / release is one Markdown/MDX file in src/content/updates/.
// Astro generates a page per entry (see src/pages/updates/[...slug].astro) and an
// index lists them. Publishing a new release = drop in a .mdx file with frontmatter.
const updates = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    version: z.string().optional(),
    // Override the filename-derived slug, e.g. slug: "proposal-v1".
    slug: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { updates };
