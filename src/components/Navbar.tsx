"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          &lt;<span>BLE</span>Button /&gt;
        </a>

        {/* Desktop nav */}
        <div className={`nav-links${menuOpen ? " open" : ""}`}>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How It Works
          </a>
          <a href="#integrations" onClick={() => setMenuOpen(false)}>
            Integrations
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <ThemeToggle />
          <a
            href="#notify"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Back on Kickstarter
          </a>
        </div>

        {/* Mobile right side: theme toggle + hamburger */}
        <div className="nav-mobile-right">
          <ThemeToggle />
          <button
            className="nav-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            &#9776;
          </button>
        </div>
      </div>
    </nav>
  );
}
