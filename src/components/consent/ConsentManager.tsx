"use client";

import { useEffect, useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { CookieConsentBanner } from "@/components/consent/CookieConsentBanner";
import {
  getStoredConsent,
  storeConsent,
  subscribeToConsent,
  type CookieConsent,
} from "@/lib/consent";
import { setAnalyticsEnabled } from "@/lib/gtag";

export function ConsentManager() {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getStoredConsent,
    () => "loading",
  );

  useEffect(() => {
    setAnalyticsEnabled(consent === "accepted");
  }, [consent]);

  function handleDecision(nextConsent: CookieConsent) {
    setAnalyticsEnabled(nextConsent === "accepted");
    storeConsent(nextConsent);
  }

  if (consent === "loading") {
    return null;
  }

  return (
    <>
      {consent === "accepted" && <GoogleAnalytics />}
      {consent === null && <CookieConsentBanner onDecision={handleDecision} />}
    </>
  );
}
