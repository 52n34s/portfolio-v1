import Link from "next/link";
import FaqSchema from "@/components/FaqSchema";
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
                <p className="work-step-body">
                  <strong>
                    {i + 1}. {step.title}
                  </strong>{" "}
                  {step.body}
                </p>
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
                <p className="work-named-body">
                  <strong>{item.title}</strong> {item.body}
                </p>
              </li>
            ))}
          </ul>
        </section>
      );
    default:
      return null;
  }
}

export function WorkBreadcrumb({
  pageLabel,
}: {
  pageLabel: string;
}) {
  return (
    <nav className="work-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li aria-current="page">{pageLabel}</li>
      </ol>
    </nav>
  );
}

export function WorkCaseContent({ workCase }: { workCase: WorkCase }) {
  return (
    <article className="work-article">
      <WorkBreadcrumb pageLabel={workCase.h1} />

      <header className="work-header">
        <p className="work-label">{workCase.command}</p>
        <h1 className="work-h1">{workCase.h1}</h1>
      </header>

      {workCase.sections.map((section, index) => {
        // Keep "This is you if" data in work-cases.ts; hide from render for now.
        if (section.type === "bullets" && section.heading === "This is you if") {
          return null;
        }
        return (
          <SectionBlock key={`${section.type}-${index}`} section={section} />
        );
      })}

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
        <Link href="/contact" className="work-cta-btn">
          Get in touch →
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

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: workCase.serviceName,
    description: workCase.description,
    url: pageUrl,
    provider: { "@id": "https://52n34s.app/#steffen" },
    areaServed: { "@type": "Place", name: "Worldwide" },
    availableLanguage: ["en", "de", "es"],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://52n34s.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: "https://52n34s.app/work",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: workCase.h1,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <FaqSchema questions={workCase.faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
