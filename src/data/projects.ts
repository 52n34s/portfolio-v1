export type Project = {
  id: string;
  title: string; // bei NDA-Projekten z.B. "Fintech Platform" statt echtem Namen
  isNda: boolean;
  role: string; // z.B. "Senior Architect & Solo Developer"
  stack: string[]; // z.B. ["Next.js", "Supabase", "React Native"]
  problem: string; // 1-2 Sätze: welches Problem gelöst wurde
  approach: string; // 1-2 Sätze: wie es angegangen wurde, mit Fokus auf Architektur-Entscheidungen
  timeline: string; // z.B. "3 months, idea to launch"
  outcome?: string; // optional, falls messbares Ergebnis vorhanden und nicht NDA-sensibel
};

/**
 * Migrated from Room03 phone-mockup data.
 * problem / approach / timeline / outcome / role were not present there —
 * left empty for Steffen to fill with real content. Do not invent copy.
 */
export const projects: Project[] = [
  {
    id: "orivela",
    title: "Orivela",
    isNda: false,
    role: "",
    stack: [
      "Expo",
      "Supabase",
      "Claude Vision",
      "WebCrypto",
      "App Store",
      "Self-Built",
    ],
    problem: "",
    approach: "",
    timeline: "",
  },
  {
    id: "peeranimo",
    title: "Peeranimo",
    isNda: false,
    role: "",
    stack: [
      "Next.js",
      "Supabase",
      "Community Platform",
      "Auth & RLS",
      "Self-Built",
    ],
    problem: "",
    approach: "",
    timeline: "",
  },
  {
    id: "getabite",
    title: "Food Delivery Platform",
    isNda: true,
    role: "",
    stack: [
      "SaaS",
      "Multi-Location",
      "Reservation Logic",
      "Stripe Billing",
      "Self-Built",
    ],
    problem: "",
    approach: "",
    timeline: "",
  },
  {
    id: "applento",
    title: "SaaS Product",
    isNda: true,
    role: "",
    stack: [
      "SaaS",
      "Workflow Platform",
      "Multi-Role",
      "Real Estate",
      "Self-Built",
    ],
    problem: "",
    approach: "",
    timeline: "",
  },
  {
    id: "the",
    title: "THE",
    isNda: false,
    role: "",
    stack: [
      "SaaS",
      "AI Integration",
      "Community",
      "Trust & Reviews",
      "Self-Built",
    ],
    problem: "",
    approach: "",
    timeline: "",
  },
  {
    id: "faroutmedx",
    title: "Healthcare Platform",
    isNda: true,
    role: "",
    stack: [
      "SaaS",
      "AI / OCR",
      "Certification Tracking",
      "GPT-4o Vision",
      "Client Project",
    ],
    problem: "",
    approach: "",
    timeline: "",
  },
  {
    id: "reelhouseai",
    title: "AI Media Tool",
    isNda: true,
    role: "",
    stack: [
      "SaaS",
      "Moderation System",
      "Multi-Role",
      "Creator Platform",
      "Client Project · NDA",
    ],
    problem: "",
    approach: "",
    timeline: "",
  },
  {
    id: "aidirector",
    title: "AI Media Tool",
    isNda: true,
    role: "",
    stack: [
      "AI Integration",
      "Creative Tools",
      "Prompt Engineering",
      "SaaS",
      "Client Project · NDA",
    ],
    problem: "",
    approach: "",
    timeline: "",
  },
  {
    id: "watertesting",
    title: "Industry Testing Tool",
    isNda: true,
    role: "",
    stack: [
      "Multi-Tenant SaaS",
      "Compliance",
      "Audit Logging",
      "Five User Roles",
      "Client Project",
    ],
    problem: "",
    approach: "",
    timeline: "",
  },
  {
    id: "coursehub",
    title: "Education Platform",
    isNda: true,
    role: "",
    stack: [
      "Blueprint",
      "Marketplace",
      "Stripe Connect",
      "Architecture",
      "Client Project",
    ],
    problem: "",
    approach: "",
    timeline: "",
  },
  {
    id: "seeingtree",
    title: "Family/Social App",
    isNda: true,
    role: "",
    stack: [
      "Platform Audit",
      "Takeover",
      "Multi-Role",
      "SaaS Architecture",
      "Client Project",
    ],
    problem: "",
    approach: "",
    timeline: "",
  },
];
