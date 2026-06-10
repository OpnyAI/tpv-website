export const CONSENT_STORAGE_KEY = "tpv_cookie_consent";
const CONSENT_CHANGE_EVENT = "tpv:cookie-consent-change";

export type CookieConsent = "accepted" | "rejected";
export type CookieConsentSnapshot = CookieConsent | null | "loading";

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function storeConsent(consent: CookieConsent): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, consent);
  } catch {}

  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export function openCookieSettings(): void {
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {}

  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export function subscribeToConsent(onStoreChange: () => void): () => void {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  };
}
