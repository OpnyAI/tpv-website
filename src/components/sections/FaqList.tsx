"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import type { FaqItem } from "@/data/faqs";
import { cn } from "@/lib/utils";

type FaqListProps = {
  items: FaqItem[];
  idPrefix?: string;
};

export function FaqList({ items, idPrefix = "faq" }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="mx-auto mt-12 w-[min(820px,calc(100vw-48px))] space-y-5 lg:mt-14 lg:space-y-6">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `${idPrefix}-panel-${index}`;

        return (
          <div
            key={faq.question}
            className="rounded-[12px] border border-[#ff3f68]/60 bg-[#090022]/35 transition-colors duration-200 hover:bg-white/[0.03]"
          >
            <div className="overflow-hidden rounded-[11px]">
              <button
                type="button"
                className="group flex min-h-[62px] w-full items-center justify-between gap-5 px-7 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3f68]/80 focus-visible:ring-inset md:min-h-[70px]"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="text-[20px] font-normal leading-[1.25] text-white lg:text-[22px]">
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center text-[#ff3f68] transition duration-200 group-hover:translate-x-0.5 md:h-8 md:w-8",
                    isOpen && "rotate-90",
                  )}
                >
                  <Icon name="chevron-right" size={25} />
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-7 pb-6 text-[0.95rem] font-normal leading-6 text-white/72 md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
