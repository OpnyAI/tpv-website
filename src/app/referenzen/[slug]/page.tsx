import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  caseStudyReferences,
  getReferenceBySlug,
  references,
} from "@/data/references";
import { absoluteUrl, createCanonicalUrl } from "@/lib/seo";

type ReferencePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

  const relatedReferences = references.filter(
    (item) => item.slug !== reference.slug && item.featured,
  );

  return (
    <main className="tpv-section-tight text-white">
      <article className="tpv-container flex max-w-5xl flex-col gap-8">
        <header className="border-b border-white/15 pb-6">
          <p className="text-sm uppercase tracking-wide text-white/60">
            Reference route skeleton
          </p>
          <h1 className="mt-3 text-3xl font-semibold">{reference.title}</h1>
          <p className="mt-3 max-w-3xl text-white/70">
            {reference.description}
          </p>
        </header>

        <section className="rounded border border-white/15 bg-white/[0.03] p-5">
          <h2 className="text-xl font-medium">Meta data</h2>
          <dl className="mt-4 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
            <div>
              <dt className="text-white">Location</dt>
              <dd>{reference.location}</dd>
            </div>
            <div>
              <dt className="text-white">Year</dt>
              <dd>{reference.year}</dd>
            </div>
            <div>
              <dt className="text-white">Sector</dt>
              <dd>{reference.sector}</dd>
            </div>
            <div>
              <dt className="text-white">Technology</dt>
              <dd>{reference.technology}</dd>
            </div>
            <div>
              <dt className="text-white">Services</dt>
              <dd>{reference.services.join(", ")}</dd>
            </div>
          </dl>
          <ul className="mt-4 list-inside list-disc text-sm text-white/70">
            {reference.projectMeta.map((item) => (
              <li key={item.label}>
                {item.label}: {item.value}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded border border-white/15 bg-white/[0.03] p-5">
          <h2 className="text-xl font-medium">Vision</h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            {reference.vision}
          </p>
        </section>

        <section className="rounded border border-white/15 bg-white/[0.03] p-5">
          <h2 className="text-xl font-medium">Approach</h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            {reference.approach}
          </p>
        </section>

        <section className="rounded border border-white/15 bg-white/[0.03] p-5">
          <h2 className="text-xl font-medium">Result</h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            {reference.result}
          </p>
        </section>

        <section className="rounded border border-white/15 bg-white/[0.03] p-5">
          <h2 className="text-xl font-medium">Detail image path list</h2>
          <ul className="mt-4 list-inside list-disc text-sm text-white/70">
            {reference.detailImages.map((image) => (
              <li key={image}>{image}</li>
            ))}
          </ul>
        </section>

        <section className="rounded border border-white/15 bg-white/[0.03] p-5">
          <h2 className="text-xl font-medium">Contact person</h2>
          <p className="mt-2 text-sm text-white/70">
            {reference.contactPerson.name}, {reference.contactPerson.role}
          </p>
        </section>

        <section className="rounded border border-white/15 bg-white/[0.03] p-5">
          <h2 className="text-xl font-medium">Related references placeholder</h2>
          <p className="mt-2 text-sm text-white/70">
            {relatedReferences.map((item) => item.title).join(", ")}
          </p>
        </section>
      </article>
    </main>
  );
}
