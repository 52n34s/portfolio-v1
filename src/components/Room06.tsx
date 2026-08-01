"use client";

import ContactForm from "@/components/ContactForm";
import {
  CONTACT_SOCIAL_LINKS,
  CONTACT_USPS,
} from "@/data/contact-content";

export default function Room06() {
  return (
    <section id="room-06" className="room-06">
      <div id="contact" className="sr-only">
        Contact
      </div>
      <div className="room-06-inner">
        {/* Left — USPs */}
        <div className="room-06-left">
          <p className="room-06-label">{">_ contact"}</p>

          <h2 id="room-06-heading" className="room-06-headline">
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
            {CONTACT_USPS.map((usp) => (
              <li key={usp.title} className="room-06-usp">
                <h3 className="room-06-usp-title">
                  <span className="room-06-arrow">→</span> {usp.title}
                </h3>
                <p className="room-06-usp-sub">{usp.subtitle}</p>
              </li>
            ))}
          </ul>

          <div className="room-06-socials">
            {CONTACT_SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener" }
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
