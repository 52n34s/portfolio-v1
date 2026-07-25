import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps — built by Steffen",
  description: "Three products. Three different problems. Orivela, Kolibi, Peeranimo.",
  alternates: {
    canonical: "https://52n34s.app/apps",
  },
};

interface AppCardProps {
  name: string;
  outcome: string;
  accent: string;
  status?: string;
  cta?: string;
  href?: string;
  storeLinks?: { label: string; href: string; beta?: boolean }[];
}

function AppCard({
  name,
  outcome,
  accent,
  status,
  cta,
  href,
  storeLinks,
}: AppCardProps) {
  const cardClassName =
    "group relative flex flex-1 flex-col justify-between rounded-2xl border-2 bg-white p-6 transition-transform hover:-translate-y-1 md:p-8";

  const content = (
    <>
      {status && (
        <span
          className="absolute top-4 right-4 rounded-full px-3 py-1 font-dm-sans text-[11px] font-medium"
          style={{ backgroundColor: `${accent}20`, color: accent }}
        >
          {status}
        </span>
      )}
      <div>
        <h2 className="font-syne text-[24px] font-extrabold text-[#1A1A1A] md:text-[28px]">
          {name}
        </h2>
        <p className="mt-3 font-dm-sans text-[16px] leading-snug text-[#1A1A1A]/80 md:text-[18px]">
          {outcome}
        </p>
      </div>
      {storeLinks ? (
        <div>
          <div className="mt-8 flex flex-wrap gap-2">
            {storeLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-dm-sans text-[13px] font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                {link.label}
                {link.beta && (
                  <span className="text-[10px] font-normal opacity-80">
                    (beta)
                  </span>
                )}
                →
              </a>
            ))}
          </div>
          <p className="mt-2 font-dm-sans text-[11px] text-[#1A1A1A]/50">
            Android is in closed testing — request access after tapping Play
            Store.
          </p>
        </div>
      ) : (
        <span
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 font-dm-sans text-[14px] font-medium text-white transition-opacity group-hover:opacity-90"
          style={{ backgroundColor: accent }}
        >
          {cta} →
        </span>
      )}
    </>
  );

  if (storeLinks) {
    return (
      <div className={cardClassName} style={{ borderColor: accent }}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={status ? undefined : "_blank"}
      rel={status ? undefined : "noopener noreferrer"}
      className={cardClassName}
      style={{ borderColor: accent }}
    >
      {content}
    </a>
  );
}

export default function AppsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F5F0E8]">
      <header className="px-6 pt-10 pb-6 md:px-12 md:pt-16">
        <h1 className="font-syne text-[28px] font-extrabold leading-tight text-[#1A1A1A] md:text-[36px]">
          Apps — built by Steffen.
        </h1>
        <p className="mt-2 font-dm-sans text-[15px] text-[#1A1A1A]/70 md:text-[17px]">
          Three products. Three different problems.
        </p>
      </header>

      <section className="flex flex-1 flex-col gap-4 px-6 pb-6 md:flex-row md:px-12 md:pb-12">
        <AppCard
          name="Orivela"
          outcome="Every document you'll need someday. Found in seconds."
          accent="#1D9E75"
          storeLinks={[
            {
              label: "App Store",
              href: "https://apps.apple.com/us/app/orivela/id6785050823",
            },
            {
              label: "Play Store",
              href: "https://play.google.com/apps/testing/com.steffen.orivela.android",
              beta: true,
            },
          ]}
        />
        <AppCard
          name="Kolibi"
          outcome="One photo. Know what's left for today."
          accent="#EF9F27"
          status="Coming soon"
          cta="Join the waitlist"
          href="https://kolibi.app/"
        />
        <AppCard
          name="Peeranimo"
          outcome="People who get it. Without the endless scroll."
          accent="#1D9E75"
          cta="Try it now"
          href="https://peeranimo.app/"
        />
      </section>

      <footer className="flex flex-col items-center justify-between gap-4 px-6 pb-8 md:flex-row md:px-12 md:pb-10">
        <a
          href="/#room-02"
          className="font-dm-sans text-[14px] text-[#1A1A1A]/60 underline underline-offset-4 hover:text-[#1A1A1A]"
        >
          Curious who&apos;s behind these? → About Steffen
        </a>
        <a
          href="/"
          className="rounded-full border border-[#1A1A1A] px-5 py-2 font-dm-sans text-[14px] font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-[#F5F0E8]"
        >
          ← Home
        </a>
      </footer>
    </main>
  );
}
