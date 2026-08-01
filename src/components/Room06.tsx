"use client";

import { useState } from "react";

const USPS = [
  {
    title: "From idea to launch.",
    subtitle: "Full product thinking, not just implementation.",
  },
  {
    title: "I architect systems, not just pages.",
    subtitle: "Clean data models. Scalable from day one.",
  },
  {
    title: "Business thinking built in.",
    subtitle: "Revenue models, retention, growth — not just features.",
  },
  {
    title: "10+ platforms. Real products.",
    subtitle:
      "Self-built and client projects across multiple industries.",
  },
];

const PROJECT_TYPES = [
  "SaaS Product",
  "Marketplace",
  "Community Platform",
  "Internal Tool",
  "AI Product",
  "Architecture / Blueprint",
  "Platform Audit",
  "Other",
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/steffenletsdoit/" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~01984538d26b3fcb98?viewMode=1" },
  { label: "Email", href: "mailto:steffen@52n34s.com" },
];

function FormTornEdge() {
  return (
    <svg
      className="room-06-form-torn"
      viewBox="0 0 320 14"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="#0d0d0d"
        d="M0 14 L0 6 L20 12 L40 4 L60 11 L80 3 L100 12 L120 5 L140 11 L160 2 L180 10 L200 4 L220 12 L240 3 L260 11 L280 5 L300 12 L320 6 L320 14 Z"
      />
    </svg>
  );
}

export default function Room06() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectTypes, setProjectTypes] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const toggleProjectType = (type: string) => {
    setProjectTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectTypes, message }),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setProjectTypes([]);
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="room-06" className="room-06">
      <div className="room-06-inner">
        {/* Left — USPs */}
        <div className="room-06-left">
          <p className="room-06-label">{">_ contact"}</p>

          <h2 className="room-06-headline">
            Let&apos;s build
            <br />
            something real.
          </h2>

          <p className="room-06-sub">
            I&apos;m available for freelance projects,
            <br />
            architecture work, and long-term
            <br />
            product partnerships.
          </p>

          <ul className="room-06-usps">
            {USPS.map((usp) => (
              <li key={usp.title} className="room-06-usp">
                <p className="room-06-usp-title">
                  <span className="room-06-arrow">→</span> {usp.title}
                </p>
                <p className="room-06-usp-sub">{usp.subtitle}</p>
              </li>
            ))}
          </ul>

          <div className="room-06-socials">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="room-06-social-btn"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Form on paper card */}
        <div className="room-06-form-wrap">
          <div className="room-06-paper">
            {submitStatus === "success" ? (
              <div className="room-06-success">
                <p>✓ Message received.</p>
                <p>I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="room-06-form" onSubmit={handleSubmit}>
                <div className="room-06-field">
                  <label className="room-06-field-label" htmlFor="contact-name">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="room-06-input"
                  />
                </div>

                <div className="room-06-field">
                  <label
                    className="room-06-field-label"
                    htmlFor="contact-email"
                  >
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="room-06-input"
                  />
                </div>

                <fieldset className="room-06-field">
                  <legend className="room-06-field-label">
                    What are you building?
                  </legend>
                  <div className="room-06-tags">
                    {PROJECT_TYPES.map((type) => {
                      const selected = projectTypes.includes(type);
                      return (
                        <button
                          key={type}
                          type="button"
                          className={`room-06-tag${selected ? " is-selected" : ""}`}
                          aria-pressed={selected}
                          onClick={() => toggleProjectType(type)}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="room-06-field">
                  <label
                    className="room-06-field-label"
                    htmlFor="contact-message"
                  >
                    Your message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="room-06-input room-06-textarea"
                  />
                </div>

                {submitStatus === "error" && (
                  <p className="room-06-error">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="room-06-submit"
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Send — let's build something real"}
                </button>
              </form>
            )}
            <FormTornEdge />
          </div>
        </div>
      </div>
    </section>
  );
}
