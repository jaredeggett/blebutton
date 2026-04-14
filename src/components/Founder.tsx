export default function Founder() {
  return (
    <section className="section" id="founder">
      <div className="container">
        <span className="section-label fade-in">From the Founder</span>
        <h2 className="section-title fade-in">
          Built by someone who ships hardware.
        </h2>

        <div className="founder-card fade-in">
          <div className="founder-avatar">JE</div>
          <div className="founder-info">
            <h3>Jared Eggett</h3>
            <span className="founder-role">
              Founder, Ad Hoc Electronics
            </span>
            <p>
              I&apos;ve always dreamed of being an inventor. That dream led me
              to spend 20+ years in hardware manufacturing, building
              kinetic energy-harvesting switches and earning multiple
              utility patents along the way. BLEButton is the product
              I&apos;ve wanted to build my entire career &mdash; taking
              proven self-powered technology and putting it directly in
              the hands of developers. No batteries to replace. No cloud
              to depend on. Just a physical trigger that speaks BLE and
              lets your code do the rest.
            </p>
            <div className="founder-stats">
              <div className="founder-stat">
                <div className="founder-stat-val">20+</div>
                <div className="founder-stat-lbl">Years in Hardware</div>
              </div>
              <div className="founder-stat">
                <div className="founder-stat-val">Multiple</div>
                <div className="founder-stat-lbl">Utility Patents</div>
              </div>
              <div className="founder-stat">
                <div className="founder-stat-val">Global</div>
                <div className="founder-stat-lbl">Distribution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
