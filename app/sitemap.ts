import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://iranzi.spriteteam.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        "https://iranzi.spriteteam.com/images/response-portrait.webp",
        "https://iranzi.spriteteam.com/images/response-closeup.webp",
      ],
    },
  ];
}
