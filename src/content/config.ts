import { defineCollection, reference, z } from "astro:content"

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(reference("tags")),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    image: z.string().optional(),
  }),
})

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(reference("tags")),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    image: z.string().optional(),
  }),
})

const tags = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    bg: z.string(),
    fg: z.string(),
  }),
})

export const collections = { posts, notes, tags }
