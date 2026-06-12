"use client";

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

const PROJECTS: Project[] = [
  {
    id: "peeranimo",
    name: "Peeranimo",
    year: "2026",
    tagline: "Du bist nicht allein — vor dem Sprung.",
    tags: ["Community", "Peer-to-Peer", "DACH", "Bubble + Stripe"],
    description:
      "A peer-to-peer community for people with an unfulfilled dream. No coaching. No experts. Just real people who feel the same — before they dare to leap.",
    url: "https://peeranimo.com",
    featured: true,
    accentColor: "#FF6B35",
  },
  {
    id: "the",
    name: "THE",
    year: "2024",
    tagline: "The future of honest reviews.",
    tags: ["SaaS", "Reviews", "AI Analysis", "Community"],
    description:
      "A platform for verified, honest reviews with AI-powered analysis and competitor insights. Built for brands that want real feedback.",
    url: "#",
    featured: false,
    accentColor: "#F4D35E",
  },
  {
    id: "getabite",
    name: "GetaBite",
    year: "2025",
    tagline: "Restaurant websites that actually convert.",
    tags: ["SaaS", "Restaurants", "QR Menus", "Reservations"],
    description:
      "A complete SaaS platform for restaurants — beautiful websites, reservation systems, QR menus and a powerful dashboard.",
    url: "#",
    featured: false,
    accentColor: "#00C2A8",
  },
  {
    id: "applento",
    name: "Applento",
    year: "2025",
    tagline: "Rental applications reimagined.",
    tags: ["PropTech", "Automation", "Landlords", "Tenants"],
    description:
      "Streamlined rental applications for landlords and tenants. Less paperwork, more clarity, faster decisions.",
    url: "#",
    featured: false,
    accentColor: "#7B5CF0",
  },
  {
    id: "reelhouseai",
    name: "ReelhouseAI",
    year: "2025",
    tagline: "Curated home for independent AI films.",
    tags: ["AI", "Film", "Curation", "Community"],
    description:
      "A curated platform for independent AI-generated films. Discover, watch and support the next wave of AI cinema.",
    url: "#",
    featured: false,
    accentColor: "#FF6B8A",
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
      if (count >= PROJECTS.length) clearInterval(interval);
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
          Products I
          <br />
          architected.
        </h2>
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
                {PROJECTS.slice(0, shownCount).map((project, index) => (
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
                  ← Zurück
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
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
