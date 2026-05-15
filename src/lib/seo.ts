import { siteConfig } from "@/data/site";

function normalizePath(path: string): string {
  if (!path) {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

export function absoluteUrl(path: string): string {
  return new URL(normalizePath(path), siteConfig.baseUrl).toString();
}

export function createCanonicalUrl(path: string): string {
  return absoluteUrl(path);
}
