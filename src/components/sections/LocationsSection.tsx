import Image from "next/image";

const cities = [
  { label: "HAMBURG", name: "Hamburg", email: "hamburg@tpv-av.de" },
  { label: "FRANKFURT", name: "Frankfurt", email: "frankfurt@tpv-av.de" },
  { label: "STUTTGART", name: "Stuttgart", email: "stuttgart@tpv-av.de" },
  { label: "NÜRNBERG", name: "Nürnberg", email: "nuernberg@tpv-av.de" },
  { label: "MÜNCHEN", name: "München", email: "muenchen@tpv-av.de" },
];

export function LocationsSection() {
  return (
    <section
      id="standorte"
      className="relative overflow-hidden scroll-mt-28 px-6 py-20 md:scroll-mt-40 lg:px-10 lg:pb-[6.875rem] lg:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,0,21,0.78)_0%,rgba(11,2,40,0.82)_46%,rgba(5,0,21,0.86)_100%)]"
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
        className="pointer-events-none absolute left-[-8rem] top-[44%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(163,0,255,0.08)_0%,rgba(255,54,95,0.045)_38%,transparent_72%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="max-w-[980px]">
          <h2 className="text-[clamp(2.375rem,8vw,3rem)] font-medium uppercase leading-[1.05] tracking-[0.018em] text-[#F4F1FA] lg:text-[clamp(3rem,4.6vw,4.75rem)]">
            <span className="text-tpv-accent">STARTEN SIE</span>{" "}
            <span>NOCH HEUTE</span>{" "}
            <span className="text-tpv-accent">IHR PROJEKT</span>{" "}
            <span>MIT UNS</span>
          </h2>
          <p className="mt-[1.125rem] max-w-[780px] text-[clamp(1.25rem,4vw,1.5rem)] font-normal leading-[1.35] text-[#F4F1FA]/90 lg:text-[clamp(1.375rem,2.1vw,2.25rem)] lg:leading-[1.25]">
            Digital vernetzt. Bundesweit einsatzbereit. Immer in Ihrer Nähe
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:mt-16 lg:grid-cols-[48fr_42fr] lg:gap-[clamp(5rem,8vw,6.875rem)]">
          <div className="group flex justify-center lg:justify-start">
            <Image
              src="/images/locations/tpv-locations-map.png"
              alt="TPV Standorte in Deutschland"
              width={560}
              height={530}
              sizes="(min-width: 1024px) 560px, 82vw"
              className="h-auto w-[min(86vw,420px)] object-contain opacity-90 brightness-[1.02] contrast-[1.04] saturate-[1.02] transition duration-300 ease-out group-hover:scale-[1.02] group-hover:opacity-95 group-hover:brightness-[1.06] motion-reduce:transform-none lg:w-[clamp(460px,37vw,520px)]"
              priority={false}
            />
          </div>

          <ul className="space-y-4 text-left lg:space-y-[1.125rem]">
            {cities.map((city) => (
              <li key={city.label}>
                <a
                  href={`mailto:${city.email}`}
                  aria-label={`E-Mail an Standort ${city.name} schreiben`}
                  className="inline-block origin-left text-[clamp(2.5rem,9vw,3.25rem)] font-medium uppercase leading-[1.16] tracking-[0.04em] text-tpv-accent transition duration-[180ms] ease-out hover:scale-[1.025] hover:text-[#F4F1FA] hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.6),0_0_34px_rgba(160,110,255,0.35)] focus-visible:scale-[1.025] focus-visible:text-[#F4F1FA] focus-visible:drop-shadow-[0_0_18px_rgba(255,255,255,0.6),0_0_34px_rgba(160,110,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tpv-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-tpv-midnight motion-reduce:transform-none lg:text-[clamp(3rem,4.5vw,4.75rem)]"
                >
                  {city.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
