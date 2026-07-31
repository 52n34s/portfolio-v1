import type { Metadata } from "next";
import Link from "next/link";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Impressum — 52N34S",
  description: "Anbieterkennzeichnung nach § 5 DDG für 52n34s.app.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://52n34s.app/imprint" },
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

export default function ImprintPage() {
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
            href="/imprint/en"
            className="font-mono text-sm text-[#1A1A1A]/50 hover:underline"
          >
            English
          </Link>
        </div>

        <h1 className="font-display text-4xl md:text-5xl text-[#1A1A1A] mt-8">
          Impressum
        </h1>
        <p className="mt-3 font-mono text-sm text-[#1A1A1A]/50">
          Stand: {legal.lastUpdated}
        </p>

        <Section title="Angaben gemäß § 5 DDG">
          <p>
            {legal.name}
            <br />
            {legal.company}
            <br />
            {legal.street}
            <br />
            {legal.postalCode} {legal.city}
            <br />
            {legal.country}
          </p>
        </Section>

        <Section title="Kontakt">
          <p>
            E-Mail:{" "}
            <a
              href={`mailto:${legal.emailGeneral}`}
              className="text-[#7B5CF0] hover:underline"
            >
              {legal.emailGeneral}
            </a>
            {legal.phone && (
              <>
                <br />
                Telefon: {legal.phone}
              </>
            )}
          </p>
        </Section>

        <Section title="Umsatzsteuer-Identifikationsnummer">
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            <br />
            {legal.vatId}
          </p>
        </Section>

        <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <p>
            {legal.name}
            <br />
            {legal.street}
            <br />
            {legal.postalCode} {legal.city}
          </p>
        </Section>

        <Section title="Verbraucherstreitbeilegung">
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Section>

        <Section title="Haftung für Inhalte">
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 7 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese
            Inhalte umgehend.
          </p>
        </Section>

        <Section title="Haftung für Links">
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
          <p>
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
            mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
            inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
            Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links
            umgehend.
          </p>
        </Section>

        <Section title="Urheberrecht">
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen entfernen wir derartige Inhalte umgehend.
          </p>
        </Section>

        <nav className="mt-16 pt-8 border-t border-[#1A1A1A]/10 font-mono text-sm">
          <Link href="/privacy" className="text-[#7B5CF0] hover:underline">
            Privacy
          </Link>
          <span className="mx-2 text-[#1A1A1A]/30">·</span>
          <Link href="/imprint" className="text-[#1A1A1A]/50">
            Impressum
          </Link>
        </nav>
      </div>
    </main>
  );
}
