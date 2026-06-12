import { sanitizePath } from "@/lib/analyticsPageContext";
import { trackEvent } from "@/lib/analytics";
import { getStoredConsent } from "@/lib/consent";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

type GtagParams = Record<string, string | number | boolean>;
type GtagCommand =
  | ["js", Date]
  | ["config", string, GtagParams?]
  | ["event", string, GtagParams?];

declare global {
  interface Window {
    dataLayer?: GtagCommand[];
    gtag?: (...args: GtagCommand) => void;
  }
}

function analyticsDisabledKey(): string | null {
  return GA_TRACKING_ID ? `ga-disable-${GA_TRACKING_ID}` : null;
}

export function setAnalyticsEnabled(enabled: boolean): void {
  const key = analyticsDisabledKey();

  if (typeof window !== "undefined" && key) {
    (window as unknown as Record<string, boolean>)[key] = !enabled;
  }
}

function canTrack(): boolean {
  const key = analyticsDisabledKey();

  return (
    Boolean(GA_TRACKING_ID) &&
    typeof window !== "undefined" &&
    getStoredConsent() === "accepted" &&
    typeof window.gtag === "function" &&
    (!key || !(window as unknown as Record<string, boolean>)[key])
  );
}

export function configureGoogleAnalytics(): void {
  if (!canTrack() || !GA_TRACKING_ID) {
    return;
  }

  window.gtag?.("config", GA_TRACKING_ID, {
    anonymize_ip: true,
  });
}

export function pageview(url: string): void {
  if (!canTrack() || !GA_TRACKING_ID) {
    return;
  }

  window.gtag?.("config", GA_TRACKING_ID, {
    page_path: sanitizePath(url),
  });
}

export function event(
  action: string,
  params?: Record<string, string | number | boolean>,
): void {
  trackEvent(action, params);
}
