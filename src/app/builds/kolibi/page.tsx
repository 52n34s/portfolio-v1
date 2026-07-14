import type { Metadata } from "next";
import KolibiBuild from "@/components/KolibiBuild";

export const metadata: Metadata = {
  title: "Kolibi — Steffen",
  description:
    "AI photo calorie tracker for iOS and Android. Snap a plate, get every ingredient read separately — no typing, no database searching.",
};

export default function KolibiBuildPage() {
  return <KolibiBuild />;
}
