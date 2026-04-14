type PricingTier = {
  name: string;
  desc: string;
  price: string;
  unit: string;
  features: string[];
  popular?: boolean;
};

const tiers: PricingTier[] = [
  {
    name: "Super Early Bird",
    desc: "Limited to 25 backers",
    price: "$14.99",
    unit: "1 button",
    features: [
      "Self-powered BLEButton",
      "Peel-and-stick mount",
      "Open-source SDK access",
      "Published BLE spec",
    ],
  },
  {
    name: "Dev Kit",
    desc: "Single button for prototyping",
    price: "$19.99",
    unit: "1 button",
    features: [
      "Self-powered BLEButton",
      "Peel-and-stick mount",
      "Open-source SDK access",
      "Published BLE spec",
    ],
  },
  {
    name: "Maker Pack",
    desc: "Multi-zone setups",
    price: "$49.99",
    unit: "3 buttons · $16.66 each",
    features: [
      "3x Self-powered BLEButtons",
      "3x Peel-and-stick mounts",
      "Open-source SDK access",
      "Published BLE spec",
    ],
    popular: true,
  },
  {
    name: "Lab Pack",
    desc: "Classroom or lab deployment",
    price: "$129.99",
    unit: "10 buttons · $13.00 each",
    features: [
      "10x Self-powered BLEButtons",
      "10x Peel-and-stick mounts",
      "Open-source SDK access",
      "Priority support channel",
    ],
  },
  {
    name: "Fleet Pack",
    desc: "Production pilots",
    price: "$249.99",
    unit: "25 buttons · $10.00 each",
    features: [
      "25x Self-powered BLEButtons",
      "25x Peel-and-stick mounts",
      "Open-source SDK access",
      "Priority support channel",
    ],
  },
  {
    name: "OEM Pack",
    desc: "Integration and resale",
    price: "$499.99",
    unit: "50 buttons · $10.00 each",
    features: [
      "50x Self-powered BLEButtons",
      "50x Peel-and-stick mounts",
      "OEM branding discussion",
      "Direct engineering support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <span className="section-label fade-in">Kickstarter Pricing</span>
        <h2 className="section-title fade-in">
          Back the project. Get your buttons.
        </h2>
        <p className="section-subtitle fade-in">
          Campaign goal: $3,000. Every tier ships with open-source SDKs and
          the full BLE protocol spec.
        </p>

        <div className="pricing-grid">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`price-card fade-in${tier.popular ? " popular" : ""}`}
            >
              <div className="price-card-name">{tier.name}</div>
              <div className="price-card-desc">{tier.desc}</div>
              <div className="price-card-price">{tier.price}</div>
              <div className="price-card-unit">{tier.unit}</div>
              <ul>
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#notify" className="btn-primary">
                Back This Tier
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
