export type ProjectMetaItem = {
  label: string;
  value: string;
};

export type ReferenceContactPerson = {
  name: string;
  role: string;
  email: string;
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
  resultImage?: ReferenceImageSlot | null;
  resultImages?: ReferenceImageSlot[];
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

const heinrichObholz: ReferenceContactPerson = {
  name: "Heinrich Obholz",
  role: "Managing Director",
  email: "info@tpv-av.de",
  image: "/images/case-studies/Ansprechpartner/contact-heinrich-obholz.jpg",
};

const fabianDering: ReferenceContactPerson = {
  name: "Fabian Dering",
  role: "AV-Projektleiter",
  email: "technik@tpv-av.de",
  image: "/images/case-studies/Ansprechpartner/contact-fabian-dering.png",
};

const gabrielZidar: ReferenceContactPerson = {
  name: "Gabriel Zidar",
  role: "AV-Projektleiter",
  email: "technik@tpv-av.de",
  image: "/images/case-studies/Ansprechpartner/contact-gabriel-zidar.jpg",
};

const futrueHeroImage =
  "/images/case-studies/futrue/01_Titelbild/futrue-hero.png";
const futrueProcessImages = [
  imageSlot(
    "/images/case-studies/futrue/02_Vorgehensweise/futrue-process-01.png",
    "Futrue Vorgehensweise 1",
  ),
  imageSlot(
    "/images/case-studies/futrue/02_Vorgehensweise/futrue-process-02.jpg",
    "Futrue Vorgehensweise 2",
  ),
  imageSlot(
    "/images/case-studies/futrue/02_Vorgehensweise/futrue-process-03.jpg",
    "Futrue Vorgehensweise 3",
  ),
  imageSlot(
    "/images/case-studies/futrue/02_Vorgehensweise/futrue-process-04.jpg",
    "Futrue Vorgehensweise 4",
  ),
  imageSlot(
    "/images/case-studies/futrue/02_Vorgehensweise/futrue-process-05.png",
    "Futrue Vorgehensweise 5",
  ),
  imageSlot(
    "/images/case-studies/futrue/02_Vorgehensweise/futrue-process-06.png",
    "Futrue Vorgehensweise 6",
  ),
];

const noxxHeroImage =
  "/images/case-studies/noxx/01_Titelseite/noxx-hero.png";
const noxxProcessImages = [
  imageSlot(
    "/images/case-studies/noxx/02_Vorgehensweise/noxx-process-01.png",
    "Noxx Vorgehensweise 1",
  ),
  imageSlot(
    "/images/case-studies/noxx/02_Vorgehensweise/noxx-process-02.png",
    "Noxx Vorgehensweise 2",
  ),
  imageSlot(
    "/images/case-studies/noxx/02_Vorgehensweise/noxx-process-03.png",
    "Noxx Vorgehensweise 3",
  ),
  imageSlot(
    "/images/case-studies/noxx/02_Vorgehensweise/noxx-process-04.jpg",
    "Noxx Vorgehensweise 4",
  ),
];
const noxxResultImages = [
  imageSlot("/images/case-studies/noxx/noxx-result-01.jpg", "Noxx Ergebnis 1"),
  imageSlot(
    "/images/case-studies/noxx/noxx-result-02.jpg",
    "Noxx Ergebnis 2",
  ),
  imageSlot(
    "/images/case-studies/noxx/noxx-result-03.jpg",
    "Noxx Ergebnis 3",
  ),
];

const huhtamakiHeroImage =
  "/images/case-studies/huhtamaki/01_Titelbild/huhtamaki-hero.png";
const huhtamakiProcessImages = [
  imageSlot(
    "/images/case-studies/huhtamaki/02_Vorgehensweise/huhtamaki-process-01.jpg",
    "Huhtamaki Vorgehensweise 1",
  ),
  imageSlot(
    "/images/case-studies/huhtamaki/02_Vorgehensweise/huhtamaki-process-02.jpg",
    "Huhtamaki Vorgehensweise 2",
  ),
  imageSlot(
    "/images/case-studies/huhtamaki/02_Vorgehensweise/huhtamaki-process-03.jpg",
    "Huhtamaki Vorgehensweise 3",
  ),
  imageSlot(
    "/images/case-studies/huhtamaki/02_Vorgehensweise/huhtamaki-process-04.jpg",
    "Huhtamaki Vorgehensweise 4",
  ),
  imageSlot(
    "/images/case-studies/huhtamaki/02_Vorgehensweise/huhtamaki-process-05.jpg",
    "Huhtamaki Vorgehensweise 5",
  ),
  imageSlot(
    "/images/case-studies/huhtamaki/02_Vorgehensweise/huhtamaki-process-06.jpg",
    "Huhtamaki Vorgehensweise 6",
  ),
  imageSlot(
    "/images/case-studies/huhtamaki/02_Vorgehensweise/huhtamaki-process-07.jpg",
    "Huhtamaki Vorgehensweise 7",
  ),
];

const orionHeroImage =
  "/images/case-studies/orion/01_Titelbild/orion-hero.png";
const orionProcessImages = [
  imageSlot(
    "/images/case-studies/orion/02_Vorgehensweise/orion-process-01.jpg",
    "Orion Vorgehensweise 1",
  ),
  imageSlot(
    "/images/case-studies/orion/02_Vorgehensweise/orion-process-02.jpg",
    "Orion Vorgehensweise 2",
  ),
  imageSlot(
    "/images/case-studies/orion/02_Vorgehensweise/orion-process-03.jpg",
    "Orion Vorgehensweise 3",
  ),
  imageSlot(
    "/images/case-studies/orion/02_Vorgehensweise/orion-process-04.jpg",
    "Orion Vorgehensweise 4",
  ),
  imageSlot(
    "/images/case-studies/orion/02_Vorgehensweise/orion-process-05.jpg",
    "Orion Vorgehensweise 5",
  ),
];
const orionResultImages = [
  imageSlot(
    "/images/case-studies/orion/03_Ergebnis/orion-result-01.jpg",
    "Orion Ergebnis 1",
  ),
  imageSlot(
    "/images/case-studies/orion/03_Ergebnis/orion-result-02.jpg",
    "Orion Ergebnis 2",
  ),
  imageSlot(
    "/images/case-studies/orion/03_Ergebnis/orion-result-03.jpg",
    "Orion Ergebnis 3",
  ),
];

const relexaHeroImage =
  "/images/case-studies/relexa/01_Titelseite/relexa-hero.png";
const relexaProcessImages = [
  imageSlot(
    "/images/case-studies/relexa/02_Vorgehensweise/relexa-process-01.png",
    "Relexa Vorgehensweise 1",
  ),
  imageSlot(
    "/images/case-studies/relexa/02_Vorgehensweise/relexa-process-02.png",
    "Relexa Vorgehensweise 2",
  ),
];
const relexaResultImages = [
  imageSlot(
    "/images/case-studies/relexa/01_Titelseite/relexa-result-01.png",
    "Relexa Titelbild 2",
  ),
];

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
    cardImage: futrueHeroImage,
    cardImageAlt: "Futrue LED-Wall Referenz",
    detailImages: [
      futrueHeroImage,
      ...futrueProcessImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
    ],
    href: "/referenzen/futrue",
    featured: true,
    seoTitle: "Futrue Referenz - LED-Wall Planung & Installation in München",
    seoDescription:
      "TPV plante und installierte zwei LED-Walls für Futrue in München - mit 4K UltraHD, AV over IP und starker visueller Wirkung.",
    canonicalPath: "/referenzen/futrue",
    ogImage: futrueHeroImage,
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
    contactPerson: heinrichObholz,
    caseStudy: {
      client: "Futrue GmbH",
      heroLabel: "Case Study",
      heroSubtitle:
        "Planung und Installation zweier LED-Walls für eine starke visuelle Präsenz in München.",
      heroImage: futrueHeroImage,
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
      processImages: futrueProcessImages,
      processTextBottom:
        "Technisch kamen zwei hochauflösende Absen-LED-Walls mit COB-Technologie und Novastar-Controllern zum Einsatz, die für exzellente Kontraste und höchste Farbtreue sorgen. Die Steuerung erfolgt über das cloudbasierte CMS Connect Signage, wodurch das Marketing-Team Inhalte ohne IT-Fachwissen flexibel verwalten kann. Den Abschluss bildete die präzise Abstimmung mit den Trockenbau-Gewerken, um durch minimale Spaltmaße einen kantenfreien Übergang zwischen Wand und Displayfläche zu garantieren.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Das Ergebnis ist eine nahtlose architektonische Integration, bei der die digitale Fläche durch präzises Schnittstellenmanagement zu einem hochwertigen Designelement verschmilzt. Dank robuster COB-Technik und intuitiver Cloud-Steuerung wird höchste Betriebssicherheit mit maximaler Flexibilität für das Marketing kombiniert. Das Resultat ist ein innovatives Markenerlebnis, das durch Millimeterarbeit und eine moderne Mosaik-Optik langfristig überzeugt.",
      resultVideo: null,
      contactPerson: heinrichObholz,
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
    cardImage: noxxHeroImage,
    cardImageAlt: "Noxx Medientechnik Referenz",
    detailImages: [
      noxxHeroImage,
      ...noxxProcessImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
      ...noxxResultImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
    ],
    href: "/referenzen/noxx",
    featured: true,
    seoTitle: "Noxx Referenz - High-End Medientechnik für Gastgewerbe",
    seoDescription:
      "High-End Medientechnik für Noxx in Marburg: TPV verband moderne AV-Technik mit hochwertigem Raumdesign.",
    canonicalPath: "/referenzen/noxx",
    ogImage: noxxHeroImage,
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
    contactPerson: heinrichObholz,
    caseStudy: {
      client: "Noxx",
      heroLabel: "Case Study",
      heroSubtitle:
        "Planung, Installation und Support für ein visuell starkes Gastgewerbe-Konzept in Marburg.",
      heroImage: noxxHeroImage,
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
      processImages: noxxProcessImages,
      processTextBottom:
        "In der Umsetzungsphase lag der Fokus auf einem aktiven Schnittstellenmanagement zwischen Architektur, Möbelbau und Marketing. Dies ermöglichte die technische Maßarbeit an kritischen Punkten - von bündigen Aufzug-Displays bis hin zu maßgeschneiderten User-Interfaces -, während eine enge Verzahnung der Gewerke sicherstellte, dass komplexe Systeme wie die trennbaren Konferenzzonen oder die unsichtbare Audiotechnik im Fitnessbereich perfekt mit der Inneneinrichtung harmonieren.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Das Ergebnis ist eine nahtlose Symbiose aus High-End-Technik und minimalistischem Design, bei der die AV-Infrastruktur durch millimetergenaue Fachplanung optisch vollständig im Interieur verschwindet. Dank eines präzisen Schnittstellenmanagements zwischen Architektur und Möbelbau wurden technische Highlights wie bündige Aufzug-Displays und unsichtbare Audiosysteme realisiert, die den innovativen Charakter des Lifestyle-Hotels unterstreichen. Das Resultat ist ein ganzheitliches, intuitives Gästeerlebnis, das durch maßgeschneiderte User-Interfaces und hochfunktionale Konferenzlösungen langfristig Maßstäbe setzt.",
      resultVideo: null,
      resultImages: noxxResultImages,
      contactPerson: heinrichObholz,
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
    cardImage: huhtamakiHeroImage,
    cardImageAlt: "Huhtamaki Showroom Referenz",
    detailImages: [
      huhtamakiHeroImage,
      ...huhtamakiProcessImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
    ],
    href: "/referenzen/huhtamaki",
    featured: true,
    seoTitle: "Huhtamaki Referenz - Showroom Medientechnik für Markenwirkung",
    seoDescription:
      "TPV realisierte eine Showroom-Lösung für Huhtamaki in Ronsberg - geplant für starke Markenwirkung und professionelle Präsentation.",
    canonicalPath: "/referenzen/huhtamaki",
    ogImage: huhtamakiHeroImage,
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
    contactPerson: fabianDering,
    caseStudy: {
      client: "Huhtamaki",
      heroLabel: "Case Study",
      heroSubtitle:
        "Planung und Installation einer Showroom-Lösung mit starker Markenwirkung in Ronsberg.",
      heroImage: huhtamakiHeroImage,
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
      processImages: huhtamakiProcessImages,
      processTextBottom:
        "In der Ausführungsphase lag der Fokus auf der Implementierung einer Invisible Tech-Strategie, bei der hochmoderne AV-over-IP-Lösungen und interaktive 4K-Displays formschlüssig in maßgefertigte Möbel integriert wurden. Durch die konsequente Anwendung einer intuitiven 2-Klick-Logik bei der Raumsteuerung und eine engmaschige Verzahnung der Gewerke wurde sichergestellt, dass die komplexe Technologie im Hintergrund bleibt und eine fehlerfreie, emotionalisierende Produktpräsentation ermöglicht.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Das Ergebnis ist ein hochmoderner Flagship-Showroom, in dem High-End-Medientechnik durch millimetergenaue Möbelintegration und eine Clean Desk Policy vollständig unsichtbar als Enabler im Hintergrund agiert. Dank einer intuitiven 2-Klick-Logik und verlustfreier AV-over-IP-Signalübertragung entstand eine hybride Erlebniswelt, die eine fehlerfreie, emotionale Produktinszenierung ohne technische Hürden ermöglicht. Das Resultat ist eine perfekte Symbiose aus technischer Innovationskraft und architektonischer Ästhetik, die den uneingeschränkten Fokus auf die Markenbotschaft von Huhtamaki lenkt.",
      resultVideo: null,
      contactPerson: fabianDering,
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
    cardImage: orionHeroImage,
    cardImageAlt: "Orion Videokonferenz Referenz",
    detailImages: [
      orionHeroImage,
      ...orionProcessImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
      ...orionResultImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
    ].filter((src): src is string => Boolean(src)),
    href: "/referenzen/orion",
    featured: false,
    seoTitle: "Orion Referenz - Videokonferenztechnik für Hybrid Work",
    seoDescription:
      "TPV integrierte eine Videokonferenzlösung für Orion Pharma in Hamburg - flexibel, schlüsselfertig und für moderne Zusammenarbeit ausgelegt.",
    canonicalPath: "/referenzen/orion",
    ogImage: orionHeroImage,
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
    contactPerson: gabrielZidar,
    caseStudy: {
      client: "Orion Pharma GmbH",
      heroLabel: "Case Study",
      heroSubtitle:
        "Mobile Videokonferenzlösung, schlüsselfertig integriert für flexible Arbeitsumgebungen.",
      heroImage: orionHeroImage,
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
      processImages: orionProcessImages,
      processTextBottom:
        "Platzhaltertext: Ergänzung durch Kundenmaterial erforderlich. Hier werden später technische Details, Projektablauf, Abstimmungen mit Gewerken und Besonderheiten der Umsetzung ergänzt.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Platzhaltertext: Die finale Ergebnisbeschreibung wird nachgeliefert. Hier soll später beschrieben werden, welchen konkreten Mehrwert die umgesetzte Lösung für Meetings, Zusammenarbeit und Nutzerfreundlichkeit gebracht hat.",
      resultVideo: null,
      resultImages: orionResultImages,
      contactPerson: gabrielZidar,
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
    cardImage: relexaHeroImage,
    cardImageAlt: "Relexa Digital Signage Referenz",
    detailImages: [
      relexaHeroImage,
      ...relexaProcessImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
      ...relexaResultImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
    ],
    href: "/referenzen/relexa",
    featured: false,
    seoTitle: "Relexa Referenz - Wayfinding und Digital Signage im Hotel",
    seoDescription:
      "TPV plante eine Wayfinding- und Digital-Signage-Lösung für Relexa Hotels mit Fokus auf Orientierung, Gästekomfort und digitale Kommunikation.",
    canonicalPath: "/referenzen/relexa",
    ogImage: relexaHeroImage,
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
    contactPerson: fabianDering,
    caseStudy: {
      client: "Relexa Hotels",
      heroLabel: "Case Study",
      heroSubtitle:
        "Digitale Orientierung und Beschilderung für professionelle Hotelabläufe.",
      heroImage: relexaHeroImage,
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
      processImages: relexaProcessImages,
      processTextBottom:
        "Platzhaltertext: Ergänzung durch Kundenmaterial erforderlich. Hier werden später technische Details, Projektablauf, Abstimmungen mit Gewerken und Besonderheiten der Umsetzung ergänzt.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Platzhaltertext: Die finale Ergebnisbeschreibung wird nachgeliefert. Hier soll später beschrieben werden, wie die Lösung Orientierung, Gästekomfort und digitale Kommunikation im Hotel verbessert hat.",
      resultVideo: null,
      resultImages: relexaResultImages,
      contactPerson: fabianDering,
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
