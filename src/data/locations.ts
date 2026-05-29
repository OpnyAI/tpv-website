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
    faq: [
      {
        question: "Welche AV-Lösungen bietet TPV in Hamburg an?",
        answer:
          "TPV unterstützt Unternehmen in Hamburg bei Konferenzraumtechnik, LED-Walls, Videowalls, Digital Signage, Präsentationssystemen, Steuerungstechnik und laufendem Support.",
      },
      {
        question: "Plant TPV auch Konferenzraumtechnik in Hamburg?",
        answer:
          "Ja. TPV plant Besprechungsräume, Boardrooms und hybride Meetingflächen inklusive Bild, Ton, Kamera, Bedienung und Systemintegration.",
      },
      {
        question: "Sind LED-Walls und Digital Signage in Hamburg möglich?",
        answer:
          "Ja. TPV entwickelt LED- und Digital-Signage-Lösungen für Empfang, Showroom, Eventfläche oder interne Kommunikation und stimmt Technik und Content auf die Nutzung ab.",
      },
      {
        question: "Übernimmt TPV auch Installation und Projektleitung?",
        answer:
          "Ja. TPV begleitet AV-Projekte von der Planung über Montage und Inbetriebnahme bis zu Einweisung, Wartung und Support.",
      },
    ],
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
    faq: [
      {
        question: "Welche AV-Lösungen bietet TPV in Frankfurt an?",
        answer:
          "TPV plant AV-Lösungen für Konferenzräume, Unternehmenszentralen, Empfangsbereiche, Digital Signage, LED-Walls und Videowalls in Frankfurt und Umgebung.",
      },
      {
        question: "Plant TPV auch Konferenzraumtechnik in Frankfurt?",
        answer:
          "Ja. TPV konzipiert Konferenzraumtechnik mit Displays oder LED-Flächen, Kameras, Mikrofonen, Lautsprechern, Steuerung und Videokonferenztechnik.",
      },
      {
        question: "Sind LED-Walls und Digital Signage in Frankfurt möglich?",
        answer:
          "Ja. TPV realisiert LED-Walls und Digital-Signage-Systeme für Präsentation, Orientierung, interne Kommunikation und Markeninszenierung.",
      },
      {
        question: "Übernimmt TPV auch Installation und Projektleitung?",
        answer:
          "Ja. TPV übernimmt die technische Projektleitung, koordiniert Schnittstellen und begleitet Installation, Inbetriebnahme und Support.",
      },
    ],
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
    faq: [
      {
        question: "Welche AV-Lösungen bietet TPV in Stuttgart an?",
        answer:
          "TPV bietet in Stuttgart AV-Planung, Konferenzraumtechnik, LED-Walls, Digital Signage, Showroom-Technik, Content und Support für Unternehmen.",
      },
      {
        question: "Plant TPV auch Konferenzraumtechnik in Stuttgart?",
        answer:
          "Ja. TPV plant Meetingräume, Projektbereiche und hybride Konferenzlösungen inklusive Bedienung, Signalführung, Ton und Bild.",
      },
      {
        question: "Sind LED-Walls und Digital Signage in Stuttgart möglich?",
        answer:
          "Ja. TPV realisiert LED-Walls und Digital Signage für Showrooms, Empfangsbereiche, interne Kommunikation und Produktpräsentationen.",
      },
      {
        question: "Übernimmt TPV auch Installation und Projektleitung?",
        answer:
          "Ja. TPV koordiniert Planung, Installation, Systemintegration, Inbetriebnahme und anschließenden Service.",
      },
    ],
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
    faq: [
      {
        question: "Welche AV-Lösungen bietet TPV in Nürnberg an?",
        answer:
          "TPV plant und realisiert in Nürnberg Konferenzraumtechnik, LED-Walls, Videowalls, Digital Signage, Steuerungstechnik, Content und Service.",
      },
      {
        question: "Plant TPV auch Konferenzraumtechnik in Nürnberg?",
        answer:
          "Ja. TPV plant Konferenz- und Besprechungsräume mit professioneller Bild-, Ton-, Kamera- und Bedienlogik.",
      },
      {
        question: "Sind LED-Walls und Digital Signage in Nürnberg möglich?",
        answer:
          "Ja. TPV setzt LED-Walls, Videowalls und Digital-Signage-Systeme für Empfang, Messe, Showroom und interne Kommunikation um.",
      },
      {
        question: "Übernimmt TPV auch Installation und Projektleitung?",
        answer:
          "Ja. TPV begleitet Projekte von der ersten technischen Abstimmung bis zur fertigen Inbetriebnahme und dem laufenden Support.",
      },
    ],
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
    faq: [
      {
        question: "Welche AV-Lösungen bietet TPV in München an?",
        answer:
          "TPV plant und realisiert in München Konferenzraumtechnik, LED-Walls, Digital Signage, Showroom-Technik, Videowalls, Content und Support.",
      },
      {
        question: "Plant TPV auch Konferenzraumtechnik in München?",
        answer:
          "Ja. TPV plant hochwertige Meeting- und Boardroom-Lösungen inklusive Displaytechnik, Audio, Kamera, Steuerung und Videokonferenzsystemen.",
      },
      {
        question: "Sind LED-Walls und Digital Signage in München möglich?",
        answer:
          "Ja. TPV realisiert LED-Walls und Digital Signage für Showrooms, Empfangsbereiche, Markenräume und interne Kommunikation.",
      },
      {
        question: "Übernimmt TPV auch Installation und Projektleitung?",
        answer:
          "Ja. TPV übernimmt Projektierung, technische Koordination, Installation, Inbetriebnahme, Einweisung und langfristige Betreuung.",
      },
    ],
    cta: "AV-Projekt in München anfragen",
  },
];

export function getLocationBySlug(slug: string): LocationItem | undefined {
  return locations.find((location) => location.slug === slug);
}
