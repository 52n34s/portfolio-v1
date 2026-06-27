import type { Metadata } from "next";
import OrivelaBuild from "@/components/OrivelaBuild";

export const metadata: Metadata = {
  title: "Orivela — Steffen",
  description:
    "AI-powered iOS vault for personal records — shipped to the App Store. End-to-end encrypted, plain-language search, document scanning.",
};

export default function OrivelaBuildPage() {
  return <OrivelaBuild />;
}
