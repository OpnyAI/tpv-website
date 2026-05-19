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
    value: "+49 911 25392 666",
    href: "tel:+4991125392666",
    description: "Sprechen Sie direkt mit uns über Ihr Projekt.",
  },
  {
    title: "Chat",
    value: "+49 911 25392 666",
    href: "https://wa.me/4991125392666",
    description: "Kontaktieren Sie uns direkt per WhatsApp.",
  },
  {
    title: "Videocall",
    value: "Hier vereinbaren",
    href: "https://calendly.com/tpv-av-info/30min?month=2026-05",
    description: "Vereinbaren Sie einen 30-minütigen Videocall.",
  },
];
