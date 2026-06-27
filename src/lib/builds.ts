export interface BuildEntry {
  slug: string;
  name: string;
  description: string;
  year: string;
  accentColor: string;
}

export const builds: BuildEntry[] = [
  {
    slug: "orivela",
    name: "Orivela",
    description: "AI-powered iOS vault — shipped to App Store.",
    year: "2026",
    accentColor: "#a78bfa",
  },
];
