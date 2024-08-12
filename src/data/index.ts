import { sortPostsByDate } from "~/utils"
import { getCollection, type CollectionEntry } from "astro:content"

export type ContentType = "blog" | "note"

async function getUnsortedPosts(type: ContentType = "blog") {
  return (await getCollection(type)).map((post) => ({
    ...post,
    slug: post.slug.replace("/index", ""),
  }))
}

export async function getPosts(type: ContentType = "blog") {
  return (await getUnsortedPosts(type)).sort((a, b) => sortPostsByDate(a, b))
}

export async function getPostsByTags(
  id: CollectionEntry<"tag">["id"],
  type: ContentType = "blog"
) {
  return (await getUnsortedPosts(type)).filter((post) =>
    post.data.tags.map((tag) => tag.id).includes(id)
  )
}

export async function getTags() {
  return await getCollection("tag")
}
