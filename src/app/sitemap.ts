import type { MetadataRoute } from "next";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://steffendoesthings.com",
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://steffendoesthings.com/work",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://steffendoesthings.com/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://steffendoesthings.com/work/idea-to-mvp",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://steffendoesthings.com/work/technical-blueprint",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://steffendoesthings.com/work/rescue-broken-build",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://steffendoesthings.com/work/technical-partner",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://steffendoesthings.com/work/feature-development",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://steffendoesthings.com/work/choose-tech-stack",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://steffendoesthings.com/apps",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://steffendoesthings.com/builds",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://steffendoesthings.com/builds/orivela",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://steffendoesthings.com/privacy",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://steffendoesthings.com/privacy/de",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://steffendoesthings.com/imprint",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://steffendoesthings.com/imprint/en",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
