import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import IntegrationTabs from "@/components/IntegrationTabs";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import StretchGoals from "@/components/StretchGoals";
import FAQ from "@/components/FAQ";
import Founder from "@/components/Founder";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

function FeaturesBar() {
  return (
    <div className="features-bar">
      <div className="container">
        <div className="features-grid">
          <div>
            <div className="feature-item-icon">&#9889;</div>
            <div className="feature-item-title">Zero Batteries</div>
            <div className="feature-item-desc">
              Kinetic energy harvesting. Press = power.
            </div>
          </div>
          <div>
            <div className="feature-item-icon">&#128272;</div>
            <div className="feature-item-title">Open Protocol</div>
            <div className="feature-item-desc">
              Published BLE spec. MIT-licensed SDKs.
            </div>
          </div>
          <div>
            <div className="feature-item-icon">&#128268;</div>
            <div className="feature-item-title">No Hub Required</div>
            <div className="feature-item-desc">
              Direct BLE 5.0 to any receiver.
            </div>
          </div>
          <div>
            <div className="feature-item-icon">&#128187;</div>
            <div className="feature-item-title">pip install blebutton</div>
            <div className="feature-item-desc">
              Trigger your AI workflow in 60 seconds.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <FeaturesBar />
        <HowItWorks />
        <IntegrationTabs />
        <Pricing />
        <Comparison />
        <StretchGoals />
        <FAQ />
        <Founder />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
