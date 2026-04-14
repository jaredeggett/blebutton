"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setConfirmed(`Got it. We will notify ${email} at launch.`);
    setEmail("");
  }

  return (
    <section className="cta-section" id="notify">
      <div className="container">
        <span className="section-label">Get Notified</span>
        <h2 className="section-title">Be first in line.</h2>
        <p className="section-subtitle">
          Drop your email for Kickstarter launch updates, early access, and SDK
          betas.
        </p>
        <form className="email-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="email-input"
            placeholder="you@example.com"
            required
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn-primary">
            Notify Me
          </button>
        </form>
        {confirmed && (
          <p
            style={{
              marginTop: "16px",
              color: "var(--green)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "14px",
            }}
          >
            {confirmed}
          </p>
        )}
      </div>
    </section>
  );
}
