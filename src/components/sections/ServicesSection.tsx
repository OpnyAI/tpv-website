"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { SERVICE_CLICK } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type FigmaService = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
};

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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = figmaServices[activeIndex];

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? figmaServices.length - 1 : current - 1,
    );
  }

  function goToNext() {
    setActiveIndex((current) =>
      current === figmaServices.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <section
      id="service"
      className="relative overflow-hidden px-[5vw] py-20 scroll-mt-28 md:scroll-mt-40 lg:pb-40 lg:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-cover bg-center opacity-[0.24] mix-blend-screen saturate-[0.62] brightness-[0.76]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(5,0,21,0.62)] via-[rgba(11,2,40,0.74)] to-[rgba(5,0,21,0.84)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-10rem] top-[38%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(255,54,95,0.16)_0%,rgba(163,0,255,0.09)_38%,transparent_72%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <h2 className="max-w-[1180px] text-[clamp(2.75rem,4vw,4.75rem)] font-medium leading-[1.1] tracking-[-0.025em] text-[#F7F4FF]">
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

        <div className="relative mt-14 lg:mt-16">
          <div className="relative flex snap-x gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0">
            {figmaServices.map((service, index) => {
              const isActiveSegment = index <= activeIndex;

              return (
                <div
                  key={service.number}
                  className="relative min-w-[17.5rem] snap-start lg:min-w-0"
                >
                  {index < figmaServices.length - 1 && (
                    <span
                      className={cn(
                        "pointer-events-none absolute left-[calc(100%+0.125rem)] top-1/2 z-0 hidden h-[2px] w-[calc(1.5rem-0.25rem)] -translate-y-1/2 lg:block",
                        isActiveSegment
                          ? "bg-tpv-accent shadow-[0_0_16px_rgba(255,54,95,0.42)]"
                          : "bg-white/65",
                      )}
                      aria-hidden="true"
                    />
                  )}
                  <button
                    type="button"
                    className={cn(
                      "relative z-10 h-full w-full rounded-[1.875rem] border px-6 py-5 text-left transition duration-300 lg:min-h-[104px] lg:px-7",
                      index === activeIndex
                        ? "border-tpv-accent/70 bg-[rgba(1,28,34,0.86)] text-tpv-accent shadow-[0_0_30px_rgba(255,54,95,0.14)]"
                        : "border-white/45 bg-[rgba(8,4,28,0.82)] text-white hover:border-tpv-accent/60",
                    )}
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={index === activeIndex}
                  >
                    <span className="block text-[clamp(1rem,1.1vw,1.125rem)] font-medium leading-none">
                      {service.number} {"//"}
                    </span>
                    <span className="mt-2 block text-[clamp(1.125rem,1.25vw,1.4375rem)] font-medium uppercase leading-[1.18] tracking-[0.025em]">
                      {service.title}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-14 lg:mt-16 lg:pr-20">
          <div
            className="absolute -bottom-9 -right-4 hidden h-[90%] w-[94%] rounded-[2.4rem] bg-[rgba(255,54,95,0.48)] lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -right-12 hidden h-[88%] w-[92%] rounded-[2.4rem] bg-[rgba(130,20,78,0.28)] lg:block"
            aria-hidden="true"
          />

          <div className="relative rounded-[2.4rem] bg-[linear-gradient(120deg,#FF365F_0%,rgba(255,54,95,0.72)_32%,#B84DFF_100%)] p-[2px]">
            <article
              key={activeService.number}
              className="relative min-h-[560px] overflow-hidden rounded-[2.3rem] bg-[rgba(3,18,35,0.86)] p-6 shadow-card backdrop-blur-xl transition duration-300 sm:p-8 lg:min-h-[590px] lg:p-16"
            >
              <div className="absolute right-6 top-6 z-30 flex gap-3 lg:right-16 lg:top-14">
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-tpv-accent/70 bg-transparent text-white transition hover:bg-white/[0.04] lg:h-16 lg:w-16"
                  onClick={goToPrevious}
                  aria-label="Vorheriger Leistungsbereich"
                >
                  <Icon name="chevron-left" size={30} />
                </button>
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-tpv-accent/70 bg-transparent text-white transition hover:bg-white/[0.04] lg:h-16 lg:w-16"
                  onClick={goToNext}
                  aria-label="Nächster Leistungsbereich"
                >
                  <Icon name="chevron-right" size={30} />
                </button>
              </div>

              <div className="grid min-h-[500px] gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-end">
                <div className="relative z-20 max-w-[720px] pt-24 lg:pt-0">
                  <h3 className="text-[clamp(2.125rem,3vw,4rem)] font-medium uppercase leading-[1.1] tracking-[-0.025em] text-tpv-accent">
                    {activeService.title}
                  </h3>
                  <p className="mt-7 max-w-[720px] text-[clamp(1.375rem,1.7vw,2.25rem)] font-normal leading-[1.26] text-[#F7F4FF]">
                    {activeService.description}
                  </p>

                  <ul className="mt-10 space-y-6">
                    {activeService.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-4 text-[clamp(1.125rem,1.25vw,1.8125rem)] leading-[1.35] text-white"
                      >
                        <span className="text-[1.65rem] font-medium leading-none text-tpv-accent">
                          ✓
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={activeService.href}
                    className="mt-11 inline-flex rounded-full bg-[linear-gradient(90deg,#FF5A66_0%,#FF365F_38%,#B84DFF_100%)] p-[2px] transition hover:brightness-110"
                    data-track-event={SERVICE_CLICK}
                    data-track-label={activeService.title}
                  >
                    <span className="rounded-full bg-[#0A0618]/55 px-7 py-3 text-[clamp(1rem,1.05vw,1.375rem)] font-medium leading-none text-white backdrop-blur-sm">
                      {activeService.cta}
                    </span>
                  </a>
                </div>

                <div className="relative z-10 min-h-[280px] self-end lg:min-h-[390px]">
                  <div className="absolute bottom-0 right-0 h-[min(72vw,330px)] w-full overflow-hidden rounded-[2rem] border border-tpv-accent/32 bg-tpv-deep shadow-[0_28px_80px_rgba(0,0,0,0.36)] lg:h-[clamp(300px,25vw,360px)] lg:w-[clamp(520px,42vw,640px)]">
                    <Image
                      src={activeService.image}
                      alt={activeService.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover saturate-[0.78] [object-position:center]"
                    />
                    <div className="absolute inset-0 bg-[rgba(3,18,35,0.42)]" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
