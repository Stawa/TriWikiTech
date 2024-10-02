import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import JavaScriptCourses from "@components/courses/javascript/navigation";
import CCourse from "@components/courses/c/navigation";
import { firestoreService } from "@main/lib/firestore";

const BASE_URL = "https://triwikitech.my.id";
const PAGES_DIRECTORY = path.join(process.cwd(), "src", "app");
const PUBLIC_DIRECTORY = path.join(process.cwd(), "public");

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

function getImages(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) return getImages(path.join(dir, entry.name));
    if (entry.isFile() && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(entry.name)) {
      return path.relative(PUBLIC_DIRECTORY, path.join(dir, entry.name));
    }
    return [];
  });
}

async function getUsers(): Promise<string[]> {
  const usersSnapshot = await firestoreService.queryCollection(
    "users",
    "name",
    "!=",
    null
  );
  return usersSnapshot.map((user) => user.name as string);
}

function createSitemapEntry(
  route: string,
  priority: number
): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE_URL}${normalizeRoute(route)}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority,
  };
}

function normalizeRoute(route: string): string {
  return route === "/" || route === ""
    ? ""
    : "/" +
        route
          .replace(/\\/g, "/")
          .replace(/\/page$/, "")
          .replace(/^page$/, "");
}

async function fetchDynamicRoutes(): Promise<string[]> {
  return [...JavaScriptCourses("en"), ...CCourse("en")].map((course) =>
    course.link.replace(/^\//, "")
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = getPages(PAGES_DIRECTORY).filter(
    (page) => !page.includes("[")
  );
  const dynamicRoutes = await fetchDynamicRoutes();
  const images = getImages(PUBLIC_DIRECTORY);
  const users = await getUsers();

  const allRoutes = new Set([
    "",
    ...staticPages.filter((page) => page !== "page"),
    ...dynamicRoutes,
  ]);

  const entries = [
    ...Array.from(allRoutes).map((route) =>
      createSitemapEntry(route, route === "" ? 1 : 0.8)
    ),
    ...images.map((image) => createSitemapEntry(image, 0.5)),
    ...users.map((user) => createSitemapEntry(user, 0.3)),
  ];

  return entries.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}
