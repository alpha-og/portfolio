import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default("Athul Anoop"),
    tags: z.array(z.string()),
    banner: z.string().optional(),
    language: z.enum(["en"]),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
