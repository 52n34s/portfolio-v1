export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://steffendoesthings.com/#steffen",
        name: "Steffen Giebler",
        givenName: "Steffen",
        familyName: "Giebler",
        alternateName: "52N34S",
        jobTitle: "Product Developer & Indie Founder",
        description:
          "Solo founder and software developer in Berlin Mitte. Builds and ships his own mobile and web applications and turns founders' early ideas into production products.",
        url: "https://steffendoesthings.com",
        image: "https://steffendoesthings.com/me-steffen.png",
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
        worksFor: { "@id": "https://steffendoesthings.com/#org" },
        founder: { "@id": "https://steffendoesthings.com/#org" },
        sameAs: [
          "https://www.instagram.com/steffenletsdoit/",
          "https://www.upwork.com/freelancers/~01984538d26b3fcb98",
          "https://52n34s.app",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://steffendoesthings.com/#org",
        name: "52N34S Group",
        url: "https://steffendoesthings.com",
        description:
          "Independent product studio in Berlin Mitte building its own apps and partnering with founders on new products.",
        founder: { "@id": "https://steffendoesthings.com/#steffen" },
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
        "@id": "https://steffendoesthings.com/#website",
        url: "https://steffendoesthings.com",
        name: "52N34S — Steffen Giebler",
        inLanguage: "en",
        publisher: { "@id": "https://steffendoesthings.com/#org" },
        about: { "@id": "https://steffendoesthings.com/#steffen" },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://steffendoesthings.com/#professionalservice",
        name: "52N34S — Product Development",
        provider: { "@id": "https://steffendoesthings.com/#steffen" },
        url: "https://steffendoesthings.com/work",
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
        "@id": "https://steffendoesthings.com/#orivela",
        name: "Orivela",
        description:
          "Notes and records in one place. Capture by voice, text or photo, then ask in plain language to find anything again.",
        applicationCategory: "ProductivityApplication",
        operatingSystem: "iOS",
        url: "https://apps.apple.com/app/orivela-life-admin-vault/id6785050823",
        author: { "@id": "https://steffendoesthings.com/#steffen" },
        publisher: { "@id": "https://steffendoesthings.com/#org" },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://steffendoesthings.com/#kolibi",
        name: "Kolibi",
        description:
          "Nutrition and bodyweight training in one app. Photo recognition per ingredient, targets that adjust to each session, and exercise ladders that level up as you get stronger.",
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS",
        url: "https://apps.apple.com/us/app/kolibi-calories-workouts/id6790129149",
        author: { "@id": "https://steffendoesthings.com/#steffen" },
        publisher: { "@id": "https://steffendoesthings.com/#org" },
      },
      {
        "@type": "WebApplication",
        "@id": "https://steffendoesthings.com/#peeranimo",
        name: "Peeranimo",
        description:
          "A peer-matching social platform that connects people who are in the same chapter of life.",
        applicationCategory: "SocialNetworkingApplication",
        operatingSystem: "Web",
        browserRequirements: "Requires JavaScript",
        url: "https://peeranimo.app/",
        author: { "@id": "https://steffendoesthings.com/#steffen" },
        publisher: { "@id": "https://steffendoesthings.com/#org" },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://steffendoesthings.com/#carpincho",
        name: "Carpincho",
        description:
          "A Spanish learning app focused on the 1,000 highest-frequency words, in Rioplatense, neutral Latin American and Spanish variants.",
        applicationCategory: "EducationalApplication",
        operatingSystem: "iOS, Android",
        url: "https://carpincho.app/",
        author: { "@id": "https://steffendoesthings.com/#steffen" },
        publisher: { "@id": "https://steffendoesthings.com/#org" },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://steffendoesthings.com/#erdi",
        name: "Erdi",
        description:
          "An assistant for founders who run several businesses. A three-minute morning brief on what moved and why, an inbox that sorts itself with replies ready in your tone, and instant alerts with the likely cause and a fix to approve. Suggestions, copilot or autopilot per area, every action reversible, data in the EU.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS",
        url: "https://erdiknows.com",
        offers: {
          "@type": "Offer",
          price: "39",
          priceCurrency: "EUR",
          description: "14-day free trial, then from €39 per month.",
        },
        author: { "@id": "https://steffendoesthings.com/#steffen" },
        publisher: { "@id": "https://steffendoesthings.com/#org" },
      },
      {
        "@type": "WebApplication",
        "@id": "https://steffendoesthings.com/#erdibuilds",
        name: "ErdiBuilds",
        description:
          "A marketplace for apps, SaaS, websites and games. Founders get matched with verified developers who have already built something similar and pay one milestone at a time, released only after they approve the work.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://erdibuilds.app",
        author: { "@id": "https://steffendoesthings.com/#steffen" },
        publisher: { "@id": "https://steffendoesthings.com/#org" },
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
