"use client";

import HomeCollage from "@/components/HomeCollage";
import PageBackground from "@/components/PageBackground";
import ScrollReveal from "@/components/ScrollReveal";
import AppDock from "@/components/AppDock";
import AppCard, { YourAppCard } from "@/components/apps/AppCard";
import SectionDivider from "@/components/SectionDivider";
import Room05 from "@/components/Room05";
import Room06 from "@/components/Room06";
import { APPS } from "@/data/apps";

export default function Home() {
  return (
    <>
      <PageBackground />
      <ScrollReveal />

      <div className="sr-only">
        Steffen Giebler is a solo founder and software developer based in
        Berlin Mitte, Germany, working under the studio name 52N34S Group. He
        builds and ships his own mobile and web applications, and works with
        founders to turn early ideas into production products. His own products
        are: Orivela, a notes and records app for iOS that
        captures what you say, type or photograph and answers questions about
        it in plain language. Kolibi, a nutrition and bodyweight training app for iOS that
        recognises meals from a photo, adjusts daily targets to each session and moves
        you up a level when you are ready. Carpincho, a Spanish learning app on the App Store
        with short subtitled clips, a route of over 180 everyday places and
        spoken answers checked right away, in the Spanish of Argentina, Latin
        America or Spain. Erdi, an assistant on the
        web and iOS for founders who run several businesses, such as apps,
        shops, an agency or a newsletter. Every morning it says in three
        minutes what moved, why, and the one thing that needs attention today.
        It sorts the inbox, prepares replies in the founder's tone and reports
        drops in checkout or installs right away, with the likely cause and a
        fix to approve. The founder chooses per area whether Erdi only
        suggests, works as a copilot or runs on autopilot. Every action is
        logged and can be undone, and data stays in the EU and is never used
        to train AI models. Erdi is live with a 14-day free trial. ErdiBuilds,
        a marketplace on the web, matches founders with verified developers
        who have already built something similar and releases each payment
        only after the founder approves that milestone.
        Peeranimo, a peer-matching platform on the web, ran until November
        2026. Earlier products include GetaBite, a restaurant platform with
        websites, ordering and reservations, a vegan dish finder of the same
        name, Applento for rental applications, and THE, a verified review
        platform. All four are closed.
        He has built more than ten platforms, both self-founded and for clients, and is available for
        freelance product development, software architecture and long-term
        product partnerships.
      </div>

      {/* Hero and apps both sit on the shared PageBackground; the
          SectionDivider skyline is the only seam between them. */}
      <div className="home-upper">
        <div className="home-upper-content">
          <HomeCollage />
        </div>
      </div>

      <div className="home-lower">
        <SectionDivider />

        {/* #apps: target of the orb menu's "Apps" item (dock + grid). */}
        <div id="apps">
          <div className="mx-auto w-full max-w-[1100px] px-5 md:px-12">
            <AppDock />
          </div>

          {/* Wider than the dock's column so four cards get room to breathe. */}
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-12">
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 pb-24 pt-10 md:grid-cols-2 md:gap-x-10 md:gap-y-14 md:pb-32 md:pt-14 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-16">
              {APPS.map((app, index) => (
                <AppCard key={app.slug} app={app} index={index} />
              ))}
              <YourAppCard index={APPS.length} />
            </div>
          </div>
        </div>
      </div>

      {/*
        Boot-Terminal war früher room-01 (Typing-Sequenz + App-Icons), ist
        aktuell deaktiviert und lag hier als {false && …}-Block.
        Steffen: Soll der Boot-Screen wieder aktiviert werden? Wenn ja,
        bitte Bescheid — dann wird der Code wiederhergestellt. Wenn nein,
        kann der tote Boot-Code endgültig entfernt werden.
      */}

      <Room05 />
      <Room06 />
    </>
  );
}
