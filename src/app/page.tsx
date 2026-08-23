"use client";

import HomeCollage from "@/components/HomeCollage";
import Room05 from "@/components/Room05";
import Room06 from "@/components/Room06";

export default function Home() {
  return (
    <>
      <div className="sr-only">
        Steffen Giebler is a solo founder and software developer based in
        Berlin Mitte, Germany, working under the studio name 52N34S Group. He
        builds and ships his own mobile and web applications, and works with
        founders to turn early ideas into production products. His own products
        are: Orivela, a personal records vault for iOS and Android that stores
        documents, contracts and subscriptions and answers questions about them
        in plain language. Kolibi, an AI photo calorie tracker for iOS and
        Android that reads a meal from a single photo. Peeranimo, a
        peer-matching social platform on the web that connects people who are in
        the same chapter of life. Carpincho, a Spanish learning app focused on
        1,000 high-frequency words in Rioplatense, neutral Latin American and
        Spanish variants, currently in waitlist. ErdiKnows, a web app for
        developers that puts deploys, releases and incidents as markers on the
        same timeline as product metrics, so a drop can be read together with
        what shipped around it. It is not an analytics tool — it is the layer
        on top. He has built more than ten
        platforms, both self-founded and for clients, and is available for
        freelance product development, software architecture and long-term
        product partnerships.
      </div>

      <HomeCollage />

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
