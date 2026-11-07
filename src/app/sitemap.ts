import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ezekieltechnique.bolt.host";

  const services = [
    "acting-exertion",
    "vessel-preservation",
    "performance-science",
    "high-stakes-training",
    "ezekiel-coaching",
    "ezekiel-teaching",
    "auditioning-performance-strategy",
    "neuro-calibration",
  ];

  const locations = [
    "hollywood",
    "santa-monica",
    "burbank",
    "bel-air",
    "san-diego",
  ];

  const staticRoutes = [
    "",
    "/services",
    "/locations",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationRoutes = locations.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}

