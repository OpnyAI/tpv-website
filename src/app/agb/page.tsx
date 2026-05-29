import { siteConfig } from "@/data/site";

type AgbSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
  listAfterParagraph?: number;
};

const agbSections: AgbSection[] = [
  {
    title: "§ 1 Geltungsbereich und Allgemeine Bestimmungen",
    paragraphs: [
      "Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten für alle Verträge, Leistungen, Angebote und Lieferungen der Firma TPV-AV, Inhaber Heinrich Obholz (nachfolgend „TPV-AV“), gegenüber ihren Kunden.",
      "Die AGB gelten ausschließlich gegenüber Unternehmern im Sinne des § 14 BGB, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen (nachfolgend „Kunde“). Verbrauchern im Sinne des § 13 BGB bietet TPV-AV keine Leistungen an.",
      "Entgegenstehende oder von diesen AGB abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, TPV-AV hat ihrer Geltung ausdrücklich schriftlich zugestimmt.",
    ],
  },
  {
    title: "§ 2 Vertragsschluss und Leistungsumfang",
    paragraphs: [
      "Alle Angebote von TPV-AV sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind.",
      "Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung von TPV-AV (per E-Mail oder Brief) oder durch die tatsächliche Ausführung der Leistung durch TPV-AV zustande.",
      "Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot bzw. der Auftragsbestätigung von TPV-AV. Nachträgliche Änderungen bedürfen der Textform.",
    ],
  },
  {
    title: "§ 3 Zahlungsbedingungen, Anzahlungen und Verzug",
    paragraphs: [
      "Sofern nicht schriftlich anders vereinbart, sind alle Rechnungen von TPV-AV innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig. Alle Preise verstehen sich netto zzgl. der gesetzlichen Umsatzsteuer.",
      "TPV-AV ist berechtigt, bei Projektgeschäften oder größeren Auftragsvolumina eine Anzahlung zu verlangen. Sofern im Angebot festgelegt, gilt folgende Regelung:",
      "Kommt der Kunde in Zahlungsverzug, ist TPV-AV berechtigt, Verzugszinsen in gesetzlicher Höhe (§ 288 Abs. 2 BGB) zu fordern sowie weitere Leistungen bis zum Ausgleich der offenen Posten einzustellen.",
    ],
    list: [
      "50 % der Auftragssumme werden bei Beauftragung/Vertragsschluss und vor Beginn der Arbeiten (bzw. vor Hardware-Bestellung) fällig.",
      "50 % der Restsumme werden unmittelbar nach erfolgreicher Abnahme bzw. Fertigstellung der Leistung fällig.",
    ],
    listAfterParagraph: 1,
  },
  {
    title: "§ 4 Stornierung durch den Kunden (Ausfallhonorar)",
    paragraphs: [
      "Tritt der Kunde von einem verbindlich erteilten Auftrag zurück oder storniert diesen, ohne dass TPV-AV dies zu vertreten hat, steht TPV-AV ein pauschaliertes Ausfallhonorar für den entgangenen Gewinn und die Blockierung von Kapazitäten zu.",
      "Die Höhe des Ausfallhonorars staffelt sich nach dem Zeitpunkt der Stornierung vor dem geplanten Projekt-/Leistungsbeginn wie folgt:",
      "Bereits durch TPV-AV für das Projekt eingekaufte Hardware, spezifische Softwarelizenzen oder individuell für den Kunden angefertigter Content sind bei einer Stornierung immer zu 100 % vom Kunden zu erstatten.",
      "Dem Kunden bleibt der Nachweis gestattet, dass TPV-AV kein oder ein wesentlich geringerer Schaden entstanden ist.",
    ],
    list: [
      "Bis 30 Tage vor Projektbeginn: kostenfrei (bereits erbrachte, dokumentierte Fachplanungsleistungen sind jedoch zu vergüten).",
      "29 bis 14 Tage vor Projektbeginn: 30 % des vereinbarten Gesamthonorars.",
      "13 bis 7 Tage vor Projektbeginn: 50 % des vereinbarten Gesamthonorars.",
      "Ab 6 Tage vor Projektbeginn oder bei Nicht-Erscheinen vor Ort: 100 % des vereinbarten Gesamthonorars.",
    ],
    listAfterParagraph: 1,
  },
  {
    title: "§ 5 Modul: Fachplanung, Visualisierung und Content-Erstellung",
    paragraphs: [
      "TPV-AV erbringt Leistungen im Bereich der audio- und videotechnischen Fachplanung sowie der Erstellung von visuellen Inhalten (z. B. Renderings, Echtzeit-Anwendungen über die Unreal Engine, Video-Content).",
      "Urheber- und Nutzungsrechte: Alle Urheberrechte an den Planungen, Visualisierungen und dem Content verbleiben bei TPV-AV. Der Kunde erhält an den finalen Ergebnissen ein einfaches, nicht übertragbares Nutzungsrecht für den vertraglich vereinbarten Zweck.",
      "Das Nutzungsrecht geht erst mit der vollständigen Bezahlung der vereinbarten Vergütung auf den Kunden über.",
      "Die Herausgabe von offenen Projektdateien (z. B. CAD-Dateien, Unreal-Engine-Projekten, Rohdaten) ist nicht geschuldet, es sei denn, dies wurde vorab ausdrücklich und gegen gesonderte Vergütung vereinbart.",
    ],
  },
  {
    title: "§ 6 Modul: Installation, Integration und Gefahrenübergang",
    paragraphs: [
      "Bei der Installation und Integration von AV-Systemen vor Ort ist der Kunde verpflichtet, TPV-AV alle notwendigen technischen Voraussetzungen rechtzeitig bereitzustellen (z. B. ausreichende Stromversorgung, tragfähige Wände/Decken für LED-Wände, freigeschaltete Netzwerkzugänge für Audiosysteme).",
      "Verzögern sich die Arbeiten von TPV-AV, weil der Kunde seinen Mitwirkungspflichten nicht nachkommt oder die Baustelle nicht bereit ist, trägt der Kunde die daraus entstehenden Wartezeiten und Mehrkosten nach den aktuellen Stundensätzen von TPV-AV.",
      "Gefahrenübergang: Mit der Anlieferung der Hardware auf der Baustelle bzw. der Übergabe des Equipments an den Kunden oder dessen Beauftragte geht die Gefahr des zufälligen Untergangs, des Diebstahls, des Vandalismus oder der Beschädigung (z. B. durch andere Gewerke vor Ort) vollständig auf den Kunden über. Der Kunde hat für einen sicheren Verschluss und eine ausreichende Versicherung der Systeme zu sorgen.",
    ],
  },
  {
    title: "§ 7 Abnahme (Werkleistungen)",
    paragraphs: [
      "Nach Fertigstellung der Installations- oder Integrationsarbeiten findet eine gemeinsame Begehung statt. Die erfolgreiche Fertigstellung wird durch die beiderseitige Unterzeichnung eines offiziellen Abnahmeprotokolls von TPV-AV bestätigt.",
      "Der Kunde darf die Abnahme wegen unwesentlicher Mängel, welche die Funktion der Gesamtanlage nicht maßgeblich beeinträchtigen, nicht verweigern. Solche Mängel werden im Protokoll festgehalten und von TPV-AV im Rahmen der Gewährleistung zeitnah behoben.",
      "Verweigert der Kunde die Abnahme ohne Angabe von triftigen Mängeln oder nimmt er trotz Fertigstellung nicht an der Begehung teil, gilt die Leistung nach Ablauf von 7 Werktagen nach Fertigstellungsanzeige als abgenommen. Mit der Nutzung der Anlage im Produktivbetrieb gilt die Abnahme ebenfalls als erfolgt.",
    ],
  },
  {
    title: "§ 8 Eigentumsvorbehalt",
    paragraphs: [
      "Alle gelieferten und installierten Waren (Hardware, Systemkomponenten, Displays) verbleiben bis zur vollständigen Erfüllung sämtlicher Forderungen aus dem Vertrag im Eigentum von TPV-AV.",
      "Bei vertragswidrigem Verhalten des Kunden – insbesondere bei Zahlungsverzug – ist TPV-AV berechtigt, die Vorbehaltsware nach Setzung einer angemessenen Frist auf Kosten des Kunden zurückzunehmen.",
    ],
  },
  {
    title: "§ 9 Modul: Support und Wartung",
    paragraphs: [
      "Erbringt TPV-AV Support-Leistungen bei Störungen oder im Rahmen des aktiven technischen Supports, handelt es sich hierbei um eine Dienstleistung (Dienstvertrag), sofern nicht ausdrücklich ein Service-Level-Agreement (SLA) mit garantierten Verfügbarkeiten oder Reaktionszeiten abgeschlossen wurde.",
      "TPV-AV schuldet den fachgerechten Einsatz ihrer Expertise zur Fehlerbehebung, jedoch keinen Erfolg im Sinne einer permanenten Mängelfreiheit bei Drittkomponenten oder Software-Updates von Fremdherstellern.",
      "Support-Einsätze, die nicht auf einem Gewährleistungsfall von TPV-AV beruhen (z. B. Fehlbedienung durch das Personal des Kunden, Beschädigung von Kabeln durch Dritte, Fehlkonfiguration im Kunden-Netzwerk), werden nach den gültigen Stundensätzen von TPV-AV nach tatsächlichem Aufwand abgerechnet.",
    ],
  },
  {
    title: "§ 10 Haftungsausschluss und -begrenzung",
    paragraphs: [
      "TPV-AV haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen, sowie für sonstige Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen.",
      "Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) ist die Haftung von TPV-AV auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen.",
      "Die Haftung für indirekte Schäden, entgangenen Gewinn oder Produktionsausfall (z. B. durch den Ausfall einer LED-Wall während eines Events) ist – soweit gesetzlich zulässig – ausgeschlossen.",
    ],
  },
  {
    title: "§ 11 Schlussbestimmungen (Gerichtsstand und Recht)",
    paragraphs: [
      "Es gilt ausschließlich das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).",
      "Sofern der Kunde Kaufmann ist, ist der ausschließliche Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag der Geschäftssitz von TPV-AV (Nürnberg).",
      "Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. Die Parteien verpflichten sich, die unwirksame Bestimmung durch eine rechtlich zulässige Regelung zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.",
    ],
  },
];

export default function AgbPage() {
  return (
    <main className="tpv-section-tight text-white">
      <div className="tpv-container max-w-4xl">
        <p className="text-sm uppercase tracking-wide text-white/60">
          Rechtliches
        </p>
        <h1 className="mt-3 text-3xl font-semibold">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
        <div className="mt-8 rounded-[1rem] border border-white/15 bg-white/[0.03] p-5 text-white/72 sm:p-7">
          <p className="text-lg font-medium leading-8 text-white">
            Allgemeine Geschäftsbedingungen (AGB) der Firma TPV-AV – Inhaber
            Heinrich Obholz
          </p>
          <div className="mt-8 space-y-9">
            {agbSections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-medium leading-tight text-white">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7">
                  {section.paragraphs.map((paragraph, index) => (
                    <div key={paragraph} className="space-y-3">
                      <p>
                        {index + 1}. {paragraph}
                      </p>
                      {section.list &&
                      section.listAfterParagraph === index ? (
                        <ul className="space-y-3 pl-5">
                          {section.list.map((item) => (
                            <li key={item} className="list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-white/60">{siteConfig.legalNotice}</p>
      </div>
    </main>
  );
}
