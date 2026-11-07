import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "./ContactForm";
import { contactIsConfigured } from "@/lib/contact";
import { siteConfig } from "@/lib/site-config";
import { company } from "@/content/company";
import { contactCopy } from "@/content/contact";
import "@/styles/contact.css";

export function ContactSection() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <SectionLabel
          number="05"
          aside="Your next idea starts with a conversation"
        >
          Build with us
        </SectionLabel>
        <div className="contact-layout">
          <div className="contact-copy">
            <h2 id="contact-heading">
              {contactCopy.heading}
              <span>{contactCopy.emphasis}</span>
            </h2>
            <p>{contactCopy.description}</p>
            <ul className="contact-prompts" aria-label="What we can discuss">
              {contactCopy.prompts.map((prompt, index) => (
                <li key={prompt}>
                  <span aria-hidden="true">0{index + 1}</span>
                  {prompt}
                </li>
              ))}
            </ul>
            <div className="contact-location">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                <circle cx="12" cy="10" r="2" />
              </svg>
              <div>
                <span className="mono">Based in</span>
                <strong>{company.location}</strong>
              </div>
            </div>
          </div>
          <ContactForm
            configured={contactIsConfigured()}
            email={siteConfig.contactEmail}
          />
        </div>
      </div>
    </section>
  );
}
