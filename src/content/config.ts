import { defineCollection, reference, z } from "astro:content"

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(reference("tag")),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    image: z.string().optional(),
  }),
})

const note = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(reference("tag")),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
})

const tag = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
  }),
})

export const collections = { blog, note, tag }
