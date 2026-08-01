"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  year: string;
  tagline: string;
  tags: string[];
  description: string;
  url: string;
  featured: boolean;
  accentColor: string;
}

const projects: Project[] = [
  {
    id: "orivela",
    name: "Orivela",
    year: "2026",
    tagline: "AI-powered iOS vault — shipped to App Store.",
    tags: [
      "Expo",
      "Supabase",
      "Claude Vision",
      "WebCrypto",
      "App Store",
      "Self-Built",
    ],
    description:
      "A personal records vault for iOS. Store documents, subscriptions, and contacts in one encrypted place — ask in plain language, scan with AI, find anything in seconds. Shipped solo from idea to App Store.",
    url: "/builds/orivela",
    featured: true,
    accentColor: "#a78bfa",
  },
  {
    id: "peeranimo",
    name: "Peeranimo",
    year: "2026",
    tagline:
      "Community platform connecting people by shared life context and direction.",
    tags: [
      "Next.js",
      "Supabase",
      "Community Platform",
      "Auth & RLS",
      "Self-Built",
    ],
    description:
      "A community platform to help people find others in the same chapter of life — not by interest tag, but by shared context, values, and direction. Built on Next.js, TypeScript, and Supabase with custom auth, group architecture, and RLS throughout.",
    url: "https://peeranimo.app",
    featured: true,
    accentColor: "#5B4FCF",
  },
  {
    id: "getabite",
    name: "Food Delivery Platform",
    year: "2025",
    tagline:
      "Multi-location hospitality SaaS with reservation infrastructure and operator dashboards.",
    tags: [
      "SaaS",
      "Multi-Location",
      "Reservation Logic",
      "Stripe Billing",
      "Self-Built",
    ],
    description:
      "A complete operational system for restaurants and cafés — branded websites, QR menus, and structured reservation flows. The complexity lives in the backend: capacity rules, time-slot logic, booking windows, and location-specific behavior.",
    url: "https://getabite.app",
    featured: false,
    accentColor: "#22C55E",
  },
  {
    id: "applento",
    name: "SaaS Product",
    year: "2025",
    tagline:
      "Real estate applicant screening and workflow platform for agents, companies, and applicants.",
    tags: [
      "SaaS",
      "Workflow Platform",
      "Multi-Role",
      "Real Estate",
      "Self-Built",
    ],
    description:
      "A workflow-driven platform replacing spreadsheets and emails in real estate screening. Supports multiple stakeholder perspectives — agents, applicants, and company-level operators — each with their own interface and data visibility.",
    url: "https://applento.com",
    featured: false,
    accentColor: "#7B2FE8",
  },
  {
    id: "the",
    name: "THE",
    year: "2024",
    tagline:
      "Brand review and trust platform with AI-powered summaries, community layer, and embeddable badge system.",
    tags: [
      "SaaS",
      "AI Integration",
      "Community",
      "Trust & Reviews",
      "Self-Built",
    ],
    description:
      "A brand review and trust platform combining structured review collection, public brand profiles, a community layer, AI-powered summaries, and an embeddable trust badge into one coherent system.",
    url: "https://thehonestexperience.com",
    featured: false,
    accentColor: "#E8372A",
  },
  {
    id: "faroutmedx",
    name: "Healthcare Platform",
    year: "2025",
    tagline:
      "Credential tracking platform for high-stakes professionals with GPT-4o OCR and smart alerts.",
    tags: [
      "SaaS",
      "AI / OCR",
      "Certification Tracking",
      "GPT-4o Vision",
      "Client Project",
    ],
    description:
      "A credential and certification tracking platform for EMS, wildfire, offshore, and military professionals. Built with a GPT-4o Vision OCR pipeline, smart expiration alerts, and public shareable credential profiles.",
    url: "https://faroutmedx.com",
    featured: false,
    accentColor: "#C05A14",
  },
  {
    id: "reelhouseai",
    name: "AI Film Platform",
    year: "2025",
    tagline:
      "Curated AI film discovery platform with creator dashboards and moderation workflows.",
    tags: [
      "SaaS",
      "Moderation System",
      "Multi-Role",
      "Creator Platform",
      "Client Project · NDA",
    ],
    description:
      "A curated discovery platform for independent AI short films with a multi-role architecture supporting creators, moderators, and public audiences. Moderation states, approval logic, and creator dashboards built for scale.",
    url: "#",
    featured: false,
    accentColor: "#F5A623",
  },
  {
    id: "aidirector",
    name: "AI Director Studio",
    year: "2025",
    tagline:
      "AI-powered scene planning tool for structured prompt generation across multi-scene film projects.",
    tags: [
      "AI Integration",
      "Creative Tools",
      "Prompt Engineering",
      "SaaS",
      "Client Project · NDA",
    ],
    description:
      "An AI-powered film planning tool that translates high-level creative intent into structured scene-by-scene prompts for AI-generated short films. Separates projects, scenes, characters, and generation state for non-linear creative workflows.",
    url: "#",
    featured: false,
    accentColor: "#2563EB",
  },
  {
    id: "watertesting",
    name: "Industry Testing Tool",
    year: "2025",
    tagline:
      "Multi-tenant compliance SaaS for water testing labs with five user roles and audit logging.",
    tags: [
      "Multi-Tenant SaaS",
      "Compliance",
      "Audit Logging",
      "Five User Roles",
      "Client Project",
    ],
    description:
      "A multi-tenant SaaS system managing the full chain from field technician sampling through internal lab processing to compliance reporting. Five distinct user roles, mobile-friendly field data capture, and first-class audit logging.",
    url: "#",
    featured: false,
    accentColor: "#7B8FD4",
  },
  {
    id: "coursehub",
    name: "Education Platform",
    year: "2025",
    tagline:
      "Full platform architecture and Blueprint for a sports courses marketplace — designed before a single line was built.",
    tags: [
      "Blueprint",
      "Marketplace",
      "Stripe Connect",
      "Architecture",
      "Client Project",
    ],
    description:
      "A sports course and cohort marketplace I architected as a paid Blueprint engagement — the entire value delivered was architecture, not code. Covered 11 core entities, Stripe Connect Express integration, seat reservation logic, role-based permissions, and three build scenarios with honest hour estimates.",
    url: "#",
    featured: false,
    accentColor: "#2563EB",
  },
  {
    id: "seeingtree",
    name: "Family/Social App",
    year: "2025",
    tagline:
      "Full system audit and takeover strategy for a live Bubble SaaS — assessed, diagnosed, and restructured for production readiness.",
    tags: [
      "Platform Audit",
      "Takeover",
      "Multi-Role",
      "SaaS Architecture",
      "Client Project",
    ],
    description:
      "A family and community SaaS platform I was brought in to audit and take over after structural problems blocked further growth. My audit covered data model architecture, privacy rules, role-based access control, feed and notification workflows, and multi-space isolation logic — delivered as a senior-level remediation roadmap.",
    url: "#",
    featured: false,
    accentColor: "#16A34A",
  },
];

interface Room03Props {
  visible: boolean;
}

export default function Room03({ visible }: Room03Props) {
  const [shownCount, setShownCount] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (!visible) return;

    setShownCount(0);
    setSelectedProject(null);
    setIsFlipped(false);

    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setShownCount(count);
      if (count >= projects.length) clearInterval(interval);
    }, 200);

    return () => clearInterval(interval);
  }, [visible]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsFlipped(true);
  };

  const handleBack = () => {
    setIsFlipped(false);
    setTimeout(() => setSelectedProject(null), 700);
  };

  return (
    <section
      id="room-03"
      className={`room-03 grid-bg ${visible ? "room-03-visible" : ""}`}
    >
      <div className="room-03-ghost" aria-hidden="true">
        BUILDS
      </div>

      <div className="room-03-header">
        <p className="room-03-label">./builds</p>
        <h2 className="room-03-title">
          Some of what
          <br />
          I&apos;ve built.
        </h2>
        <p className="room-03-subtitle">A selection of 10+ projects.</p>
      </div>

      <div className="room-03-phone-wrap">
        <div className={`phone ${isFlipped ? "flipped" : ""}`}>
          {/* Front — Chat list */}
          <div className="phone-front">
            <div className="dynamic-island" />
            <div className="phone-screen-front">
              <div className="chat-header-bar">
                <span className="chat-header-back">←</span>
                <span className="chat-header-contact">
                  <span className="chat-online-dot" />
                  steffen@builds
                </span>
                <span className="chat-header-menu">···</span>
              </div>

              <div className="chat-list">
                {projects.slice(0, shownCount).map((project, index) => (
                  <div
                    key={project.id}
                    className="chat-row"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <button
                      type="button"
                      className={`chat-bubble ${project.featured ? "chat-bubble-featured" : ""}`}
                      onClick={() => handleProjectClick(project)}
                    >
                      {project.featured && (
                        <span className="featured-badge">★ featured</span>
                      )}
                      {project.featured ? `★ ${project.name}` : project.name}
                    </button>
                    <span className="chat-year">{project.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Back — Project detail */}
          <div className="phone-back">
            {selectedProject && (
              <>
                <button
                  type="button"
                  className="phone-back-btn"
                  onClick={handleBack}
                >
                  ← Back
                </button>

                <h3
                  className="phone-back-name"
                  style={{ color: selectedProject.accentColor }}
                >
                  {selectedProject.name}
                </h3>
                <p className="phone-back-tagline">{selectedProject.tagline}</p>

                <div className="phone-back-tags">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="phone-back-tag"
                      style={{ borderColor: selectedProject.accentColor }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="phone-back-desc">{selectedProject.description}</p>

                {selectedProject.url.startsWith("/") ? (
                  <Link href={selectedProject.url} className="phone-back-visit">
                    → View Case Study
                  </Link>
                ) : (
                  <a
                    href={selectedProject.url}
                    className="phone-back-visit"
                    target={selectedProject.url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      selectedProject.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    → Visit Project
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
