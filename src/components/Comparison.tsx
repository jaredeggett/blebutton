const rows = [
  { feature: "Price", flic: "$35 + $99 hub", itag: "$2 - $5", esp32: "$5 + battery", ble: "From $14.99" },
  { feature: "Power Source", flic: "CR2032 coin cell", itag: "CR2032 coin cell", esp32: "USB / LiPo", ble: "Kinetic harvesting" },
  { feature: "Battery Life", flic: "~18 months", itag: "3 - 6 months", esp32: "Days to weeks", ble: "20+ years" },
  { feature: "Hub Required", flic: "Yes ($99)", itag: "No", esp32: "No", ble: "No" },
  { feature: "Protocol", flic: "Proprietary", itag: "Undocumented", esp32: "Custom", ble: "Published open spec" },
  { feature: "SDKs", flic: "Flic app only", itag: "None", esp32: "Write your own", ble: "Python, C++, YAML, Node-RED" },
  { feature: "Cloud Dependency", flic: "Yes", itag: "Varies", esp32: "No", ble: "No" },
  { feature: "Edge AI Ready", flic: "No", itag: "No", esp32: "Manual setup", ble: "Jetson/OpenClaw SDK" },
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
          Why not just use a Flic? Or a $3 iTag?
        </h2>
        <p className="section-subtitle fade-in">
          We asked the same thing. Then we looked at the data.
        </p>

        <div className="table-wrap fade-in">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Flic</th>
                <th>Generic iTag</th>
                <th>ESP32 DIY</th>
                <th>BLEButton</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>{row.flic}</td>
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
