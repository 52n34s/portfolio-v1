import type { Metadata } from "next";
import KolibiBuild from "@/components/KolibiBuild";

export const metadata: Metadata = {
  title: "Kolibi — Steffen",
  description:
    "The fastest AI photo calorie tracker for iOS and Android. Snap a plate, done in seconds — no typing, no database searching.",
};

export default function KolibiBuildPage() {
  return <KolibiBuild />;
}
