"use client";

import { useState } from "react";
import { CONTACT_PROJECT_TYPES } from "@/data/contact-content";

function FormTornEdge() {
  return (
    <svg
      className="room-06-form-torn"
      viewBox="0 0 320 14"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="#0E1620"
        d="M0 14 L0 6 L20 12 L40 4 L60 11 L80 3 L100 12 L120 5 L140 11 L160 2 L180 10 L200 4 L220 12 L240 3 L260 11 L280 5 L300 12 L320 6 L320 14 Z"
      />
    </svg>
  );
}

export default function ContactForm({
  idPrefix = "contact",
}: {
  idPrefix?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectTypes, setProjectTypes] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const nameId = `${idPrefix}-name`;
  const emailId = `${idPrefix}-email`;
  const messageId = `${idPrefix}-message`;

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
    <div className="room-06-paper">
      {submitStatus === "success" ? (
        <div className="room-06-success">
          <p>✓ Message received.</p>
          <p>I&apos;ll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form className="room-06-form" onSubmit={handleSubmit}>
          <div className="room-06-field">
            <label className="room-06-field-label" htmlFor={nameId}>
              Name *
            </label>
            <input
              id={nameId}
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="room-06-input"
            />
          </div>

          <div className="room-06-field">
            <label className="room-06-field-label" htmlFor={emailId}>
              Email *
            </label>
            <input
              id={emailId}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="room-06-input"
            />
          </div>

          <fieldset className="room-06-field">
            <legend className="room-06-field-label">What are you building?</legend>
            <div className="room-06-tags">
              {CONTACT_PROJECT_TYPES.map((type) => {
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
            <label className="room-06-field-label" htmlFor={messageId}>
              Your message *
            </label>
            <textarea
              id={messageId}
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
            {isSubmitting ? "Sending..." : "Send — let's build something real"}
          </button>
        </form>
      )}
      <FormTornEdge />
    </div>
  );
}
