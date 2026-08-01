"use client";

import { useEffect, useState } from "react";
import HomeCollage from "@/components/HomeCollage";
import Room02 from "@/components/Room02";
import Room04 from "@/components/Room04";
import Room05 from "@/components/Room05";
import Room06 from "@/components/Room06";

export default function Home() {
  const [room02Visible, setRoom02Visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === "room-02") {
            setRoom02Visible(true);
          }
        });
      },
      { threshold: 0.5 },
    );

    const roomIds = ["room-01", "room-02", "room-05", "room-06"];

    roomIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
        Spanish variants, currently in waitlist. He has built more than ten
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

      <Room02 visible={room02Visible} />
      <Room04 visible />
      <Room05 />
      <Room06 />
    </>
  );
}
