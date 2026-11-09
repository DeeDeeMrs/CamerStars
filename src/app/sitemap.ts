import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about-us",
  "/work-from-home",
  "/jobs",
  "/partnership",
  "/partnership-application",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://camerstars.com${route || "/"}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/work-from-home" || route === "/jobs" ? 0.9 : 0.7,
  }));
}
