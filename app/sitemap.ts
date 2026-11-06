import type { MetadataRoute } from "next";
import { services } from "./service-data";
import { siteUrl } from "./site-config";

const lastModified = new Date("2026-11-06");

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/servicos/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages,
    {
      url: `${siteUrl}/cidades-atendidas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
