"use client";

import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "How does it work without a battery?",
    a: "Each press compresses a spring-loaded electromagnetic generator inside the button. That mechanical energy is converted into enough electrical energy to power a BLE 5.0 radio and broadcast a single advertisement packet. This is the same core technology (EBELONG/ILLUMRA) that has powered millions of commercial kinetic light switches worldwide for over 20 years. The mechanism is rated for 500,000+ presses.",
  },
  {
    q: "What devices can receive the signal?",
    a: "Anything with BLE 5.0 (or backward-compatible BLE 4.x) support. That includes NVIDIA Jetson boards, Raspberry Pi (3/4/5 with built-in BLE, or any Pi with a USB BLE adapter), ESP32 microcontrollers, laptops, phones, tablets, and Home Assistant setups using ESPHome BLE proxies. If it can scan for BLE advertisements, it works.",
  },
  {
    q: "Do I need to pair it like other BLE devices?",
    a: "No. BLEButton uses BLE advertisement broadcasts, not connected-mode pairing. Your receiver simply listens for advertisements matching the BLEButton service UUID. No pairing, no connection handshake, no state to manage. This is also why multiple receivers can pick up the same button press simultaneously.",
  },
  {
    q: "Is the protocol documented?",
    a: "Fully. The BLE advertisement format, service UUIDs, characteristic UUIDs, and payload structure are published on GitHub under MIT license. You do not need our SDK to use BLEButton. If you prefer to write your own BLE scanner, the spec tells you exactly what to look for.",
  },
  {
    q: "What about security? Can someone spoof a press?",
    a: "Each BLEButton has a unique device ID and an incrementing sequence counter in its advertisement payload. Your code can validate device IDs and detect replayed packets via the counter. For high-security applications, we recommend running your receiver in a controlled RF environment or adding application-layer authentication. The protocol spec documents the security model in full.",
  },
  {
    q: "How does this work with OpenClaw/NemoClaw?",
    a: "BLEButton is the first physical trigger built for NVIDIA's OpenClaw robotic manipulation framework. Press the button and your Jetson sends a natural language prompt to the NemoClaw model, which plans and executes the robotic action. The Python SDK handles BLE scanning, event parsing, and OpenClaw integration. Three lines of code from button press to robot movement.",
  },
  {
    q: "When does it ship?",
    a: "We are targeting Q3 2026 for initial shipments. The kinetic switch mechanism is proven manufacturing (20+ years of EBELONG production). The BLE radio design is finalized. We are currently in tooling and certification. Backers will receive regular production updates throughout the campaign.",
  },
  {
    q: "Can I use multiple buttons?",
    a: "Yes. Each button broadcasts a unique device ID. Your code can listen for multiple buttons simultaneously and route different actions to each one. The SDKs support filtering by device ID, so you can assign distinct behaviors to each button. There is no practical limit to the number of buttons a single receiver can monitor.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section
      className="section"
      id="faq"
      style={{ background: "var(--bg-card)" }}
    >
      <div className="container">
        <span className="section-label fade-in">FAQ</span>
        <h2 className="section-title fade-in">Common questions.</h2>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`faq-item fade-in${isOpen ? " open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="faq-icon">+</span>
                </button>
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: isOpen ? "400px" : "0",
                  }}
                >
                  <div className="faq-answer-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
