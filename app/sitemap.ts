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
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    ...route,
    lastModified,
  }));
}

