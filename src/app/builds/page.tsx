import type { Metadata } from "next";
import BuildsCorkboard from "@/components/BuildsCorkboard";

export const metadata: Metadata = {
  title: "Builds — Steffen",
  description: "Selected projects and shipped products.",
};

export default function BuildsIndexPage() {
  return (
    <main className="builds-cork-page">
      <BuildsCorkboard />
    </main>
  );
}
