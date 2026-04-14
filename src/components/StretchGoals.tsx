const goals = [
  {
    amount: "$3,000 · Funded",
    title: "Base Campaign",
    desc: "BLEButton hardware, open-source SDKs, published BLE spec. We ship.",
    reached: true,
  },
  {
    amount: "$6,000",
    title: "Double-Press Detection",
    desc: "Firmware update adds double-press event type. Two distinct triggers from one button.",
    reached: false,
  },
  {
    amount: "$10,000",
    title: "Multi-Button Dashboard",
    desc: "Web-based dashboard for Pi and Jetson. Monitor all your buttons, view event logs, set up triggers visually.",
    reached: false,
  },
  {
    amount: "$15,000",
    title: "ESP32 BLE-to-MQTT Bridge",
    desc: "Flash an ESP32 and bridge BLEButton events to any MQTT broker. Connect to Node-RED, AWS IoT, or your own stack.",
    reached: false,
  },
  {
    amount: "$25,000",
    title: "IP65 Outdoor-Rated Button",
    desc: "Weather-sealed enclosure rated for outdoor deployment. Same kinetic mechanism, built for the elements.",
    reached: false,
  },
  {
    amount: "$40,000",
    title: "Multi-Press and Long-Press Support",
    desc: "Triple-press, long-press, and custom press patterns. Maximum flexibility from a single button.",
    reached: false,
  },
];

export default function StretchGoals() {
  return (
    <section className="section" id="stretch-goals">
      <div className="container">
        <span className="section-label fade-in">Stretch Goals</span>
        <h2 className="section-title fade-in">Where we go from here.</h2>
        <p className="section-subtitle fade-in">
          Every stretch goal unlocks free firmware updates and new capabilities
          for all backers.
        </p>

        <div className="stretch-timeline">
          {goals.map((goal) => (
            <div
              key={goal.title}
              className={`stretch-item fade-in${goal.reached ? " reached" : ""}`}
            >
              <div className="stretch-amount">{goal.amount}</div>
              <div className="stretch-title">{goal.title}</div>
              <div className="stretch-desc">{goal.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
