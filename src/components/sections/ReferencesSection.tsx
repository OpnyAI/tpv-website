import { ReferencesDesktopStage } from "@/components/sections/ReferencesDesktopStage";
import { ReferencesMobileCarousel } from "@/components/sections/ReferencesMobileCarousel";
import { references } from "@/data/references";

export function ReferencesSection() {
  return (
    <section
      className="relative min-h-[760px] overflow-hidden px-[5vw] py-[4.5rem] lg:min-h-[880px] lg:pb-[105px] lg:pt-[115px]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[rgba(5,0,21,0.72)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-cover bg-center opacity-[0.24] saturate-[0.62] brightness-[0.76] md:mix-blend-screen"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(5,0,21,0.62)] via-[rgba(11,2,40,0.74)] to-[rgba(5,0,21,0.84)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[58%] hidden h-[40rem] w-[62rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,54,95,0.22)_0%,rgba(163,0,255,0.1)_32%,transparent_42%)] blur-2xl md:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-[clamp(2rem,5vw,5rem)]">
        <div className="max-w-[1260px] lg:pl-4">
          <span
            id="referenzen"
            className="block scroll-mt-36 md:scroll-mt-40 lg:scroll-mt-36"
            aria-hidden="true"
          />
          <h2 className="mb-4 text-[clamp(2.375rem,9vw,2.75rem)] font-medium uppercase leading-[1.05] tracking-[0.03em] text-tpv-accent lg:text-[clamp(2.875rem,4vw,3.5625rem)]">
            WIR REALISIEREN
          </h2>
          <p className="max-w-[1180px] text-[clamp(1.125rem,4.8vw,1.25rem)] font-normal leading-[1.35] text-white lg:text-[clamp(1.375rem,1.9vw,1.6875rem)] lg:leading-[1.25]">
            Audiovisuelle Erlebnisse der Spitzenklasse. Maßgeschneidert für
            unsere Kunden.
          </p>
        </div>

        <ReferencesMobileCarousel references={references} />

        <ReferencesDesktopStage />
      </div>
    </section>
  );
}
