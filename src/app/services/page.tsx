export const metadata = {
  title: "Freelance Developer Berlin — React, Next.js, iOS | Steffen",
  description:
    "Freelance Developer in Berlin Mitte. I help early-stage startups and companies build their first product. React, Next.js, iOS, full-stack. MVP in 6-8 weeks.",
  keywords: [
    "Freelance Developer Berlin",
    "Next.js Developer Berlin",
    "React Developer Berlin",
    "MVP Development Berlin",
    "iOS Developer Berlin",
    "Startup Developer Berlin",
    "Full-Stack Developer Berlin Mitte",
    "Freelance Software Engineer Berlin",
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Steffen",
  jobTitle: "Freelance Developer",
  description:
    "Freelance Developer in Berlin Mitte specializing in React, Next.js, iOS and MVP development for startups.",
  url: "https://52n34s.app",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin Mitte",
    addressCountry: "DE",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "iOS Development",
    "MVP Development",
    "Startup Development",
    "Full-Stack Development",
  ],
  sameAs: [
    "https://orivela.app",
    "https://peeranimo.com",
    "https://github.com/52n34s",
    "https://instagram.com/steffenletsdoit",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <main className="services-page">
        <section className="services-section">
          <h1 className="services-h1">
            Freelance Developer in Berlin — React, Next.js &amp; iOS
          </h1>
          <p className="services-lead">
            I help early-stage startups and established companies build their
            first product — or scale the one they have. Based in Berlin Mitte.
            Remote-ready.
          </p>
        </section>

        <section className="services-section">
          <h2 className="services-h2">What I build</h2>

          <article className="services-item">
            <h3 className="services-h3">MVP Development</h3>
            <p>
              From idea to working product in 6-8 weeks. React, Next.js,
              Supabase. Designed to validate fast and scale when it works.
            </p>
          </article>

          <article className="services-item">
            <h3 className="services-h3">iOS &amp; Android Apps</h3>
            <p>
              React Native / Expo apps shipped to App Store and Google Play.
              I&apos;ve done it with Orivela — I can do it for your product.
            </p>
          </article>

          <article className="services-item">
            <h3 className="services-h3">Full-Stack Web Platforms</h3>
            <p>
              Next.js 14, TypeScript, Tailwind, Supabase, Vercel. 10+ platforms
              built and shipped to production.
            </p>
          </article>

          <article className="services-item">
            <h3 className="services-h3">Founder as a Service</h3>
            <p>
              Not just code. I think in systems and products. Early-stage
              startups hire me when they need someone who builds and thinks like
              a founder.
            </p>
          </article>
        </section>

        <section className="services-section">
          <h2 className="services-h2">About</h2>
          <p>
            Steffen is a freelance developer and founder based in Berlin Mitte,
            Germany. He is the creator of Orivela, a personal records vault for
            iOS and Android, and Peeranimo, a peer-to-peer community platform.
            He has built 10+ platforms across web and mobile.
          </p>
        </section>

        <section className="services-section">
          <h2 className="services-h2">Technologies</h2>
          <p className="services-muted">
            React · Next.js 14 · TypeScript · Tailwind CSS · Supabase · Vercel ·
            Expo · React Native · iOS · Android · Node.js · PostgreSQL ·
            WebCrypto · Claude AI · Anthropic API
          </p>
        </section>

        <section className="services-section">
          <h2 className="services-h2">Let&apos;s work together</h2>
          <p>
            Based in Berlin. Available for freelance projects, technical
            co-founder roles, and consulting.
          </p>
          <a href="/#room-06" className="services-cta">
            Get in touch →
          </a>
        </section>
      </main>
    </>
  );
}
