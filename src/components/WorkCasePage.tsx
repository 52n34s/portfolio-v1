import Link from "next/link";
import type { WorkCase, WorkSection } from "@/data/work-cases";

function FaqAnswer({ text }: { text: string }) {
  const marker = "see technical partner.";
  const idx = text.toLowerCase().indexOf(marker);
  if (idx === -1) return <>{text}</>;

  const before = text.slice(0, idx);
  const matched = text.slice(idx, idx + marker.length);
  const after = text.slice(idx + marker.length);
  return (
    <>
      {before}
      <Link href="/work/technical-partner">{matched.replace(/\.$/, "")}</Link>
      .{after}
    </>
  );
}

function SectionBlock({ section }: { section: WorkSection }) {
  switch (section.type) {
    case "paragraphs":
      return (
        <div className="work-prose">
          {section.body.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
      );
    case "bullets":
      return (
        <section className="work-section">
          <h2 className="work-h2">{section.heading}</h2>
          <ul className="work-bullets">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      );
    case "steps":
      return (
        <section className="work-section">
          <h2 className="work-h2">{section.heading}</h2>
          <ol className="work-steps">
            {section.steps.map((step, i) => (
              <li key={step.title}>
                <p className="work-step-title">
                  <span className="work-step-num">{i + 1}.</span> {step.title}
                </p>
                <p className="work-step-body">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>
      );
    case "heading-block":
      return (
        <section className="work-section">
          <h2 className="work-h2">{section.heading}</h2>
          <div className="work-prose">
            {section.body.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        </section>
      );
    case "named-list":
      return (
        <section className="work-section">
          <h2 className="work-h2">{section.heading}</h2>
          {section.intro ? <p className="work-lede-soft">{section.intro}</p> : null}
          <ul className="work-named-list">
            {section.items.map((item) => (
              <li key={item.title}>
                <p className="work-named-title">{item.title}</p>
                <p className="work-named-body">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>
      );
    default:
      return null;
  }
}

export function WorkCaseContent({ workCase }: { workCase: WorkCase }) {
  return (
    <article className="work-article">
      <header className="work-header">
        <p className="work-label">{workCase.command}</p>
        <h1 className="work-h1">{workCase.h1}</h1>
      </header>

      {workCase.sections.map((section, index) => (
        <SectionBlock key={`${section.type}-${index}`} section={section} />
      ))}

      <section className="work-section" aria-labelledby="work-faq-heading">
        <h2 id="work-faq-heading" className="work-h2">
          FAQ
        </h2>
        <dl className="work-faq">
          {workCase.faqs.map((faq) => (
            <div key={faq.question} className="work-faq-item">
              <dt className="work-faq-q">{faq.question}</dt>
              <dd className="work-faq-a">
                <FaqAnswer text={faq.answer} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <aside className="work-cta">
        <p className="work-cta-lead">{workCase.cta.lead}</p>
        <Link href="/#room-06" className="work-cta-btn">
          {workCase.cta.label} →
        </Link>
      </aside>

      {workCase.related.length > 0 ? (
        <nav className="work-related" aria-label="Related work">
          <p className="work-related-label">Related</p>
          <ul>
            {workCase.related.map((item) => (
              <li key={item.slug}>
                <Link href={`/work/${item.slug}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </article>
  );
}

export function WorkPageShell({
  children,
  backHref = "/work",
  backLabel = "← /work",
  showHomeLink = true,
}: {
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
  showHomeLink?: boolean;
}) {
  return (
    <main className="work-page">
      <div className="work-page-inner">
        <div className="work-nav-row">
          <Link href={backHref} className="work-back">
            {backLabel}
          </Link>
          {showHomeLink ? (
            <Link href="/" className="work-home">
              52n34s.app
            </Link>
          ) : (
            <span />
          )}
        </div>
        {children}
      </div>
    </main>
  );
}

export function WorkJsonLd({ workCase }: { workCase: WorkCase }) {
  const pageUrl = `https://52n34s.app/work/${workCase.slug}`;

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: workCase.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: workCase.serviceName,
    description: workCase.description,
    url: pageUrl,
    provider: {
      "@type": "ProfessionalService",
      name: "52N34S Group",
      url: "https://52n34s.app",
      provider: {
        "@type": "Person",
        name: "Steffen Giebler",
      },
    },
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  );
}
