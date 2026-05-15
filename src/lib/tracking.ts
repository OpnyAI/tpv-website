export const CTA_CLICK = "cta_click";
export const PHONE_CLICK = "phone_click";
export const EMAIL_CLICK = "email_click";
export const VIDEOCALL_CLICK = "videocall_click";
export const REFERENCE_CLICK = "reference_click";
export const SERVICE_CLICK = "service_click";

export const trackingEvents = {
  ctaClick: CTA_CLICK,
  phoneClick: PHONE_CLICK,
  emailClick: EMAIL_CLICK,
  videocallClick: VIDEOCALL_CLICK,
  referenceClick: REFERENCE_CLICK,
  serviceClick: SERVICE_CLICK,
} as const;

export type TrackingEventName =
  (typeof trackingEvents)[keyof typeof trackingEvents];
