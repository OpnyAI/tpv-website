import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von TPV-AV, Heinrich Obholz, Sulzbacherstraße 48, 90489 Nürnberg.",
};

export default function ImpressumPage() {
  return (
    <main className="tpv-section-tight text-white">
      <div className="tpv-container max-w-3xl">
        <p className="text-sm uppercase tracking-wide text-white/60">
          Rechtliches
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Impressum</h1>

        <div className="mt-6 space-y-7 rounded border border-white/15 bg-white/[0.03] p-5 text-white/72">
          <section>
            <h2 className="text-xl font-semibold text-white">Angaben gemäß § 5 TMG</h2>
            <p className="mt-3 leading-7">
              Heinrich Obholz
              <br />
              Heinrich Obholz (Einzelunternehmer)
              <br />
              Sulzbacherstraße 48
              <br />
              90489 Nürnberg
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Kontakt</h2>
            <p className="mt-3 leading-7">
              Telefon: +49 (0) 911 25392 666
              <br />
              E-Mail: info@tpv-av.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Umsatzsteuer-ID</h2>
            <p className="mt-3 leading-7">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE363809775
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Angaben zur Berufshaftpflichtversicherung
            </h2>
            <p className="mt-3 leading-7">
              Name und Sitz des Versicherers:
              <br />
              Gothaer Allgemeine Versicherung AG
              <br />
              Gothaer Allee 1
              <br />
              50969 Köln
            </p>
            <p className="mt-3 leading-7">
              Geltungsraum der Versicherung:
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Redaktionell verantwortlich
            </h2>
            <p className="mt-3 leading-7">
              Heinrich Obholz
              <br />
              Sulzbacherstraße 48
              <br />
              90489 Nürnberg
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <p className="mt-3 leading-7">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        <p className="mt-4 text-sm text-white/60">Quelle: https://www.e-recht24.de</p>
      </div>
    </main>
  );
}
