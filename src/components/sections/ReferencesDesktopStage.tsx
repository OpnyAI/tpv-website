"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { references } from "@/data/references";
import { REFERENCE_CLICK } from "@/lib/tracking";
import { cn } from "@/lib/utils";

function getWrappedIndex(index: number): number {
  return (index + references.length) % references.length;
}

export function ReferencesDesktopStage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReference = references[activeIndex];
  const previousIndex = getWrappedIndex(activeIndex - 1);
  const nextIndex = getWrappedIndex(activeIndex + 1);

  function goToPrevious() {
    setActiveIndex((current) => getWrappedIndex(current - 1));
  }

  function goToNext() {
    setActiveIndex((current) => getWrappedIndex(current + 1));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  }

  return (
    <>
      <div
        className="relative mt-10 hidden min-h-[492px] touch-pan-y outline-none lg:mt-10 lg:block lg:h-[500px] lg:min-h-0"
        tabIndex={0}
        role="region"
        aria-label="Referenzen Karussell"
        onKeyDown={handleKeyDown}
      >
        {[previousIndex, nextIndex].map((index, sidePosition) => {
          const reference = references[index];
          const isLeft = sidePosition === 0;

          return (
            <button
              key={`${reference.slug}-${isLeft ? "previous" : "next"}`}
              type="button"
              className={cn(
                "absolute top-1/2 z-10 hidden h-[clamp(220px,19vw,280px)] w-[clamp(360px,32vw,455px)] -translate-y-1/2 cursor-pointer overflow-hidden rounded-[1.45rem] border border-white/8 bg-tpv-deep opacity-[0.62] shadow-card brightness-[0.6] saturate-[0.85] transition duration-[450ms] hover:opacity-75 hover:brightness-[0.68] lg:block",
                isLeft
                  ? "left-[clamp(0px,5vw,90px)] scale-[0.82] hover:scale-[0.84]"
                  : "right-[clamp(0px,5vw,90px)] scale-[0.82] hover:scale-[0.84]",
              )}
              onClick={() => setActiveIndex(index)}
              aria-label={`${reference.title} anzeigen`}
            >
              <Image
                src={reference.cardImage}
                alt=""
                fill
                sizes="430px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/[0.9] via-black/[0.62] to-[#050019]/35" />
              <div className="absolute bottom-6 left-6 right-6 text-left opacity-80">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-tpv-accent/80">
                  {reference.location} · {reference.year}
                </p>
                <p className="mt-2 text-[clamp(1.375rem,1.8vw,1.625rem)] font-medium leading-[1.05] text-white">
                  {reference.title}
                </p>
                <p className="mt-2 text-sm font-medium text-tpv-accent/85">
                  {reference.teaserTitle}
                </p>
              </div>
            </button>
          );
        })}

        <div
          key={activeReference.slug}
          className="absolute left-1/2 top-0 z-30 h-[400px] w-[min(100%,calc(100vw-2rem))] max-w-[560px] -translate-x-1/2 animate-[referenceZoom_420ms_ease-out] overflow-hidden rounded-[1.9rem] border border-tpv-accent/75 bg-tpv-deep shadow-[0_0_45px_rgba(255,54,95,0.30),0_25px_80px_rgba(0,0,0,0.45)] transition duration-[450ms] sm:h-[420px] lg:top-[25px] lg:h-[clamp(390px,31vw,450px)] lg:w-[clamp(500px,39vw,560px)]"
        >
          <Image
            src={activeReference.cardImage}
            alt={activeReference.cardImageAlt}
            fill
            sizes="(min-width: 1024px) 560px, 94vw"
            className="object-cover"
            priority={activeIndex === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050019]/[0.18] via-[#050019]/[0.2] to-black/[0.82]" />
          <div className="absolute inset-0 bg-gradient-to-r from-tpv-deep/36 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-7 right-24 sm:bottom-10 sm:left-10 sm:right-28">
            <p className="flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-tpv-accent">
              <Icon name="map-pin" size={14} />
              {activeReference.location}
              <span className="text-white/38">·</span>
              {activeReference.year}
            </p>
            <h3 className="mt-2.5 text-[clamp(2.125rem,2.8vw,2.625rem)] font-medium leading-none tracking-[-0.02em] text-white">
              {activeReference.title}
            </h3>
            <p className="mt-3 text-[1.1rem] font-medium text-tpv-accent sm:text-[1.2rem]">
              {activeReference.teaserTitle}
            </p>
            <p className="mt-3.5 max-w-[430px] text-base leading-[1.45] text-white/88 sm:text-[1.06rem]">
              {activeReference.description}
            </p>
          </div>

          <Link
            href={activeReference.href}
            scroll={true}
            className="absolute bottom-7 right-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/16 bg-[#0f0f19]/[0.72] text-white transition hover:scale-105 hover:border-tpv-accent hover:shadow-[0_0_22px_rgba(255,54,95,0.28)] hover:brightness-125 sm:h-16 sm:w-16"
            aria-label={`Projekt ${activeReference.title} ansehen`}
            data-track-event={REFERENCE_CLICK}
            data-track-label={activeReference.title}
          >
            <Icon name="arrow-up-right" size={23} />
          </Link>
        </div>
      </div>

      <div className="mt-8 hidden justify-center gap-3 lg:flex lg:mt-9">
        {references.map((reference, index) => (
          <button
            key={reference.slug}
            type="button"
            className={cn(
              "rounded-full transition duration-300",
              index === activeIndex
                ? "h-[18px] w-7 bg-tpv-accent shadow-[0_0_18px_rgba(255,54,95,0.45)]"
                : "h-4 w-4 bg-white opacity-95 hover:bg-white",
            )}
            onClick={() => setActiveIndex(index)}
            aria-label={`Referenz ${index + 1} anzeigen`}
          />
        ))}
      </div>
    </>
  );
}
