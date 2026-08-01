export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://52n34s.app/#steffen",
        name: "Steffen Giebler",
        givenName: "Steffen",
        familyName: "Giebler",
        alternateName: "52N34S",
        jobTitle: "Product Developer & Indie Founder",
        description:
          "Solo founder and software developer in Berlin Mitte. Builds and ships his own mobile and web applications and turns founders' early ideas into production products.",
        url: "https://52n34s.app",
        image: "https://52n34s.app/me-steffen.png",
        email: "steffen@52n34s.com",
        nationality: { "@type": "Country", name: "Germany" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Berlin",
          addressRegion: "Berlin",
          addressCountry: "DE",
        },
        knowsLanguage: ["en", "de", "es"],
        knowsAbout: [
          "Product development",
          "Software architecture",
          "MVP development",
          "iOS app development",
          "Android app development",
          "React Native",
          "Next.js",
          "TypeScript",
          "Supabase",
          "PostgreSQL",
          "Startup product strategy",
          "Technical due diligence",
        ],
        worksFor: { "@id": "https://52n34s.app/#org" },
        founder: { "@id": "https://52n34s.app/#org" },
        sameAs: [
          "https://www.instagram.com/steffenletsdoit/",
          "https://www.upwork.com/freelancers/~01984538d26b3fcb98",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://52n34s.app/#org",
        name: "52N34S Group",
        url: "https://52n34s.app",
        description:
          "Independent product studio in Berlin Mitte building its own apps and partnering with founders on new products.",
        founder: { "@id": "https://52n34s.app/#steffen" },
        email: "steffen@52n34s.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Berlin",
          addressRegion: "Berlin",
          addressCountry: "DE",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://52n34s.app/#website",
        url: "https://52n34s.app",
        name: "52N34S — Steffen Giebler",
        inLanguage: "en",
        publisher: { "@id": "https://52n34s.app/#org" },
        about: { "@id": "https://52n34s.app/#steffen" },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://52n34s.app/#professionalservice",
        name: "52N34S — Product Development",
        provider: { "@id": "https://52n34s.app/#steffen" },
        url: "https://52n34s.app/work",
        areaServed: { "@type": "Place", name: "Worldwide" },
        availableLanguage: ["en", "de", "es"],
        serviceType: [
          "MVP development",
          "Software architecture consulting",
          "Legacy code rescue",
          "Fractional CTO",
          "Feature development",
          "Technology stack consulting",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Berlin",
          addressRegion: "Berlin",
          addressCountry: "DE",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://52n34s.app/#orivela",
        name: "Orivela",
        description:
          "A personal records vault that stores documents, contracts and subscriptions and answers questions about them in plain language.",
        applicationCategory: "ProductivityApplication",
        operatingSystem: "iOS, Android",
        url: "https://www.orivela.app/",
        author: { "@id": "https://52n34s.app/#steffen" },
        publisher: { "@id": "https://52n34s.app/#org" },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://52n34s.app/#kolibi",
        name: "Kolibi",
        description:
          "An AI photo calorie tracker that reads a meal from a single photo.",
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS, Android",
        url: "https://apps.apple.com/us/app/kolibi/id6790129149",
        author: { "@id": "https://52n34s.app/#steffen" },
        publisher: { "@id": "https://52n34s.app/#org" },
      },
      {
        "@type": "WebApplication",
        "@id": "https://52n34s.app/#peeranimo",
        name: "Peeranimo",
        description:
          "A peer-matching social platform that connects people who are in the same chapter of life.",
        applicationCategory: "SocialNetworkingApplication",
        operatingSystem: "Web",
        browserRequirements: "Requires JavaScript",
        url: "https://peeranimo.app/",
        author: { "@id": "https://52n34s.app/#steffen" },
        publisher: { "@id": "https://52n34s.app/#org" },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://52n34s.app/#carpincho",
        name: "Carpincho",
        description:
          "A Spanish learning app focused on the 1,000 highest-frequency words, in Rioplatense, neutral Latin American and Spanish variants.",
        applicationCategory: "EducationalApplication",
        operatingSystem: "iOS, Android",
        url: "https://carpincho.app/",
        author: { "@id": "https://52n34s.app/#steffen" },
        publisher: { "@id": "https://52n34s.app/#org" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
