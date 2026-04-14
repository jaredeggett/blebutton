"use client";

import { useState } from "react";

type Tab = "jetson" | "pi" | "esp32" | "ha" | "ble";

const tabs: { id: Tab; label: string }[] = [
  { id: "jetson", label: "Jetson / OpenClaw" },
  { id: "pi", label: "Raspberry Pi" },
  { id: "esp32", label: "ESP32 / Arduino" },
  { id: "ha", label: "Home Assistant" },
  { id: "ble", label: "Raw BLE Spec" },
];

function JetsonCode() {
  return (
    <pre>
      <span className="kw">from</span> blebutton <span className="kw">import</span> BLEButton{"\n"}
      <span className="kw">from</span> openclaw <span className="kw">import</span> OpenClawClient{"\n"}
      {"\n"}
      button = <span className="fn">BLEButton</span>(){"\n"}
      claw   = <span className="fn">OpenClawClient</span>(){"\n"}
      {"\n"}
      <span className="dec">@button.on_press</span>{"\n"}
      <span className="kw">def</span> <span className="fn">handle</span>(event):{"\n"}
      {"    "}<span className="cm"># Physical button press triggers edge AI prompt</span>{"\n"}
      {"    "}claw.<span className="fn">send_prompt</span>(<span className="str">&quot;Pick up the red block and place it in bin A&quot;</span>){"\n"}
      {"    "}<span className="fn">print</span>(<span className="str">f&quot;Triggered from button </span><span className="var">&#123;event.device_id&#125;</span><span className="str">&quot;</span>){"\n"}
      {"\n"}
      button.<span className="fn">listen</span>()
    </pre>
  );
}

function PiCode() {
  return (
    <pre>
      <span className="kw">from</span> blebutton <span className="kw">import</span> BLEButton{"\n"}
      <span className="kw">import</span> subprocess{"\n"}
      {"\n"}
      button = <span className="fn">BLEButton</span>(){"\n"}
      {"\n"}
      <span className="dec">@button.on_press</span>{"\n"}
      <span className="kw">def</span> <span className="fn">handle</span>(event):{"\n"}
      {"    "}<span className="cm"># Run any command, script, or API call</span>{"\n"}
      {"    "}subprocess.<span className="fn">run</span>([<span className="str">&quot;python3&quot;</span>, <span className="str">&quot;my_script.py&quot;</span>]){"\n"}
      {"    "}<span className="fn">print</span>(<span className="str">f&quot;Button </span><span className="var">&#123;event.device_id&#125;</span><span className="str"> pressed&quot;</span>){"\n"}
      {"\n"}
      <span className="cm"># Filter by specific button ID (optional)</span>{"\n"}
      button.<span className="fn">listen</span>(device_id=<span className="str">&quot;BLEBtn_A1B2C3&quot;</span>)
    </pre>
  );
}

function ESP32Code() {
  return (
    <pre>
      <span className="kw">#include</span> <span className="str">&lt;BLEButton.h&gt;</span>{"\n"}
      {"\n"}
      BLEButton btn;{"\n"}
      {"\n"}
      <span className="kw">void</span> <span className="fn">onPress</span>(BLEButtonEvent event) &#123;{"\n"}
      {"    "}Serial.<span className="fn">printf</span>(<span className="str">&quot;Button %s pressed\n&quot;</span>, event.deviceId);{"\n"}
      {"    "}<span className="cm">// Toggle a relay, send MQTT, trigger servo, etc.</span>{"\n"}
      {"    "}<span className="fn">digitalWrite</span>(<span className="var">RELAY_PIN</span>, <span className="var">HIGH</span>);{"\n"}
      {"    "}<span className="fn">delay</span>(<span className="var">1000</span>);{"\n"}
      {"    "}<span className="fn">digitalWrite</span>(<span className="var">RELAY_PIN</span>, <span className="var">LOW</span>);{"\n"}
      &#125;{"\n"}
      {"\n"}
      <span className="kw">void</span> <span className="fn">setup</span>() &#123;{"\n"}
      {"    "}Serial.<span className="fn">begin</span>(<span className="var">115200</span>);{"\n"}
      {"    "}<span className="fn">pinMode</span>(<span className="var">RELAY_PIN</span>, <span className="var">OUTPUT</span>);{"\n"}
      {"    "}btn.<span className="fn">begin</span>();{"\n"}
      {"    "}btn.<span className="fn">onPress</span>(onPress);{"\n"}
      &#125;{"\n"}
      {"\n"}
      <span className="kw">void</span> <span className="fn">loop</span>() &#123;{"\n"}
      {"    "}btn.<span className="fn">update</span>();{"\n"}
      &#125;
    </pre>
  );
}

function HACode() {
  return (
    <pre>
      <span className="cm"># esphome/blebutton.yaml</span>{"\n"}
      <span className="var">esphome</span>:{"\n"}
      {"  "}<span className="var">name</span>: <span className="str">blebutton-proxy</span>{"\n"}
      {"\n"}
      <span className="var">esp32_ble_tracker</span>:{"\n"}
      {"  "}<span className="var">scan_parameters</span>:{"\n"}
      {"    "}<span className="var">active</span>: <span className="str">false</span>{"\n"}
      {"\n"}
      <span className="var">binary_sensor</span>:{"\n"}
      {"  "}- <span className="var">platform</span>: <span className="str">ble_presence</span>{"\n"}
      {"    "}<span className="var">mac_address</span>: <span className="str">&quot;AA:BB:CC:DD:EE:FF&quot;</span>{"\n"}
      {"    "}<span className="var">name</span>: <span className="str">&quot;BLEButton Desk&quot;</span>{"\n"}
      {"    "}<span className="var">device_class</span>: <span className="str">occupancy</span>{"\n"}
      {"\n"}
      <span className="cm"># Home Assistant automation</span>{"\n"}
      <span className="var">automation</span>:{"\n"}
      {"  "}- <span className="var">trigger</span>:{"\n"}
      {"      "}<span className="var">platform</span>: <span className="str">state</span>{"\n"}
      {"      "}<span className="var">entity_id</span>: <span className="str">binary_sensor.blebutton_desk</span>{"\n"}
      {"      "}<span className="var">to</span>: <span className="str">&quot;on&quot;</span>{"\n"}
      {"    "}<span className="var">action</span>:{"\n"}
      {"      "}- <span className="var">service</span>: <span className="str">light.toggle</span>{"\n"}
      {"        "}<span className="var">entity_id</span>: <span className="str">light.office</span>
    </pre>
  );
}

function BLESpecCode() {
  return (
    <pre>
      <span className="cm"># BLEButton BLE 5.0 Advertisement Format</span>{"\n"}
      <span className="cm"># Published at github.com/AdhocElectronics/blebutton-spec</span>{"\n"}
      {"\n"}
      <span className="var">Advertisement Type</span>:  ADV_NONCONN_IND{"\n"}
      <span className="var">Interval</span>:           Single burst on press{"\n"}
      <span className="var">TX Power</span>:           0 dBm (configurable in firmware){"\n"}
      {"\n"}
      <span className="var">Payload Structure</span>:{"\n"}
      {"  "}Bytes 0-1:   Company ID (0xFFFF placeholder / registered){"\n"}
      {"  "}Bytes 2-5:   Device UUID (unique per button){"\n"}
      {"  "}Byte  6:     Event type (0x01 = single press){"\n"}
      {"  "}Byte  7:     Sequence counter (0x00-0xFF, wraps){"\n"}
      {"  "}Byte  8:     Battery voltage proxy (energy level){"\n"}
      {"\n"}
      <span className="var">Service UUID</span>:       0xBLE0 (custom 16-bit){"\n"}
      <span className="var">Characteristic</span>:    0xBLE1 (press event){"\n"}
      {"\n"}
      <span className="cm"># Example: scan with any BLE library</span>{"\n"}
      <span className="cm"># Filter advertisements by Service UUID 0xBLE0</span>{"\n"}
      <span className="cm"># Parse manufacturer-specific data for device ID + event</span>
    </pre>
  );
}

export default function IntegrationTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("jetson");

  const installHints: Record<Tab, string> = {
    jetson: "$ pip install blebutton",
    pi: "$ pip install blebutton",
    esp32: 'Arduino Library Manager: search "BLEButton"',
    ha: "ESPHome config for BLE proxy",
    ble: "Raw BLE Advertisement Specification",
  };

  return (
    <section
      className="section"
      id="integrations"
      style={{ background: "var(--bg-card)" }}
    >
      <div className="container">
        <span className="section-label fade-in">Integrations</span>
        <h2 className="section-title fade-in">
          Works with everything you already use.
        </h2>
        <p
          className="section-subtitle fade-in"
          style={{ marginBottom: "50px" }}
        >
          Open-source SDKs for every major platform. MIT licensed. Published on
          GitHub.
        </p>

        <div className="fade-in">
          <div className="tabs-nav" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn${activeTab === tab.id ? " active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-panel">
            <div className="install-hint">{installHints[activeTab]}</div>
            {activeTab === "jetson" && <JetsonCode />}
            {activeTab === "pi" && <PiCode />}
            {activeTab === "esp32" && <ESP32Code />}
            {activeTab === "ha" && <HACode />}
            {activeTab === "ble" && <BLESpecCode />}
          </div>
        </div>
      </div>
    </section>
  );
}
