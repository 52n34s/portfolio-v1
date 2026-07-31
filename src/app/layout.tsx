import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono, Lora } from "next/font/google";
import NavBubbles from "@/components/NavBubbles";
import SiteFooter from "@/components/SiteFooter";
import StructuredData from "@/components/StructuredData";
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

const TITLE =
  "Steffen Giebler — Product Developer & Indie Founder, Berlin";
const DESCRIPTION =
  "Solo founder and developer in Berlin Mitte. I build my own apps — Orivela, Kolibi, Peeranimo, Carpincho — and turn other people's ideas into shipped products. From concept to App Store.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Steffen Giebler" }],
  creator: "Steffen Giebler",
  metadataBase: new URL("https://52n34s.app"),
  alternates: {
    canonical: "https://52n34s.app",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://52n34s.app",
    siteName: "52n34s",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${lora.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
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
