"use client";

import { Suspense } from "react";
import Script from "next/script";
import { AnalyticsInteractionTracker } from "@/components/analytics/AnalyticsInteractionTracker";
import { GoogleAnalyticsPageView } from "@/components/analytics/GoogleAnalyticsPageView";
import { LocationPageTracker } from "@/components/analytics/LocationPageTracker";
import { ScrollDepthTracker } from "@/components/analytics/ScrollDepthTracker";
import { trackPendingCookieAccept } from "@/lib/analytics";
import { configureGoogleAnalytics, GA_TRACKING_ID } from "@/lib/gtag";

export function GoogleAnalytics() {
  // GA4 only loads when NEXT_PUBLIC_GA_ID is configured.
  if (!GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
        onReady={() => {
          configureGoogleAnalytics();
          trackPendingCookieAccept();
        }}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView />
        <ScrollDepthTracker />
      </Suspense>
      <AnalyticsInteractionTracker />
      <LocationPageTracker />
    </>
  );
}
