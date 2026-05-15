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

function canTrack(): boolean {
  return (
    Boolean(GA_TRACKING_ID) &&
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  );
}

export function pageview(url: string): void {
  if (!canTrack() || !GA_TRACKING_ID) {
    return;
  }

  window.gtag?.("config", GA_TRACKING_ID, {
    page_path: url,
  });
}

export function event(
  action: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (!canTrack()) {
    return;
  }

  window.gtag?.("event", action, params);
}
