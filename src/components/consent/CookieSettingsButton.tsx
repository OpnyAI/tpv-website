"use client";

import { openCookieSettings } from "@/lib/consent";
import { setAnalyticsEnabled } from "@/lib/gtag";

export function CookieSettingsButton() {
  function handleOpenSettings() {
    setAnalyticsEnabled(false);
    openCookieSettings();
  }

  return (
    <button
      type="button"
      onClick={handleOpenSettings}
      className="text-left text-white/68 transition hover:text-tpv-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tpv-accent"
    >
      Cookie-Einstellungen
    </button>
  );
}
