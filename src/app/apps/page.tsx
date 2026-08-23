import type { Metadata } from "next";
import Link from "next/link";
import AppsGallery from "@/components/AppsGallery";

export const metadata: Metadata = {
  title:
    "Apps by Steffen Giebler — Orivela, Kolibi, Peeranimo, Carpincho",
  description:
    "Four apps built solo in Berlin: a document vault, an AI calorie tracker, a peer-matching platform, and a Spanish course. Live on iOS, Android and web.",
  alternates: {
    canonical: "/apps",
  },
  openGraph: {
    title: "Apps by Steffen Giebler — Orivela, Kolibi, Peeranimo, Carpincho",
    description:
      "Four apps built solo in Berlin: a document vault, an AI calorie tracker, a peer-matching platform, and a Spanish course. Live on iOS, Android and web.",
    url: "https://52n34s.app/apps",
    type: "website",
  },
};

export default function AppsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Apps by Steffen Giebler",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: { "@id": "https://52n34s.app/#orivela" },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: { "@id": "https://52n34s.app/#kolibi" },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: { "@id": "https://52n34s.app/#peeranimo" },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: { "@id": "https://52n34s.app/#carpincho" },
      },
    ],
  };

  return (
    <main className="relative flex min-h-screen flex-col bg-[#F5F0E8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <header className="px-6 pt-10 pb-16 text-center md:px-12 md:pt-16">
        <h1
          className="text-[32px] leading-[1.1] tracking-tight text-[#1A1A1A] md:text-[42px] lg:text-[48px]"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          Apps — built by Steffen.
        </h1>
        <p className="mx-auto mt-2 max-w-[520px] text-[15px] leading-[1.6] text-[#1A1A1A]/75 md:text-[16px] lg:mt-6 lg:text-[17px]">
          Five products. Five different problems.
        </p>
      </header>

      <section className="flex w-full flex-1 justify-center overflow-x-auto px-4 py-8 md:px-12 md:py-12">
        <AppsGallery />
      </section>

      <footer className="flex flex-col items-center gap-4 px-6 pt-16 pb-8 md:px-12 md:pb-10">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
          <Link
            href="/"
            className="text-[14px] text-[#1A1A1A]/60 underline underline-offset-4 hover:text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Curious who&apos;s behind these? → About Steffen
          </Link>
          <Link
            href="/#room-05"
            className="text-[14px] text-[#1A1A1A]/60 underline underline-offset-4 hover:text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Have your own idea? → Work with Steffen
          </Link>
        </div>
        <Link
          href="/"
          className="rounded-full border border-[#1A1A1A] px-5 py-2 text-[14px] font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-[#F5F0E8]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          ← Home
        </Link>
      </footer>
    </main>
  );
}
