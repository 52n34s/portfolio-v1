"use client";

import AppCardStack, { useStackPlacement } from "@/components/AppCardStack";

export default function AppsGallery() {
  const placement = useStackPlacement();
  return (
    <AppCardStack
      variant="apps"
      placement={placement}
      className={placement === "row" ? "w-full" : undefined}
    />
  );
}
