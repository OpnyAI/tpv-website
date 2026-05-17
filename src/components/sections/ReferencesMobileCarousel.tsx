"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type TouchEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import type { ReferenceItem } from "@/data/references";
import { REFERENCE_CLICK } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type ReferencesMobileCarouselProps = {
  references: ReferenceItem[];
};

const swipeThreshold = 40;

function getWrappedIndex(index: number, length: number): number {
  return (index + length) % length;
}

export function ReferencesMobileCarousel({
  references,
}: ReferencesMobileCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const activeReference = references[activeIndex];

  function goTo(index: number) {
    setActiveIndex(getWrappedIndex(index, references.length));
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0];

    if (!touch) {
      return;
    }

    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const start = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;

    if (!start || !touch) {
      return;
    }

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;

    if (
      Math.abs(deltaX) <= swipeThreshold ||
      Math.abs(deltaX) <= Math.abs(deltaY)
    ) {
      return;
    }

    goTo(deltaX < 0 ? activeIndex + 1 : activeIndex - 1);
  }

  return (
    <div className="lg:hidden">
      <div
        className="relative z-20 mt-10 flex min-h-[456px] touch-pan-y items-start justify-center pointer-events-auto sm:min-h-[492px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label="Mobile Referenzen"
      >
        <Link
          key={activeReference.slug}
          href={activeReference.href}
          className="group relative z-20 h-[400px] w-[min(82vw,360px)] shrink-0 overflow-hidden rounded-[1.9rem] border border-tpv-accent/75 bg-tpv-deep shadow-[0_0_45px_rgba(255,54,95,0.30),0_25px_80px_rgba(0,0,0,0.45)] pointer-events-auto touch-manipulation sm:h-[420px] sm:w-[min(82vw,420px)]"
          aria-label={`Projekt ${activeReference.title} ansehen`}
          data-track-event={REFERENCE_CLICK}
          data-track-label={activeReference.title}
        >
          <Image
            src={activeReference.cardImage}
            alt={activeReference.cardImageAlt}
            fill
            sizes="82vw"
            className="pointer-events-none object-cover"
            priority={activeIndex === 0}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050019]/[0.18] via-[#050019]/[0.2] to-black/[0.82]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-tpv-deep/36 via-transparent to-transparent" />

          <div className="pointer-events-none absolute bottom-8 left-7 right-20 sm:bottom-10 sm:left-10 sm:right-24">
            <p className="flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-tpv-accent sm:text-[0.78rem]">
              <Icon name="map-pin" size={14} />
              {activeReference.location}
              <span className="text-white/38">·</span>
              {activeReference.year}
            </p>
            <h3 className="mt-2.5 text-[clamp(1.875rem,8vw,2.625rem)] font-medium leading-none tracking-[-0.02em] text-white">
              {activeReference.title}
            </h3>
            <p className="mt-3 text-[1rem] font-medium text-tpv-accent sm:text-[1.2rem]">
              {activeReference.teaserTitle}
            </p>
            <p className="mt-3.5 max-w-[430px] text-sm leading-[1.45] text-white/88 sm:text-[1.06rem]">
              {activeReference.description}
            </p>
          </div>

          <span className="pointer-events-none absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-[#0f0f19]/[0.72] text-white sm:h-16 sm:w-16">
            <Icon name="arrow-up-right" size={22} />
          </span>
        </Link>
      </div>

      <div className="relative z-20 mt-6 flex items-center justify-center gap-3">
        {references.map((reference, index) => (
          <button
            key={reference.slug}
            type="button"
            className={cn(
              "rounded-full transition duration-150 pointer-events-auto touch-manipulation",
              index === activeIndex
                ? "h-[18px] w-7 bg-tpv-accent shadow-[0_0_18px_rgba(255,54,95,0.45)]"
                : "h-4 w-4 bg-white/45",
            )}
            onClick={() => goTo(index)}
            aria-label={`Referenz ${index + 1} anzeigen`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
