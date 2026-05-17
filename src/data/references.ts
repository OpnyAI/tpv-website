export type ProjectMetaItem = {
  label: string;
  value: string;
};

export type ReferenceContactPerson = {
  name: string;
  role: string;
  image?: string | null;
};

export type ReferenceSpecItem = {
  label: string;
  value: string;
  isPlaceholder?: boolean;
};

export type ReferenceImageSlot = {
  src: string | null;
  alt: string;
};

export type ReferenceFaqItem = {
  question: string;
  answer: string;
};

export type ReferenceCaseStudy = {
  client: string;
  heroLabel: string;
  heroSubtitle: string;
  heroImage: string | null;
  meta: ProjectMetaItem[];
  visionText: string;
  specsTitle: string;
  specs: ReferenceSpecItem[];
  processTitle: string;
  processTextTop: string;
  processImages: ReferenceImageSlot[];
  processTextBottom: string;
  resultTitle: string;
  resultText: string;
  resultVideo?: string | null;
  contactPerson: ReferenceContactPerson;
  faq: ReferenceFaqItem[];
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
  caseStudy: ReferenceCaseStudy;
};

const defaultContactPerson: ReferenceContactPerson = {
  name: "Heinrich Ohbolz",
  role: "Managing Director",
  image: null,
};

const commonFaq: ReferenceFaqItem[] = [
  {
    question: "Welche Medientechnik-Lösungen bietet TPV für Unternehmen an?",
    answer:
      "TPV plant und realisiert professionelle Medientechnik für Unternehmen, Hotels, Showrooms und Konferenzbereiche. Dazu gehören unter anderem LED-Walls, Videowalls, Digital Signage, AV-over-IP-Systeme, Konferenzraumtechnik, Steuerungslösungen, Content-Systeme und technische Projektbegleitung von der Planung bis zur Installation.",
  },
  {
    question: "Was kostet eine professionelle Medientechnik-Installation?",
    answer:
      "Die Kosten hängen stark von Raumgröße, Technikumfang, baulichen Anforderungen, Display- oder LED-Wall-Größe, Signalführung, Steuerung und gewünschtem Servicelevel ab. Eine belastbare Einschätzung ist erst nach einer Analyse der Anforderungen und der technischen Rahmenbedingungen möglich. TPV erstellt dafür eine projektbezogene Kalkulation.",
  },
  {
    question: "Wie läuft die Planung einer AV- oder Medientechnik-Lösung ab?",
    answer:
      "Am Anfang stehen Bedarfsermittlung, technische Bestandsaufnahme und Abstimmung mit den baulichen Gegebenheiten. Danach folgen Konzept, Systemplanung, Schnittstellenklärung, Auswahl der passenden Komponenten, Installation, Inbetriebnahme und Einweisung. Ziel ist eine Lösung, die technisch stabil funktioniert und sich optisch sauber in die Umgebung integriert.",
  },
  {
    question: "Was ist bei einer LED-Wand oder Videowall wichtig?",
    answer:
      "Wichtige Faktoren sind Pixelpitch, Betrachtungsabstand, Helligkeit, Auflösung, Kontrast, Signalverarbeitung, Montageart, Wartbarkeit und Content-Anforderungen. Zusätzlich muss die LED-Wand baulich sauber integriert werden, damit Technik, Design und Nutzung im Alltag zusammenpassen.",
  },
  {
    question:
      "Welche Medientechnik eignet sich für Konferenzräume und Besprechungsräume?",
    answer:
      "Für Konferenzräume eignen sich je nach Nutzung Displays oder LED-Walls, Kameras, Mikrofone, Lautsprecher, drahtlose Präsentationssysteme, Raumsteuerung und Videokonferenztechnik. Entscheidend ist, dass Ton, Bild, Bedienung und Raumakustik zusammen geplant werden, damit Meetings ohne technische Hürden funktionieren.",
  },
];

function imageSlot(src: string | null, alt: string): ReferenceImageSlot {
  return { src, alt };
}

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
    seoTitle: "Futrue Referenz - LED-Wall Planung & Installation in München",
    seoDescription:
      "TPV plante und installierte zwei LED-Walls für Futrue in München - mit 4K UltraHD, AV over IP und starker visueller Wirkung.",
    canonicalPath: "/referenzen/futrue",
    ogImage: "/images/references/futrue.webp",
    vision:
      "Für das innovative Pharma- und Gesundheitsunternehmen Futrue GmbH entwickelte und installierte TPV ein visuelles Highlight-Konzept für den Eingangs- und Flurbereich.",
    approach:
      "Die Umsetzung begann mit einer detaillierten Bedarfsermittlung und einem technischen Audit.",
    result:
      "Das Ergebnis ist eine nahtlose architektonische Integration, bei der die digitale Fläche zu einem hochwertigen Designelement verschmilzt.",
    projectMeta: [
      { label: "Pixelpitch", value: "1,25mm" },
      { label: "Gesamtbreite", value: "12.5m" },
      { label: "Signalfluss", value: "AV Over IP" },
      { label: "Helligkeit", value: "800 nits" },
      { label: "Gesamtauflösung", value: "4K ULTRAHD" },
    ],
    contactPerson: defaultContactPerson,
    caseStudy: {
      client: "Futrue GmbH",
      heroLabel: "Case Study",
      heroSubtitle:
        "Planung und Installation zweier LED-Walls für eine starke visuelle Präsenz in München.",
      heroImage: "/images/references/futrue.webp",
      meta: [
        { label: "Jahr", value: "2026" },
        { label: "Standort", value: "MÜNCHEN" },
        { label: "Leistungen", value: "PLANUNG & INSTALLATION" },
        { label: "Technologie", value: "LED-WALL" },
      ],
      visionText:
        "Für das innovative Pharma- und Gesundheitsunternehmen Futrue GmbH entwickelte und installierte TPV ein visuelles Highlight-Konzept für den Eingangs- und Flurbereich. Kern des Projekts war die Installation von zwei individuell konfigurierten LED-Walls in Mosaik-Form (Abweichung vom Standard-16:9-Format), die bündig in die Wandstruktur integriert wurden. Ziel war es, eine immersive Plattform für das Branding und die Produktpräsentation zu schaffen, bei der die Technik vollständig hinter der Botschaft und dem digitalen Content zurücktritt.",
      specsTitle: "Technische Spezifikationen",
      specs: [
        { label: "Pixelpitch", value: "1,25mm" },
        { label: "Gesamtbreite", value: "12.5m" },
        { label: "Signalfluss", value: "AV Over IP" },
        { label: "Helligkeit", value: "800 nits" },
        { label: "Gesamtauflösung", value: "4K ULTRAHD" },
      ],
      processTitle: "Unsere Vorgehensweise",
      processTextTop:
        "Die Umsetzung begann mit einer detaillierten Bedarfsermittlung und einem technischen Audit, um die statischen Voraussetzungen für einen bündigen Wandeinbau zu schaffen. Mittels einer fotorealistischen 3D-Visualisierung in der Unreal Engine wurde die Wirkung der LED-Mosaike bereits vorab simuliert, wobei der Fokus auf einer nahtlosen architektonischen Integration lag. Dies ermöglichte eine präzise Planung, bei der die Technik optisch mit dem Raum verschmilzt und der Content als integraler Bestandteil der Architektur wahrgenommen wird.",
      processImages: [
        imageSlot("/images/case-studies/futrue/futrue-card.webp", "Futrue LED-Wall Detail"),
        imageSlot("/images/references/futrue.webp", "Futrue Referenzbild"),
        imageSlot(null, "Futrue Prozessbild ausstehend"),
        imageSlot(null, "Futrue Prozessbild ausstehend"),
        imageSlot(null, "Futrue Prozessbild ausstehend"),
        imageSlot(null, "Futrue Prozessbild ausstehend"),
      ],
      processTextBottom:
        "Technisch kamen zwei hochauflösende Absen-LED-Walls mit COB-Technologie und Novastar-Controllern zum Einsatz, die für exzellente Kontraste und höchste Farbtreue sorgen. Die Steuerung erfolgt über das cloudbasierte CMS Connect Signage, wodurch das Marketing-Team Inhalte ohne IT-Fachwissen flexibel verwalten kann. Den Abschluss bildete die präzise Abstimmung mit den Trockenbau-Gewerken, um durch minimale Spaltmaße einen kantenfreien Übergang zwischen Wand und Displayfläche zu garantieren.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Das Ergebnis ist eine nahtlose architektonische Integration, bei der die digitale Fläche durch präzises Schnittstellenmanagement zu einem hochwertigen Designelement verschmilzt. Dank robuster COB-Technik und intuitiver Cloud-Steuerung wird höchste Betriebssicherheit mit maximaler Flexibilität für das Marketing kombiniert. Das Resultat ist ein innovatives Markenerlebnis, das durch Millimeterarbeit und eine moderne Mosaik-Optik langfristig überzeugt.",
      resultVideo: null,
      contactPerson: defaultContactPerson,
      faq: [
        ...commonFaq,
        {
          question:
            "Wann lohnt sich eine individuelle LED-Wall im Unternehmensgebäude?",
          answer:
            "Eine individuelle LED-Wall lohnt sich, wenn digitale Inhalte dauerhaft sichtbar, hochwertig integriert und architektonisch sauber eingebunden werden sollen. Entscheidend sind Raumwirkung, Betrachtungsabstand, Content-Konzept und technische Wartbarkeit.",
        },
      ],
    },
  },
  {
    slug: "noxx",
    title: "Noxx",
    teaserTitle: "Symbiose aus High-End Medientechnik & modernem Design",
    description:
      "Planung, Installation und Support für ein visuell starkes Gastgewerbe-Konzept in Marburg.",
    location: "Marburg",
    year: "2024",
    services: ["Planung", "Installation", "Support"],
    sector: "Gastgewerbe",
    technology: "Medientechnik",
    cardImage: "/images/references/noxx.png",
    cardImageAlt: "Noxx Medientechnik Referenz",
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
    seoTitle: "Noxx Referenz - High-End Medientechnik für Gastgewerbe",
    seoDescription:
      "High-End Medientechnik für Noxx in Marburg: TPV verband moderne AV-Technik mit hochwertigem Raumdesign.",
    canonicalPath: "/referenzen/noxx",
    ogImage: "/images/references/noxx.png",
    vision:
      "Die Vision für das Hotel NOXX war die Schaffung einer unsichtbaren technologischen medientechnischen Infrastruktur.",
    approach:
      "Der Prozess startete mit einer fundierten Rohbau-Analyse und präziser Fachplanung.",
    result:
      "Das Ergebnis ist eine nahtlose Symbiose aus High-End-Technik und minimalistischem Design.",
    projectMeta: [
      { label: "Zimmeranzahl", value: "82" },
      { label: "Gesamtbreite", value: "12.5m" },
      { label: "Signalfluss", value: "AV Over IP" },
      { label: "Helligkeit", value: "800 nits" },
      { label: "Gesamtauflösung", value: "4K ULTRAHD" },
    ],
    contactPerson: defaultContactPerson,
    caseStudy: {
      client: "Noxx",
      heroLabel: "Case Study",
      heroSubtitle:
        "Planung, Installation und Support für ein visuell starkes Gastgewerbe-Konzept in Marburg.",
      heroImage: "/images/references/noxx.png",
      meta: [
        { label: "Jahr", value: "2024" },
        { label: "Standort", value: "MARBURG" },
        { label: "Leistungen", value: "PLANUNG / INSTALLATION / SUPPORT" },
        { label: "Sektor", value: "GASTGEWERBE" },
      ],
      visionText:
        "Die Vision für das Hotel NOXX war die Schaffung einer unsichtbaren technologischen medientechnischen Infrastruktur, die durch präzise Fachplanung nahtlos mit dem minimalistischen Design verschmilzt. Das Ergebnis ist eine Symbiose aus High-End-Funktionalität und architektonischer Ästhetik, die das Gästeerlebnis intuitiv aufwertet.",
      specsTitle: "Interesting Facts",
      specs: [
        { label: "Zimmeranzahl", value: "82" },
        { label: "Gesamtbreite", value: "12.5m" },
        { label: "Signalfluss", value: "AV Over IP" },
        { label: "Helligkeit", value: "800 nits" },
        { label: "Gesamtauflösung", value: "4K ULTRAHD" },
      ],
      processTitle: "Unsere Vorgehensweise",
      processTextTop:
        "Der Prozess startete mit einer fundierten Rohbau-Analyse, bei der bauliche Störfaktoren wie akustisch anspruchsvolle Materialien und Lichtverhältnisse frühzeitig identifiziert wurden. Durch den Abgleich der Ist-Maße mit den Bauplänen und die Erstellung detaillierter Systemskizzen wurde eine präzise Fachplanung sichergestellt, die die Medientechnik bereits in der Entwurfsphase unsichtbar in das minimalistische Design integrierte.",
      processImages: [
        imageSlot("/images/case-studies/noxx/noxx-card.png", "Noxx Prozessbild"),
        imageSlot("/images/case-studies/noxx/noxx-asset-01.png", "Noxx Detailbild 1"),
        imageSlot("/images/case-studies/noxx/noxx-asset-02.png", "Noxx Detailbild 2"),
        imageSlot("/images/case-studies/noxx/noxx-asset-03.jpg", "Noxx Detailbild 3"),
      ],
      processTextBottom:
        "In der Umsetzungsphase lag der Fokus auf einem aktiven Schnittstellenmanagement zwischen Architektur, Möbelbau und Marketing. Dies ermöglichte die technische Maßarbeit an kritischen Punkten - von bündigen Aufzug-Displays bis hin zu maßgeschneiderten User-Interfaces -, während eine enge Verzahnung der Gewerke sicherstellte, dass komplexe Systeme wie die trennbaren Konferenzzonen oder die unsichtbare Audiotechnik im Fitnessbereich perfekt mit der Inneneinrichtung harmonieren.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Das Ergebnis ist eine nahtlose Symbiose aus High-End-Technik und minimalistischem Design, bei der die AV-Infrastruktur durch millimetergenaue Fachplanung optisch vollständig im Interieur verschwindet. Dank eines präzisen Schnittstellenmanagements zwischen Architektur und Möbelbau wurden technische Highlights wie bündige Aufzug-Displays und unsichtbare Audiosysteme realisiert, die den innovativen Charakter des Lifestyle-Hotels unterstreichen. Das Resultat ist ein ganzheitliches, intuitives Gästeerlebnis, das durch maßgeschneiderte User-Interfaces und hochfunktionale Konferenzlösungen langfristig Maßstäbe setzt.",
      resultVideo: null,
      contactPerson: defaultContactPerson,
      faq: [
        ...commonFaq,
        {
          question: "Wie kann Medientechnik unsichtbar in ein Hotel integriert werden?",
          answer:
            "Unsichtbare Integration gelingt durch frühe Fachplanung, Abstimmung mit Architektur und Möbelbau sowie genaue Definition von Einbauorten, Signalwegen und Bedienlogik. Ziel ist, dass Gäste die Technik nutzen, ohne sie als störendes Element wahrzunehmen.",
        },
      ],
    },
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
    seoTitle: "Huhtamaki Referenz - Showroom Medientechnik für Markenwirkung",
    seoDescription:
      "TPV realisierte eine Showroom-Lösung für Huhtamaki in Ronsberg - geplant für starke Markenwirkung und professionelle Präsentation.",
    canonicalPath: "/referenzen/huhtamaki",
    ogImage: "/images/references/huhtamaki.webp",
    vision:
      "Die Vision für den Huhtamaki Flagship-Showroom war die Schaffung einer immersiven Markenwelt.",
    approach:
      "Die Umsetzung startete mit einer detaillierten Analyse im Rohbauzustand.",
    result:
      "Das Ergebnis ist ein hochmoderner Flagship-Showroom mit unsichtbarer High-End-Medientechnik.",
    projectMeta: [
      { label: "Pixelpitch", value: "1,25mm" },
      { label: "Gesamtbreite", value: "12.5m" },
      { label: "Signalfluss", value: "AV Over IP" },
      { label: "Helligkeit", value: "800 nits" },
      { label: "Gesamtauflösung", value: "4K ULTRAHD" },
    ],
    contactPerson: defaultContactPerson,
    caseStudy: {
      client: "Huhtamaki",
      heroLabel: "Case Study",
      heroSubtitle:
        "Planung und Installation einer Showroom-Lösung mit starker Markenwirkung in Ronsberg.",
      heroImage: "/images/references/huhtamaki.webp",
      meta: [
        { label: "Jahr", value: "2025" },
        { label: "Standort", value: "RONSBERG" },
        { label: "Leistungen", value: "PLANUNG / INSTALLATION" },
        { label: "Sektor", value: "CORPORATE" },
      ],
      visionText:
        "Die Vision für den Huhtamaki Flagship-Showroom war die Schaffung einer immersiven Markenwelt, in der High-End-Medientechnik als unsichtbarer Enabler fungiert. Durch eine ganzheitliche Systemintegration tritt die Hardware vollständig in den Hintergrund, um den uneingeschränkten Fokus auf die Inszenierung der Produkte und die Kernbotschaften des Weltmarktführers zu lenken. Das Ergebnis ist ein moderner Ausstellungsraum, der technologische Perfektion mit einem klaren, markenzentrierten Kundenerlebnis verbindet.",
      specsTitle: "Technische Spezifikationen",
      specs: [
        { label: "Pixelpitch", value: "1,25mm" },
        { label: "Gesamtbreite", value: "12.5m" },
        { label: "Signalfluss", value: "AV Over IP" },
        { label: "Helligkeit", value: "800 nits" },
        { label: "Gesamtauflösung", value: "4K ULTRAHD" },
      ],
      processTitle: "Unsere Vorgehensweise",
      processTextTop:
        "Die Umsetzung startete mit einer detaillierten Analyse im Rohbauzustand, um frühzeitig bauliche Störfaktoren zu identifizieren und die exakten Maße für die spätere Integration zu sichern. Ein wesentlicher Bestandteil dieser Phase war die enge Koordination mit dem Möbelbau, um präzise Aussparungen für eine vollkommen unsichtbare Technikintegration zu definieren und die Nutzerführung (Presenter-Journey) in einem immersiven Konzept festzulegen.",
      processImages: [
        imageSlot("/images/case-studies/huhtamaki/huhtamaki-card.webp", "Huhtamaki Showroom Detail"),
        imageSlot("/images/references/huhtamaki.webp", "Huhtamaki Referenzbild"),
        imageSlot(null, "Huhtamaki Prozessbild ausstehend"),
        imageSlot(null, "Huhtamaki Prozessbild ausstehend"),
        imageSlot(null, "Huhtamaki Prozessbild ausstehend"),
        imageSlot(null, "Huhtamaki Prozessbild ausstehend"),
      ],
      processTextBottom:
        "In der Ausführungsphase lag der Fokus auf der Implementierung einer Invisible Tech-Strategie, bei der hochmoderne AV-over-IP-Lösungen und interaktive 4K-Displays formschlüssig in maßgefertigte Möbel integriert wurden. Durch die konsequente Anwendung einer intuitiven 2-Klick-Logik bei der Raumsteuerung und eine engmaschige Verzahnung der Gewerke wurde sichergestellt, dass die komplexe Technologie im Hintergrund bleibt und eine fehlerfreie, emotionalisierende Produktpräsentation ermöglicht.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Das Ergebnis ist ein hochmoderner Flagship-Showroom, in dem High-End-Medientechnik durch millimetergenaue Möbelintegration und eine Clean Desk Policy vollständig unsichtbar als Enabler im Hintergrund agiert. Dank einer intuitiven 2-Klick-Logik und verlustfreier AV-over-IP-Signalübertragung entstand eine hybride Erlebniswelt, die eine fehlerfreie, emotionale Produktinszenierung ohne technische Hürden ermöglicht. Das Resultat ist eine perfekte Symbiose aus technischer Innovationskraft und architektonischer Ästhetik, die den uneingeschränkten Fokus auf die Markenbotschaft von Huhtamaki lenkt.",
      resultVideo: null,
      contactPerson: defaultContactPerson,
      faq: [
        ...commonFaq,
        {
          question: "Wie unterstützt Medientechnik einen Showroom oder Markenraum?",
          answer:
            "Medientechnik kann Produkte, Inhalte und Raumwirkung verbinden. Wichtig sind eine klare Nutzerführung, passende Displays oder LED-Flächen, zuverlässige Signaltechnik und eine Bedienung, die im Alltag ohne technische Hürden funktioniert.",
        },
      ],
    },
  },
  {
    slug: "orion",
    title: "Orion Pharma GmbH",
    teaserTitle: "Hybrid-Work: Mobil & flexibel",
    description:
      "Mobile Videokonferenzlösung, schlüsselfertig integriert für flexible Arbeitsumgebungen.",
    location: "Hamburg",
    year: "2025",
    services: ["Videokonferenz", "Systemintegration"],
    sector: "Pharma / Corporate",
    technology: "Videokonferenz",
    cardImage: "/images/references/orion.png",
    cardImageAlt: "Orion Videokonferenz Referenz",
    detailImages: ["/images/references/orion.png"],
    href: "/referenzen/orion",
    featured: false,
    seoTitle: "Orion Referenz - Videokonferenztechnik für Hybrid Work",
    seoDescription:
      "TPV integrierte eine Videokonferenzlösung für Orion Pharma in Hamburg - flexibel, schlüsselfertig und für moderne Zusammenarbeit ausgelegt.",
    canonicalPath: "/referenzen/orion",
    ogImage: "/images/references/orion.png",
    vision:
      "Platzhaltertext: Die finale Projektbeschreibung für Orion Pharma GmbH wird nachgeliefert.",
    approach:
      "Platzhaltertext: Die finale Beschreibung der Vorgehensweise wird nachgeliefert.",
    result:
      "Platzhaltertext: Die finale Ergebnisbeschreibung wird nachgeliefert.",
    projectMeta: [
      { label: "Lösung", value: "Videokonferenzsystem" },
      { label: "Standort", value: "Hamburg" },
      { label: "Status", value: "Detaildaten vom Kunden ausstehend" },
      { label: "Weitere technische Daten", value: "Platzhalter" },
    ],
    contactPerson: defaultContactPerson,
    caseStudy: {
      client: "Orion Pharma GmbH",
      heroLabel: "Case Study",
      heroSubtitle:
        "Mobile Videokonferenzlösung, schlüsselfertig integriert für flexible Arbeitsumgebungen.",
      heroImage: "/images/references/orion.png",
      meta: [
        { label: "Jahr", value: "Noch zu bestätigen" },
        { label: "Standort", value: "HAMBURG" },
        { label: "Leistungen", value: "VIDEOKONFERENZ / SYSTEMINTEGRATION" },
        { label: "Sektor", value: "PHARMA / CORPORATE" },
      ],
      visionText:
        "Platzhaltertext: Die finale Projektbeschreibung für Orion Pharma GmbH wird nachgeliefert. Ziel ist eine präzise Beschreibung der Ausgangslage, der medientechnischen Anforderungen und des konkreten Mehrwerts der umgesetzten Lösung.",
      specsTitle: "Projektdaten",
      specs: [
        { label: "Lösung", value: "Videokonferenzsystem" },
        { label: "Standort", value: "Hamburg" },
        {
          label: "Status",
          value: "Detaildaten vom Kunden ausstehend",
          isPlaceholder: true,
        },
        {
          label: "Weitere technische Daten",
          value: "Platzhalter",
          isPlaceholder: true,
        },
      ],
      processTitle: "Unsere Vorgehensweise",
      processTextTop:
        "Platzhaltertext: Die finale Beschreibung der Vorgehensweise wird nachgeliefert. Hier soll später beschrieben werden, wie TPV die Anforderungen aufgenommen, die Systemintegration geplant und die Lösung vor Ort umgesetzt hat.",
      processImages: [
        imageSlot("/images/references/orion.png", "Orion Referenzbild"),
        imageSlot(null, "Orion Prozessbild ausstehend"),
        imageSlot(null, "Orion Prozessbild ausstehend"),
        imageSlot(null, "Orion Prozessbild ausstehend"),
      ],
      processTextBottom:
        "Platzhaltertext: Ergänzung durch Kundenmaterial erforderlich. Hier werden später technische Details, Projektablauf, Abstimmungen mit Gewerken und Besonderheiten der Umsetzung ergänzt.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Platzhaltertext: Die finale Ergebnisbeschreibung wird nachgeliefert. Hier soll später beschrieben werden, welchen konkreten Mehrwert die umgesetzte Lösung für Meetings, Zusammenarbeit und Nutzerfreundlichkeit gebracht hat.",
      resultVideo: null,
      contactPerson: defaultContactPerson,
      faq: [
        ...commonFaq,
        {
          question:
            "Welche Vorteile bietet professionelle Videokonferenztechnik im Unternehmen?",
          answer:
            "Professionelle Videokonferenztechnik verbessert Bild, Ton, Bedienbarkeit und Zuverlässigkeit. Besonders in Unternehmen ist wichtig, dass Kameras, Mikrofone, Displays, Raumakustik und Steuerung als Gesamtsystem geplant werden.",
        },
      ],
    },
  },
  {
    slug: "relexa",
    title: "Relexa Hotels",
    teaserTitle: "Wayfinding und Digital Signage für Hotelbereiche",
    description:
      "Digitale Orientierung und Beschilderung für professionelle Hotelabläufe.",
    location: "Berlin",
    year: "Noch zu bestätigen",
    services: ["Wayfinding", "Digital Signage"],
    sector: "Hotel / Gastgewerbe",
    technology: "Digital Signage",
    cardImage: "/images/references/relexa.png",
    cardImageAlt: "Relexa Digital Signage Referenz",
    detailImages: ["/images/references/relexa.png"],
    href: "/referenzen/relexa",
    featured: false,
    seoTitle: "Relexa Referenz - Wayfinding und Digital Signage im Hotel",
    seoDescription:
      "TPV plante eine Wayfinding- und Digital-Signage-Lösung für Relexa Hotels mit Fokus auf Orientierung, Gästekomfort und digitale Kommunikation.",
    canonicalPath: "/referenzen/relexa",
    ogImage: "/images/references/relexa.png",
    vision:
      "Platzhaltertext: Die finale Projektbeschreibung für Relexa Hotels wird nachgeliefert.",
    approach:
      "Platzhaltertext: Die finale Beschreibung der Vorgehensweise wird nachgeliefert.",
    result:
      "Platzhaltertext: Die finale Ergebnisbeschreibung wird nachgeliefert.",
    projectMeta: [
      { label: "Lösung", value: "Wayfinding / Digital Signage" },
      { label: "Standort", value: "Berlin" },
      { label: "Status", value: "Detaildaten vom Kunden ausstehend" },
      { label: "Weitere technische Daten", value: "Platzhalter" },
    ],
    contactPerson: defaultContactPerson,
    caseStudy: {
      client: "Relexa Hotels",
      heroLabel: "Case Study",
      heroSubtitle:
        "Digitale Orientierung und Beschilderung für professionelle Hotelabläufe.",
      heroImage: "/images/references/relexa.png",
      meta: [
        { label: "Jahr", value: "Noch zu bestätigen" },
        { label: "Standort", value: "BERLIN" },
        { label: "Leistungen", value: "WAYFINDING / DIGITAL SIGNAGE" },
        { label: "Sektor", value: "HOTEL / GASTGEWERBE" },
      ],
      visionText:
        "Platzhaltertext: Die finale Projektbeschreibung für Relexa Hotels wird nachgeliefert. Ziel ist eine präzise Beschreibung der Ausgangslage, der eingesetzten Wayfinding- oder Digital-Signage-Lösung und des konkreten Nutzens für Gäste und Betreiber.",
      specsTitle: "Projektdaten",
      specs: [
        { label: "Lösung", value: "Wayfinding / Digital Signage" },
        { label: "Standort", value: "Berlin" },
        {
          label: "Status",
          value: "Detaildaten vom Kunden ausstehend",
          isPlaceholder: true,
        },
        {
          label: "Weitere technische Daten",
          value: "Platzhalter",
          isPlaceholder: true,
        },
      ],
      processTitle: "Unsere Vorgehensweise",
      processTextTop:
        "Platzhaltertext: Die finale Beschreibung der Vorgehensweise wird nachgeliefert. Hier soll später beschrieben werden, wie TPV die Orientierungslösung geplant, mit Bestandssystemen abgestimmt und für den Hotelbetrieb nutzbar gemacht hat.",
      processImages: [
        imageSlot("/images/references/relexa.png", "Relexa Referenzbild"),
        imageSlot(null, "Relexa Prozessbild ausstehend"),
        imageSlot(null, "Relexa Prozessbild ausstehend"),
        imageSlot(null, "Relexa Prozessbild ausstehend"),
      ],
      processTextBottom:
        "Platzhaltertext: Ergänzung durch Kundenmaterial erforderlich. Hier werden später technische Details, Projektablauf, Abstimmungen mit Gewerken und Besonderheiten der Umsetzung ergänzt.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Platzhaltertext: Die finale Ergebnisbeschreibung wird nachgeliefert. Hier soll später beschrieben werden, wie die Lösung Orientierung, Gästekomfort und digitale Kommunikation im Hotel verbessert hat.",
      resultVideo: null,
      contactPerson: defaultContactPerson,
      faq: [
        ...commonFaq,
        {
          question: "Wie hilft Digital Signage oder Wayfinding in Hotels?",
          answer:
            "Digital Signage und Wayfinding helfen Gästen bei Orientierung, Information und Veranstaltungsnavigation. Für Hotels ist wichtig, dass Inhalte einfach gepflegt werden können und die Anzeigen zuverlässig in den Betriebsablauf passen.",
        },
      ],
    },
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
