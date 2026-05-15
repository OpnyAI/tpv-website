import { siteConfig } from "@/data/site";

export default function AgbPage() {
  return (
    <main className="tpv-section-tight text-white">
      <div className="tpv-container max-w-3xl">
        <p className="text-sm uppercase tracking-wide text-white/60">
          Rechtliches
        </p>
        <h1 className="mt-3 text-3xl font-semibold">AGB</h1>
        <p className="mt-6 rounded border border-white/15 bg-white/[0.03] p-5 text-white/70">
          Platzhalter – finale rechtliche Angaben müssen ergänzt werden.
        </p>
        <p className="mt-4 text-sm text-white/60">{siteConfig.legalNotice}</p>
      </div>
    </main>
  );
}
