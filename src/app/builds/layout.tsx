"use client";

import NavBubbles from "@/components/NavBubbles";

export default function BuildsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBubbles />
      {children}
    </>
  );
}
