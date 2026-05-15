import { GradientBorderCard } from "@/components/ui/GradientBorderCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const values = [
  {
    number: "01",
    title: "Qualität",
    text: "Wir planen Systeme so, dass sie zuverlässig funktionieren, sauber integriert sind und langfristig Bestand haben.",
  },
  {
    number: "02",
    title: "Innovation",
    text: "Wir setzen moderne AV-Technologien dort ein, wo sie echten Mehrwert schaffen – nicht als Selbstzweck.",
  },
  {
    number: "03",
    title: "Menschlichkeit",
    text: "Projekte funktionieren nur mit guter Kommunikation. Deshalb legen wir Wert auf Nähe, Verlässlichkeit und klare Abstimmung.",
  },
];

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden px-[5vw] py-16 lg:py-[5.5rem]">
      <div className="pointer-events-none absolute inset-x-0 top-8 hidden text-center text-[clamp(4rem,8vw,8rem)] font-semibold leading-none text-white/[0.03] lg:block">
        VISION
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="max-w-4xl">
          <SectionLabel>Unser Anspruch</SectionLabel>
          <h2 className="mt-5 max-w-[760px] text-[clamp(2.2rem,3.2vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Technik, die nicht auffällt – bis sie begeistert.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {values.map((value) => (
            <GradientBorderCard
              key={value.title}
              className="relative min-h-60 overflow-hidden border-tpv-magenta/20 bg-tpv-card/58 p-6"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-tpv-magenta via-tpv-accent to-transparent" />
              <p className="text-5xl font-semibold text-white/[0.07]">
                {value.number}
              </p>
              <h3 className="mt-7 text-[clamp(1.35rem,1.7vw,2rem)] font-semibold">
                {value.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                {value.text}
              </p>
            </GradientBorderCard>
          ))}
        </div>
      </div>
    </section>
  );
}
