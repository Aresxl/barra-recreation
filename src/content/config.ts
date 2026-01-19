import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

export const collections = {
  gifImages: defineCollection({
    loader: file("src/data/hero-slideshow.json"),
    schema: ({ image }) =>
      z.object({
        mobile: image(),
        desktop: image(),
        alt: z.string(),
      }),
  }),
  menuHighlightsCarousel: defineCollection({
    loader: file("src/data/menu-slideshow.json"),
    schema: ({ image }) =>
      z.object({
        id: z.string(),
        image: image(),
        badge: z.string(),
        description: z.string(),
      }),
  }),
};
