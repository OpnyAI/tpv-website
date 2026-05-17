import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList } from "@/components/sections/FaqList";
import { Icon, type IconName } from "@/components/ui/Icon";
import {
  caseStudyReferences,
  getReferenceBySlug,
  references,
  type ReferenceCaseStudy,
  type ReferenceImageSlot,
  type ReferenceItem,
} from "@/data/references";
import { siteConfig } from "@/data/site";
import {
  CTA_CLICK,
  EMAIL_CLICK,
  PHONE_CLICK,
  REFERENCE_CLICK,
  VIDEOCALL_CLICK,
} from "@/lib/tracking";
import { cn } from "@/lib/utils";
import { absoluteUrl, createCanonicalUrl } from "@/lib/seo";

type ReferencePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ContactAction = {
  title: string;
  label: string;
  value: string;
  href: string;
  icon: IconName;
  eventName: string;
};

const contactActions: ContactAction[] = [
  {
    title: "Mail",
    label: "MAIL:",
    value: siteConfig.email,
    href: siteConfig.emailHref,
    icon: "mail",
    eventName: EMAIL_CLICK,
  },
  {
    title: "Anruf",
    label: "ANRUF:",
    value: siteConfig.phoneDisplay,
    href: siteConfig.phoneHref,
    icon: "phone",
    eventName: PHONE_CLICK,
  },
  {
    title: "Chat",
    label: "CHAT:",
    value: siteConfig.phoneDisplay,
    href: "https://wa.me/4991125392666",
    icon: "whatsapp",
    eventName: PHONE_CLICK,
  },
  {
    title: "Videocall",
    label: "VIDEOCALL:",
    value: "Hier vereinbaren",
    href: "mailto:info@tpv-av.de?subject=Videocall%20vereinbaren",
    icon: "video",
    eventName: VIDEOCALL_CLICK,
  },
];

export function generateStaticParams() {
  return caseStudyReferences.map((reference) => ({
    slug: reference.slug,
  }));
}

export async function generateMetadata({
  params,
}: ReferencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const reference = getReferenceBySlug(slug);

  if (!reference || !reference.href.startsWith("/referenzen/")) {
    notFound();
  }

  return {
    title: reference.seoTitle,
    description: reference.seoDescription,
    alternates: {
      canonical: createCanonicalUrl(reference.canonicalPath),
    },
    openGraph: {
      title: reference.seoTitle,
      description: reference.seoDescription,
      url: createCanonicalUrl(reference.canonicalPath),
      images: [
        {
          url: absoluteUrl(reference.ogImage),
          alt: reference.cardImageAlt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: reference.seoTitle,
      description: reference.seoDescription,
      images: [absoluteUrl(reference.ogImage)],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ReferencePage({ params }: ReferencePageProps) {
  const { slug } = await params;
  const reference = getReferenceBySlug(slug);

  if (!reference || !reference.href.startsWith("/referenzen/")) {
    notFound();
  }

  const caseStudy = reference.caseStudy;
  const relatedReferences = references
    .filter(
      (item) =>
        item.slug !== reference.slug && item.href.startsWith("/referenzen/"),
    )
    .slice(0, 3);
  const visibleFaqs = caseStudy.faq.slice(0, 6);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: visibleFaqs.map((faq) => ({
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
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-[38%_top] bg-cover opacity-[0.24] mix-blend-screen saturate-[0.62] brightness-[0.78]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[rgba(5,0,21,0.66)] via-[rgba(11,2,40,0.78)] to-[rgba(5,0,21,0.88)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[16rem] -z-10 h-[42rem] w-[72rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,54,95,0.08)_0%,rgba(139,77,255,0.045)_38%,transparent_68%)] blur-3xl"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1536px]">
        <article className="mx-auto max-w-[1360px] px-6 pb-24 pt-8 sm:px-8 lg:px-12 lg:pt-14">
          <CaseHero reference={reference} caseStudy={caseStudy} />
          <ProjectMeta caseStudy={caseStudy} />
          <VisionSection caseStudy={caseStudy} />
          <ProcessSection caseStudy={caseStudy} />
          <ResultSection caseStudy={caseStudy} />
          <RelatedReferences items={relatedReferences} />
          <ReferenceContactCta />
          <ReferenceFaq items={visibleFaqs} />
        </article>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}

function CaseHero({
  reference,
  caseStudy,
}: {
  reference: ReferenceItem;
  caseStudy: ReferenceCaseStudy;
}) {
  return (
    <header className="relative mx-auto mt-4 max-w-[1320px] overflow-hidden rounded-[2px] border border-white/10 bg-[#081019] lg:mt-6">
      <div className="relative h-[520px] w-full lg:h-[620px]">
        {caseStudy.heroImage ? (
          <Image
            src={caseStudy.heroImage}
            alt={reference.cardImageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 1280px, 100vw"
            className="object-cover object-center"
          />
        ) : (
          <ImagePlaceholder
            title="Bildmaterial vom Kunden ausstehend"
            subtitle="Platzhalter - Datei später ersetzen"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_88%,rgba(0,0,0,0.28)_0%,transparent_52%)]" />
        <div className="absolute bottom-10 left-6 max-w-[820px] sm:left-10 lg:bottom-14 lg:left-16">
          <p className="text-[18px] font-normal leading-none text-white/85">
            {caseStudy.heroLabel}
          </p>
          <h1 className="mt-4 text-[clamp(42px,5.2vw,76px)] font-light leading-none tracking-[-0.035em] text-white">
            {caseStudy.client}
          </h1>
          <p className="mt-5 max-w-[780px] text-[clamp(1.125rem,1.6vw,1.625rem)] font-normal leading-[1.35] text-white">
            {caseStudy.heroSubtitle}
          </p>
        </div>
      </div>
    </header>
  );
}

function ProjectMeta({ caseStudy }: { caseStudy: ReferenceCaseStudy }) {
  return (
    <dl className="mx-auto grid max-w-[1320px] gap-8 border-b border-white/45 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
      {caseStudy.meta.map((item) => (
        <div key={item.label}>
          <dt className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#ff3f68]">
            {item.label}
          </dt>
          <dd className="mt-3 text-[24px] font-medium uppercase leading-[1.22] text-white lg:text-[28px]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function VisionSection({ caseStudy }: { caseStudy: ReferenceCaseStudy }) {
  return (
    <section className="mx-auto grid max-w-[1320px] gap-12 py-20 scroll-mt-32 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-24 lg:py-24">
      <div>
        <SectionHeading>Die Vision</SectionHeading>
        <p className="mt-10 max-w-[920px] text-[20px] font-normal leading-[1.55] text-white/90">
          {caseStudy.visionText}
        </p>
      </div>
      <SpecsCard caseStudy={caseStudy} />
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-5 sm:gap-6">
      <span className="block h-[2px] w-20 shrink-0 bg-[#ff3f68] sm:w-24" />
      <h2 className="text-[clamp(46px,4.8vw,76px)] font-light leading-[1.05] tracking-[-0.035em] text-white">
        {children}
      </h2>
    </div>
  );
}

function SpecsCard({ caseStudy }: { caseStudy: ReferenceCaseStudy }) {
  return (
    <aside className="w-full rounded-[18px] border border-[#ff3f68]/45 bg-[#111d24]/95 p-7 lg:w-[360px]">
      <h3 className="text-[26px] font-normal leading-tight text-white">
        {caseStudy.specsTitle}
      </h3>
      <dl className="mt-7 space-y-4">
        {caseStudy.specs.map((item) => (
          <div
            key={item.label}
            className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
          >
            <dt className="text-[0.78rem] font-medium uppercase tracking-[0.18em] text-[#ff3f68]">
              {item.label}
            </dt>
            <dd
              className={cn(
                "mt-1.5 text-[18px] font-medium leading-snug text-white",
                item.isPlaceholder && "text-white/62",
              )}
            >
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
      <a
        href="mailto:info@tpv-av.de?subject=Projektanfrage%20%C3%BCber%20Referenzseite"
        className="mt-8 inline-flex rounded-full border border-[#ff3f68]/70 bg-white/[0.025] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.06] hover:text-[#ff3f68] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3f68]"
        data-track-event={CTA_CLICK}
        data-track-label="reference-specs-project-request"
      >
        Projekt anfragen
      </a>
    </aside>
  );
}

function ProcessSection({ caseStudy }: { caseStudy: ReferenceCaseStudy }) {
  return (
    <section className="mx-auto max-w-[1320px] py-20 scroll-mt-32 lg:py-24">
      <div className="max-w-[980px] rounded-[18px] border border-[#ff3f68]/35 bg-[#090022]/35 p-8 shadow-[0_0_22px_rgba(255,54,95,0.08)] lg:p-12">
        <SectionHeading>{caseStudy.processTitle}</SectionHeading>
        <p className="mt-10 text-[19px] font-normal leading-[1.55] text-white/90">
          {caseStudy.processTextTop}
        </p>
        <ProcessGrid images={caseStudy.processImages} />
        <p className="mt-10 text-[18px] font-normal leading-[1.55] text-white/90">
          {caseStudy.processTextBottom}
        </p>
      </div>
    </section>
  );
}

function ProcessGrid({ images }: { images: ReferenceImageSlot[] }) {
  return (
    <div
      className={cn(
        "mt-8 grid gap-2",
        images.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
      )}
    >
      {images.map((image, index) => (
        <div
          key={`${image.alt}-${index}`}
        className="relative aspect-[4/3] overflow-hidden rounded-md border border-white/10 bg-white/[0.03]"
        >
          {image.src ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 300px, 90vw"
              className="object-cover"
            />
          ) : (
            <ImagePlaceholder
              title="Bildmaterial ausstehend"
              subtitle="Vom Kunden anfordern"
              compact
            />
          )}
        </div>
      ))}
    </div>
  );
}

function ResultSection({ caseStudy }: { caseStudy: ReferenceCaseStudy }) {
  return (
    <section className="mx-auto grid max-w-[1320px] gap-10 py-20 scroll-mt-32 lg:grid-cols-[minmax(0,900px)_320px] lg:items-start lg:gap-16 lg:py-24">
      <div>
        <SectionHeading>{caseStudy.resultTitle}</SectionHeading>
        <p className="mt-10 max-w-[900px] text-[19px] font-normal leading-[1.55] text-white/90">
          {caseStudy.resultText}
        </p>
        <div className="mt-10">
          <VideoLoop src={caseStudy.resultVideo ?? null} />
        </div>
      </div>
      <div className="lg:pt-[9.25rem]">
        <ContactPersonCard contactPerson={caseStudy.contactPerson} />
      </div>
    </section>
  );
}

function VideoLoop({ src }: { src: string | null }) {
  if (!src) {
    return (
      <div className="flex h-[260px] items-center justify-center rounded-[22px] border border-white/45 bg-[#101e25]/90 sm:h-[360px] lg:h-[420px]">
        <span className="text-sm font-medium uppercase tracking-[0.35em] text-white/70">
          VIDEO LOOP
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="flex h-[260px] items-center justify-center rounded-[22px] border border-white/45 bg-[#101e25]/90 md:hidden">
        <span className="text-sm font-medium uppercase tracking-[0.35em] text-white/70">
          VIDEO LOOP
        </span>
      </div>
      <video
        className="hidden h-[260px] w-full rounded-[22px] border border-white/45 bg-[#101e25]/90 object-cover sm:h-[360px] md:block lg:h-[420px]"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      />
    </>
  );
}

function ContactPersonCard({
  contactPerson,
}: {
  contactPerson: ReferenceCaseStudy["contactPerson"];
}) {
  const initials = contactPerson.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <aside className="w-full rounded-[18px] border border-[#ff3f68]/45 bg-[#111d24]/95 p-6 lg:w-[320px]">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#ff3f68]">
        Ansprechpartner
      </p>
      <div className="mt-5 flex items-center gap-4">
        {contactPerson.image ? (
          <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/20">
            <Image
              src={contactPerson.image}
              alt={contactPerson.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/16 bg-white/[0.04] text-base font-normal text-white/80">
            {initials || "HO"}
          </div>
        )}
        <div>
          <h3 className="text-[clamp(1.375rem,1.5vw,1.625rem)] font-normal leading-tight text-[#F4F0FF]">
            {contactPerson.name}
          </h3>
          <p className="mt-1 text-base font-normal text-white/70">
            {contactPerson.role}
          </p>
        </div>
      </div>
      {!contactPerson.image && (
        <p className="mt-4 text-sm font-normal text-white/48">Foto ausstehend</p>
      )}
      <a
        href="mailto:info@tpv-av.de?subject=Kontaktanfrage%20Referenzprojekt"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#ff3f68] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3f68]"
        data-track-event={EMAIL_CLICK}
        data-track-label="reference-contact-person"
      >
        Kontaktieren
        <Icon name="arrow-up-right" size={16} />
      </a>
    </aside>
  );
}

function RelatedReferences({ items }: { items: ReferenceItem[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-[1320px] py-20 scroll-mt-32 lg:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#ff3f68]">
        Auswahl
      </p>
      <h2 className="mt-4 text-[clamp(48px,4.9vw,76px)] font-normal leading-[1.06] tracking-[-0.03em] text-[#F4F0FF]">
        Weitere Referenzen
      </h2>
      <div className="mt-16 grid gap-6 lg:flex lg:items-center lg:justify-center lg:gap-8">
        {items.map((item, index) => (
          <Link
            key={item.slug}
            href={item.href}
            className={cn(
              "group relative min-h-[260px] overflow-hidden rounded-[20px] border border-white/12 bg-[#101e25] shadow-[0_20px_62px_rgba(0,0,0,0.22)] transition duration-300 hover:border-[#ff3f68]/45 lg:min-h-0",
              index === 1 &&
                "lg:h-[300px] lg:w-[460px] lg:shadow-[0_24px_72px_rgba(0,0,0,0.28),0_0_26px_rgba(255,54,95,0.14)]",
              index !== 1 && "lg:h-[230px] lg:w-[360px] lg:opacity-70",
            )}
            data-track-event={REFERENCE_CLICK}
            data-track-label={`related:${item.title}`}
          >
            {item.cardImage ? (
              <Image
                src={item.cardImage}
                alt={item.cardImageAlt}
                fill
                sizes="(min-width: 1024px) 32vw, 92vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            ) : (
              <ImagePlaceholder title="Referenzbild ausstehend" compact />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050019]/86 via-[#050019]/34 to-[#050019]/6" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#ff3f68]">
                {item.location} / {item.year}
              </p>
              <h3 className="mt-3 text-[clamp(1.75rem,2.4vw,2.5rem)] font-normal leading-[1.05] text-[#F4F0FF]">
                {item.title}
              </h3>
              <p className="mt-2 text-base font-normal leading-snug text-white/82">
                {item.teaserTitle}
              </p>
            </div>
            <span className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-[#0f0f19]/[0.72] text-white transition group-hover:border-[#ff3f68] group-hover:text-[#ff3f68]">
              <Icon name="arrow-up-right" size={19} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ReferenceContactCta() {
  return (
    <section className="mx-auto max-w-[1320px] py-20 scroll-mt-32 lg:py-28">
      <h2 className="mx-auto max-w-[1240px] text-center text-[clamp(44px,4.4vw,76px)] font-normal uppercase leading-[1.05] tracking-[0.02em]">
        <span className="text-[#ff3f68]">Starten Sie</span>{" "}
        <span className="text-[#F4F0FF]">noch heute</span>{" "}
        <span className="text-[#ff3f68]">Ihr Projekt</span>{" "}
        <span className="text-[#F4F0FF]">mit uns</span>
      </h2>
      <div className="mx-auto mt-14 w-full max-w-[1120px] overflow-hidden rounded-[28px] border border-white/55 bg-[rgba(5,8,24,0.28)] shadow-[0_18px_54px_rgba(0,0,0,0.2)]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {contactActions.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "relative text-center",
                index < contactActions.length - 1 &&
                  "border-b border-white/35 sm:border-b-0",
                index < contactActions.length - 2 &&
                  "sm:border-b sm:border-white/35 lg:border-b-0",
              )}
            >
              {index < contactActions.length - 1 && (
                <span className="pointer-events-none absolute right-0 top-1/2 hidden h-[70px] w-px -translate-y-1/2 bg-white/60 lg:block" />
              )}
              <a
                href={item.href}
                aria-label={`${item.label} ${item.value}`}
                className="group flex min-h-[144px] w-full flex-col items-center justify-center px-6 py-7 text-white transition-colors duration-200 ease-out hover:bg-[rgba(0,40,48,0.28)] focus-visible:bg-[rgba(0,40,48,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3f68]/70 focus-visible:ring-inset lg:min-h-[166px] lg:px-8"
                data-track-event={item.eventName}
                data-track-label={`reference-contact:${item.title}`}
              >
                <Icon
                  name={item.icon}
                  size={34}
                  className="mx-auto text-white"
                />
                <span className="mt-5 block text-[clamp(1rem,1vw,1.125rem)] font-medium uppercase tracking-[0.18em] text-[#ff3f68]">
                  {item.label}
                </span>
                <span className="mt-3 block text-[clamp(1.25rem,1.55vw,1.75rem)] font-normal leading-[1.15] text-[#F4F0FF]">
                  {item.value}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferenceFaq({ items }: { items: ReferenceCaseStudy["faq"] }) {
  return (
    <section className="mx-auto max-w-[900px] py-16 scroll-mt-32 lg:py-20">
      <h2 className="text-center text-[clamp(48px,4.2vw,64px)] font-normal uppercase leading-[1.06] tracking-[-0.02em] text-[#ff3f68]">
        FAQ - Häufige Fragen
      </h2>
      <FaqList items={items} idPrefix="reference-faq" />
    </section>
  );
}

function ImagePlaceholder({
  title,
  subtitle,
  compact = false,
}: {
  title: string;
  subtitle?: string;
  compact?: boolean;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center border border-white/10 bg-[#101e25] px-5 text-center">
      <p
        className={cn(
          "font-normal text-white/72",
          compact ? "text-sm" : "text-base sm:text-lg",
        )}
      >
        {title}
      </p>
      {subtitle && (
        <p className="mt-2 text-xs font-normal uppercase tracking-[0.16em] text-white/38">
          {subtitle}
        </p>
      )}
    </div>
  );
}
