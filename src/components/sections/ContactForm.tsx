"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { contactCopy, projectTypes } from "@/content/contact";

export function ContactForm({
  configured,
  email,
}: {
  configured: boolean;
  email?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const successHeading = useRef<HTMLHeadingElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const focusNextInquiry = useRef(false);

  useEffect(() => {
    if (status === "sent") successHeading.current?.focus();
    if (status === "idle" && focusNextInquiry.current) {
      nameInput.current?.focus();
      focusNextInquiry.current = false;
    }
  }, [status]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!configured || status === "sending") return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || result?.sent !== true) {
        setStatus("error");
        setMessage(
          typeof result?.error === "string"
            ? result.error
            : contactCopy.errorMessage,
        );
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setMessage(contactCopy.errorMessage);
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={submit}
      aria-label="Project inquiry"
      aria-describedby={!configured ? "contact-availability" : undefined}
    >
      {status === "sent" ? (
        <div className="contact-success">
          <span className="contact-success-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="m5 12 4 4L19 6" />
            </svg>
          </span>
          <p className="mono">Inquiry sent</p>
          <h3 ref={successHeading} tabIndex={-1}>
            {contactCopy.successHeading}
          </h3>
          <p>{contactCopy.successMessage}</p>
          <button
            type="button"
            className="contact-another"
            onClick={() => {
              focusNextInquiry.current = true;
              setStatus("idle");
            }}
          >
            Send another inquiry <Arrow diagonal={false} />
          </button>
        </div>
      ) : (
        <>
          <div className="contact-form-heading">
            <h3>{contactCopy.formHeading}</h3>
            <p>{contactCopy.formIntro}</p>
          </div>
          {!configured && (
            <div className="contact-availability" id="contact-availability">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v6m0-10v.01" />
              </svg>
              <p>
                Online inquiries are not available yet.
                {email ? (
                  <>
                    {" "}
                    You can reach us at <a href={`mailto:${email}`}>{email}</a>.
                  </>
                ) : (
                  " Please check back when our contact channel opens."
                )}
              </p>
            </div>
          )}
          <fieldset disabled={!configured || status === "sending"}>
            <legend className="sr-only">Tell us about your project</legend>
            <fieldset className="project-type-options">
              <legend>
                What do you need? <span>Optional</span>
              </legend>
              <div className="project-type-grid">
                {projectTypes.map((type) => (
                  <label className="project-type-choice" key={type}>
                    <input type="radio" name="projectType" value={type} />
                    <span>
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="m4 8 3 3 5-6" />
                      </svg>
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="form-two-columns">
              <div className="form-field">
                <label htmlFor="name">
                  Your name <span>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  ref={nameInput}
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Your full name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">
                  Work email <span>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">
                What are you thinking? <span>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={20}
                maxLength={5000}
                rows={4}
                aria-describedby="message-hint"
                placeholder="Tell us about the problem, who it’s for, and what you’d like to make possible…"
              />
              <p className="form-hint" id="message-hint">
                A little context helps. At least 20 characters.
              </p>
            </div>
            <details className="contact-extra-details">
              <summary>
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M10 4v12" />
                </svg>
                Add company or budget
                <span>Optional</span>
              </summary>
              <div className="form-two-columns">
                <div className="form-field">
                  <label htmlFor="company">Company or organization</label>
                  <input
                    id="company"
                    name="company"
                    maxLength={200}
                    autoComplete="organization"
                    placeholder="Company name"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="budget">Approximate budget</label>
                  <input
                    id="budget"
                    name="budget"
                    maxLength={150}
                    placeholder="Your budget range"
                  />
                </div>
              </div>
            </details>
            <div className="honeypot" aria-hidden="true">
              <label htmlFor="website">Leave this empty</label>
              <input
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="form-submit-row">
              <button
                type="submit"
                className="button button-gold contact-submit"
                disabled={!configured || status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send inquiry"}
                <span>
                  <Arrow />
                </span>
              </button>
            </div>
          </fieldset>
        </>
      )}
      <p className="form-disclosure">
        We use these details to respond to your inquiry.{" "}
        <Link href="/privacy">Privacy notice</Link>
      </p>
      <p
        className={`form-status ${status}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {message}
      </p>
    </form>
  );
}
