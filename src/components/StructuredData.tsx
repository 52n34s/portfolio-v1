export default function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Steffen Giebler",
    url: "https://52n34s.app",
    jobTitle: "Founder & Software Developer",
    description:
      "Solo founder and developer building mobile and web products in Berlin Mitte.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    sameAs: [
      "https://www.instagram.com/steffenletsdoit/",
      "https://www.upwork.com/freelancers/~01984538d26b3fcb98",
    ],
    knowsAbout: [
      "Product Development",
      "React Native",
      "Next.js",
      "Supabase",
      "Mobile App Development",
      "Software Architecture",
    ],
  };

  const apps = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Orivela",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "iOS, Android",
      url: "https://orivela.app",
      author: { "@type": "Person", name: "Steffen Giebler" },
      description:
        "Personal records vault for iOS and Android. Store documents, contracts and subscriptions and ask about them in plain language.",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Kolibi",
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS, Android",
      url: "https://kolibi.app",
      author: { "@type": "Person", name: "Steffen Giebler" },
      description:
        "AI photo calorie tracker. Snap one photo of your meal and Kolibi reads every ingredient in seconds.",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Peeranimo",
      applicationCategory: "WebApplication",
      operatingSystem: "Web",
      url: "https://peeranimo.com",
      author: { "@type": "Person", name: "Steffen Giebler" },
      description:
        "Peer-matching social platform that connects people who are in the same chapter of life.",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Carpincho",
      applicationCategory: "EducationalApplication",
      operatingSystem: "iOS, Android",
      url: "https://carpincho.app",
      author: { "@type": "Person", name: "Steffen Giebler" },
      description:
        "Spanish learning app focused on 1,000 high-frequency words across Rioplatense, neutral Latin American and Spanish variants.",
    },
  ];

  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "52N34S Group",
    url: "https://52n34s.app",
    areaServed: "Worldwide",
    description:
      "Product development for founders — from idea to shipped app.",
    provider: { "@type": "Person", name: "Steffen Giebler" },
  };

  const blocks = [person, ...apps, service];

  return (
    <>
      {blocks.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
