import type { Metadata } from "next";
import Link from "next/link";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Imprint — 52N34S",
  description: "Legal notice for 52n34s.app under German law (§ 5 DDG).",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://52n34s.app/imprint/en" },
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

export default function ImprintPageEn() {
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
            href="/imprint"
            className="font-mono text-sm text-[#1A1A1A]/50 hover:underline"
          >
            Deutsch
          </Link>
        </div>

        <h1 className="font-display text-4xl md:text-5xl text-[#1A1A1A] mt-8">
          Imprint
        </h1>
        <p className="mt-3 font-mono text-sm text-[#1A1A1A]/50">
          Last updated: {legal.lastUpdatedEn}
        </p>

        <p className="mt-6 text-sm text-[#1A1A1A]/60 italic">
          This is a courtesy translation. The{" "}
          <Link href="/imprint" className="underline">
            German version
          </Link>{" "}
          is the legally binding version of this notice under German law.
        </p>

        <Section title="Legal notice under § 5 DDG (German Digital Services Act)">
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

        <Section title="Contact">
          <p>
            Email:{" "}
            <a
              href={`mailto:${legal.emailGeneral}`}
              className="text-[#7B5CF0] hover:underline"
            >
              {legal.emailGeneral}
            </a>
            {legal.phone && (
              <>
                <br />
                Phone: {legal.phone}
              </>
            )}
          </p>
        </Section>

        <Section title="VAT identification number">
          <p>
            VAT identification number pursuant to § 27a of the German VAT Act
            (Umsatzsteuergesetz):
            <br />
            {legal.vatId}
          </p>
        </Section>

        <Section title="Responsible for content pursuant to § 18 (2) MStV">
          <p>
            {legal.name}
            <br />
            {legal.street}
            <br />
            {legal.postalCode} {legal.city}
          </p>
        </Section>

        <Section title="Consumer dispute resolution">
          <p>
            We are not willing or obliged to participate in dispute
            resolution proceedings before a consumer arbitration board.
          </p>
        </Section>

        <Section title="Liability for content">
          <p>
            As a service provider, we are responsible for our own content on
            these pages in accordance with general law under § 7(1) DDG.
            However, under §§ 7 to 10 DDG we are not obliged as a service
            provider to monitor transmitted or stored third-party
            information or to investigate circumstances that indicate
            unlawful activity.
          </p>
          <p>
            Obligations to remove or block the use of information under
            general law remain unaffected. However, liability in this regard
            is only possible from the point in time at which a specific
            infringement becomes known. Upon becoming aware of any such
            infringements, we will remove this content immediately.
          </p>
        </Section>

        <Section title="Liability for links">
          <p>
            Our offering contains links to external websites of third
            parties over whose content we have no influence. We therefore
            cannot accept any liability for this third-party content. The
            respective provider or operator of the linked pages is always
            responsible for their content.
          </p>
          <p>
            The linked pages were checked for possible legal violations at
            the time of linking. No unlawful content was identifiable at
            that time. Permanent monitoring of the content of linked pages
            is not reasonable without concrete evidence of an infringement.
            Upon becoming aware of any infringements, we will remove such
            links immediately.
          </p>
        </Section>

        <Section title="Copyright">
          <p>
            The content and works created by the site operator on these
            pages are subject to German copyright law. Duplication,
            processing, distribution and any form of exploitation beyond the
            scope of copyright law require the written consent of the
            respective author or creator.
          </p>
          <p>
            Insofar as the content on this site was not created by the
            operator, third-party copyrights are respected. In particular,
            third-party content is marked as such. Should you nevertheless
            become aware of a copyright infringement, please notify us
            accordingly. Upon becoming aware of any infringements, we will
            remove such content immediately.
          </p>
        </Section>

        <nav className="mt-16 pt-8 border-t border-[#1A1A1A]/10 font-mono text-sm">
          <Link href="/privacy" className="text-[#7B5CF0] hover:underline">
            Privacy
          </Link>
          <span className="mx-2 text-[#1A1A1A]/30">·</span>
          <Link href="/imprint/en" className="text-[#1A1A1A]/50">
            Imprint
          </Link>
        </nav>
      </div>
    </main>
  );
}
