export type SocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  url: string;
  baseUrl: string;
  description: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultOgImage: string;
  keywords: string[];
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  copyright: string;
  bookingUrl: string;
  socialLinks: SocialLink[];
  legalNotice: string;
};

export const siteConfig: SiteConfig = {
  name: "TPV-AV",
  legalName: "TPV-AV GmbH",
  url: "https://www.tpv-av.de",
  baseUrl: "https://www.tpv-av.de",
  description:
    "Professionelle Audio-/Video-Lösungen für Unternehmen – von der Beratung über Planung und Installation bis zu Content, Service und Support.",
  defaultTitle: "TPV-AV – Professionelle Audio-/Video-Lösungen",
  titleTemplate: "%s | TPV-AV",
  defaultOgImage: "/images/backgrounds/tpv-background-lines.png",
  keywords: [
    "Medientechnik",
    "AV-Lösungen",
    "Audio Video Lösungen",
    "Konferenzraumtechnik",
    "LED-Wall Installation",
    "Showroom Medientechnik",
    "AV-Systemintegration",
    "Medientechnik Unternehmen",
    "Medientechnik Deutschland",
  ],
  phoneDisplay: "0911 25392 666",
  phoneHref: "tel:+4991125392666",
  email: "info@tpv-av.de",
  emailHref: "mailto:info@tpv-av.de",
  copyright: "2026 TPV-AV GmbH",
  bookingUrl: "#",
  socialLinks: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  legalNotice:
    "Platzhalter: Rechtliche Unternehmensdaten müssen vor Livegang ergänzt und geprüft werden.",
};
