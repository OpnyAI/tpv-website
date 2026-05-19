import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von TPV-AV mit Angaben zu Verantwortlichem, Hosting, Kontakt und externen Diensten.",
};

const sections = [
  {
    title: "1. Datenschutz auf einen Blick",
    paragraphs: [
      "Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Website und bei der Kontaktaufnahme verarbeitet werden. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
      "Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
    ],
  },
  {
    title: "2. Verantwortliche Stelle",
    paragraphs: [
      "Heinrich Obholz\nHeinrich Obholz (Einzelunternehmer)\nSulzbacherstraße 48\n90489 Nürnberg\nTelefon: +49 (0) 911 25392 666\nE-Mail: info@tpv-av.de",
      "Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.",
    ],
  },
  {
    title: "3. Hosting",
    paragraphs: [
      "Diese Website wird technisch über Vercel betrieben. Beim Aufruf der Website werden technisch notwendige Zugriffsdaten verarbeitet, zum Beispiel IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp, Betriebssystem, Referrer-URL und angeforderte Dateien.",
      "Die Verarbeitung erfolgt, um die Website sicher, stabil und performant bereitzustellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
    ],
  },
  {
    title: "4. Kontaktaufnahme",
    paragraphs: [
      "Wenn Sie uns per E-Mail, Telefon, WhatsApp oder über einen Videocall-Link kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen.",
      "Rechtsgrundlage ist je nach Inhalt der Anfrage Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.",
    ],
  },
  {
    title: "5. Externe Links und Social Media",
    paragraphs: [
      "Diese Website verlinkt auf Profile oder Dienste von LinkedIn, Instagram, TikTok, X/Twitter, WhatsApp und Calendly. Erst wenn Sie einen solchen externen Link anklicken, verlassen Sie diese Website und es gelten die Datenschutzbestimmungen des jeweiligen Anbieters.",
      "Für die Datenverarbeitung auf den externen Plattformen sind die jeweiligen Anbieter verantwortlich.",
    ],
  },
  {
    title: "6. Calendly",
    paragraphs: [
      "Für die Vereinbarung von Videocalls verlinken wir auf Calendly. Beim Aufruf des Calendly-Links und bei der Terminbuchung verarbeitet Calendly die von Ihnen eingegebenen Daten sowie technisch notwendige Zugriffsdaten.",
      "Die Nutzung erfolgt zur einfachen Terminvereinbarung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.",
    ],
  },
  {
    title: "7. WhatsApp",
    paragraphs: [
      "Für eine direkte Chat-Kontaktaufnahme verlinken wir auf WhatsApp. Wenn Sie den Link nutzen, werden Daten durch WhatsApp beziehungsweise Meta verarbeitet. Bitte beachten Sie die Datenschutzhinweise des Anbieters.",
    ],
  },
  {
    title: "8. Google Analytics",
    paragraphs: [
      "Diese Website enthält eine optionale Einbindung von Google Analytics. Sie wird nur geladen, wenn eine entsprechende Tracking-ID in der technischen Konfiguration gesetzt ist. Dabei wird die IP-Anonymisierung verwendet.",
      "Die Verarbeitung dient der Analyse der Website-Nutzung und der Verbesserung des Angebots. Rechtsgrundlage ist, soweit erforderlich, Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.",
    ],
  },
  {
    title: "9. Ihre Rechte",
    paragraphs: [
      "Sie haben im Rahmen der gesetzlichen Bestimmungen jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten.",
      "Außerdem haben Sie das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.",
    ],
  },
  {
    title: "10. Speicherdauer",
    paragraphs: [
      "Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.",
    ],
  },
];

export default function DatenschutzPage() {
  return (
    <main className="tpv-section-tight text-white">
      <div className="tpv-container max-w-3xl">
        <p className="text-sm uppercase tracking-wide text-white/60">
          Rechtliches
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Datenschutz</h1>

        <div className="mt-6 space-y-7 rounded border border-white/15 bg-white/[0.03] p-5 text-white/72">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <div className="mt-3 space-y-3 leading-7">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-4 text-sm text-white/60">
          Stand: Mai 2026. Erstellt auf Basis der bereitgestellten TPV-Daten und
          der tatsächlich eingebundenen Dienste.
        </p>
      </div>
    </main>
  );
}
