"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { getAnalyticsPageContext } from "@/lib/analyticsPageContext";

export function LocationPageTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    const context = getAnalyticsPageContext(pathname);

    if (
      context.page_type !== "location_page" ||
      lastTrackedPath.current === context.page_path
    ) {
      return;
    }

    lastTrackedPath.current = context.page_path;
    trackEvent("location_page_view", {
      location_name: context.location_name,
      location_slug: context.location_slug,
      service_area: context.service_area,
      page_path: context.page_path,
    });
  }, [pathname]);

  return null;
}
