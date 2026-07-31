import type { Metadata } from "next";
import Link from "next/link";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — 52N34S",
  description:
    "Wie 52n34s.app mit personenbezogenen Daten umgeht. Kein Analytics, kein Tracking, kein Cookie-Banner.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://52n34s.app/privacy/de" },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-xl text-[#1A1A1A] mb-3">{title}</h2>
      <div className="text-[#1A1A1A]/80 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

function Sub({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="font-display text-base text-[#1A1A1A] mb-2">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

const cell = "py-3 pr-4 align-top border-b border-[#1A1A1A]/10";
const head = "py-3 pr-4 text-left font-medium border-b border-[#1A1A1A]/20";

export default function PrivacyPageDe() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] px-6 py-20 md:px-10">
      <div className="mx-auto w-full max-w-[680px]">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm text-[#7B5CF0] hover:underline"
          >
            ← 52n34s.app
          </Link>
          <Link
            href="/privacy"
            className="font-mono text-sm text-[#1A1A1A]/50 hover:underline"
          >
            English
          </Link>
        </div>

        <h1 className="font-display text-4xl md:text-5xl text-[#1A1A1A] mt-8">
          Datenschutzerklärung
        </h1>
        <p className="mt-3 font-mono text-sm text-[#1A1A1A]/50">
          Stand: {legal.lastUpdated}
        </p>

        <p className="mt-6 text-[#1A1A1A]/80 leading-relaxed">
          Diese Erklärung gilt für die Website 52n34s.app. Die unter 52N34S
          veröffentlichten Apps haben jeweils eine eigene Datenschutzerklärung
          auf ihrer eigenen Domain.
        </p>

        <Section title="1. Verantwortlicher">
          <p>
            {legal.name} — {legal.company}
            <br />
            {legal.street}, {legal.postalCode} {legal.city}, Deutschland
            <br />
            E-Mail:{" "}
            <a
              href={`mailto:${legal.emailPrivacy}`}
              className="text-[#7B5CF0] hover:underline"
            >
              {legal.emailPrivacy}
            </a>
          </p>
          <p>
            Wir sind nicht verpflichtet, einen Datenschutzbeauftragten nach
            Art. 37 DSGVO zu benennen.
          </p>
        </Section>

        <Section title="2. Kurz zusammengefasst">
          <p>
            Diese Website nutzt kein Analytics. Kein Google Analytics, kein
            Vercel Analytics, kein PostHog, kein Werbe-SDK, kein
            seitenübergreifendes Tracking und kein Verkauf von Daten.
          </p>
          <p>
            Es werden keine Cookies für Werbung, Analyse oder
            seitenübergreifendes Tracking gesetzt, und es wird nichts auf
            Ihrem Gerät gespeichert, was über das technisch Notwendige zur
            Auslieferung der Seite hinausgeht. Es gibt deshalb kein
            Cookie-Banner: § 25 TDDDG greift nicht, weil es nichts gibt, in
            das eingewilligt werden müsste.
          </p>
          <p>
            Personenbezogene Daten erreichen uns in genau einer Situation:
            wenn Sie das Kontaktformular ausfüllen. Alles Weitere unten ist
            regulärer Serverbetrieb.
          </p>
        </Section>

        <Section title="3. Kontaktformular">
          <p>
            Wenn Sie das Kontaktformular absenden, speichern wir den von Ihnen
            eingegebenen Namen, die E-Mail-Adresse, die ausgewählte
            Projektart und Ihre Nachricht. Die Daten werden in einer
            Datenbank bei Supabase in der EU-Region gespeichert.
          </p>
          <p>
            Eine Benachrichtigungs-E-Mail wird über Resend zugestellt, damit
            wir Ihre Anfrage sehen. Der Inhalt Ihrer Nachricht ist Teil
            dieser E-Mail.
          </p>
          <p>
            <strong className="font-medium">Rechtsgrundlage:</strong> Art.
            6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage eine mögliche
            Zusammenarbeit betrifft, sowie Art. 6 Abs. 1 lit. f DSGVO — unser
            berechtigtes Interesse, an uns gerichtete Anfragen zu
            beantworten.
          </p>
          <p>
            <strong className="font-medium">Speicherdauer:</strong> 12 Monate
            nach Abschluss des Vorgangs, sofern sich daraus keine
            Zusammenarbeit ergibt; in diesem Fall gelten die gesetzlichen
            Aufbewahrungsfristen. Sie können jederzeit eine frühere Löschung
            verlangen.
          </p>
          <p>
            Wir nutzen Ihre Adresse nicht für Newsletter oder Marketing. Es
            gibt keinen Verteiler auf dieser Website.
          </p>
        </Section>

        <Section title="4. Betrieb der Website">
          <Sub title="4.1 Hosting">
            <p>
              Die Website wird von Vercel gehostet. Übliche Server-Logs — IP-
              Adresse, Zeitstempel, angefragte URL, Referrer, Browser und
              Betriebssystem — werden im Rahmen des Hostingbetriebs
              verarbeitet, zur Sicherheit, Fehlerbehebung und
              Missbrauchsprävention. Diese Logs werden nicht mit anderen
              Daten zusammengeführt und nicht zu Ihrer Identifizierung
              genutzt.
            </p>
            <p>
              <strong className="font-medium">Rechtsgrundlage:</strong> Art.
              6 Abs. 1 lit. f DSGVO.
            </p>
          </Sub>

          <Sub title="4.2 DNS und Auslieferung">
            <p>
              Namensauflösung und Verkehrslenkung laufen über Cloudflare. In
              dieser Rolle verarbeitet Cloudflare Verbindungsdaten
              einschließlich Ihrer IP-Adresse, um die Anfrage zu routen und
              schädlichen Datenverkehr zu filtern.
            </p>
            <p>
              <strong className="font-medium">Rechtsgrundlage:</strong> Art.
              6 Abs. 1 lit. f DSGVO — sichere und zuverlässige Auslieferung
              der Seite.
            </p>
          </Sub>

          <Sub title="4.3 Schriftarten">
            <p>
              Web-Fonts werden beim Bauen der Website eingebunden und von
              unserer eigenen Domain ausgeliefert. Ihr Browser stellt keine
              Anfrage an Google Fonts oder einen anderen Font-Anbieter, und
              es wird keine IP-Adresse an einen Font-Anbieter übermittelt.
            </p>
          </Sub>

          <Sub title="4.4 Ausgehende Links">
            <p>
              Diese Seite verlinkt auf externe Ziele, unter anderem den
              Apple App Store, Google Play, Instagram, Upwork und die
              Websites der unter 52N34S veröffentlichten Apps. Sobald Sie
              einem solchen Link folgen, gilt die Datenschutzerklärung des
              jeweiligen Ziels. Wir haben keinen Einfluss darauf, was dort
              geschieht, und erhalten keine Daten zurück.
            </p>
          </Sub>
        </Section>

        <Section title="5. Rechtsgrundlagen im Überblick">
          <table className="w-full text-sm mt-2">
            <thead>
              <tr>
                <th className={head}>Verarbeitung</th>
                <th className={head}>Rechtsgrundlage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cell}>Kontaktformular</td>
                <td className={cell}>Art. 6 Abs. 1 lit. b, f</td>
              </tr>
              <tr>
                <td className={cell}>Benachrichtigungs-E-Mail</td>
                <td className={cell}>Art. 6 Abs. 1 lit. f</td>
              </tr>
              <tr>
                <td className={cell}>Server-Logs</td>
                <td className={cell}>Art. 6 Abs. 1 lit. f</td>
              </tr>
              <tr>
                <td className={cell}>DNS und Routing</td>
                <td className={cell}>Art. 6 Abs. 1 lit. f</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="6. Auftragsverarbeiter und Empfänger">
          <table className="w-full text-sm mt-2">
            <thead>
              <tr>
                <th className={head}>Dienst</th>
                <th className={head}>Zweck</th>
                <th className={head}>Standort</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cell}>Supabase Inc. (USA)</td>
                <td className={cell}>Datenbank für Kontaktformular</td>
                <td className={cell}>EU-Region; AVV liegt vor</td>
              </tr>
              <tr>
                <td className={cell}>Resend Inc. (USA)</td>
                <td className={cell}>Benachrichtigungs-E-Mail</td>
                <td className={cell}>USA; AVV liegt vor</td>
              </tr>
              <tr>
                <td className={cell}>Vercel Inc. (USA)</td>
                <td className={cell}>Hosting</td>
                <td className={cell}>USA / EU-Edge; AVV liegt vor</td>
              </tr>
              <tr>
                <td className={cell}>Cloudflare Inc. (USA)</td>
                <td className={cell}>DNS, Auslieferung</td>
                <td className={cell}>Globales Edge-Netz; AVV liegt vor</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="7. Internationale Datenübermittlung">
          <p>
            Einige der oben genannten Anbieter haben ihren Sitz außerhalb des
            EWR oder eine US-Muttergesellschaft. Wo personenbezogene Daten in
            die USA übermittelt werden, stützen wir uns auf das EU-U.S. Data
            Privacy Framework, soweit der Empfänger dort zertifiziert ist,
            andernfalls auf die Standardvertragsklauseln der Europäischen
            Kommission. Eine Kopie der jeweiligen Garantien können Sie unter{" "}
            {legal.emailPrivacy} anfordern.
          </p>
        </Section>

        <Section title="8. Speicherdauer">
          <table className="w-full text-sm mt-2">
            <thead>
              <tr>
                <th className={head}>Daten</th>
                <th className={head}>Speicherdauer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cell}>Kontaktanfrage</td>
                <td className={cell}>
                  12 Monate nach Abschluss des Vorgangs
                </td>
              </tr>
              <tr>
                <td className={cell}>Benachrichtigungs-E-Mail</td>
                <td className={cell}>Bis zur Löschung im Postfach</td>
              </tr>
              <tr>
                <td className={cell}>Server-Logs (Vercel)</td>
                <td className={cell}>Ca. 30 Tage</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="9. Ihre Rechte">
          <p>Nach der DSGVO haben Sie das Recht auf:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Auskunft über Ihre Daten (Art. 15)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16)</li>
            <li>Löschung Ihrer Daten (Art. 17)</li>
            <li>Einschränkung der Verarbeitung (Art. 18)</li>
            <li>Datenübertragbarkeit (Art. 20)</li>
            <li>
              Widerspruch gegen eine auf berechtigtem Interesse beruhende
              Verarbeitung (Art. 21)
            </li>
            <li>
              Beschwerde bei einer Aufsichtsbehörde (Art. 77), insbesondere
              im Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes
            </li>
          </ul>
          <p>
            Zur Ausübung dieser Rechte wenden Sie sich an{" "}
            <a
              href={`mailto:${legal.emailPrivacy}`}
              className="text-[#7B5CF0] hover:underline"
            >
              {legal.emailPrivacy}
            </a>
            .
          </p>
          <p>
            Zuständige Aufsichtsbehörde für uns:
            <br />
            {legal.dpaName} ({legal.dpaShort})
            <br />
            {legal.dpaAddress}
          </p>
        </Section>

        <Section title="10. Kinder">
          <p>
            Diese Seite richtet sich nicht an Kinder unter 16 Jahren, und wir
            erheben wissentlich keine Daten von Kindern unter 16 Jahren.
            Sollten Sie den Eindruck haben, dass ein Kind uns Daten
            überlassen hat, wenden Sie sich bitte an {legal.emailPrivacy};
            wir löschen die Daten umgehend.
          </p>
        </Section>

        <Section title="11. Änderungen dieser Erklärung">
          <p>
            Wir aktualisieren diese Erklärung, wenn sich die Website oder die
            dahinterliegenden Dienste ändern. Die jeweils aktuelle Fassung
            ist unter 52n34s.app/privacy/de abrufbar.
          </p>
        </Section>

        <nav className="mt-16 pt-8 border-t border-[#1A1A1A]/10 font-mono text-sm">
          <Link href="/privacy/de" className="text-[#1A1A1A]/50">
            Datenschutz
          </Link>
          <span className="mx-2 text-[#1A1A1A]/30">·</span>
          <Link href="/imprint" className="text-[#7B5CF0] hover:underline">
            Impressum
          </Link>
        </nav>
      </div>
    </main>
  );
}
