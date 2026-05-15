import { GradientBorderCard } from "@/components/ui/GradientBorderCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const processSteps = [
  {
    number: "01",
    title: "Beratung",
    text: "Wir klären Ziele, Anforderungen, Räume und technische Rahmenbedingungen.",
  },
  {
    number: "02",
    title: "Konzept",
    text: "Aus den Anforderungen entsteht ein belastbares AV-Konzept inklusive Systemlogik und Budgetrahmen.",
  },
  {
    number: "03",
    title: "Umsetzung",
    text: "Installation, Koordination und Inbetriebnahme erfolgen strukturiert und mit Blick auf Qualität.",
  },
  {
    number: "04",
    title: "Service",
    text: "Nach Projektabschluss bleibt TPV-AV mit Support, Wartung und Optimierung an Ihrer Seite.",
  },
];

export function ProcessSection() {
  return (
    <section className="px-[5vw] py-16 lg:py-[5.5rem]">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-4xl">
          <SectionLabel>Vorgehensweise</SectionLabel>
          <h2 className="mt-5 max-w-[820px] text-[clamp(2.2rem,3.2vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Klare Struktur von der Idee bis zum laufenden Betrieb.
          </h2>
        </div>

        <div className="relative mt-10 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-tpv-magenta via-tpv-accent to-tpv-violet opacity-45 lg:block" />
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-tpv-magenta via-tpv-accent to-tpv-violet opacity-70 lg:hidden" />

          {processSteps.map((step) => (
            <GradientBorderCard key={step.number} className="relative bg-tpv-card/58 p-5">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-tpv-accent/50 bg-tpv-deep text-base font-semibold text-tpv-accent">
                {step.number}
              </span>
              <h3 className="mt-7 text-[clamp(1.25rem,1.55vw,1.85rem)] font-semibold">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                {step.text}
              </p>
            </GradientBorderCard>
          ))}
        </div>
      </div>
    </section>
  );
}
