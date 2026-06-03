import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.oleonardomachado.com.br",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
