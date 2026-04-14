const rows = [
  { feature: "Price", branded: "$35 + $99 hub", itag: "$2 - $5", esp32: "$5 + battery", ble: "From $14.99" },
  { feature: "Power Source", branded: "CR2032 coin cell", itag: "CR2032 coin cell", esp32: "USB / LiPo", ble: "Kinetic harvesting" },
  { feature: "Battery Life", branded: "~18 months", itag: "3 - 6 months", esp32: "Days to weeks", ble: "20+ years" },
  { feature: "Hub Required", branded: "Yes ($99)", itag: "No", esp32: "No", ble: "No" },
  { feature: "Protocol", branded: "Proprietary", itag: "Undocumented", esp32: "Custom", ble: "Published open spec" },
  { feature: "SDKs", branded: "Vendor app only", itag: "None", esp32: "Write your own", ble: "Python, C++, YAML, Node-RED" },
  { feature: "Cloud Dependency", branded: "Yes", itag: "Varies", esp32: "No", ble: "No" },
  { feature: "Edge AI Ready", branded: "No", itag: "No", esp32: "Manual setup", ble: "Jetson/OpenClaw SDK" },
];

export default function Comparison() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-card)" }}
    >
      <div className="container">
        <span className="section-label fade-in">Comparison</span>
        <h2 className="section-title fade-in">
          How does BLEButton stack up?
        </h2>
        <p className="section-subtitle fade-in">
          We compared every option on the market. Here&apos;s the data.
        </p>

        <div className="table-wrap fade-in">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Branded Button</th>
                <th>Generic iTag</th>
                <th>ESP32 DIY</th>
                <th>BLEButton</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>{row.branded}</td>
                  <td>{row.itag}</td>
                  <td>{row.esp32}</td>
                  <td>{row.ble}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
