import type { MetadataRoute } from "next";

const siteUrl = "https://www.fernandacamargopericias.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-09-15"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
