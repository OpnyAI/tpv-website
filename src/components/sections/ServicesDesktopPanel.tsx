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
          <article className="relative rounded-[2.3rem] bg-[rgba(3,18,35,0.86)] p-6 shadow-card backdrop-blur-xl sm:p-8 lg:h-[700px] lg:p-14 xl:h-[680px] xl:p-16 2xl:h-[680px]">
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

            <div className="grid h-full min-w-0 gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)] lg:items-end xl:gap-14">
              <div className="relative z-20 flex h-full min-w-0 max-w-[560px] flex-col justify-end">
                <div>
                  <h3 className="max-w-[540px] text-[42px] font-medium uppercase leading-[1.04] tracking-[-0.02em] text-tpv-accent xl:text-[46px]">
                    {activeService.title}
                  </h3>
                  <p className="mt-6 max-w-[540px] text-[21px] font-normal leading-[1.32] tracking-[-0.005em] text-[#F7F4FF] xl:text-[22px]">
                    {activeService.description}
                  </p>

                  <ul className="mt-8 space-y-4">
                    {activeService.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-4 text-[18px] leading-[1.35] tracking-[-0.005em] text-white xl:text-[19px]"
                      >
                        <span className="shrink-0 text-[1.5rem] font-medium leading-none text-tpv-accent">
                          ✓
                        </span>
                        <span className="min-w-0">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={activeService.href}
                  className="mt-8 inline-flex w-fit max-w-max self-start rounded-full bg-[linear-gradient(90deg,#FF5A66_0%,#FF365F_38%,#B84DFF_100%)] p-[2px] transition hover:brightness-110"
                  data-track-event={SERVICE_CLICK}
                  data-track-label={activeService.title}
                >
                  <span className="rounded-full bg-[#0A0618]/55 px-7 py-3 text-[17px] font-medium leading-none text-white backdrop-blur-sm xl:text-[18px]">
                    {activeService.cta}
                  </span>
                </a>
              </div>

              <div className="relative z-10 flex min-w-0 items-end justify-end">
                <div className="relative h-[320px] w-full overflow-hidden rounded-[2rem] border border-tpv-accent/32 bg-tpv-deep shadow-[0_28px_80px_rgba(0,0,0,0.36)] xl:h-[340px] 2xl:h-[350px]">
                  <Image
                    src={activeService.image}
                    alt={activeService.imageAlt}
                    fill
                    sizes="(min-width: 1536px) 620px, (min-width: 1024px) 48vw, 100vw"
                    className="object-contain object-center saturate-[0.78]"
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
