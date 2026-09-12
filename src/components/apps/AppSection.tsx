import type { AppSection as AppSectionData } from "@/data/apps";
import AppCard from "@/components/apps/AppCard";

export default function AppSection({
  section,
  topClassName = "pt-24 md:pt-32",
}: {
  section: AppSectionData;
  topClassName?: string;
}) {
  return (
    <section className={`${topClassName} pb-24 md:pb-32`}>
      <p
        className="text-[12px] uppercase tracking-[0.22em] text-[#1A1A1A]/50"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {section.eyebrow}
      </p>
      <h2
        className="mt-3 text-[clamp(30px,4vw,46px)] font-semibold leading-tight text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
      >
        {section.headline}
      </h2>
      <p className="mt-4 max-w-[520px] text-[18px] leading-relaxed text-[#1A1A1A]/70">
        {section.subline}
      </p>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
        {section.apps.map((app, index) => (
          <AppCard key={app.slug} app={app} index={index} />
        ))}
      </div>
    </section>
  );
}
