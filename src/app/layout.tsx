import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBubbles from "@/components/NavBubbles";
import SiteFooter from "@/components/SiteFooter";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

// Self-hosted Google Fonts (latin variable files) so builds never fetch
// from fonts.googleapis.com.
const inter = localFont({
  src: "./fonts/inter-latin-var.woff2",
  weight: "300 500",
  variable: "--font-inter",
});

const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin-var.woff2",
  weight: "400 500",
  variable: "--font-jetbrains-mono",
});

const lora = localFont({
  src: "./fonts/lora-latin-var.woff2",
  weight: "400 600",
  variable: "--font-lora",
  adjustFontFallback: "Times New Roman",
});

const caveat = localFont({
  src: "./fonts/caveat-latin-var.woff2",
  weight: "400 700",
  variable: "--font-hand",
});

const TITLE =
  "Steffen Giebler — Product Developer & Indie Founder, Berlin";
const DESCRIPTION =
  "Solo founder and developer in Berlin Mitte. I build my own apps — Orivela, Kolibi, Peeranimo, Carpincho — and turn other people's ideas into shipped products. From concept to App Store.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Steffen Giebler", url: "https://steffendoesthings.com" }],
  creator: "Steffen Giebler",
  metadataBase: new URL("https://steffendoesthings.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://steffendoesthings.com",
    siteName: "52n34s",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    site: "@Steffenletsdoit",
    creator: "@Steffenletsdoit",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // The inline script below adds "reveal-js" before React hydrates.
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${lora.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        {/* Hides the home dock icons before first paint so their entrance can
            play without a flash; ScrollReveal removes the class on mount.
            Without JS the class never exists and everything stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.add("reveal-js")',
          }}
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        <StructuredData />
        <NavBubbles />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
