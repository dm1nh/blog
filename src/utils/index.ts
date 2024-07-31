import type { CollectionEntry } from "astro:content"

export function formatDate(publishedAt: string | Date): string {
  var options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return new Date(publishedAt).toLocaleDateString("en-US", options)
}

export function sortPostsByDate(
  a: CollectionEntry<"posts" | "notes">,
  b: CollectionEntry<"posts" | "notes">
) {
  const publishedAtA = new Date(a.data.publishedAt)
  const publishedAtB = new Date(b.data.publishedAt)

  if (publishedAtA < publishedAtB) {
    return 1
  }

  if (publishedAtA > publishedAtB) {
    return -1
  }

  return 0
}
