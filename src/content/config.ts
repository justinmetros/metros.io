import { defineCollection, z } from "astro:content";

export const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    externalLink: z.string().url().optional(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectCollection,
  press: projectCollection,
};
