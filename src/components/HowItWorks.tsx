export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <span className="section-label fade-in">How It Works</span>
        <h2 className="section-title fade-in">
          Kinetic energy in. BLE packets out.
        </h2>
        <p className="section-subtitle fade-in">
          Built on ILLUMRA/EBELONG kinetic switch technology, proven over 20+
          years in commercial lighting worldwide.
        </p>

        <div className="how-steps">
          <div className="how-step fade-in">
            <span className="how-step-num">01</span>
            <span className="how-step-icon">&#128070;</span>
            <h3>Press</h3>
            <p>You press the button. That mechanical force is all it needs.</p>
          </div>
          <div className="how-step fade-in">
            <span className="how-step-num">02</span>
            <span className="how-step-icon">&#9889;</span>
            <h3>Harvest</h3>
            <p>
              A spring-loaded electromagnetic generator converts your press into
              electrical energy.
            </p>
          </div>
          <div className="how-step fade-in">
            <span className="how-step-num">03</span>
            <span className="how-step-icon">&#128225;</span>
            <h3>Broadcast</h3>
            <p>
              The harvested energy powers a BLE 5.0 radio that broadcasts an
              advertisement packet.
            </p>
          </div>
          <div className="how-step fade-in">
            <span className="how-step-num">04</span>
            <span className="how-step-icon">&#128187;</span>
            <h3>Receive</h3>
            <p>
              Any BLE device within ~30m picks up the packet. Your code handles
              the rest.
            </p>
          </div>
        </div>

        <div className="how-diagram fade-in">
          <div className="how-diagram-node">
            <span className="icon">&#128070;</span>
            <span className="label">Press</span>
          </div>
          <span className="how-diagram-arrow">&rarr;</span>
          <div className="how-diagram-node">
            <span className="icon">&#9889;</span>
            <span className="label">Kinetic &rarr; Electric</span>
          </div>
          <span className="how-diagram-arrow">&rarr;</span>
          <div className="how-diagram-node">
            <span className="icon">&#128225;</span>
            <span className="label">BLE 5.0 Broadcast</span>
          </div>
          <span className="how-diagram-arrow">&rarr;</span>
          <div className="how-diagram-node">
            <span className="icon">&#129302;</span>
            <span className="label">Your Code</span>
          </div>
        </div>
      </div>
    </section>
  );
}
