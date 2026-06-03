import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://leonardo-machado-landing.vercel.app",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
