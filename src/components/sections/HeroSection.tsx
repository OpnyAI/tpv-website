import Link from "next/link";
import { CTA_CLICK } from "@/lib/tracking";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[740px] overflow-hidden px-[5vw] pb-[5rem] pt-32 scroll-mt-28 sm:pt-36 md:scroll-mt-40 lg:min-h-[760px] lg:pb-[4.75rem] lg:pt-[9.1rem]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-[38%_top] bg-cover opacity-[0.26] saturate-[0.62] brightness-[0.78] md:mix-blend-screen"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[rgba(5,0,21,0.62)] via-[rgba(11,2,40,0.74)] to-[rgba(5,0,21,0.84)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 lg:w-[87vw] lg:grid-cols-[minmax(0,1fr)_minmax(500px,1fr)] lg:gap-[3.25rem] xl:gap-[3.75rem]">
        <div className="min-w-0 max-w-[600px]">
          <h1 className="text-[clamp(2.75rem,3.55vw,3.625rem)] font-normal leading-[1.13] tracking-[-0.01em] text-white">
            <span className="block">Professionelle</span>
            <span className="block bg-gradient-to-r from-[#FF5A66] via-[#FF3F7A] to-[#B84DFF] bg-clip-text text-transparent lg:whitespace-nowrap">
              Audio-/Video Lösungen
            </span>
            <span className="block">für Ihren Erfolg</span>
          </h1>
          <p className="mt-[1.875rem] max-w-[560px] text-[clamp(1.3125rem,1.45vw,1.6875rem)] font-normal leading-[1.38] text-white/[0.92]">
            Wir erschaffen immersive Technologie-Erlebnisse, die nahtlos in den
            Hintergrund treten, damit Ihre Botschaft im Mittelpunkt steht.
          </p>

          <Link
            href="#referenzen"
            className="mt-[2.125rem] inline-flex rounded-full bg-[linear-gradient(90deg,#FF5A66_0%,#FF365F_38%,#B84DFF_100%)] p-[2px] transition hover:brightness-110"
            data-track-event={CTA_CLICK}
            data-track-label="hero:Jetzt entdecken"
          >
            <span className="rounded-full bg-[#0A0618]/55 px-7 py-2.5 text-[clamp(1.25rem,1.18vw,1.32rem)] font-medium leading-none text-white backdrop-blur-sm">
              Jetzt entdecken
            </span>
          </Link>
        </div>

        <div className="relative min-w-0 w-full lg:justify-self-end">
          <div className="pointer-events-none absolute -inset-5 hidden rounded-[2.25rem] bg-[radial-gradient(circle,rgba(255,54,95,0.16)_0%,rgba(156,77,255,0.11)_42%,transparent_72%)] blur-3xl md:block" />
          <div className="relative w-full max-w-full overflow-hidden rounded-[2rem] border border-[#FF365F]/75 bg-tpv-deep shadow-[0_24px_80px_rgba(0,0,0,0.42),0_0_38px_rgba(255,54,95,0.16)] lg:h-[clamp(405px,31vw,470px)] lg:w-[clamp(540px,42vw,620px)]">
            <div className="relative min-h-[380px] sm:min-h-[430px] lg:h-full lg:min-h-0">
              <video
                className="h-full w-full object-cover object-center md:hidden"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/images/video-posters/tpv-hero-poster-mobile.jpg"
                aria-label="TPV Hero Mobile Video"
                src="/videos/hero/tpv-hero-video-mobile.mp4"
              />
              <video
                className="hidden h-full w-full object-cover object-center md:block"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/video-posters/tpv-hero-poster-desktop.jpg"
                aria-label="TPV Hero Video"
                src="/videos/hero/tpv-hero-video.mp4"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-tpv-deep/16 via-transparent to-[#9C4DFF]/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
