export type ProjectMetaItem = {
  label: string;
  value: string;
};

export type ReferenceContactPerson = {
  name: string;
  role: string;
};

export type ReferenceItem = {
  slug: string;
  title: string;
  teaserTitle: string;
  description: string;
  location: string;
  year: string;
  services: string[];
  sector: string;
  technology: string;
  cardImage: string;
  cardImageAlt: string;
  detailImages: string[];
  href: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  ogImage: string;
  projectMeta: ProjectMetaItem[];
  vision: string;
  approach: string;
  result: string;
  contactPerson: ReferenceContactPerson;
};

const defaultContactPerson: ReferenceContactPerson = {
  name: "Heinrich Ohbolz",
  role: "Managing Director",
};

export const references: ReferenceItem[] = [
  {
    slug: "futrue",
    title: "Futrue GmbH",
    teaserTitle: "Pixel-Power im Doppelpack",
    description:
      "Planung und Installation zweier LED-Walls für eine starke visuelle Präsenz in München.",
    location: "München",
    year: "2026",
    services: ["Planung", "Installation"],
    sector: "Corporate",
    technology: "LED-Wall",
    cardImage: "/images/references/futrue.webp",
    cardImageAlt: "Futrue LED-Wall Referenz",
    detailImages: ["/images/case-studies/futrue/futrue-card.webp"],
    href: "/referenzen/futrue",
    featured: true,
    seoTitle: "Futrue Referenz – LED-Wall Planung & Installation in München",
    seoDescription:
      "TPV-AV plante und installierte zwei LED-Walls für Futrue in München – mit 4K UltraHD, AV over IP und starker visueller Wirkung.",
    canonicalPath: "/referenzen/futrue",
    ogImage: "/images/references/futrue.webp",
    vision:
      "Futrue wünschte sich eine hochwertige visuelle Lösung, die digitale Inhalte großflächig, brillant und markenprägend inszeniert.",
    approach:
      "TPV-AV entwickelte ein technisches Konzept für zwei LED-Walls, plante die Systemintegration und begleitete die Umsetzung bis zur betriebsbereiten Installation.",
    result:
      "Entstanden ist eine aufmerksamkeitsstarke LED-Wall-Lösung mit präzisem Bild, zuverlässigem Signalfluss und starker Wirkung im Raum.",
    projectMeta: [
      { label: "Pixelpitch", value: "1,25 mm" },
      { label: "Breite", value: "12,5 m" },
      { label: "Signalfluss", value: "AV over IP" },
      { label: "Helligkeit", value: "800 nits" },
      { label: "Auflösung", value: "4K UltraHD" },
    ],
    contactPerson: defaultContactPerson,
  },
  {
    slug: "noxx",
    title: "NOXX",
    teaserTitle: "Symbiose aus High-End Medientechnik & modernem Design",
    description:
      "Planung, Installation und Support für ein visuell starkes Gastgewerbe-Konzept in Marburg.",
    location: "Marburg",
    year: "2024",
    services: ["Planung", "Installation", "Support"],
    sector: "Gastgewerbe",
    technology: "Medientechnik",
    cardImage: "/images/references/noxx.png",
    cardImageAlt: "NOXX Medientechnik Referenz",
    detailImages: [
      "/images/case-studies/noxx/noxx-card.png",
      "/images/case-studies/noxx/noxx-asset-01.png",
      "/images/case-studies/noxx/noxx-asset-02.png",
      "/images/case-studies/noxx/noxx-asset-03.jpg",
      "/images/case-studies/noxx/noxx-asset-04.jpg",
      "/images/case-studies/noxx/noxx-asset-05.jpg",
    ],
    href: "/referenzen/noxx",
    featured: true,
    seoTitle: "NOXX Referenz – High-End Medientechnik für Gastgewerbe",
    seoDescription:
      "High-End Medientechnik für NOXX in Marburg: TPV-AV verband moderne AV-Technik mit hochwertigem Raumdesign.",
    canonicalPath: "/referenzen/noxx",
    ogImage: "/images/references/noxx.png",
    vision:
      "Für NOXX sollte Medientechnik nicht wie ein Fremdkörper wirken, sondern Teil des Raumgefühls werden: hochwertig, modern und atmosphärisch.",
    approach:
      "TPV-AV plante und integrierte die AV-Komponenten abgestimmt auf Design, Nutzung und räumliche Wirkung.",
    result:
      "Das Ergebnis ist eine moderne Umgebung, in der Technik, Lichtstimmung und Design zu einem stimmigen Erlebnis verschmelzen.",
    projectMeta: [
      { label: "Fokus", value: "High-End Medientechnik" },
      { label: "Umgebung", value: "Gastgewerbe" },
      { label: "Betreuung", value: "Planung, Installation, Support" },
    ],
    contactPerson: defaultContactPerson,
  },
  {
    slug: "huhtamaki",
    title: "Huhtamaki",
    teaserTitle: "Innovativer Showroom für maximale Markenwirkung",
    description:
      "Planung und Installation einer Showroom-Lösung mit starker Markenwirkung in Ronsberg.",
    location: "Ronsberg",
    year: "2025",
    services: ["Planung", "Installation"],
    sector: "Corporate",
    technology: "Showroom",
    cardImage: "/images/references/huhtamaki.webp",
    cardImageAlt: "Huhtamaki Showroom Referenz",
    detailImages: ["/images/case-studies/huhtamaki/huhtamaki-card.webp"],
    href: "/referenzen/huhtamaki",
    featured: true,
    seoTitle:
      "Huhtamaki Referenz – Showroom Medientechnik für Markenwirkung",
    seoDescription:
      "TPV-AV realisierte eine Showroom-Lösung für Huhtamaki in Ronsberg – geplant für starke Markenwirkung und professionelle Präsentation.",
    canonicalPath: "/referenzen/huhtamaki",
    ogImage: "/images/references/huhtamaki.webp",
    vision:
      "Huhtamaki benötigte einen Showroom, der Produkte und Markenbotschaften modern, hochwertig und überzeugend präsentiert.",
    approach:
      "TPV-AV entwickelte eine medientechnische Lösung, die Inhalte, Präsentationsflächen und räumliche Wirkung zusammenführt.",
    result:
      "Der Showroom schafft eine klare, professionelle Präsentationsumgebung mit hoher visueller Wirkung.",
    projectMeta: [
      { label: "Bereich", value: "Showroom" },
      { label: "Wirkung", value: "Markenpräsentation" },
      { label: "Umsetzung", value: "Planung & Installation" },
    ],
    contactPerson: defaultContactPerson,
  },
  {
    slug: "orion",
    title: "Orion",
    teaserTitle: "Hybrid-Work: Mobil & flexibel",
    description:
      "Mobile Videokonferenzlösung, schlüsselfertig integriert für flexible Arbeitsumgebungen.",
    location: "Hamburg",
    year: "2025",
    services: ["Planung", "Integration"],
    sector: "Corporate",
    technology: "Videokonferenz",
    cardImage: "/images/references/orion.png",
    cardImageAlt: "Orion Videokonferenz Referenz",
    detailImages: ["/images/references/orion.png"],
    href: "/referenzen/orion",
    featured: false,
    seoTitle:
      "Orion Referenz – Mobile Videokonferenzlösung für Hybrid Work",
    seoDescription:
      "TPV-AV integrierte eine mobile Videokonferenzlösung für Orion in Hamburg – flexibel, schlüsselfertig und für moderne Zusammenarbeit ausgelegt.",
    canonicalPath: "/referenzen/orion",
    ogImage: "/images/references/orion.png",
    vision:
      "Orion benötigte eine flexible Lösung für moderne Zusammenarbeit, die sich schnell in unterschiedliche Arbeitsumgebungen integrieren lässt.",
    approach:
      "TPV-AV plante eine mobile Videokonferenzlösung, die technisch zuverlässig, einfach bedienbar und schlüsselfertig integrierbar ist.",
    result:
      "Entstanden ist eine mobile Lösung für hybride Meetings, die flexible Zusammenarbeit unterstützt und technische Komplexität reduziert.",
    projectMeta: [
      { label: "Anwendung", value: "Mobile Videokonferenz" },
      { label: "Standort", value: "Hamburg" },
      { label: "Fokus", value: "Hybrid Work" },
    ],
    contactPerson: defaultContactPerson,
  },
  {
    slug: "relexa",
    title: "Relexa",
    teaserTitle: "Medientechnik für professionelle Betriebsabläufe",
    description:
      "AV-Lösung für professionelle Flächen und betriebliche Anforderungen.",
    location: "Deutschland",
    year: "2025",
    services: ["Planung", "Installation"],
    sector: "Hospitality",
    technology: "AV-Systeme",
    cardImage: "/images/references/relexa.png",
    cardImageAlt: "Relexa AV-Systeme Referenz",
    detailImages: ["/images/references/relexa.png"],
    href: "/referenzen/relexa",
    featured: false,
    seoTitle:
      "Relexa Referenz – AV-Systeme für Hospitality und professionelle Abläufe",
    seoDescription:
      "TPV-AV plante und installierte AV-Systeme für Relexa – mit Fokus auf zuverlässige Medientechnik für professionelle Betriebsabläufe.",
    canonicalPath: "/referenzen/relexa",
    ogImage: "/images/references/relexa.png",
    vision:
      "Relexa benötigte eine zuverlässige medientechnische Lösung, die sich nahtlos in bestehende betriebliche Abläufe einfügt.",
    approach:
      "TPV-AV entwickelte eine strukturierte AV-Lösung mit Fokus auf Alltagstauglichkeit, Bedienbarkeit und technische Stabilität.",
    result:
      "Die Umsetzung schafft eine professionelle medientechnische Grundlage für klare Kommunikation und zuverlässige Abläufe.",
    projectMeta: [
      { label: "Bereich", value: "Hospitality" },
      { label: "Fokus", value: "AV-Systeme" },
      { label: "Umsetzung", value: "Planung & Installation" },
    ],
    contactPerson: defaultContactPerson,
  },
];

export const featuredReferences = references.filter(
  (reference) => reference.featured,
);

export const caseStudyReferences = references.filter((reference) =>
  reference.href.startsWith("/referenzen/"),
);

export function getReferenceBySlug(slug: string): ReferenceItem | undefined {
  return references.find((reference) => reference.slug === slug);
}
