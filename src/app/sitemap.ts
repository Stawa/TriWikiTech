import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import JavaScriptCourses from "@components/courses/javascript/navigation";
import CCourse from "@components/courses/c/navigation";

const BASE_URL = "https://triwikitech.my.id";
const PAGES_DIRECTORY = path.join(process.cwd(), "src", "app");

function getPages(dir: string, baseRoute: string = ""): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const route = path.join(baseRoute, entry.name.replace(/\.tsx?$/, ""));
    if (entry.isDirectory()) return getPages(path.join(dir, entry.name), route);
    if (entry.isFile() && /^(page|layout)\.tsx?$/.test(entry.name)) {
      return route === "" ? "/" : route;
    }
    return [];
  });
}

function createSitemapEntry(
  route: string,
  priority: number
): MetadataRoute.Sitemap[number] {
  const normalizedRoute =
    route === "/" || route === "" ? "" : normalizeRoute(route);
  const url = `${BASE_URL}${normalizedRoute}`;

  return {
    url,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority,
  };
}

function normalizeRoute(route: string): string {
  return (
    "/" +
    route
      .replace(/\\/g, "/")
      .replace(/\/page$/, "")
      .replace(/^page$/, "")
  );
}

async function fetchDynamicRoutes(): Promise<string[]> {
  return [...JavaScriptCourses("en"), ...CCourse("en")].map((course) =>
    course.link.replace(/^\//, "")
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = getPages(PAGES_DIRECTORY).filter(
    (page) => !page.includes("[...not_found]") && !page.includes("[courseId]")
  );
  const dynamicRoutes = await fetchDynamicRoutes();

  const entries = [
    createSitemapEntry("", 1),
    ...Array.from(
      new Set([
        ...staticPages.filter((page) => page !== "page"),
        ...dynamicRoutes,
      ])
    ).map((route) => createSitemapEntry(route, 0.8)),
  ];

  return entries.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}
