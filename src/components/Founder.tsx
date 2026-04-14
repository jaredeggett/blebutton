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
              CEO, Ad Hoc Electronics / ILLUMRA
            </span>
            <p>
              I&apos;ve spent 20+ years manufacturing kinetic energy-harvesting
              switches for commercial lighting, shipping worldwide through
              Hafele distribution with multiple utility patents. BLEButton
              takes that proven EBELONG technology and puts it in the hands of
              developers. No batteries to replace. No cloud to depend on. Just
              a physical trigger that speaks BLE and lets your code do the
              rest.
            </p>
            <div className="founder-stats">
              <div className="founder-stat">
                <div className="founder-stat-val">20+</div>
                <div className="founder-stat-lbl">Years Manufacturing</div>
              </div>
              <div className="founder-stat">
                <div className="founder-stat-val">Global</div>
                <div className="founder-stat-lbl">Distribution (Hafele)</div>
              </div>
              <div className="founder-stat">
                <div className="founder-stat-val">Multiple</div>
                <div className="founder-stat-lbl">Utility Patents</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
