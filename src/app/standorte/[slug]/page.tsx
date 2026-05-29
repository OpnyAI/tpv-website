import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqList } from "@/components/sections/FaqList";
import { GradientButton } from "@/components/ui/GradientButton";
import { Icon } from "@/components/ui/Icon";
import { getLocationBySlug, locations, type LocationItem } from "@/data/locations";
import { siteConfig } from "@/data/site";
import { CTA_CLICK } from "@/lib/tracking";
import { absoluteUrl, createCanonicalUrl } from "@/lib/seo";

type LocationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: createCanonicalUrl(location.href),
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: createCanonicalUrl(location.href),
      images: [
        {
          url: absoluteUrl(siteConfig.defaultOgImage),
          alt: siteConfig.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: [absoluteUrl(siteConfig.defaultOgImage)],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="relative isolate overflow-hidden bg-[rgba(5,0,21,0.86)] text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-cover bg-top opacity-[0.24] saturate-[0.62] brightness-[0.76] md:mix-blend-screen"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[rgba(5,0,21,0.74)] via-[rgba(11,2,40,0.84)] to-[rgba(5,0,21,0.92)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-24 -z-10 hidden h-[46rem] w-[74rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,54,95,0.12)_0%,rgba(163,0,255,0.07)_35%,transparent_68%)] blur-3xl md:block"
        aria-hidden="true"
      />

      <article className="relative z-10 mx-auto max-w-[1440px] min-w-0 px-5 pb-24 pt-8 sm:px-8 lg:px-12 lg:pb-32 lg:pt-14">
        <LocationHero location={location} />
        <IntroSection location={location} />
        <ServicesGrid location={location} />
        <UseCasesSection location={location} />
        <LocationFaq location={location} />
        <FinalCta location={location} />
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}

function LocationHero({ location }: { location: LocationItem }) {
  return (
    <header className="relative mx-auto w-full max-w-[calc(100vw-2.5rem)] min-w-0 overflow-hidden rounded-[22px] border border-white/12 bg-[#081019]/80 shadow-card lg:max-w-none lg:rounded-[2rem]">
      <div className="absolute inset-0 bg-gradient-to-br from-tpv-deep/72 via-tpv-muted/58 to-tpv-deep/86" />
      <div className="absolute right-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,54,95,0.22)_0%,rgba(163,0,255,0.11)_40%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[-12rem] left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(64,29,177,0.26)_0%,rgba(249,0,255,0.08)_38%,transparent_72%)] blur-3xl" />

      <div className="relative grid min-h-[620px] min-w-0 gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.62fr)] lg:items-center lg:px-16 lg:py-20">
        <div className="min-w-0 max-w-[880px]">
          <p className="inline-flex items-center gap-2 rounded-full border border-tpv-accent/35 bg-white/[0.035] px-4 py-2 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-tpv-accent">
            <Icon name="map-pin" size={15} />
            Standort {location.city}
          </p>
          <h1 className="mt-7 max-w-[880px] break-words text-[clamp(2.5rem,8.2vw,4.55rem)] font-normal leading-[1.08] tracking-[-0.01em] text-white">
            Medientechnik & AV-Lösungen in{" "}
            <span className="text-tpv-accent">{location.city}</span>
          </h1>
          <p className="mt-7 max-w-[760px] break-words text-[clamp(1.08rem,2.1vw,1.55rem)] font-normal leading-[1.45] text-white/84">
            {location.heroClaim}
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <GradientButton
              href={siteConfig.emailHref}
              size="lg"
              trackingEvent={CTA_CLICK}
              trackingLabel={`location-hero:${location.city}`}
            >
              Projekt anfragen
              <Icon name="arrow-up-right" size={19} />
            </GradientButton>
            <GradientButton
              href="/#standorte"
              variant="outline"
              size="lg"
              trackingEvent={CTA_CLICK}
              trackingLabel={`location-more:${location.city}`}
            >
              Weitere Standorte
            </GradientButton>
          </div>
        </div>

        <div className="relative min-h-[360px] min-w-0 overflow-hidden rounded-[1.35rem] border border-white/12 bg-white/[0.028] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.24)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(255,54,95,0.12),transparent_42%),radial-gradient(circle_at_78%_74%,rgba(163,0,255,0.10),transparent_44%)]" />
          <div className="relative flex h-full min-h-[320px] flex-col justify-between rounded-[1rem] border border-white/10 bg-tpv-deep/68 p-6">
            <p className="text-[0.78rem] font-medium uppercase tracking-[0.22em] text-tpv-accent">
              TPV Einsatzprofil
            </p>
            <div className="space-y-3">
              {location.regionHighlights.map((item) => (
                <div
                  key={item}
                  className="min-w-0 break-words rounded-[0.75rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-[clamp(1.05rem,1.45vw,1.35rem)] font-medium text-white"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="max-w-[320px] text-sm leading-6 text-white/64">
              Lokal relevant geplant, bundesweit belastbar umgesetzt.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function IntroSection({ location }: { location: LocationItem }) {
  return (
    <section className="grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
      <div>
        <p className="text-[0.82rem] font-medium uppercase tracking-[0.22em] text-tpv-accent">
          Medientechnik in {location.city}
        </p>
        <h2 className="mt-4 max-w-[680px] text-[clamp(2.15rem,6vw,4.25rem)] font-medium leading-[1.06] tracking-[-0.025em] text-white">
          {location.introTitle}
        </h2>
      </div>
      <div className="space-y-6 text-[clamp(1.05rem,1.4vw,1.28rem)] leading-[1.65] text-white/78">
        <p>{location.intro}</p>
        <p>{location.localContext}</p>
      </div>
    </section>
  );
}

function ServicesGrid({ location }: { location: LocationItem }) {
  return (
    <section className="py-4 lg:py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="max-w-[720px] text-[clamp(2.15rem,5vw,3.75rem)] font-medium leading-[1.06] tracking-[-0.025em] text-white">
          Leistungsbereiche für AV-Projekte
        </h2>
        <p className="max-w-[420px] text-base leading-7 text-white/64">
          Von der ersten Kalkulation bis zum laufenden Betrieb bleibt die
          technische Verantwortung klar strukturiert.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {location.services.map((service, index) => (
          <article
            key={service.title}
            className="rounded-[1rem] border border-white/12 bg-white/[0.035] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)] lg:p-8"
          >
            <p className="text-[0.8rem] font-medium uppercase tracking-[0.22em] text-tpv-accent">
              0{index + 1}
            </p>
            <h3 className="mt-5 text-[clamp(1.35rem,2vw,1.75rem)] font-medium uppercase leading-[1.15] text-white">
              {service.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-white/68">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function UseCasesSection({ location }: { location: LocationItem }) {
  return (
    <section className="grid gap-10 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
      <div className="rounded-[1.25rem] border border-tpv-accent/45 bg-[#111d24]/72 p-7 lg:p-9">
        <p className="text-[0.8rem] font-medium uppercase tracking-[0.22em] text-tpv-accent">
          Einsatzbereiche
        </p>
        <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.06] tracking-[-0.025em] text-white">
          Räume, die klar kommunizieren.
        </h2>
        <p className="mt-6 text-base leading-7 text-white/68">
          TPV stimmt Bild, Ton, Bedienung, Signalführung und Content auf den
          jeweiligen Raum und die Nutzung im Alltag ab.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {location.useCases.map((useCase) => (
          <div
            key={useCase}
            className="flex min-h-[124px] items-end rounded-[1rem] border border-white/12 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-5 text-[clamp(1.08rem,1.6vw,1.35rem)] font-medium leading-[1.25] text-white"
          >
            {useCase}
          </div>
        ))}
      </div>
    </section>
  );
}

function LocationFaq({ location }: { location: LocationItem }) {
  return (
    <section className="py-8 text-center lg:py-12">
      <p className="text-[0.8rem] font-medium uppercase tracking-[0.22em] text-tpv-accent">
        FAQ
      </p>
      <h2 className="mx-auto mt-4 max-w-[880px] text-[clamp(2.15rem,5vw,3.75rem)] font-medium leading-[1.06] tracking-[-0.025em] text-white">
        Häufige Fragen zu AV-Lösungen in {location.city}
      </h2>
      <FaqList items={location.faq} idPrefix={`location-${location.slug}`} />
    </section>
  );
}

function FinalCta({ location }: { location: LocationItem }) {
  return (
    <section className="mt-16 overflow-hidden rounded-[1.5rem] border border-white/12 bg-gradient-to-br from-tpv-muted/82 via-tpv-deep/90 to-tpv-deep p-7 text-center shadow-card lg:mt-20 lg:p-12">
      <p className="text-[0.8rem] font-medium uppercase tracking-[0.22em] text-tpv-accent">
        Nächster Schritt
      </p>
      <h2 className="mx-auto mt-5 max-w-[900px] text-[clamp(2.15rem,5vw,3.9rem)] font-medium leading-[1.06] tracking-[-0.025em] text-white">
        {location.cta}
      </h2>
      <p className="mx-auto mt-5 max-w-[720px] text-base leading-7 text-white/68">
        Beschreiben Sie kurz Raum, Ziel und Zeitrahmen. TPV prüft die
        technischen Anforderungen und meldet sich mit einem strukturierten
        nächsten Schritt.
      </p>
      <div className="mt-8">
        <GradientButton
          href={siteConfig.emailHref}
          size="lg"
          trackingEvent={CTA_CLICK}
          trackingLabel={`location-final:${location.city}`}
        >
          {location.cta}
          <Icon name="arrow-up-right" size={19} />
        </GradientButton>
      </div>
    </section>
  );
}
