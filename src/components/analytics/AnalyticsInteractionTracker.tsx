"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { safeLinkText, trackEvent } from "@/lib/analytics";
import {
  getAnalyticsPageContext,
  sanitizePath,
  type AnalyticsPageContext,
} from "@/lib/analyticsPageContext";

const downloadPattern = /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|zip)$/i;
const contactPattern = /(kontakt|kontaktieren|anfrag|beratung|projekt (?:starten|besprechen))/i;
const discoverPattern = /(jetzt entdecken|entdecken)/i;

function ctaLocation(element: HTMLElement, context: AnalyticsPageContext): string {
  const explicit = element.dataset.analyticsLocation;
  if (explicit) return explicit;
  if (element.closest("header")) return "header";
  if (element.closest("footer")) return "footer";
  if (element.closest("#kontakt")) return "contact";
  if (element.closest("[data-home-hero-content]")) return "hero";
  if (context.page_type === "location_page") return "location_page";
  return "unknown";
}

function commonParams(context: AnalyticsPageContext) {
  return {
    page_type: context.page_type,
    page_path: context.page_path,
    location_slug: context.location_slug,
    location_name: context.location_name,
    service_area: context.service_area,
  };
}

function locationIntent(context: AnalyticsPageContext, intent_type: string) {
  if (context.page_type !== "location_page") return;
  trackEvent("location_contact_intent", {
    intent_type,
    location_name: context.location_name,
    location_slug: context.location_slug,
    service_area: context.service_area,
    page_path: context.page_path,
  });
}

function locationCta(
  context: AnalyticsPageContext,
  cta_text: string,
  location: string,
  target_path?: string,
) {
  if (context.page_type !== "location_page") return;
  trackEvent("location_cta_click", {
    cta_text,
    cta_location: location,
    target_path,
    location_name: context.location_name,
    location_slug: context.location_slug,
    service_area: context.service_area,
    page_path: context.page_path,
  });
}

function videoSource(video: HTMLVideoElement): string | undefined {
  const raw = video.currentSrc || video.src || video.querySelector("source")?.src;
  if (!raw) return undefined;

  try {
    const url = new URL(raw, window.location.origin);
    return url.origin === window.location.origin
      ? url.pathname.split("/").pop()
      : url.hostname;
  } catch {
    return undefined;
  }
}

export function AnalyticsInteractionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target : null;
      const element = target?.closest<HTMLElement>("a, button");
      if (!element || element.closest("[data-cookie-consent-banner]")) return;

      const context = getAnalyticsPageContext(pathname);
      const anchor = element instanceof HTMLAnchorElement ? element : null;
      const href = anchor?.getAttribute("href") ?? "";
      const text = safeLinkText(
        element.dataset.analyticsLabel ||
          element.textContent ||
          element.getAttribute("aria-label") ||
          element.dataset.trackLabel,
        "CTA",
      );
      const location = ctaLocation(element, context);

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", {
          link_type: "phone",
          link_text: "Telefon",
          cta_location: location,
          ...commonParams(context),
        });
        locationIntent(context, "phone");
        locationCta(context, text, location);
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEvent("email_click", {
          link_type: "email",
          link_text: "E-Mail",
          cta_location: location,
          ...commonParams(context),
        });
        locationIntent(context, "email");
        locationCta(context, text, location);

        if (element.dataset.trackEvent === "service_click") {
          trackEvent("service_card_click", {
            ...commonParams(context),
            service_name: element.dataset.analyticsService || text,
            service_area: element.dataset.analyticsService || text,
          });
        }
        return;
      }

      if (anchor && href) {
        const url = new URL(href, window.location.href);
        const extension = url.pathname.match(downloadPattern)?.[1]?.toLowerCase();

        if (extension) {
          trackEvent("file_download", {
            file_name: url.pathname.split("/").pop(),
            file_extension: extension,
            link_text: text,
            ...commonParams(context),
          });
          return;
        }

        if (url.origin !== window.location.origin) {
          trackEvent("external_link_click", {
            link_domain: url.hostname,
            link_text: text,
            outbound: true,
            ...commonParams(context),
          });
          return;
        }
      }

      const explicitEvent = element.dataset.analyticsEvent || element.dataset.trackEvent;
      const targetPath =
        anchor && href && !href.startsWith("#")
          ? sanitizePath(new URL(href, window.location.href).pathname)
          : undefined;
      const isContact = contactPattern.test(text) || href.includes("#kontakt");

      if (explicitEvent === "service_click" || explicitEvent === "service_card_click") {
        trackEvent("service_card_click", {
          ...commonParams(context),
          service_name: element.dataset.analyticsService || text,
          service_area: element.dataset.analyticsService || text,
        });
        return;
      }

      if (discoverPattern.test(text)) {
        trackEvent("discover_click", {
          cta_text: text,
          cta_location: location,
          target_path: targetPath,
          ...commonParams(context),
        });
        locationCta(context, text, location, targetPath);
        return;
      }

      if (isContact) {
        trackEvent("contact_button_click", {
          cta_text: text,
          cta_location: location,
          target_path: targetPath,
          ...commonParams(context),
        });
        locationIntent(context, "contact_cta");
        locationCta(context, text, location, targetPath);
        return;
      }

      if (explicitEvent) {
        trackEvent(explicitEvent, {
          cta_text: text,
          cta_location: location,
          target_path: targetPath,
          ...commonParams(context),
        });
        locationCta(context, text, location, targetPath);
      }
    }

    const videoActions = new Map<HTMLVideoElement, EventListener[]>();
    document.querySelectorAll<HTMLVideoElement>("video:not([aria-hidden='true'])").forEach((video) => {
      const actionMap = [
        ["play", "video_start"],
        ["pause", "video_pause"],
        ["ended", "video_complete"],
      ] as const;

      const listeners = actionMap.map(([domEvent, action]) => {
        const listener = () => {
          const context = getAnalyticsPageContext(pathname);
          trackEvent("video_interaction", {
            video_action: action,
            video_title: video.getAttribute("aria-label") || video.getAttribute("title") || "Video",
            video_src: videoSource(video),
            ...commonParams(context),
          });
        };
        video.addEventListener(domEvent, listener);
        return listener;
      });
      videoActions.set(video, listeners);
    });

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      videoActions.forEach((listeners, video) => {
        video.removeEventListener("play", listeners[0]);
        video.removeEventListener("pause", listeners[1]);
        video.removeEventListener("ended", listeners[2]);
      });
    };
  }, [pathname]);

  return null;
}
