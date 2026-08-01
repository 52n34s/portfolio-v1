export type Project = {
  id: string;
  title: string;
  isNda: boolean;
  role: string;
  stack: string[];
  problem: string;
  approach: string;
  timeline: string;
  outcome?: string;
};

export const projects: Project[] = [
  {
    id: "life-roads",
    title: "Live Financial Literacy Platform",
    isNda: true,
    role: "Senior Architect & Solo Developer",
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Realtime",
      "Row Level Security",
      "AI Avatar",
      "OpenAI",
      "Vercel",
      "Sentry",
    ],
    problem:
      "A financial education program needed a live, group-based simulation for workshops with 30–50 simultaneous participants. The room votes collectively on money decisions, but the financial consequence has to be calculated per person from their own balance — so the same vote lands differently depending on where each participant started. Anything that breaks does so in front of a live audience, on a shared screen, with a non-technical facilitator running the room under time pressure.",
    approach:
      "Chose Next.js and Supabase over no-code tooling for precise latency control and pixel-accurate large-screen layout. Built a concurrency-safe state engine using atomic guarded updates, closing a time-of-check-to-time-of-use race condition and adding idempotency protection so a re-evaluated round can never double-apply financial effects. The AI avatar layer reconnects per reaction rather than holding a persistent session, avoiding idle-time cost and connection races. Content and simulation logic are fully separated, so the entire narrative layer swaps via a single toggle without touching the engine underneath.",
    timeline: "Idea to launch in under 2 months",
    outcome:
      "In production since July 2026 with a real cohort, running weekly sessions across a six-to-eight week curriculum. A mass-lock incident in the first live session was root-caused from production data within minutes and resolved.",
  },
  {
    id: "laboratory-operations",
    title: "Laboratory Operations Platform",
    isNda: true,
    role: "Senior Architect & Solo Developer",
    stack: [
      "Bubble.io",
      "Multi-Tenant Architecture",
      "Role-Based Privacy Rules",
      "Audit Logging",
    ],
    problem:
      "Independent water testing laboratories needed to operate on one shared platform without ever seeing each other's data. Five distinct user roles, field technicians collecting samples on mobile, and a compliance requirement that every action be traceable after the fact.",
    approach:
      "Designed a multi-tenant architecture with strict data isolation enforced at the privacy-rule layer rather than in the interface, so separation holds regardless of how the data is queried. Built a mobile-first technician interface for field sampling and carried the workflow continuously from field capture through lab processing without a handoff gap. Full audit logging throughout, built for traceability rather than as an afterthought.",
    timeline: "",
    outcome:
      "An operational system built for accuracy and compliance, not just presentation.",
  },
  {
    id: "orivela",
    title: "Orivela",
    isNda: false,
    role: "Founder, Architect & Solo Developer",
    stack: [
      "Expo / React Native",
      "Supabase",
      "Row Level Security",
      "Edge Functions",
      "Claude Vision",
      "Claude Haiku",
      "WebCrypto",
      "EAS Build",
    ],
    problem:
      "People keep their most important documents scattered across email, cloud drives and paper — and can never find the one they need at the moment they need it. Storing that material centrally means holding highly sensitive personal data, which raises the security bar considerably above a typical consumer app.",
    approach:
      "Built security-by-design from the start: the API key never enters the app bundle, all AI calls route through JWT-verified Edge Functions rather than directly from the client, and documents are encrypted client-side via WebCrypto. Claude Vision handles document scanning, Claude Haiku powers plain-language search over stored records. Carried the full release pipeline end to end, from EAS Build through TestFlight to a live App Store listing.",
    timeline: "Idea to App Store, full release pipeline",
    outcome:
      "Shipped and live on the App Store, with an Android beta in closed testing.",
  },
  {
    id: "tournament-platform",
    title: "National Tournament Platform",
    isNda: true,
    role: "Senior Architect & Solo Developer",
    stack: [
      "Bubble.io",
      "Stripe (API Connector)",
      "Server-Side Webhooks",
      "SVG Map System",
    ],
    problem:
      "A national tournament circuit needed registration and payment handling that holds up under real event traffic. Players register across multiple divisions, spots are limited, and a payment that silently fails or a hold that never releases directly costs the organizer a slot and a participant their place.",
    approach:
      "Implemented Stripe through the API Connector rather than the native plugin, with server-side webhook verification instead of trusting a return URL — payment state is confirmed by the server, not the browser. Built a thirty-minute reservation hold with automatic release so abandoned checkouts free their spot without manual cleanup. Separated registrant from registration as distinct entities, which is what makes clean multi-division sign-up possible for a single person.",
    timeline: "",
    outcome:
      "Live and serving real events, with full admin operations for registration and payment management.",
  },
  {
    id: "credential-tracking",
    title: "Credential Tracking Platform",
    isNda: true,
    role: "Senior Architect & Solo Developer",
    stack: ["Bubble.io", "GPT-4o Vision (OCR)", "Resend", "Alert Engine"],
    problem:
      "Professionals in certification-heavy careers lose work when a credential quietly expires. The hard part is not storing expiry dates — it is alerting across multiple thresholds without burying the user in duplicate notifications for the same credential.",
    approach:
      "Built an alert engine with deduplication across four expiry thresholds, so each credential escalates on schedule without repeating itself. Separated record template from user record as distinct architectural concerns, which keeps credential definitions maintainable independently of individual holders. Added GPT-4o Vision document import so credentials extract automatically instead of being typed in, plus public shareable credential profiles.",
    timeline: "Delivered across six documented milestones",
    outcome:
      "Delivered in full and currently in active V2 planning with the client.",
  },
  {
    id: "kolibi",
    title: "Kolibi",
    isNda: false,
    role: "Founder, Architect & Solo Developer",
    stack: [
      "Expo / React Native",
      "TypeScript",
      "Supabase",
      "Row Level Security",
      "Edge Functions",
      "NativeWind",
      "TanStack Query",
      "Zustand",
      "RevenueCat",
    ],
    problem:
      "Calorie tracking fails because logging a meal takes too long and portion estimates are generic. A photo-based approach solves the input problem but creates two harder ones: portions still have to be personal, and historical totals must stay stable even when the underlying nutrition reference data changes later.",
    approach:
      "Built a two-stage personalized portion-calibration system that learns from each user's corrections through a trigger-based running average over raw data. Added nutrition snapshotting so past entries never drift when reference data is updated, plus versioned goal history so changing a target does not rewrite the past. Designed the data model as GDPR-by-design for Article 9 sensitive photo data, and abstracted the AI layer so the vision provider can be swapped without touching application logic.",
    timeline: "",
    outcome: "Live on the App Store for iOS, with Android available.",
  },
  {
    id: "film-discovery",
    title: "AI Film Discovery Platform",
    isNda: true,
    role: "Senior Architect & Solo Developer",
    stack: ["Bubble.io", "Role-Based Architecture", "Moderation Workflow"],
    problem:
      "Independent AI short films had no curated home — submissions needed review before publication, creators needed their own space, and the public needed a way to actually find work worth watching rather than scrolling an undifferentiated feed.",
    approach:
      "Built role-based architecture separating creators, admins and public users within a single system rather than bolting on permissions later. Implemented a moderated submission workflow with explicit approval states, so nothing reaches the public view unreviewed. Structured tagging and filtering carry the discovery layer, and the data model was designed from the start to support marketplace and monetization features without a rewrite.",
    timeline: "",
    outcome:
      "Built deliberately as a scalable MVP, structured for marketplace and monetization expansion.",
  },
  {
    id: "brand-trust",
    title: "Brand Trust Platform",
    isNda: true,
    role: "Senior Architect & Solo Developer",
    stack: ["Bubble.io", "AI Summarization", "Aggregation Architecture"],
    problem:
      "Star ratings tell brands almost nothing about why customers feel the way they do. Building something more honest means combining several product layers at once — collection, verification, community and summarization — without the whole thing collapsing into an unmaintainable tangle.",
    approach:
      "Unified structured review collection, verified brand trust mechanics, a community discussion layer and AI-powered review summarization into one coherent architecture. Built explicit data models for brands, reviews, users, comments and badges rather than treating reviews as loose content, which is what makes aggregation scale as volume grows. Trust and verification are architectural concerns here, not display features.",
    timeline: "",
    outcome:
      "A multi-layer platform architecture, structured for aggregation at scale.",
  },
];
