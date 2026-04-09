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

export const collections = { projectsCollection };
