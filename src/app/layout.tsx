import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono, Lora } from "next/font/google";
import NavBubbles from "@/components/NavBubbles";
import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const lora = Lora({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-lora",
});

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hand",
});

export const metadata: Metadata = {
  title: "Steffen — Founder · Developer · Berlin Mitte",
  description:
    "Start before you can. Find the way while walking. Trust the process.",
  keywords: [
    "Steffen",
    "Founder Berlin",
    "Developer Berlin Mitte",
    "Peeranimo",
    "Orivela",
    "Indie Founder",
    "Software Developer Berlin",
  ],
  authors: [{ name: "Steffen" }],
  creator: "Steffen",
  metadataBase: new URL("https://52n34s.app"),
  alternates: {
    canonical: "https://52n34s.app",
  },
  openGraph: {
    title: "Steffen — Founder · Developer · Berlin Mitte",
    description:
      "Start before you can. Find the way while walking. Trust the process.",
    url: "https://52n34s.app",
    siteName: "52n34s",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steffen — Founder · Developer · Berlin Mitte",
    description:
      "Start before you can. Find the way while walking. Trust the process.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Steffen",
  jobTitle: "Founder & Developer",
  description:
    "I build businesses, not just software. Indie founder and developer based in Berlin Mitte. Creator of Peeranimo and Orivela.",
  url: "https://52n34s.app",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin Mitte",
    addressCountry: "DE",
  },
  sameAs: [
    "https://orivela.app",
    "https://peeranimo.com",
    "https://github.com/52n34s",
    "https://instagram.com/steffenletsdoit",
  ],
  knowsAbout: [
    "Software Development",
    "Product Design",
    "Indie Hacking",
    "iOS Development",
    "Community Building",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${lora.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <NavBubbles />
        {children}
      </body>
    </html>
  );
}
