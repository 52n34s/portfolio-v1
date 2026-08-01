import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { WorkPageShell } from "@/components/WorkCasePage";
import {
  CONTACT_SOCIAL_LINKS,
  CONTACT_USPS,
} from "@/data/contact-content";

export const metadata: Metadata = {
  title: "Contact — Steffen Giebler, Product Developer Berlin",
  description:
    "Freelance product development, software architecture and long-term product partnerships. Berlin-based, remote worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Steffen Giebler, Product Developer Berlin",
    description:
      "Freelance product development, software architecture and long-term product partnerships. Berlin-based, remote worldwide.",
    url: "https://52n34s.app/contact",
    type: "website",
  },
};

const contactPageLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://52n34s.app/contact#page",
  url: "https://52n34s.app/contact",
  name: "Contact — Steffen Giebler",
  description:
    "Freelance product development, software architecture and long-term product partnerships. Berlin-based, remote worldwide.",
  mainEntity: { "@id": "https://52n34s.app/#steffen" },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageLd) }}
      />
      <WorkPageShell backHref="/" backLabel="← 52n34s.app" showHomeLink={false}>
        <nav className="work-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">Contact</li>
          </ol>
        </nav>

        <header className="work-header">
          <p className="work-label">{">_ contact"}</p>
          <h1 className="work-h1">Let&apos;s build something real.</h1>
          <div className="work-prose work-intro-block">
            <p>
              I&apos;m available for freelance projects, architecture work, and
              long-term product partnerships. Berlin-based, working remote
              worldwide.
            </p>
            <p>
              Tell me what you&apos;re building — I&apos;ll get back to you within
              24 hours.
            </p>
          </div>
        </header>

        <div className="contact-form-slot">
          <ContactForm idPrefix="page-contact" />
        </div>

        <section className="work-section" aria-labelledby="contact-usps-heading">
          <h2 id="contact-usps-heading" className="work-h2">
            How I work
          </h2>
          <ul className="work-named-list">
            {CONTACT_USPS.map((usp) => (
              <li key={usp.title}>
                <p className="work-named-body">
                  <strong>{usp.title}</strong> {usp.subtitle}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="work-section contact-alt"
          aria-labelledby="contact-alt-heading"
        >
          <h2 id="contact-alt-heading" className="work-h2">
            Or reach me directly
          </h2>
          <ul className="contact-alt-list">
            {CONTACT_SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label === "Email" ? "steffen@52n34s.com" : link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </WorkPageShell>
    </>
  );
}
