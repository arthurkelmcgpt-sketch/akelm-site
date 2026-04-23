import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";

const routes = [
  {
    changeFrequency: "weekly",
    priority: 1,
    url: `${siteUrl}/`,
  },
  {
    changeFrequency: "monthly",
    priority: 0.9,
    url: `${siteUrl}/akelmed`,
  },
  {
    changeFrequency: "monthly",
    priority: 0.9,
    url: `${siteUrl}/cargaviva`,
  },
  {
    changeFrequency: "yearly",
    priority: 0.5,
    url: `${siteUrl}/cargaviva/termosdeuso`,
  },
  {
    changeFrequency: "monthly",
    priority: 0.8,
    url: `${siteUrl}/akelmed/funcionalidades`,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    ...route,
    lastModified,
  }));
}

