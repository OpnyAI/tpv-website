export type LocationService = {
  title: string;
  description: string;
};

export type LocationFaqItem = {
  question: string;
  answer: string;
};

export type LocationItem = {
  slug: string;
  city: string;
  label: string;
  href: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroClaim: string;
  introTitle: string;
  intro: string;
  localContext: string;
  services: LocationService[];
  useCases: string[];
  regionHighlights: string[];
  faq: LocationFaqItem[];
  cta: string;
};

const coreServices: LocationService[] = [
  {
    title: "Projektierung & Kalkulation",
    description:
      "Anforderungen, Räume, Budgets und technische Schnittstellen werden sauber geklärt, bevor ein belastbares AV-Konzept entsteht.",
  },
  {
    title: "Installation & Projektleitung",
    description:
      "TPV koordiniert Montage, Integration, Inbetriebnahme und Abstimmung mit beteiligten Gewerken bis zur einsatzbereiten Lösung.",
  },
  {
    title: "Content Creation & Design",
    description:
      "Für Displays, LED-Walls und Digital Signage entstehen Inhalte, die Technik, Marke und Nutzungssituation zusammenführen.",
  },
  {
    title: "Premium Service & Support",
    description:
      "Wartung, Optimierung und Support sichern den zuverlässigen Betrieb Ihrer Medientechnik nach dem Projektabschluss.",
  },
];

function createLocationFaqs(city: string): LocationFaqItem[] {
  return [
    {
      question: `Bietet TPV-AV Medientechnik in ${city} an?`,
      answer: `Ja. TPV-AV unterstützt Unternehmen in ${city} bei der Planung, Installation und Betreuung professioneller Medientechnik. Dazu gehören AV-Technik, Konferenzraumtechnik, Digital Signage, LED-Walls und individuelle audiovisuelle Lösungen.`,
    },
    {
      question: `Welche AV-Technik eignet sich für Unternehmen in ${city}?`,
      answer: `Geeignet sind Lösungen, die zum Raum, zur Nutzung und zum gewünschten Kommunikationsziel passen. Für Unternehmen in ${city} können das Konferenzraumtechnik, Präsentationssysteme, Videokonferenztechnik, Displays, LED-Walls oder Digital-Signage-Systeme sein.`,
    },
    {
      question: `Plant TPV-AV Konferenzraumtechnik in ${city}?`,
      answer: `Ja. TPV-AV plant Konferenzraumtechnik für Besprechungsräume, Meetingräume, Schulungsräume und hybride Arbeitsumgebungen in ${city}. Entscheidend sind gute Verständlichkeit, zuverlässige Bildübertragung, einfache Bedienung und passende Integration in den Raum.`,
    },
    {
      question: `Sind Digital Signage und LED-Walls in ${city} sinnvoll?`,
      answer: `Digital Signage und LED-Walls sind in ${city} sinnvoll, wenn Unternehmen Informationen, Markenbotschaften oder Präsentationen sichtbar und flexibel ausspielen möchten. Typische Einsatzorte sind Empfangsbereiche, Showrooms, Hotels, Eventflächen und Unternehmenszentralen.`,
    },
    {
      question: `Übernimmt TPV-AV Installation, Projektleitung und Support in ${city}?`,
      answer: `Ja. TPV-AV begleitet AV-Projekte in ${city} von der technischen Planung über Installation und Inbetriebnahme bis zum laufenden Support. Dadurch bleibt die Umsetzung klar koordiniert und die Technik langfristig betreut.`,
    },
  ];
}

export const locations: LocationItem[] = [
  {
    slug: "hamburg",
    city: "Hamburg",
    label: "HAMBURG",
    href: "/standorte/hamburg",
    title: "Medientechnik & AV-Lösungen in Hamburg",
    metaTitle: "Medientechnik & AV-Lösungen Hamburg",
    metaDescription:
      "TPV plant und realisiert professionelle AV-Lösungen, Konferenzraumtechnik, LED-Walls und Digital Signage für Unternehmen in Hamburg und Umgebung.",
    heroClaim:
      "TPV plant und realisiert professionelle Audio-/Video-Lösungen, Konferenzraumtechnik, LED-Walls und Digital-Signage-Systeme für Unternehmen in Hamburg und Umgebung.",
    introTitle: "AV-Technik für eine vernetzte Wirtschafts- und Hafenstadt",
    intro:
      "Hamburg verbindet Handel, Logistik, Hospitality, Corporate Offices und Eventflächen. Damit Kommunikation in diesen Umgebungen zuverlässig wirkt, braucht Medientechnik klare Planung, robuste Integration und Inhalte, die im Alltag funktionieren.",
    localContext:
      "Für Unternehmen im Hamburger Umfeld denkt TPV repräsentative Empfangsbereiche, Meetingzonen, Showrooms und digitale Informationsflächen als zusammenhängendes System.",
    services: coreServices,
    useCases: [
      "Konferenzräume und hybride Meetingbereiche",
      "Showrooms für Marken- und Produktinszenierung",
      "Empfangsbereiche, Lobbys und Corporate Spaces",
      "Eventflächen, Hospitality und Digital Signage",
    ],
    regionHighlights: ["Hafen & Handel", "Corporate Offices", "Hospitality", "Events"],
    faq: createLocationFaqs("Hamburg"),
    cta: "AV-Projekt in Hamburg anfragen",
  },
  {
    slug: "frankfurt",
    city: "Frankfurt",
    label: "FRANKFURT",
    href: "/standorte/frankfurt",
    title: "Medientechnik & AV-Lösungen in Frankfurt",
    metaTitle: "Medientechnik & AV-Lösungen Frankfurt",
    metaDescription:
      "Professionelle AV-Technik für Unternehmen in Frankfurt: Konferenzraumtechnik, LED-Walls, Digital Signage, Systemintegration und Support von TPV.",
    heroClaim:
      "TPV plant und realisiert professionelle Audio-/Video-Lösungen, Konferenzraumtechnik, LED-Walls und Digital-Signage-Systeme für Unternehmen in Frankfurt und Umgebung.",
    introTitle: "Medientechnik für Finance, Messen und Headquarters",
    intro:
      "Frankfurt stellt hohe Anforderungen an Präsentation, Verfügbarkeit und internationale Kommunikation. Ob Unternehmenszentrale, Konferenzfläche oder Messeumfeld: AV-Systeme müssen sicher, verständlich und skalierbar funktionieren.",
    localContext:
      "TPV entwickelt Lösungen für repräsentative Meetingräume, digitale Informationsflächen und hochwertige Präsentationsumgebungen im Frankfurter Unternehmenskontext.",
    services: coreServices,
    useCases: [
      "Boardrooms und hybride Konferenzflächen",
      "Headquarters und Corporate Communication",
      "Messe- und Präsentationsbereiche",
      "Empfang, Lobby und Digital Signage",
    ],
    regionHighlights: ["Finance", "Messen", "Headquarters", "Konferenzflächen"],
    faq: createLocationFaqs("Frankfurt"),
    cta: "AV-Projekt in Frankfurt anfragen",
  },
  {
    slug: "stuttgart",
    city: "Stuttgart",
    label: "STUTTGART",
    href: "/standorte/stuttgart",
    title: "Medientechnik & AV-Lösungen in Stuttgart",
    metaTitle: "Medientechnik & AV-Lösungen Stuttgart",
    metaDescription:
      "TPV realisiert AV-Lösungen, Konferenzraumtechnik, LED-Walls und Digital Signage für Industrie, Automotive und Corporate-Kommunikation in Stuttgart.",
    heroClaim:
      "TPV plant und realisiert professionelle Audio-/Video-Lösungen, Konferenzraumtechnik, LED-Walls und Digital-Signage-Systeme für Unternehmen in Stuttgart und Umgebung.",
    introTitle: "AV-Systeme für Industrie, Engineering und Markenräume",
    intro:
      "In Stuttgart treffen technische Präzision, Automotive, Industrie und Corporate-Kommunikation aufeinander. Medientechnik muss komplexe Inhalte klar darstellen und gleichzeitig zuverlässig in Arbeitsprozesse integrierbar sein.",
    localContext:
      "TPV unterstützt Unternehmen im Stuttgarter Raum bei Showrooms, Besprechungsbereichen, Präsentationsflächen und digitalen Kommunikationssystemen.",
    services: coreServices,
    useCases: [
      "Konferenzräume für Engineering- und Projektteams",
      "Showrooms und Produktpräsentationen",
      "Empfangsbereiche und Corporate Flächen",
      "LED-Walls für Visualisierung und Kommunikation",
    ],
    regionHighlights: ["Industrie", "Automotive", "Engineering", "Corporate-Kommunikation"],
    faq: createLocationFaqs("Stuttgart"),
    cta: "AV-Projekt in Stuttgart anfragen",
  },
  {
    slug: "nuernberg",
    city: "Nürnberg",
    label: "NÜRNBERG",
    href: "/standorte/nuernberg",
    title: "Medientechnik & AV-Lösungen in Nürnberg",
    metaTitle: "Medientechnik & AV-Lösungen Nürnberg",
    metaDescription:
      "Medientechnik in Nürnberg: TPV plant AV-Lösungen, Konferenzraumtechnik, LED-Walls und Digital Signage für Mittelstand, Messen und Industrie.",
    heroClaim:
      "TPV plant und realisiert professionelle Audio-/Video-Lösungen, Konferenzraumtechnik, LED-Walls und Digital-Signage-Systeme für Unternehmen in Nürnberg und Umgebung.",
    introTitle: "Medientechnik für Mittelstand, Messen und regionale Unternehmen",
    intro:
      "Nürnberg ist geprägt von Mittelstand, Industrie, Messeumfeld und starken regionalen Unternehmensstandorten. Professionelle AV-Technik unterstützt dort Präsentation, Zusammenarbeit und digitale Orientierung.",
    localContext:
      "TPV entwickelt AV-Lösungen für Nürnberger Unternehmen, die Konferenzräume, Showrooms, Empfangsbereiche oder Digital-Signage-Flächen zuverlässig betreiben möchten.",
    services: coreServices,
    useCases: [
      "Konferenzräume und Besprechungszonen",
      "Messe- und Präsentationsflächen",
      "Empfangsbereiche und Lobbys",
      "Digital Signage für Unternehmenskommunikation",
    ],
    regionHighlights: ["Mittelstand", "Messen", "Industrie", "Regionale Unternehmensstandorte"],
    faq: createLocationFaqs("Nürnberg"),
    cta: "AV-Projekt in Nürnberg anfragen",
  },
  {
    slug: "muenchen",
    city: "München",
    label: "MÜNCHEN",
    href: "/standorte/muenchen",
    title: "Medientechnik & AV-Lösungen in München",
    metaTitle: "Medientechnik & AV-Lösungen München",
    metaDescription:
      "TPV plant hochwertige AV-Lösungen, Konferenzraumtechnik, LED-Walls und Digital Signage für Unternehmen, Tech, Healthcare und Showrooms in München.",
    heroClaim:
      "TPV plant und realisiert professionelle Audio-/Video-Lösungen, Konferenzraumtechnik, LED-Walls und Digital-Signage-Systeme für Unternehmen in München und Umgebung.",
    introTitle: "AV-Lösungen für hochwertige Präsentations- und Arbeitsumgebungen",
    intro:
      "München vereint Corporate, Tech, Healthcare und anspruchsvolle Showroom-Umgebungen. Medientechnik muss dort nicht nur funktionieren, sondern Räume präzise aufwerten und Inhalte hochwertig erlebbar machen.",
    localContext:
      "TPV verbindet technische Planung, Integration und Content-Verständnis für Münchner Unternehmen mit repräsentativen Kommunikationsflächen.",
    services: coreServices,
    useCases: [
      "Boardrooms und hybride Meetingräume",
      "Showrooms und hochwertige Präsentationsflächen",
      "Healthcare- und Tech-Kommunikation",
      "Empfangsbereiche, Lobbys und Digital Signage",
    ],
    regionHighlights: ["Corporate", "Healthcare", "Tech", "Showrooms"],
    faq: createLocationFaqs("München"),
    cta: "AV-Projekt in München anfragen",
  },
];

export function getLocationBySlug(slug: string): LocationItem | undefined {
  return locations.find((location) => location.slug === slug);
}
