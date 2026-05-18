"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { FigmaService } from "@/components/sections/ServicesDesktopPanel";
import { SERVICE_CLICK } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type ServicesMobilePanelProps = {
  services: FigmaService[];
};

export function ServicesMobilePanel({ services }: ServicesMobilePanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const activeService = services[activeIndex];

  function setActiveService(index: number) {
    setActiveIndex(index);

    const scroller = scrollerRef.current;
    const tab = tabsRef.current[index];

    if (!scroller || !tab) {
      return;
    }

    scroller.scrollTo({
      left: tab.offsetLeft - (scroller.clientWidth - tab.clientWidth) / 2,
      behavior: "smooth",
    });
  }

  return (
    <div className="min-w-0 max-w-full overflow-hidden lg:hidden">
      <div className="relative mt-14">
        <div
          ref={scrollerRef}
          className="relative flex max-w-full snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-px-4 px-1 pb-4 touch-pan-x [-webkit-overflow-scrolling:touch]"
        >
          {services.map((service, index) => (
            <button
              key={service.number}
              ref={(node) => {
                tabsRef.current[index] = node;
              }}
              type="button"
              className={cn(
                "relative w-[min(72vw,20rem)] shrink-0 snap-start rounded-[1.875rem] border px-5 py-5 text-left transition duration-150 pointer-events-auto touch-manipulation",
                index === activeIndex
                  ? "border-tpv-accent/70 bg-[rgba(1,28,34,0.86)] text-tpv-accent shadow-[0_0_30px_rgba(255,54,95,0.14)]"
                  : "border-white/45 bg-[rgba(8,4,28,0.82)] text-white",
              )}
              onClick={() => setActiveService(index)}
              aria-pressed={index === activeIndex}
            >
              <span className="block text-[clamp(0.95rem,4vw,1.125rem)] font-medium leading-none">
                {service.number} {"//"}
              </span>
              <span className="mt-2 block min-w-0 break-words text-[clamp(0.95rem,4vw,1.18rem)] font-medium uppercase leading-[1.18] tracking-[0.025em]">
                {service.title}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
          {services.map((service, index) => (
            <span
              key={service.number}
              className={cn(
                "rounded-full transition duration-150",
                index === activeIndex
                  ? "h-2.5 w-6 bg-tpv-accent"
                  : "h-2.5 w-2.5 bg-white/40",
              )}
            />
          ))}
        </div>
      </div>

      <div className="relative mt-10 min-w-0 max-w-full overflow-hidden">
        <div className="relative rounded-[2.4rem] bg-[linear-gradient(120deg,#FF365F_0%,rgba(255,54,95,0.72)_32%,#B84DFF_100%)] p-[2px]">
          <article className="relative min-h-[520px] w-full max-w-full overflow-hidden rounded-[2.3rem] bg-[rgba(3,18,35,0.86)] p-5 shadow-card transition duration-200 sm:p-8">
            <div className="grid min-h-[470px] gap-8">
              <div className="relative z-20 min-w-0 max-w-[720px] pt-16">
                <h3 className="break-words text-[clamp(1.9rem,8vw,3rem)] font-medium uppercase leading-[1.1] tracking-[-0.025em] text-tpv-accent">
                  {activeService.title}
                </h3>
                <p className="mt-6 max-w-[720px] text-[clamp(1.125rem,5vw,1.625rem)] font-normal leading-[1.28] text-[#F7F4FF]">
                  {activeService.description}
                </p>

                <ul className="mt-8 space-y-5">
                  {activeService.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex min-w-0 items-center gap-4 text-[clamp(1rem,4.5vw,1.35rem)] leading-[1.35] text-white"
                    >
                      <span className="shrink-0 text-[1.45rem] font-medium leading-none text-tpv-accent">
                        ✓
                      </span>
                      <span className="min-w-0 break-words">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={activeService.href}
                  className="mt-9 inline-flex touch-manipulation rounded-full bg-[linear-gradient(90deg,#FF5A66_0%,#FF365F_38%,#B84DFF_100%)] p-[2px] transition hover:brightness-110"
                  data-track-event={SERVICE_CLICK}
                  data-track-label={activeService.title}
                >
                  <span className="rounded-full bg-[#0A0618]/55 px-6 py-3 text-[clamp(0.95rem,4vw,1.125rem)] font-medium leading-none text-white backdrop-blur-sm">
                    {activeService.cta}
                  </span>
                </a>
              </div>

              <div className="relative z-10 min-h-[250px] self-end">
                <div className="absolute bottom-0 right-0 h-[min(66vw,300px)] w-full overflow-hidden rounded-[2rem] border border-tpv-accent/32 bg-tpv-deep shadow-[0_28px_80px_rgba(0,0,0,0.36)]">
                  <Image
                    src={activeService.image}
                    alt={activeService.imageAlt}
                    fill
                    sizes="100vw"
                    className="object-cover saturate-[0.78] [object-position:center]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[rgba(3,18,35,0.42)]" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
