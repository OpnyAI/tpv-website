import { getStoredConsent } from "@/lib/consent";

export type AnalyticsParam = string | number | boolean | undefined;
export type AnalyticsParams = Record<string, AnalyticsParam>;

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
let cookieAcceptPending = false;

const pathKeys = new Set(["page_path", "target_path"]);
const sensitiveKeyPattern = /(email|phone_number|message|form_value|query)/i;
const emailPattern = /\b[^\s@]+@[^\s@]+\.[^\s@]+\b/;
const phonePattern = /(?:\+?\d[\d\s()./-]{6,}\d)/;

function sanitizeString(key: string, value: string): string | undefined {
  let sanitized = value.trim().slice(0, 120);

  if (pathKeys.has(key)) {
    sanitized = sanitized.split(/[?#]/, 1)[0] || "/";
  }

  if (
    sensitiveKeyPattern.test(key) ||
    emailPattern.test(sanitized) ||
    phonePattern.test(sanitized)
  ) {
    return undefined;
  }

  return sanitized || undefined;
}

function sanitizeParams(params: AnalyticsParams): Record<string, string | number | boolean> {
  const sanitizedParams: Record<string, string | number | boolean> = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || sensitiveKeyPattern.test(key)) {
      return;
    }

    if (typeof value === "string") {
      const sanitized = sanitizeString(key, value);
      if (sanitized !== undefined) {
        sanitizedParams[key] = sanitized;
      }
      return;
    }

    sanitizedParams[key] = value;
  });

  return sanitizedParams;
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}): void {
  if (
    typeof window === "undefined" ||
    !GA_TRACKING_ID ||
    getStoredConsent() !== "accepted" ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  window.gtag("event", eventName, sanitizeParams(params));
}

export function markCookieAcceptPending(): void {
  cookieAcceptPending = true;
}

export function trackPendingCookieAccept(): void {
  if (!cookieAcceptPending) {
    return;
  }

  cookieAcceptPending = false;
  trackEvent("cookie_accept", { consent_type: "analytics" });
}

export function safeLinkText(value: string | null | undefined, fallback: string): string {
  if (!value) {
    return fallback;
  }

  return sanitizeString("link_text", value.replace(/\s+/g, " ")) ?? fallback;
}
