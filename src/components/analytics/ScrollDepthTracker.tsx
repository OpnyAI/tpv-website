"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { getAnalyticsPageContext } from "@/lib/analyticsPageContext";

const thresholds = [25, 50, 75, 90] as const;

export function ScrollDepthTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tracked = new Set<number>();
    let ticking = false;

    function measure() {
      ticking = false;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable <= 0 ? 100 : (window.scrollY / scrollable) * 100;
      const context = getAnalyticsPageContext(pathname);

      thresholds.forEach((threshold) => {
        if (percent >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold);
          trackEvent("scroll_depth", { percent: threshold, ...context });
        }
      });
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(measure);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    measure();

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, searchParams]);

  return null;
}
