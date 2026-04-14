"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (codeRef.current) {
        codeRef.current.classList.add("animate");
        const lines = codeRef.current.querySelectorAll<HTMLElement>(".line");
        lines.forEach((line, i) => {
          line.style.animationDelay = `${i * 0.15}s`;
        });
      }
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">Live on Kickstarter</div>
            <h1>
              Press a button.
              <br />
              <span className="accent">Run your AI.</span>
            </h1>
            <p className="hero-sub">
              A self-powered BLE 5.0 button that lets you trigger AI prompts,
              automations, and scripts with a physical press. No batteries, no
              hub, no cloud. Just open BLE packets your code catches in real
              time.
            </p>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">20+ yr</div>
                <div className="hero-stat-label">Battery-free life</div>
              </div>
              <div>
                <div className="hero-stat-value">~30m</div>
                <div className="hero-stat-label">BLE range</div>
              </div>
              <div>
                <div className="hero-stat-value">$14.99</div>
                <div className="hero-stat-label">Early bird</div>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#pricing" className="btn-primary">
                Back on Kickstarter &rarr;
              </a>
              <a href="#integrations" className="btn-secondary">
                View Code &darr;
              </a>
            </div>
          </div>

          <div className="hero-code-wrap" ref={codeRef}>
            <div className="code-header">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
              <span className="code-filename">trigger.py</span>
            </div>
            <div className="code-body">
              <span className="line">
                <span className="kw">from</span> blebutton{" "}
                <span className="kw">import</span> BLEButton
              </span>
              <span className="line">
                <span className="kw">from</span> openclaw{" "}
                <span className="kw">import</span> OpenClawClient
              </span>
              <span className="line">&nbsp;</span>
              <span className="line">
                button = <span className="fn">BLEButton</span>()
              </span>
              <span className="line">
                claw = <span className="fn">OpenClawClient</span>()
              </span>
              <span className="line">&nbsp;</span>
              <span className="line">
                <span className="dec">@button.on_press</span>
              </span>
              <span className="line">
                <span className="kw">def</span>{" "}
                <span className="fn">handle</span>(event):
              </span>
              <span className="line">
                &nbsp;&nbsp;&nbsp;&nbsp;claw.
                <span className="fn">send_prompt</span>(
                <span className="str">&quot;Start morning briefing&quot;</span>)
              </span>
              <span className="line">&nbsp;</span>
              <span className="line">
                button.<span className="fn">listen</span>()
                <span className="typing-cursor" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
