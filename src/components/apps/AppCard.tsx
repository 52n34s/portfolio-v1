import type { AppEntry } from "@/data/apps";
import { ctaLabel, stampNote } from "@/data/apps";
import KolibiVisual from "@/components/apps/visuals/KolibiVisual";
import GetaBiteVisual from "@/components/apps/visuals/GetaBiteVisual";
import CarpinchoVisual from "@/components/apps/visuals/CarpinchoVisual";
import PeeranimoVisual from "@/components/apps/visuals/PeeranimoVisual";
import OrivelaVisual from "@/components/apps/visuals/OrivelaVisual";
import ErdiKnowsVisual from "@/components/apps/visuals/ErdiKnowsVisual";

const VISUALS: Record<AppEntry["visual"], () => React.ReactElement> = {
  kolibi: KolibiVisual,
  getabite: GetaBiteVisual,
  carpincho: CarpinchoVisual,
  peeranimo: PeeranimoVisual,
  orivela: OrivelaVisual,
  erdiknows: ErdiKnowsVisual,
};

const ROTATIONS = [-1.1, 0.8, -0.6, 1.2, -0.9, 0.5];

function LiveStamp({ name, note }: { name: string; note: string }) {
  return (
    <div className="absolute -right-3 -top-3 z-30 flex h-[68px] w-[68px] shrink-0 -rotate-12 flex-col items-center justify-center rounded-full border-2 border-[#1D9E75] bg-[#F5F0E8] text-[#1D9E75] opacity-90">
      <span
        className="text-[7px] tracking-wider"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {name.toUpperCase()}
      </span>
      <span
        className="text-[13px] font-medium leading-none"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        LIVE
      </span>
      <span
        className="px-1.5 text-center text-[5.5px] leading-[1.15] tracking-wider"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {note}
      </span>
    </div>
  );
}

export default function AppCard({ app, index }: { app: AppEntry; index: number }) {
  const Visual = VISUALS[app.visual];
  const rotate = ROTATIONS[index % ROTATIONS.length];
  const external = app.href.startsWith("http");

  return (
    <article
      className="group relative flex min-h-[480px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[2px_5px_14px_rgba(26,26,26,0.13)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-0 md:min-h-[560px]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <LiveStamp name={app.name} note={stampNote(app.href)} />

      <div className="h-[240px] w-full shrink-0 md:h-[300px]">
        <Visual />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
        <div className="flex items-center gap-3.5">
          <img
            src={app.logo}
            alt={`${app.name} app icon`}
            className="h-14 w-14 shrink-0 rounded-[14px] border border-black/5 object-cover shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          />
          <div className="min-w-0">
            <h3
              className="truncate text-[30px] font-semibold leading-tight text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              {app.name}
            </h3>
            <p
              className="truncate text-[12px] uppercase tracking-wide text-[#1A1A1A]/55"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {app.platform}
            </p>
          </div>
        </div>

        {app.badge && (
          <span
            className="inline-block w-fit rounded-full bg-[#FCE4ED] px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-[#FC2E70]"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            {app.badge}
          </span>
        )}

        <h4
          className="text-[22px] font-semibold leading-snug text-[#1A1A1A]"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          {app.hook}
        </h4>

        <p className="flex-1 text-[17px] leading-relaxed text-[#1A1A1A]/90">
          {app.body}
        </p>

        <a
          href={app.href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-auto inline-block w-fit rounded-full bg-[#1A1A1A] px-5 py-2.5 text-[13px] font-medium text-[#F5F0E8] transition-opacity hover:opacity-85"
        >
          {ctaLabel(app.href)} →
        </a>
      </div>
    </article>
  );
}
