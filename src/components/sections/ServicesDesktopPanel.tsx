"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { SERVICE_CLICK } from "@/lib/tracking";
import { cn } from "@/lib/utils";

export type FigmaService = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
};

export function ServicesDesktopPanel({
  services,
}: {
  services: FigmaService[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? services.length - 1 : current - 1,
    );
  }

  function goToNext() {
    setActiveIndex((current) =>
      current === services.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <>
      <div className="relative mt-14 lg:mt-16">
        <div className="relative flex snap-x gap-5 overflow-x-auto pb-4 touch-pan-x [-webkit-overflow-scrolling:touch] lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0">
          {services.map((service, index) => {
            const isActiveSegment = index <= activeIndex;

            return (
              <div
                key={service.number}
                className="relative min-w-[17.5rem] snap-start lg:min-w-0"
              >
                {index < services.length - 1 && (
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
          className="pointer-events-none absolute -bottom-9 -right-4 hidden h-[90%] w-[94%] rounded-[2.4rem] bg-[rgba(255,54,95,0.48)] lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-16 -right-12 hidden h-[88%] w-[92%] rounded-[2.4rem] bg-[rgba(130,20,78,0.28)] lg:block"
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

            <div className="grid min-h-[500px] min-w-0 gap-10 lg:min-h-[462px] lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:items-stretch">
              <div className="relative z-20 min-w-0 max-w-[720px] pt-24 lg:flex lg:flex-col lg:justify-end lg:pt-0">
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
                  className="mt-11 inline-flex w-fit max-w-max self-start rounded-full bg-[linear-gradient(90deg,#FF5A66_0%,#FF365F_38%,#B84DFF_100%)] p-[2px] transition hover:brightness-110"
                  data-track-event={SERVICE_CLICK}
                  data-track-label={activeService.title}
                >
                  <span className="rounded-full bg-[#0A0618]/55 px-7 py-3 text-[clamp(1rem,1.05vw,1.375rem)] font-medium leading-none text-white backdrop-blur-sm">
                    {activeService.cta}
                  </span>
                </a>
              </div>

              <div className="relative z-10 flex min-h-[280px] min-w-0 items-end justify-end lg:min-h-[390px] lg:self-end">
                <div className="relative h-[min(72vw,330px)] w-full overflow-hidden rounded-[2rem] border border-tpv-accent/32 bg-tpv-deep shadow-[0_28px_80px_rgba(0,0,0,0.36)] lg:h-[clamp(320px,24vw,360px)] lg:w-full lg:max-w-[640px]">
                  <Image
                    src={activeService.image}
                    alt={activeService.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center saturate-[0.78]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[rgba(3,18,35,0.42)]" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
