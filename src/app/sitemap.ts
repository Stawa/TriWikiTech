import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://triwikitech.my.id/",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://triwikitech.my.id/courses",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://triwikitech.my.id/tos",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://triwikitech.my.id/privacy",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://triwikitech.my.id/courses/javascript",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "weekly",
      priority: 0.64,
    },
    {
      url: "https://triwikitech.my.id/courses/c",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "weekly",
      priority: 0.64,
    },
    {
      url: "https://triwikitech.my.id/courses/cpp",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "weekly",
      priority: 0.64,
    },
    {
      url: "https://triwikitech.my.id/courses/javascript/basics",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://triwikitech.my.id/courses/javascript/control-structures",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://triwikitech.my.id/courses/javascript/functions",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://triwikitech.my.id/courses/javascript/objects-arrays",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://triwikitech.my.id/courses/c/basics",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://triwikitech.my.id/courses/c/control-structures",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://triwikitech.my.id/courses/c/functions",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://triwikitech.my.id/courses/c/pointers",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://triwikitech.my.id/courses/c/memory-management",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://triwikitech.my.id/courses/c/advanced",
      lastModified: new Date("2024-09-22T16:25:15+00:00"),
      changeFrequency: "monthly",
      priority: 0.51,
    },
  ];
}
