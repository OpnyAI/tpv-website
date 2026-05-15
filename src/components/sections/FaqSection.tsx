"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="faq"
      className="relative overflow-hidden scroll-mt-28 px-6 py-20 md:scroll-mt-40 lg:px-10 lg:pb-[7.5rem] lg:pt-[5rem]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,0,21,0.78)_0%,rgba(11,2,40,0.82)_42%,rgba(5,0,21,0.86)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-cover bg-center opacity-[0.22] mix-blend-screen saturate-[0.62] brightness-[0.74]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(5,0,21,0.62)] via-[rgba(11,2,40,0.74)] to-[rgba(5,0,21,0.84)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-12rem] top-[32%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,54,95,0.09)_0%,rgba(141,77,255,0.055)_42%,transparent_72%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[940px]">
        <h2 className="text-center text-[clamp(2.375rem,9vw,2.875rem)] font-medium uppercase leading-none tracking-[0.025em] text-tpv-accent lg:text-[clamp(3rem,4.5vw,4.75rem)]">
          FAQ - HÄUFIGE FRAGEN
        </h2>

        <div className="mx-auto mt-12 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className="rounded-[1.125rem] bg-[linear-gradient(90deg,#FF365F_0%,#8D4DFF_100%)] p-[2px] transition duration-200 hover:shadow-[0_0_28px_rgba(255,54,95,0.14)]"
              >
                <div className="overflow-hidden rounded-[calc(1.125rem-2px)] bg-[rgba(8,2,32,0.5)] backdrop-blur-xl transition-colors duration-200 hover:bg-[rgba(16,6,42,0.62)]">
                  <button
                    type="button"
                    className="group flex min-h-[62px] w-full items-center justify-between gap-5 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tpv-accent/80 focus-visible:ring-inset md:min-h-[70px] md:px-8"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="text-[clamp(1.0625rem,2.9vw,1.1875rem)] font-medium leading-[1.25] text-[#F4F1FA] md:text-[clamp(1.25rem,1.55vw,1.5rem)]">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center text-tpv-accent transition duration-200 group-hover:translate-x-1 md:h-10 md:w-10",
                        isOpen && "rotate-90",
                      )}
                    >
                      <Icon name="chevron-right" size={34} />
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[0.95rem] leading-6 text-white/68 md:px-8 md:pb-6 md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
