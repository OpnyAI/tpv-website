import { ServicesDesktopPanel, type FigmaService } from "@/components/sections/ServicesDesktopPanel";
import { ServicesMobilePanel } from "@/components/sections/ServicesMobilePanel";

const figmaServices: FigmaService[] = [
  {
    number: "01",
    title: "PROJEKTIERUNG & KALKULATION",
    description:
      "Wir planen Ihre Vision mit Ihnen gemeinsam. Mit präziser KI-Visualisierung, attraktiven Zahlungsmodellen und einem klaren Fahrplan für Ihren Erfolg.",
    bullets: [
      "Transparente Projektphasen",
      "Individuelle Zahlungsmodelle",
      "KI-gestützte Visualisierung",
    ],
    cta: "Jetzt Projekt starten",
    href: "mailto:info@tpv-av.de?subject=Projektanfrage%20TPV-AV",
    image: "/images/services/projecting-calculation.png",
    imageAlt: "Projektierung und Kalkulation",
  },
  {
    number: "02",
    title: "INSTALLATION & PROJEKTLEITUNG",
    description:
      "Technik ist nur so gut wie ihre Umsetzung. Unsere Experten installieren Ihre Systeme unsichtbar und zuverlässig, um Visionen in greifbare Realität zu verwandeln.",
    bullets: [
      "Ausführung nach Industrie-Standard",
      "Fehlerfreie Integration Policy",
      "Persönliche Einweisung",
    ],
    cta: "Montage-Termin anfragen",
    href: "mailto:info@tpv-av.de?subject=Anfrage%20Installation%20%26%20Projektleitung",
    image: "/images/services/installation-project-management.png",
    imageAlt: "Installation und Projektleitung",
  },
  {
    number: "03",
    title: "CONTENT CREATION & DESIGN",
    description:
      "Hardware ist nur die Hülle – wir liefern den Inhalt dazu. TPV gestaltet Content, der exakt auf Ihre Systeme abgestimmt ist, um Ihre Vision zu vollenden.",
    bullets: [
      "Maßgeschneiderter Content",
      "Storytelling mit Strategie",
      "Ganzheitliche Begleitung",
    ],
    cta: "Content-Konzept anfordern",
    href: "mailto:info@tpv-av.de?subject=Anfrage%20Content%20Creation%20%26%20Design",
    image: "/images/services/content-creation-design.png",
    imageAlt: "Content Creation und Design",
  },
  {
    number: "04",
    title: "PREMIUM SERVICE & SUPPORT",
    description:
      "Technik braucht Pflege. TPV sichert Ihre Investition durch maßgeschneiderten Support – für dauerhafte Funktion und Werterhalt.",
    bullets: [
      "Präventiver Wartungsservice",
      "Reaktionsschneller Support",
      "Lifecycle-Management",
    ],
    cta: "Support-Optionen entdecken",
    href: "mailto:info@tpv-av.de?subject=Anfrage%20Premium%20Service%20%26%20Support",
    image: "/images/services/premium-service-support.png",
    imageAlt: "Premium Service und Support",
  },
];

export function ServicesSection() {
  return (
    <section
      id="service"
      className="relative overflow-hidden px-[5vw] py-20 scroll-mt-48 md:scroll-mt-52 lg:scroll-mt-48 lg:pb-40 lg:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-cover bg-center opacity-[0.24] saturate-[0.62] brightness-[0.76] md:mix-blend-screen"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(5,0,21,0.62)] via-[rgba(11,2,40,0.74)] to-[rgba(5,0,21,0.84)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-10rem] top-[38%] hidden h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(255,54,95,0.16)_0%,rgba(163,0,255,0.09)_38%,transparent_72%)] blur-3xl md:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] min-w-0">
        <h2 className="mx-auto block max-w-[calc(100vw-2rem)] overflow-visible break-words px-2 text-center text-[clamp(2.05rem,8.5vw,3.45rem)] font-medium leading-[1.07] tracking-[-0.025em] text-[#F7F4FF] lg:hidden">
          <span className="block text-tpv-accent">
            Herausragende Ergebnisse
          </span>
          <span className="block">
            erfordern eine <span className="text-tpv-accent">klare</span>
          </span>
          <span className="block">
            <span className="text-tpv-accent">Struktur.</span> Unsere
          </span>
          <span className="block">Expertise basiert auf</span>
          <span className="block text-tpv-accent">vier</span>
          <span className="block">
            ineinandergreifenden
          </span>
          <span className="block text-tpv-accent">Leistungsbereichen.</span>
        </h2>

        <h2 className="hidden max-w-[1180px] text-left text-[clamp(2.75rem,4vw,4.75rem)] font-medium leading-[1.1] tracking-[-0.025em] text-[#F7F4FF] lg:block">
          <span className="text-tpv-accent">Herausragende Ergebnisse</span>{" "}
          erfordern
          <br />
          eine <span className="text-tpv-accent">klare Struktur</span>. Unsere
          Expertise
          <br />
          basiert auf <span className="text-tpv-accent">vier</span>{" "}
          ineinandergreifende
          <br />
          <span className="text-tpv-accent">Leistungsbereiche.</span>
        </h2>

        <ServicesMobilePanel services={figmaServices} />

        <div className="hidden lg:block">
          <ServicesDesktopPanel services={figmaServices} />
        </div>
      </div>
    </section>
  );
}
