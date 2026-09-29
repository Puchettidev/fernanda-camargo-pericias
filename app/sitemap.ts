import type { MetadataRoute } from "next";
import { services } from "./service-data";

const siteUrl = "https://www.fernandacamargopericias.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/servicos/${service.slug}`,
    lastModified: new Date("2026-09-29"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-09-29"),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages,
  ];
}
