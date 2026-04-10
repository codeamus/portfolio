import { defineCollection, z } from "astro:content";
// z -> zod schema

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    image_desktop: z.string(),
    image_mobile: z.string(),
    website: z.string().url(),
    github: z.string().url().optional(),
    technologies: z.array(z.string()),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    // Para apps móviles
    appStore: z.string().url().optional(),
    googlePlay: z.string().url().optional(),
    appScreenshots: z.array(z.string()).optional(),
    type: z.enum(["web", "app", "fullstack"]).default("web"),
    metrics: z.object({
      downloads: z.string().optional(),
      rating: z.string().optional(),
      reviews: z.string().optional(),
    }).optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('CODEAMUS'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['web', 'mobile', 'seo', 'tools']).default('web'),
    keywords: z.array(z.string()),
  }),
});

export const collections = {
  projectsCollection,
  blog: blogCollection,
};
