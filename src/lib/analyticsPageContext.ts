export type AnalyticsPageType =
  | "location_page"
  | "service_page"
  | "contact_page"
  | "legal_page"
  | "home"
  | "unknown";

export type AnalyticsPageContext = {
  page_path: string;
  page_type: AnalyticsPageType;
  location_slug?: string;
  location_name?: string;
  service_area?: string;
};

const locationNames: Record<string, string> = {
  hamburg: "Hamburg",
  frankfurt: "Frankfurt",
  stuttgart: "Stuttgart",
  nuernberg: "Nürnberg",
  muenchen: "München",
};

const legalPaths = new Set(["/agb", "/datenschutz", "/impressum"]);

export function sanitizePath(value: string): string {
  const path = value.split(/[?#]/, 1)[0] || "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function getAnalyticsPageContext(pathname: string): AnalyticsPageContext {
  const page_path = sanitizePath(pathname);
  const segments = page_path.split("/").filter(Boolean);

  if (page_path === "/") {
    return { page_path, page_type: "home" };
  }

  if (legalPaths.has(page_path)) {
    return { page_path, page_type: "legal_page" };
  }

  if (segments[0] === "standorte" && segments[1] && locationNames[segments[1]]) {
    return {
      page_path,
      page_type: "location_page",
      location_slug: segments[1],
      location_name: locationNames[segments[1]],
      service_area: "medientechnik-av-loesungen",
    };
  }

  if (segments[0] === "referenzen") {
    return { page_path, page_type: "service_page", service_area: "referenzen" };
  }

  return { page_path, page_type: "unknown" };
}
