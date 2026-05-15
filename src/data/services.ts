export type ServiceItem = {
  id: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

// The mapping of the four service images is assumed from the drive folder order and should be visually confirmed.
export const services: ServiceItem[] = [
  {
    id: "projektierung-kalkulation",
    title: "Projektierung & Kalkulation",
    eyebrow: "01",
    shortDescription:
      "Von der ersten Idee bis zur belastbaren Planung: Wir übersetzen Anforderungen in klare technische Konzepte und realistische Kalkulationen.",
    description:
      "TPV-AV unterstützt Unternehmen bei der strukturierten Planung audiovisueller Systeme – inklusive Beratung, Bedarfsklärung, technischer Konzeption und Budgetrahmen.",
    image: "/images/services/projecting-calculation.png",
    imageAlt: "Visualisierung für Projektierung und Kalkulation",
    ctaLabel: "Projekt anfragen",
    ctaHref:
      "mailto:info@tpv-av.de?subject=Anfrage%20Projektierung%20%26%20Kalkulation",
  },
  {
    id: "installation-projektleitung",
    title: "Installation & Projektleitung",
    eyebrow: "02",
    shortDescription:
      "Saubere Umsetzung, koordinierte Gewerke und ein klarer Blick auf Termine, Qualität und Funktion.",
    description:
      "Von der Montage bis zur Inbetriebnahme begleitet TPV-AV die technische Umsetzung professionell und sorgt dafür, dass Medientechnik zuverlässig im Alltag funktioniert.",
    image: "/images/services/installation-project-management.png",
    imageAlt: "Visualisierung für Installation und Projektleitung",
    ctaLabel: "Installation besprechen",
    ctaHref:
      "mailto:info@tpv-av.de?subject=Anfrage%20Installation%20%26%20Projektleitung",
  },
  {
    id: "content-creation-design",
    title: "Content Creation & Design",
    eyebrow: "03",
    shortDescription:
      "Technik wirkt erst richtig, wenn auch der Inhalt überzeugt. Wir unterstützen bei visuellen Inhalten für Displays, LED-Walls und Präsentationsflächen.",
    description:
      "TPV-AV verbindet technische Umsetzung mit visuellem Verständnis und entwickelt Inhalte, die auf die jeweilige Fläche, Marke und Anwendung abgestimmt sind.",
    image: "/images/services/content-creation-design.png",
    imageAlt: "Visualisierung für Content Creation und Design",
    ctaLabel: "Content anfragen",
    ctaHref:
      "mailto:info@tpv-av.de?subject=Anfrage%20Content%20Creation%20%26%20Design",
  },
  {
    id: "premium-service-support",
    title: "Premium Service & Support",
    eyebrow: "04",
    shortDescription:
      "Auch nach Projektabschluss bleibt TPV-AV an Ihrer Seite – mit Support, Wartung und schneller Hilfe, wenn es darauf ankommt.",
    description:
      "Für anspruchsvolle AV-Systeme bietet TPV-AV zuverlässigen Service, technische Betreuung und Unterstützung im laufenden Betrieb.",
    image: "/images/services/premium-service-support.png",
    imageAlt: "Visualisierung für Premium Service und Support",
    ctaLabel: "Service kontaktieren",
    ctaHref:
      "mailto:info@tpv-av.de?subject=Anfrage%20Premium%20Service%20%26%20Support",
  },
];
