import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const aboutStats = [
  { value: 25, label: "Mitarbeiter" },
  { value: 5, label: "Standorte" },
  { value: 15, label: "Jahre Erfahrung" },
];

export function AboutSection() {
  return (
    <section
      id="ueber-uns"
      className="relative min-h-[720px] overflow-hidden px-[5vw] py-[4.5rem] scroll-mt-28 md:scroll-mt-40 lg:min-h-[800px] lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-cover bg-center opacity-[0.24] mix-blend-screen saturate-[0.62] brightness-[0.76]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(5,0,21,0.62)] via-[rgba(11,2,40,0.74)] to-[rgba(5,0,21,0.84)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[22%] top-1/2 h-[38rem] w-[38rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(249,0,255,0.18)_0%,rgba(255,54,95,0.1)_36%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(720px-9rem)] max-w-[1440px] items-center gap-12 lg:min-h-[640px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-[clamp(3.5rem,6vw,6rem)]">
        <div className="flex justify-center lg:justify-start">
          <div className="relative aspect-square w-[min(82vw,380px)] lg:w-[clamp(460px,38vw,560px)]">
            <div className="absolute inset-[-1.5rem] rounded-full bg-[radial-gradient(circle,rgba(255,54,95,0.22)_0%,rgba(163,0,255,0.16)_34%,transparent_68%)] blur-3xl" />
            <div className="relative h-full overflow-hidden rounded-full border border-tpv-accent/65 bg-tpv-deep shadow-[0_0_54px_rgba(255,54,95,0.22),0_30px_90px_rgba(0,0,0,0.42)]">
              <video
                className="absolute left-1/2 top-1/2 h-[128%] w-auto min-w-[128%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
                style={{ objectPosition: "center center" }}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="TPV Vorstellung Video"
              >
                <source src="/videos/about/tpv-about-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-tpv-deep/42" />
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="text-[clamp(2.5rem,3.6vw,3.5625rem)] font-medium uppercase leading-none tracking-[0.04em] text-tpv-accent">
            WIR SIND
          </p>
          <h2 className="mt-8 text-[clamp(4.3rem,18vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-white lg:mt-9 lg:text-[clamp(6rem,9vw,9.375rem)]">
            TPV-AV
          </h2>
          <p className="mx-auto mt-11 max-w-[720px] text-[clamp(2.15rem,9vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.035em] text-tpv-accent lg:mx-0 lg:mt-12 lg:text-[clamp(2.625rem,4vw,3.5625rem)]">
            Technologische Visionen
            <span className="block">menschlich vollendet</span>
          </p>

          <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-8 lg:mt-12 lg:max-w-[640px] lg:gap-x-14">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[clamp(2.625rem,3.4vw,3.25rem)] font-medium leading-none text-white">
                  <AnimatedCounter to={stat.value} suffix="+" />
                </p>
                <p className="mt-2 text-[clamp(1.1rem,1.7vw,1.75rem)] font-normal leading-[1.1] text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
