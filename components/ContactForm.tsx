"use client";

import { useState } from "react";

// Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID (get it from formspree.io)
// If not set, form falls back to opening the user's email client (mailto).
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            message,
            _replyto: email, // so Formspree sets Reply-To to the sender
          }),
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          const msg = Array.isArray(err.message) ? err.message[0] : err.message;
          throw new Error(msg ?? `Request failed (${res.status})`);
        }
        setSubmitted(true);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again or email us directly."
        );
      } finally {
        setSending(false);
      }
    } else {
      // No endpoint: open default email client with pre-filled mailto
      const subject = encodeURIComponent(`Contact from ${name}`);
      const body = encodeURIComponent(
        `${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
      );
      window.location.href = `mailto:optimalitsolution26@gmail.com?subject=${subject}&body=${body}`;
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="text-primary mb-3 fs-1">✓</div>
        <h3 className="h5 fw-bold">Message received</h3>
        <p className="text-muted mb-4">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours at
          the email you provided.
        </p>
        <p className="small text-muted">
          You can also email us at{" "}
          <a href="mailto:optimalitsolution26@gmail.com">
            optimalitsolution26@gmail.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          required
          placeholder="Your name"
          disabled={sending}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          required
          placeholder="you@company.com"
          disabled={sending}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project or question..."
          disabled={sending}
        />
      </div>
      {error && (
        <div className="alert alert-danger py-2 mb-3" role="alert">
          {error}
        </div>
      )}
      <button type="submit" className="btn btn-primary" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
