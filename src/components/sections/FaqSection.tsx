import { FaqList } from "@/components/sections/FaqList";
import { faqs } from "@/data/faqs";

const visibleFaqs = faqs.slice(0, 5);
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

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden scroll-mt-28 px-6 py-20 md:scroll-mt-40 lg:px-10 lg:pb-[9rem] lg:pt-4"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,0,21,0.66)_0%,rgba(11,2,40,0.72)_42%,rgba(5,0,21,0.76)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-[38%_top] bg-cover opacity-[0.24] mix-blend-screen saturate-[0.62] brightness-[0.78]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(5,0,21,0.62)] via-[rgba(11,2,40,0.74)] to-[rgba(5,0,21,0.84)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-12rem] top-[32%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,54,95,0.065)_0%,rgba(141,77,255,0.04)_42%,transparent_72%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[940px]">
        <h2 className="text-center text-[clamp(2.875rem,4vw,4.75rem)] font-medium uppercase leading-[1.05] tracking-[0.03em] text-tpv-accent">
          FAQ - HÄUFIGE FRAGEN
        </h2>

        <FaqList items={visibleFaqs} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
