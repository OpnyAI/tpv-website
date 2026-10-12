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
  objectPosition?: string;
  objectPositionMobile?: string;
};

export type ReferenceFaqItem = {
  question: string;
  answer: string;
};

export type ReferenceCaseStudy = {
  client: string;
  heroLabel: string;
  heroSubtitle: string;
  heroSubtitleLines?: string[];
  heroImage: string | null;
  heroImagePosition?: string;
  heroImagePositionMobile?: string;
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
  youtubeEmbedUrl?: string | null;
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

const futuraFaq: ReferenceFaqItem[] = [
  {
    question: "Wann lohnt sich eine individuelle LED-Wall im Unternehmensgebäude?",
    answer:
      "Eine individuelle LED-Wall lohnt sich, wenn Unternehmen Inhalte großflächig, hochwertig und flexibel präsentieren möchten. Besonders sinnvoll ist sie in Empfangsbereichen, Präsentationsflächen, Showrooms oder Unternehmenszentralen, in denen Technik auch repräsentativ wirken soll.",
  },
  {
    question: "Welche Vorteile bietet eine LED-Wall im Empfangs- oder Präsentationsbereich?",
    answer:
      "Eine LED-Wall schafft hohe Sichtbarkeit, starke Bildwirkung und flexible Bespielbarkeit. Unternehmen können Markeninhalte, Informationen, Präsentationen oder Eventinhalte zentral ausspielen und den Raum dadurch deutlich hochwertiger inszenieren.",
  },
  {
    question: "Worauf kommt es bei der Planung einer LED-Wall an?",
    answer:
      "Wichtig sind Pixelpitch, Helligkeit, Betrachtungsabstand, Montagefläche, Wartungszugang, Zuspieltechnik und Content-Format. Eine LED-Wall sollte immer auf Raum, Nutzung und Inhalte abgestimmt werden, damit sie im Alltag zuverlässig und wirkungsvoll funktioniert.",
  },
  {
    question: "Wie wichtig ist Content Design für eine LED-Wall?",
    answer:
      "Content Design ist entscheidend, weil eine LED-Wall nur so stark wirkt wie die Inhalte, die darauf laufen. Format, Lesbarkeit, Bewegung, Kontrast und Markenwirkung müssen zur Displaygröße und zum Betrachtungsabstand passen.",
  },
  {
    question: "Wie unterstützt TPV-AV den Betrieb nach der Installation?",
    answer:
      "TPV-AV kann Unternehmen auch nach der Installation mit technischer Betreuung, Anpassungen und Support unterstützen. So bleibt die LED-Wall langfristig nutzbar, aktuell und zuverlässig im Betrieb.",
  },
];

const nexxFaq: ReferenceFaqItem[] = [
  {
    question: "Wie kann Medientechnik unauffällig in ein Hotel integriert werden?",
    answer:
      "Medientechnik kann unauffällig integriert werden, wenn Geräte, Verkabelung, Steuerung und Lautsprecher frühzeitig in die Raumplanung einbezogen werden. Ziel ist eine Lösung, die technisch zuverlässig funktioniert, aber das Interior Design nicht stört.",
  },
  {
    question: "Welche AV-Technik eignet sich für Hotelbereiche?",
    answer:
      "Für Hotels eignen sich je nach Bereich Displays, Digital Signage, Beschallung, Präsentationstechnik, Steuerungssysteme und Konferenztechnik. Wichtig ist, dass Gäste und Mitarbeitende die Technik einfach nutzen können.",
  },
  {
    question: "Wie wichtig ist einfache Bedienung bei Hotel-Medientechnik?",
    answer:
      "Einfache Bedienung ist besonders wichtig, weil Hoteltechnik von unterschiedlichen Personen genutzt wird. Eine gute AV-Lösung reduziert Rückfragen, vermeidet Bedienfehler und sorgt für einen professionellen Eindruck bei Gästen und Veranstaltern.",
  },
  {
    question: "Wie lassen sich Bild, Ton und Design im Hotel aufeinander abstimmen?",
    answer:
      "Bild, Ton und Design sollten gemeinsam geplant werden. Die Technik muss zur Raumgröße, Akustik, Lichtstimmung und Gestaltung passen, damit sie hochwertig wirkt und zuverlässig genutzt werden kann.",
  },
  {
    question: "Unterstützt TPV-AV auch nach der Installation im Hotelbetrieb?",
    answer:
      "Ja. TPV-AV kann Hotels auch nach der Installation mit Support, Anpassungen und technischer Betreuung unterstützen. Das ist besonders wichtig, wenn Räume regelmäßig für Gäste, Meetings oder Veranstaltungen genutzt werden.",
  },
];

const revitaFaq: ReferenceFaqItem[] = [
  {
    question: "Wie hilft Digital Signage oder Wayfinding in Hotels?",
    answer:
      "Digital Signage und Wayfinding helfen Hotels, Gäste besser zu informieren und durch das Gebäude zu führen. Digitale Anzeigen können Wege, Veranstaltungen, Angebote oder Hinweise flexibel darstellen und bei Bedarf schnell aktualisiert werden.",
  },
  {
    question: "Welche Inhalte eignen sich für digitale Informationssysteme im Hotel?",
    answer:
      "Geeignet sind Begrüßungen, Veranstaltungsinformationen, Wegführung, Tagesprogramme, Angebote, Markeninhalte und Hinweise für Gäste. Wichtig ist, dass die Inhalte klar gestaltet und schnell verständlich sind.",
  },
  {
    question: "Warum ist zuverlässige Medientechnik im Gästebereich wichtig?",
    answer:
      "Zuverlässige Medientechnik ist wichtig, weil sie direkt auf den Eindruck der Gäste einzahlt. Wenn Anzeigen, Ton oder Wegführung nicht funktionieren, wirkt das unprofessionell und kann Abläufe im Hotel stören.",
  },
  {
    question: "Wie kann Digital Signage die Orientierung im Gebäude verbessern?",
    answer:
      "Digital Signage kann Orientierung verbessern, indem Informationen an passenden Stellen sichtbar ausgespielt werden. Dazu gehören digitale Wegweiser, Raumhinweise, Veranstaltungsanzeigen und aktuelle Informationen für Gäste oder Besucher.",
  },
  {
    question: "Übernimmt TPV-AV auch Content Creation für Digital Signage?",
    answer:
      "Ja. TPV-AV kann nicht nur die Technik planen und installieren, sondern auch Inhalte für digitale Informationssysteme gestalten. Dadurch passen Design, Botschaft und technische Darstellung besser zusammen.",
  },
];

const hutacellFaq: ReferenceFaqItem[] = [
  {
    question: "Wie unterstützt Medientechnik einen Showroom oder Markenraum?",
    answer:
      "Medientechnik unterstützt einen Showroom, indem Produkte, Markenbotschaften und Informationen emotionaler und sichtbarer inszeniert werden. Displays, Ton, Licht, Steuerung und Content können gemeinsam eine starke Raumwirkung erzeugen.",
  },
  {
    question: "Welche AV-Technik eignet sich für Produktpräsentationen?",
    answer:
      "Für Produktpräsentationen eignen sich Displays, LED-Walls, Touchpoints, Präsentationstechnik, Beschallung und steuerbare Medienflächen. Welche Lösung sinnvoll ist, hängt von Produkt, Raumgröße, Zielgruppe und gewünschter Wirkung ab.",
  },
  {
    question: "Warum ist die Kombination aus Technik und Content im Showroom wichtig?",
    answer:
      "Technik und Content müssen zusammenpassen, damit ein Showroom überzeugt. Hochwertige Displays oder LED-Walls entfalten ihre Wirkung erst dann vollständig, wenn Inhalte, Formate und Gestaltung darauf abgestimmt sind.",
  },
  {
    question: "Worauf kommt es bei Displays, Ton und Licht im Markenraum an?",
    answer:
      "Wichtig ist ein stimmiges Zusammenspiel aus Bildqualität, Ton, Licht, Bedienung und Raumgestaltung. Die Technik sollte die Marke unterstützen, ohne den Raum zu überladen oder die Nutzung kompliziert zu machen.",
  },
  {
    question: "Kann TPV-AV Showroom-Technik langfristig betreuen?",
    answer:
      "Ja. TPV-AV kann Showroom-Technik auch nach der Installation betreuen, anpassen und technisch unterstützen. Das ist sinnvoll, wenn Inhalte regelmäßig wechseln oder die Technik dauerhaft repräsentativ funktionieren muss.",
  },
];

const oreonFaq: ReferenceFaqItem[] = [
  {
    question: "Welche Vorteile bietet professionelle Videokonferenztechnik im Unternehmen?",
    answer:
      "Professionelle Videokonferenztechnik verbessert Bildqualität, Tonverständlichkeit und Bedienbarkeit in Meetings. Sie ist besonders wichtig, wenn hybride Besprechungen regelmäßig stattfinden und externe Teilnehmende zuverlässig eingebunden werden sollen.",
  },
  {
    question: "Was ist bei der Planung eines Videokonferenzraums wichtig?",
    answer:
      "Wichtig sind Raumgröße, Sitzordnung, Kameraausrichtung, Mikrofonierung, Lautsprecher, Beleuchtung, Displaygröße und einfache Bedienung. Nur wenn diese Faktoren zusammenpassen, entsteht ein professioneller Videokonferenzraum.",
  },
  {
    question: "Warum reichen Standard-Webcams für professionelle Meetingräume oft nicht aus?",
    answer:
      "Standard-Webcams sind meist für einzelne Personen gedacht. In Meetingräumen braucht es jedoch passende Kameras, Mikrofone und Lautsprecher, damit alle Teilnehmenden gut sichtbar und verständlich sind.",
  },
  {
    question: "Wie verbessert gute Konferenzraumtechnik hybride Meetings?",
    answer:
      "Gute Konferenzraumtechnik sorgt dafür, dass Personen vor Ort und remote gleichwertig teilnehmen können. Klare Sprache, stabile Bildübertragung und einfache Bedienung reduzieren Reibung im Meetingalltag.",
  },
  {
    question: "Übernimmt TPV-AV auch Installation und Support für Videokonferenztechnik?",
    answer:
      "Ja. TPV-AV übernimmt Planung, Installation, Inbetriebnahme und Support für Videokonferenztechnik. Dadurch können Unternehmen sicherstellen, dass Meetingräume zuverlässig funktionieren und langfristig betreut werden.",
  },
];

const lumoraFaq: ReferenceFaqItem[] = [
  {
    question: "Was macht einen guten Meetingraum für die Geschäftsführung aus?",
    answer:
      "Ein Executive-Meetingraum muss technisch zuverlässig und zugleich repräsentativ sein. Entscheidend sind eine einfache Bedienung, hochwertige Bild- und Tonqualität für hybride Meetings und eine Technik, die sich harmonisch in die Raumgestaltung einfügt.",
  },
  {
    question: "Warum ist Raumakustik für Videokonferenzen so wichtig?",
    answer:
      "Harte, glatte Flächen erzeugen Nachhall, der Sprache für Remote-Teilnehmende schwer verständlich macht. Akustisch wirksame Elemente wie Lamellenwände reduzieren den Hall und verbessern die Sprachverständlichkeit deutlich - auch bei sehr guter Mikrofontechnik.",
  },
  {
    question: "Kann ein Display direkt an einer Akustik- oder Holzwand montiert werden?",
    answer:
      "Ja, wenn die Unterkonstruktion dafür ausgelegt ist. Wir verstärken die Tragkonstruktion gezielt im Bereich der Displayhalterung und planen Kabelwege, Steckdosen und Ausschnitte von Anfang an mit ein.",
  },
  {
    question: "Was ist ein All-in-One MeetingBoard?",
    answer:
      "Ein MeetingBoard vereint Touchdisplay, Kamera, Mikrofone und Lautsprecher in einem Gerät. Es unterstützt gängige Plattformen wie Microsoft Teams oder Zoom und eignet sich besonders für kleine und mittlere Besprechungsräume mit wenig Installationsaufwand.",
  },
  {
    question: "Übernimmt TPV-AV auch Gewerke wie Holz- und Innenausbau?",
    answer:
      "Ja. Gemeinsam mit erfahrenen Partnern koordinieren wir angrenzende Gewerke wie Akustikwände, Möbelintegration oder Elektroarbeiten. So erhalten Kunden einen Raum aus einer Hand - von der Planung bis zur Abnahme.",
  },
];

function imageSlot(
  src: string | null,
  alt: string,
  options: Pick<
    ReferenceImageSlot,
    "objectPosition" | "objectPositionMobile"
  > = {},
): ReferenceImageSlot {
  return { src, alt, ...options };
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

const futuraHeroImage =
  "/images/case-studies/futura/01_Titelbild/futura-hero.png";
const futuraProcessImages = [
  imageSlot(
    "/images/case-studies/futura/02_Vorgehensweise/futura-vorgehensweise-01.png",
    "Futura Vorgehensweise 1",
  ),
  imageSlot(
    "/images/case-studies/futura/02_Vorgehensweise/futura-vorgehensweise-02.jpg",
    "Futura Vorgehensweise 2",
  ),
  imageSlot(
    "/images/case-studies/futura/02_Vorgehensweise/futura-vorgehensweise-03.jpg",
    "Futura Vorgehensweise 3",
  ),
  imageSlot(
    "/images/case-studies/futura/02_Vorgehensweise/futura-vorgehensweise-04.jpg",
    "Futura Vorgehensweise 4",
  ),
  imageSlot(
    "/images/case-studies/futura/02_Vorgehensweise/futura-vorgehensweise-05.png",
    "Futura Vorgehensweise 5",
  ),
  imageSlot(
    "/images/case-studies/futura/02_Vorgehensweise/futura-vorgehensweise-06.png",
    "Futura Vorgehensweise 6",
  ),
];

const nexxHeroImage =
  "/images/case-studies/nexx/01_Titelseite/nexx-hero.png";
const nexxProcessImages = [
  imageSlot(
    "/images/case-studies/nexx/02_Vorgehensweise/01.png",
    "Nexx Vorgehensweise 1",
  ),
  imageSlot(
    "/images/case-studies/nexx/02_Vorgehensweise/02.png",
    "Nexx Vorgehensweise 2",
  ),
  imageSlot(
    "/images/case-studies/nexx/02_Vorgehensweise/03.jpg",
    "Nexx Vorgehensweise 3",
  ),
  imageSlot(
    "/images/case-studies/nexx/02_Vorgehensweise/04.jpg",
    "Nexx Vorgehensweise 4",
  ),
  imageSlot(
    "/images/case-studies/nexx/02_Vorgehensweise/05.jpeg",
    "Nexx Vorgehensweise 5",
  ),
  imageSlot(
    "/images/case-studies/nexx/02_Vorgehensweise/06.png",
    "Nexx Vorgehensweise 6",
  ),
];

const hutacellHeroImage =
  "/images/case-studies/hutacell/01_Titelbild/hutacell-hero-optimized.jpg";
const hutacellProcessImages = [
  imageSlot(
    "/images/case-studies/hutacell/02_Vorgehensweise/hutacell-vorgehensweise-01.jpg",
    "Hutacell Vorgehensweise 1",
  ),
  imageSlot(
    "/images/case-studies/hutacell/02_Vorgehensweise/hutacell-vorgehensweise-02.jpg",
    "Hutacell Vorgehensweise 2",
  ),
  imageSlot(
    "/images/case-studies/hutacell/02_Vorgehensweise/hutacell-vorgehensweise-03.jpg",
    "Hutacell Vorgehensweise 3",
  ),
  imageSlot(
    "/images/case-studies/hutacell/02_Vorgehensweise/hutacell-vorgehensweise-04.jpg",
    "Hutacell Vorgehensweise 4",
  ),
  imageSlot(
    "/images/case-studies/hutacell/02_Vorgehensweise/hutacell-vorgehensweise-05.jpg",
    "Hutacell Vorgehensweise 5",
  ),
  imageSlot(
    "/images/case-studies/hutacell/02_Vorgehensweise/hutacell-vorgehensweise-06.jpg",
    "Hutacell Vorgehensweise 6",
  ),
];

const oreonHeroImage =
  "/images/case-studies/oreon/01_Titelbild/oreon-hero.png";
const oreonProcessImages = [
  imageSlot(
    "/images/case-studies/oreon/02_Vorgehensweise/oreon-vorgehensweise-01.jpg",
    "Oreon Vorgehensweise 1",
  ),
  imageSlot(
    "/images/case-studies/oreon/02_Vorgehensweise/oreon-vorgehensweise-02.jpg",
    "Oreon Vorgehensweise 2",
  ),
  imageSlot(
    "/images/case-studies/oreon/02_Vorgehensweise/oreon-vorgehensweise-03.jpg",
    "Oreon Vorgehensweise 3",
  ),
  imageSlot(
    "/images/case-studies/oreon/02_Vorgehensweise/oreon-vorgehensweise-04.jpg",
    "Oreon Vorgehensweise 4",
  ),
  imageSlot(
    "/images/case-studies/oreon/02_Vorgehensweise/oreon-vorgehensweise-05.jpg",
    "Oreon Vorgehensweise 5",
  ),
  imageSlot(
    "/images/case-studies/oreon/02_Vorgehensweise/oreon-vorgehensweise-06.jpg",
    "Oreon Vorgehensweise 6",
  ),
];
const oreonResultImages = [
  imageSlot(
    "/images/case-studies/oreon/03_Ergebnis/oreon-result-01.jpg",
    "Oreon Ergebnis 1",
  ),
  imageSlot(
    "/images/case-studies/oreon/03_Ergebnis/oreon-result-02.jpg",
    "Oreon Ergebnis 2",
  ),
  imageSlot(
    "/images/case-studies/oreon/03_Ergebnis/oreon-result-03.jpg",
    "Oreon Ergebnis 3",
  ),
];

const revitaHeroImage =
  "/images/case-studies/revita/01_Titelseite/revita-hero.png";
const revitaProcessImages = [
  imageSlot(
    "/images/case-studies/revita/02_Vorgehensweise/1.png",
    "Revita Vorgehensweise 1",
    { objectPosition: "center 22%" },
  ),
  imageSlot(
    "/images/case-studies/revita/02_Vorgehensweise/2.png",
    "Revita Vorgehensweise 2",
  ),
];
const revitaResultImages = [
  imageSlot(
    "/images/case-studies/revita/01_Titelseite/revita-result-01.png",
    "Revita Titelbild 2",
  ),
];

const lumoraHeroImage =
  "/images/case-studies/lumora/01_Titelbild/lumora-hero.jpg";
const lumoraProcessImages = [
  imageSlot(
    "/images/case-studies/lumora/02_Vorgehensweise/lumora-vorgehensweise-01.jpg",
    "Lumora Vorgehensweise 1",
  ),
  imageSlot(
    "/images/case-studies/lumora/02_Vorgehensweise/lumora-vorgehensweise-02.jpg",
    "Lumora Vorgehensweise 2",
  ),
  imageSlot(
    "/images/case-studies/lumora/02_Vorgehensweise/lumora-vorgehensweise-03.jpg",
    "Lumora Vorgehensweise 3",
    { objectPosition: "center 58%" },
  ),
  imageSlot(
    "/images/case-studies/lumora/02_Vorgehensweise/lumora-vorgehensweise-04.jpg",
    "Lumora Vorgehensweise 4",
    { objectPosition: "center 44%" },
  ),
  imageSlot(
    "/images/case-studies/lumora/02_Vorgehensweise/lumora-vorgehensweise-05.jpg",
    "Lumora Vorgehensweise 5",
    { objectPosition: "center 46%" },
  ),
  imageSlot(
    "/images/case-studies/lumora/02_Vorgehensweise/lumora-vorgehensweise-06.jpg",
    "Lumora Vorgehensweise 6",
    { objectPosition: "center 54%" },
  ),
];

export const references: ReferenceItem[] = [
  {
    slug: "futura",
    title: "Futura",
    teaserTitle: "Pixel-Power im Doppelpack",
    description:
      "Planung und Installation zweier LED-Walls für eine starke visuelle Präsenz.",
    location: "München",
    year: "2026",
    services: ["Planung", "Installation"],
    sector: "Corporate",
    technology: "LED-Wall",
    cardImage: futuraHeroImage,
    cardImageAlt: "Futura LED-Wall Referenz",
    detailImages: [
      futuraHeroImage,
      ...futuraProcessImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
    ],
    href: "/referenzen/futura",
    featured: true,
    seoTitle: "Futura Referenz - LED-Wall Planung & Installation",
    seoDescription:
      "TPV plante und installierte zwei LED-Walls für Futura - mit 4K UltraHD, AV over IP und starker visueller Wirkung.",
    canonicalPath: "/referenzen/futura",
    ogImage: futuraHeroImage,
    vision:
      "Für das innovative Pharma- und Gesundheitsunternehmen Futura entwickelte und installierte TPV ein visuelles Highlight-Konzept für den Eingangs- und Flurbereich.",
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
      client: "Futura",
      heroLabel: "Case Study",
      heroSubtitle:
        "Planung und Installation zweier LED-Walls für eine starke visuelle Präsenz in München.",
      heroSubtitleLines: [
        "Planung und Installation zweier LED-Walls für eine starke",
        "visuelle Präsenz in München.",
      ],
      heroImage: futuraHeroImage,
      meta: [
        { label: "Leistungen", value: "PLANUNG & INSTALLATION" },
        { label: "Technologie", value: "LED-WALL" },
      ],
      visionText:
        "Für das innovative Pharma- und Gesundheitsunternehmen Futura entwickelte und installierte TPV ein visuelles Highlight-Konzept für den Eingangs- und Flurbereich. Kern des Projekts war die Installation von zwei individuell konfigurierten LED-Walls in Mosaik-Form (Abweichung vom Standard-16:9-Format), die bündig in die Wandstruktur integriert wurden. Ziel war es, eine immersive Plattform für das Branding und die Produktpräsentation zu schaffen, bei der die Technik vollständig hinter der Botschaft und dem digitalen Content zurücktritt.",
      specsTitle: "Projektdaten",
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
      processImages: futuraProcessImages,
      processTextBottom:
        "Technisch kamen zwei hochauflösende Absen-LED-Walls mit COB-Technologie und Novastar-Controllern zum Einsatz, die für exzellente Kontraste und höchste Farbtreue sorgen. Die Steuerung erfolgt über das cloudbasierte CMS Connect Signage, wodurch das Marketing-Team Inhalte ohne IT-Fachwissen flexibel verwalten kann. Den Abschluss bildete die präzise Abstimmung mit den Trockenbau-Gewerken, um durch minimale Spaltmaße einen kantenfreien Übergang zwischen Wand und Displayfläche zu garantieren.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Das Ergebnis ist eine nahtlose architektonische Integration, bei der die digitale Fläche durch präzises Schnittstellenmanagement zu einem hochwertigen Designelement verschmilzt. Dank robuster COB-Technik und intuitiver Cloud-Steuerung wird höchste Betriebssicherheit mit maximaler Flexibilität für das Marketing kombiniert. Das Resultat ist ein innovatives Markenerlebnis, das durch Millimeterarbeit und eine moderne Mosaik-Optik langfristig überzeugt.",
      resultVideo: null,
      youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/2HahMntG268",
      contactPerson: heinrichObholz,
      faq: futuraFaq,
    },
  },
  {
    slug: "nexx",
    title: "Nexx",
    teaserTitle: "Symbiose aus High-End Medientechnik & modernem Design",
    description:
      "Planung, Installation und Support für ein visuell starkes Gastgewerbe-Konzept.",
    location: "Marburg",
    year: "2024",
    services: ["Planung", "Installation", "Support"],
    sector: "Gastgewerbe",
    technology: "Medientechnik",
    cardImage: nexxHeroImage,
    cardImageAlt: "Nexx Medientechnik Referenz",
    detailImages: [
      nexxHeroImage,
      ...nexxProcessImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
    ],
    href: "/referenzen/nexx",
    featured: true,
    seoTitle: "Nexx Referenz - High-End Medientechnik für Gastgewerbe",
    seoDescription:
      "High-End Medientechnik für Nexx: TPV verband moderne AV-Technik mit hochwertigem Raumdesign.",
    canonicalPath: "/referenzen/nexx",
    ogImage: nexxHeroImage,
    vision:
      "Die Vision für das Hotel Nexx war die Schaffung einer unsichtbaren technologischen medientechnischen Infrastruktur.",
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
      client: "Nexx",
      heroLabel: "Case Study",
      heroSubtitle:
        "Ganzheitliche AV-Infrastruktur für 82 Zimmer und multifunktionale Eventflächen",
      heroSubtitleLines: [
        "Ganzheitliche AV-Infrastruktur für 82 Zimmer und",
        "multifunktionale Eventflächen",
      ],
      heroImage: nexxHeroImage,
      meta: [
        { label: "Leistungen", value: "PLANUNG / INSTALLATION / SUPPORT" },
        { label: "Sektor", value: "GASTGEWERBE" },
      ],
      visionText:
        "Die Vision für das Projekt Nexx war die Schaffung einer unsichtbaren medientechnischen Infrastruktur, die durch präzise Fachplanung nahtlos mit dem minimalistischen Raumdesign verschmilzt. Das Ergebnis ist eine Symbiose aus High-End-Funktionalität und architektonischer Ästhetik, die das Gästeerlebnis intuitiv aufwertet.",
      specsTitle: "Projektdaten",
      specs: [
        { label: "ZIMMERINFRASTRUKTUR", value: "82 Smart TV'S" },
        { label: "KONFERENZRAUMANZAHL", value: "4 (flexibel koppelbar)" },
        {
          label: "SIGNALMANAGEMENT",
          value: "Wireless & Bodentank Back-Up",
        },
        { label: "ZENTRALE STEUERUNG", value: "4 Crestron Touchpanels" },
        { label: "AUDIO INTEGRATION", value: "Unsichtbarer Deckeneinbau" },
      ],
      processTitle: "Unsere Vorgehensweise",
      processTextTop:
        "Der Prozess startete mit einer fundierten Rohbau-Analyse, bei der bauliche Störfaktoren wie akustisch anspruchsvolle Materialien und Lichtverhältnisse frühzeitig identifiziert wurden. Durch den Abgleich der Ist-Maße mit den Bauplänen und die Erstellung detaillierter Systemskizzen wurde eine präzise Fachplanung sichergestellt, die die Medientechnik bereits in der Entwurfsphase unsichtbar in das minimalistische Design integrierte.",
      processImages: nexxProcessImages,
      processTextBottom:
        "In der Umsetzungsphase lag der Fokus auf einem aktiven Schnittstellenmanagement zwischen Architektur, Möbelbau und Marketing. Dies ermöglichte die technische Maßarbeit an kritischen Punkten - von bündigen Aufzug-Displays bis hin zu maßgeschneiderten User-Interfaces -, während eine enge Verzahnung der Gewerke sicherstellte, dass komplexe Systeme wie die trennbaren Konferenzzonen oder die unsichtbare Audiotechnik im Fitnessbereich perfekt mit der Inneneinrichtung harmonieren.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Das Ergebnis ist eine nahtlose Symbiose aus High-End-Technik und minimalistischem Design, bei der die AV-Infrastruktur durch millimetergenaue Fachplanung optisch vollständig im Interieur verschwindet. Dank eines präzisen Schnittstellenmanagements zwischen Architektur und Möbelbau wurden technische Highlights wie bündige Aufzug-Displays und unsichtbare Audiosysteme realisiert, die den innovativen Charakter des Lifestyle-Hotels unterstreichen. Das Resultat ist ein ganzheitliches, intuitives Gästeerlebnis, das durch maßgeschneiderte User-Interfaces und hochfunktionale Konferenzlösungen langfristig Maßstäbe setzt.",
      resultVideo: null,
      youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/Gl7_PJJTNLU",
      contactPerson: heinrichObholz,
      faq: nexxFaq,
    },
  },
  {
    slug: "hutacell",
    title: "Hutacell",
    teaserTitle: "Innovativer Showroom für maximale Markenwirkung",
    description:
      "Planung und Installation einer Showroom-Lösung mit starker Markenwirkung.",
    location: "Ronsberg",
    year: "2025",
    services: ["Planung", "Installation"],
    sector: "Corporate",
    technology: "Showroom",
    cardImage: hutacellHeroImage,
    cardImageAlt: "Hutacell Showroom Referenz",
    detailImages: [
      hutacellHeroImage,
      ...hutacellProcessImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
    ],
    href: "/referenzen/hutacell",
    featured: true,
    seoTitle: "Hutacell Referenz - Showroom Medientechnik für Markenwirkung",
    seoDescription:
      "TPV realisierte eine Showroom-Lösung für Hutacell - geplant für starke Markenwirkung und professionelle Präsentation.",
    canonicalPath: "/referenzen/hutacell",
    ogImage: hutacellHeroImage,
    vision:
      "Die Vision für den Hutacell Flagship-Showroom war die Schaffung einer immersiven Markenwelt.",
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
      client: "Hutacell",
      heroLabel: "Case Study",
      heroSubtitle:
        "Planung und Installation einer Showroom-Lösung mit starker Markenwirkung.",
      heroSubtitleLines: [
        "Planung und Installation einer Showroom-",
        "Lösung mit starker Markenwirkung",
      ],
      heroImage: hutacellHeroImage,
      meta: [
        { label: "Leistungen", value: "PLANUNG / INSTALLATION" },
        { label: "Sektor", value: "CORPORATE" },
      ],
      visionText:
        "Die Vision für den Hutacell Flagship-Showroom war die Schaffung einer immersiven Markenwelt, in der High-End-Medientechnik als unsichtbarer Enabler fungiert. Durch eine ganzheitliche Systemintegration tritt die Hardware vollständig in den Hintergrund, um den uneingeschränkten Fokus auf die Inszenierung der Produkte und die Kernbotschaften des Weltmarktführers zu lenken. Das Ergebnis ist ein moderner Ausstellungsraum, der technologische Perfektion mit einem klaren, markenzentrierten Kundenerlebnis verbindet.",
      specsTitle: "Projektdaten",
      specs: [
        { label: "INTERAKTIVES GROSSBILDSYSTEM", value: '86" 4K Touchdisplay' },
        {
          label: "KOLLABORATIONS-FLÄCHE",
          value: "Digitales Smart-Whiteboard",
        },
        { label: "SIGNAL-ROUTING", value: "Verlustfreies AV-over-IP" },
        { label: "BEDIENKONZEPT", value: "Intuitive 2-Klick-Logik" },
        {
          label: "ARCHITEKTONISCHE INTEGRATION",
          value: "Unsichtbarer Möbel Einbau",
        },
      ],
      processTitle: "Unsere Vorgehensweise",
      processTextTop:
        "Die Umsetzung startete mit einer detaillierten Analyse im Rohbauzustand, um frühzeitig bauliche Störfaktoren zu identifizieren und die exakten Maße für die spätere Integration zu sichern. Ein wesentlicher Bestandteil dieser Phase war die enge Koordination mit dem Möbelbau, um präzise Aussparungen für eine vollkommen unsichtbare Technikintegration zu definieren und die Nutzerführung (Presenter-Journey) in einem immersiven Konzept festzulegen.",
      processImages: hutacellProcessImages,
      processTextBottom:
        "In der Ausführungsphase lag der Fokus auf der Implementierung einer Invisible Tech-Strategie, bei der hochmoderne AV-over-IP-Lösungen und interaktive 4K-Displays formschlüssig in maßgefertigte Möbel integriert wurden. Durch die konsequente Anwendung einer intuitiven 2-Klick-Logik bei der Raumsteuerung und eine engmaschige Verzahnung der Gewerke wurde sichergestellt, dass die komplexe Technologie im Hintergrund bleibt und eine fehlerfreie, emotionalisierende Produktpräsentation ermöglicht.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Das Ergebnis ist ein hochmoderner Flagship-Showroom, in dem High-End-Medientechnik durch millimetergenaue Möbelintegration und eine Clean Desk Policy vollständig unsichtbar als Enabler im Hintergrund agiert. Dank einer intuitiven 2-Klick-Logik und verlustfreier AV-over-IP-Signalübertragung entstand eine hybride Erlebniswelt, die eine fehlerfreie, emotionale Produktinszenierung ohne technische Hürden ermöglicht. Das Resultat ist eine perfekte Symbiose aus technischer Innovationskraft und architektonischer Ästhetik, die den uneingeschränkten Fokus auf die Markenbotschaft von Hutacell lenkt.",
      resultVideo: null,
      youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/pbYotQFJX1s",
      contactPerson: fabianDering,
      faq: hutacellFaq,
    },
  },
  {
    slug: "oreon",
    title: "Oreon",
    teaserTitle: "Hybrid-Work: Mobil & flexibel",
    description: "Mobile Videokonferenzlösung schlüsselfertig integriert",
    location: "Hamburg",
    year: "2026",
    services: ["Planung", "Installation"],
    sector: "Corporate",
    technology: "Videokonferenz",
    cardImage: oreonHeroImage,
    cardImageAlt: "Oreon Videokonferenz Referenz",
    detailImages: [
      oreonHeroImage,
      ...oreonProcessImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
      ...oreonResultImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
    ].filter((src): src is string => Boolean(src)),
    href: "/referenzen/oreon",
    featured: false,
    seoTitle: "Oreon Referenz - Videokonferenztechnik für Hybrid Work",
    seoDescription:
      "TPV integrierte eine Videokonferenzlösung für Oreon - flexibel, schlüsselfertig und für moderne Zusammenarbeit ausgelegt.",
    canonicalPath: "/referenzen/oreon",
    ogImage: oreonHeroImage,
    vision:
      "Die Vision für das Projekt Oreon war die Schaffung einer barrierefreien, hybriden Arbeitsumgebung, die Teamarbeit räumlich völlig unabhängig macht.",
    approach:
      "In enger Kooperation mit der NCS GmbH startete das Projekt mit einer partnergestützten Bedarfsanalyse.",
    result:
      "Das Ergebnis ist ein hochflexibler, mobiler Konferenzbereich auf Rädern.",
    projectMeta: [
      { label: "Pixelpitch", value: "1,25mm" },
      { label: "Gesamtbreite", value: "12.5m" },
      { label: "Signalfluss", value: "AV Over IP" },
      { label: "Helligkeit", value: "800 nits" },
      { label: "Gesamtauflösung", value: "4K ULTRAHD" },
    ],
    contactPerson: gabrielZidar,
    caseStudy: {
      client: "Oreon",
      heroLabel: "Case Study",
      heroSubtitle: "Mobile Videokonferenzlösung schlüsselfertig integriert",
      heroImage: oreonHeroImage,
      meta: [
        { label: "Leistungen", value: "PLANUNG & INSTALLATION" },
        { label: "Sektor", value: "CORPORATE" },
      ],
      visionText:
        "Die Vision für das Projekt Oreon war die Schaffung einer barrierefreien, hybriden Arbeitsumgebung, die Teamarbeit räumlich völlig unabhängig macht. Durch ein hochflexibles, mobiles Collaboration-Design wurde ein Meetingraum auf Rädern realisiert, der starre Raumstrukturen aufbricht und spontane Videokonferenzen in jedem Bürobereich ermöglicht. Das Ziel war die perfekte Verschmelzung von Hardware-Exzellenz und maximaler Portabilität, um dem Team eine intuitive, kabellose Zusammenarbeit auf höchstem technologischen Niveau zu bieten.",
      specsTitle: "Projektdaten",
      specs: [
        { label: "COLLABORATION-DISPLAY", value: '75" 4K Touch-System' },
        { label: "AGILE RAUMNUTZUNG", value: "Mobiles 360°-Konferenz-Setup" },
        { label: "CONTENT-SHARING", value: "Latenzfreies Wireless-Casting" },
      ],
      processTitle: "Unsere Vorgehensweise",
      processTextTop:
        "In enger Kooperation mit der NCS GmbH startete das Projekt mit einer partnergestützten Bedarfsanalyse, um die logistischen Abläufe präzise zu koordinieren und die Anforderungen an maximale Flexibilität exakt zu definieren. Auf dieser Basis wurde die physische Fachplanung direkt in ein agiles Installationskonzept übersetzt, das die logistische Bereitstellung und Vorbereitung der Flächen für eine reibungslose Implementierung vor Ort sicherstellte.",
      processImages: oreonProcessImages,
      processTextBottom:
        "In der Umsetzungsphase lag der Fokus auf der präzisionsgenauen Installation und der schlüsselfertigen Konfiguration des mobilen Trägersystems samt 75-Zoll MeetingBoard. Durch die gezielte Implementierung kabelloser Audio-Komponenten und eines zentralen Touchpanels wurde eine kompromisslose „Plug & Play“-Infrastruktur geschaffen, die alle störenden Kabelwege eliminiert und eine sofortige, intuitive Inbetriebnahme im gesamten Büro ermöglicht.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Das Ergebnis ist ein hochflexibler, mobiler Konferenzbereich auf Rädern, der eine barrierefreie und standortunabhängige hybride Zusammenarbeit bei Oreon ermöglicht. Dank des formschön integrierten 75-Zoll-MeetingBoards und kabelloser Mikrofonie wurde eine kabelgebundene Infrastruktur am Boden komplett überflüssig, was maximale Portabilität im gesamten Office garantiert. Das Resultat ist eine schlüsselfertige „Plug & Play“-Lösung, die starre Raumstrukturen aufbricht und durch intuitive Bedienung schnelle, effiziente Ad-hoc-Meetings auf höchstem Niveau erlaubt.",
      resultVideo: null,
      youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/usBxs-dl_Go",
      contactPerson: gabrielZidar,
      faq: oreonFaq,
    },
  },
  {
    slug: "revita",
    title: "Revita",
    teaserTitle: "Wayfinding und Digital Signage",
    description: "Intuitive Besucherlenkung und digitale Gästekommunikation",
    location: "Berlin",
    year: "2025",
    services: ["Planung", "Installation", "Content-Creation"],
    sector: "Hospitality",
    technology: "Digital Signage",
    cardImage: revitaHeroImage,
    cardImageAlt: "Revita Digital Signage Referenz",
    detailImages: [
      revitaHeroImage,
      ...revitaProcessImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
      ...revitaResultImages.map((image) => image.src).filter((src): src is string => Boolean(src)),
    ],
    href: "/referenzen/revita",
    featured: false,
    seoTitle: "Revita Referenz - Wayfinding und Digital Signage im Hotel",
    seoDescription:
      "TPV plante eine Wayfinding- und Digital-Signage-Lösung für Revita mit Fokus auf Orientierung, Gästekomfort und digitale Kommunikation.",
    canonicalPath: "/referenzen/revita",
    ogImage: revitaHeroImage,
    vision:
      "Die Vision für Revita war die Schaffung eines intelligenten, mobilen Digital-Signage-Ökosystems.",
    approach:
      "Der Prozess begann mit einer umfassenden digitalen Bedarfsanalyse.",
    result:
      "Das Ergebnis ist ein hochflexibles, mobiles Digital-Signage-Ökosystem.",
    projectMeta: [
      { label: "Pixelpitch", value: "1,25mm" },
      { label: "Gesamtbreite", value: "12.5m" },
      { label: "Signalfluss", value: "AV Over IP" },
      { label: "Helligkeit", value: "800 nits" },
      { label: "Gesamtauflösung", value: "4K ULTRAHD" },
      { label: "Artikeliste", value: "Auf Anfrage" },
    ],
    contactPerson: fabianDering,
    caseStudy: {
      client: "Revita",
      heroLabel: "Case Study",
      heroSubtitle:
        "Intuitives Wayfinding & Digital Guest Communication",
      heroImage: revitaHeroImage,
      heroImagePosition: "center 34%",
      meta: [
        {
          label: "Leistungen",
          value: "PLANUNG / INSTALLATION / CONTENT-CREATION",
        },
        { label: "Sektor", value: "HOSPITALITY" },
      ],
      visionText:
        "Die Vision für das Projekt Revita war die Schaffung eines intelligenten, mobilen Digital-Signage-Ökosystems, das intuitives Wayfinding und dynamische Gästekommunikation im Herzen der Lobby vereint. Ziel war es, starre Leitsysteme durch eine hochflexible Plattform für Infotainment und Medien-Upselling zu ersetzen, die sich dank maßgeschneidertem UI/UX-Design nahtlos in die Markenidentität des Hotels einfügt. Diese Symbiose aus Mobilität und digitaler Besucherlenkung wertet das Gästeerlebnis nachhaltig auf und optimiert gleichzeitig die operativen Prozesse des Hotelmanagements im Alltag.",
      specsTitle: "Projektdaten",
      specs: [
        {
          label: "INTERAKTIVES GROSSBILDSYSTEM",
          value: "Mobiles Digital-Signage-Setup",
        },
        { label: "CONTENT-PLAYER", value: "COS 200 (für 24/7 Dauerbetrieb)" },
        {
          label: "CONTENT-MANAGEMENT",
          value: "Cloudbasiertes Connect Signage",
        },
        { label: "INTERFACE-DESIGN", value: "Custom CI-Brand Alignment" },
        {
          label: "CONTENT-STRATEGIE",
          value: "Dynamisches Routing & Infotainment",
        },
      ],
      processTitle: "Unsere Vorgehensweise",
      processTextTop:
        "Der Prozess begann mit einer umfassenden digitalen Bedarfsanalyse, um die bestehenden Abläufe des Hotel- und Veranstaltungsmanagements tiefgreifend zu verstehen und eine nahtlose Prozessintegration im Arbeitsalltag zu sichern. Darauf aufbauend konzipierte das Digital Media Team ein maßgeschneidertes UI/UX-Design im exakten Einklang mit den Brand Guidelines des Hotels, welches durch eine dynamische Content-Struktur eine intuitive Besucherlenkung und zielgerichtetes Marketing perfekt vereint.",
      processImages: revitaProcessImages,
      processTextBottom:
        "In der Umsetzungsphase folgte die technische Installation und Konfiguration einer mobilen Hardware-Einheit, bei welcher der Mediaplayer für einen ausfallsicheren 24/7-Betrieb diskret direkt hinter dem Screen verbaut wurde. Durch die Implementierung einer cloudbasierten, DSGVO-konformen Content-Management-Software wurde das System optimal für eine autarke Bedienung durch das Hotelteam vorbereitet, sodass Aktualisierungen von Eventdaten und Marketing-Slides im laufenden Betrieb flexibel und mit minimalem Aufwand umgesetzt werden können.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Das Ergebnis ist ein hochflexibles, mobiles Digital-Signage-Ökosystem, das als intelligentes Leitsystem und dynamische Kommunikationsplattform im Herzen der Lobby agiert. Dank des rollbaren Setups und der diskret verbauten Hardware lässt sich die Besucherlenkung agil an wechselnde Event-Situationen anpassen, während Konferenzteilnehmer und Gäste völlig autark zu ihren Zielen geführt werden. Das Resultat ist eine cloudbasierte, DSGVO-konforme Gesamtlösung, die durch ein maßgeschneidertes UI/UX-Design das Gästeerlebnis nachhaltig aufwertet und gleichzeitig durch gezieltes Infotainment neue Potenziale für das hoteleigene Medien-Upselling eröffnet.",
      resultVideo: null,
      youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/w2GJ1cus_3E",
      contactPerson: fabianDering,
      faq: revitaFaq,
    },
  },
  {
    slug: "lumora",
    title: "Lumora",
    teaserTitle: "Executive-Meetingraum in Echtholz",
    description:
      "Planung und Installation eines Executive-Meetingraums mit integrierter Echtholz-Akustikwand.",
    location: "Stuttgart",
    year: "2026",
    services: ["Planung", "Installation"],
    sector: "Corporate",
    technology: "Collaboration",
    cardImage: lumoraHeroImage,
    cardImageAlt: "Lumora Executive-Meetingraum Referenz",
    detailImages: [
      lumoraHeroImage,
      ...lumoraProcessImages
        .map((image) => image.src)
        .filter((src): src is string => Boolean(src)),
    ],
    href: "/referenzen/lumora",
    featured: true,
    seoTitle:
      "Lumora Referenz - Executive-Meetingraum mit Echtholz-Akustikwand",
    seoDescription:
      'TPV realisierte für Lumora einen Executive-Meetingraum - 65" MeetingBoard, kabelloses Sharing und Echtholz-Akustikwand aus einer Hand.',
    canonicalPath: "/referenzen/lumora",
    ogImage: lumoraHeroImage,
    vision:
      "Die Vision für Lumora war ein repräsentativer Executive-Meetingraum, in dem hochwertige Videokonferenztechnik und warme Echtholz-Architektur zu einer Einheit verschmelzen.",
    approach:
      "Das Projekt startete mit einem detaillierten Aufmaß vor Ort und einem integrierten Wandkonzept für Akustik, Display und verdeckte Leitungswege.",
    result:
      "Das Ergebnis ist ein repräsentativer Executive-Meetingraum mit intuitiver Kollaborationstechnik und hochwertiger Echtholz-Akustikwand.",
    projectMeta: [
      { label: "Collaboration-Display", value: '65" 4K All-in-One MeetingBoard' },
      { label: "Kamera & Audio", value: "KI-Triple-Kamera mit 16-Mikrofon-Array" },
      { label: "Content-Sharing", value: "Kabelloses 4K-Casting per Knopfdruck" },
      { label: "Tischanschluss", value: "Strom, HDMI & USB-C direkt am Tisch" },
      { label: "Raumakustik", value: "Echtholz-Akustiklamellenwand" },
    ],
    contactPerson: gabrielZidar,
    caseStudy: {
      client: "Lumora",
      heroLabel: "Case Study",
      heroSubtitle:
        "Executive-Meetingraum mit integrierter Echtholz-Akustikwand",
      heroImage: lumoraHeroImage,
      heroImagePosition: "center 52%",
      meta: [
        { label: "Leistungen", value: "PLANUNG / INSTALLATION" },
        { label: "Sektor", value: "CORPORATE" },
      ],
      visionText:
        "Die Vision für das Projekt Lumora war ein repräsentativer Executive-Meetingraum für die Geschäftsführung, in dem hochwertige Videokonferenztechnik und warme Echtholz-Architektur zu einer Einheit verschmelzen. Eine akustisch wirksame Lamellenwand sollte dabei zugleich als Designelement, als Träger für das Display und als unsichtbarer Kabelweg dienen. Das Ziel: hybride Meetings auf Führungsebene in höchster Qualität, ohne dass die Technik den Raum dominiert.",
      specsTitle: "Projektdaten",
      specs: [
        {
          label: "COLLABORATION-DISPLAY",
          value: '65" 4K All-in-One MeetingBoard',
        },
        {
          label: "KAMERA & AUDIO",
          value: "KI-Triple-Kamera mit 16-Mikrofon-Array",
        },
        {
          label: "CONTENT-SHARING",
          value: "Kabelloses 4K-Casting per Knopfdruck",
        },
        {
          label: "TISCHANSCHLUSS",
          value: "Strom, HDMI & USB-C direkt am Tisch",
        },
        { label: "RAUMAKUSTIK", value: "Echtholz-Akustiklamellenwand" },
      ],
      processTitle: "Unsere Vorgehensweise",
      processTextTop:
        "Das Projekt startete mit einem detaillierten Aufmaß vor Ort, um Raumgeometrie, Wandbeschaffenheit und Sitzposition exakt zu erfassen. Gemeinsam mit unserem Partner für Holz- und Innenausbau wurde daraus ein integriertes Wandkonzept entwickelt: Eine verstärkte Holzunterkonstruktion trägt sowohl die Akustiklamellen als auch die Heavy-Duty-Displayhalterung und nimmt alle Leitungen verdeckt auf.",
      processImages: lumoraProcessImages,
      processTextBottom:
        "In der Umsetzungsphase griffen Holzbau und Medientechnik nahtlos ineinander. Nach dem millimetergenauen Zuschnitt und der Montage der Lamellen wurde das 65-Zoll-MeetingBoard mit integrierter KI-Kamera passgenau in die Wand eingebunden, ergänzt um ein Tischanschlussfeld für Strom, HDMI und USB-C sowie einen Wireless-Presentation-Pod. Abschließend folgten Systemkonfiguration, Vollfunktionsprüfung und die protokollierte Abnahme durch unseren Projektleiter.",
      resultTitle: "Das Ergebnis",
      resultText:
        "Das Ergebnis ist ein repräsentativer Executive-Meetingraum, in dem modernste Kollaborationstechnik und natürliche Materialien zu einer ruhigen, hochwertigen Gesamtwirkung verschmelzen. Die Echtholz-Lamellenwand verbessert spürbar die Raumakustik, führt alle Kabel unsichtbar und rahmt das 65-Zoll-MeetingBoard wie ein architektonisches Element. Dank KI-gestütztem Kamera-Tracking, kabellosem Content-Sharing und Anschlüssen direkt am Tisch starten hybride Meetings der Geschäftsführung bei Lumora in Sekunden.",
      resultVideo: null,
      youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/0Rh-co3erqs",
      contactPerson: gabrielZidar,
      faq: lumoraFaq,
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
