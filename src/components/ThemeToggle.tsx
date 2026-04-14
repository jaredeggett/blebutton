"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle light/dark mode"
      style={{
        background: "none",
        border: "1px solid var(--border)",
        borderRadius: "6px",
        color: "var(--text-dim)",
        cursor: "pointer",
        padding: "6px 10px",
        fontSize: "16px",
        lineHeight: 1,
        transition: "border-color 0.2s, color 0.2s",
      }}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? "☀" : "☾"}
    </button>
  );
}
