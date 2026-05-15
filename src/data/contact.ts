export type ContactCard = {
  title: string;
  value: string;
  href: string;
  description: string;
};

export const contactCards: ContactCard[] = [
  {
    title: "E-Mail",
    value: "info@tpv-av.de",
    href: "mailto:info@tpv-av.de",
    description:
      "Schreiben Sie uns Ihr Anliegen – wir melden uns zeitnah zurück.",
  },
  {
    title: "Anruf",
    value: "0911 25392 666",
    href: "tel:+4991125392666",
    description: "Sprechen Sie direkt mit uns über Ihr Projekt.",
  },
  {
    title: "Chat",
    value: "0911 25392 666",
    href: "tel:+4991125392666",
    description:
      "Platzhalter: finaler Chat- oder WhatsApp-Link wird noch ergänzt.",
  },
  {
    title: "Videocall",
    value: "Hier vereinbaren",
    href: "#",
    description: "Platzhalter: finaler Buchungslink wird noch ergänzt.",
  },
];
