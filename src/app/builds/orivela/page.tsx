import type { Metadata } from "next";
import OrivelaBuild from "@/components/OrivelaBuild";

export const metadata: Metadata = {
  title: "Orivela — Steffen",
  description:
    "Orivela keeps notes and records in one place. Say it, type it or snap it, and get it back by asking in plain language. Live on iOS, Android beta and the web.",
  alternates: { canonical: "/builds/orivela" },
};

export default function OrivelaBuildPage() {
  return <OrivelaBuild />;
}
