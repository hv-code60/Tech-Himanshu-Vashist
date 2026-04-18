import React from "react";

const PillHeading = ({ text = "OUR STRATEGY" }) => (
  <div style={{ textAlign: "center", marginBottom: 18 }}>
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 26px",
        borderRadius: 999,
        background: "#eafaf0",
        border: "1px solid #bff0cf",
        color: "#0f6a3b",
        fontWeight: 800,
        letterSpacing: 3,
        fontSize: 13,
        textTransform: "uppercase",
      }}
    >
      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#16a34a" }} />
      {text}
    </div>
  </div>
);

const Check = () => (
  <div
    style={{
      width: 46, height: 46, minWidth: 46,
      borderRadius: "50%", background: "#22c55e",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 14px 30px rgba(34,197,94,.28)",
    }}
  >
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const StrategyItem = ({ title, desc }) => (
  <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
    <Check />
    <div>
      <h4 style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 800, color: "#0f172a", margin: 0 }}>{title}</h4>
      <p style={{ marginTop: 8, marginBottom: 0, color: "#64748b", lineHeight: 1.75, fontSize: "clamp(14px, 1.5vw, 16px)" }}>
        {desc}
      </p>
    </div>
  </div>
);

function ImageCollage({
  topImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  bottomLeftImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  bottomRightImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
}) {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div style={{ borderRadius: 28, overflow: "hidden", boxShadow: "0 40px 90px rgba(2,6,23,.18)", border: "1px solid rgba(15,23,42,.08)" }}>
        <img
          src={topImage}
          alt="Top"
          style={{ width: "100%", height: "clamp(200px, 30vw, 360px)", objectFit: "cover", display: "block" }}
        />
      </div>

      <div style={{
        position: "absolute", left: 18, bottom: 122,
        background: "#ffffff", borderRadius: 18, padding: "14px 16px",
        display: "flex", gap: 12, alignItems: "center",
        boxShadow: "0 18px 50px rgba(2,6,23,.18)", border: "1px solid rgba(15,23,42,.08)",
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 14, background: "#22c55e",
          display: "grid", placeItems: "center", color: "#fff",
          boxShadow: "0 14px 30px rgba(6,182,212,.25)", flexShrink: 0,
        }}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <path d="M5 12h12" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M13 6l6 6-6 6" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ lineHeight: 1.15 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#64748b" }}>Quick Action</div>
          <div style={{ fontSize: 16, fontWeight: 900, color: "#0f172a" }}>Consult Now</div>
        </div>
      </div>

      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ borderRadius: 22, overflow: "hidden", border: "1px solid rgba(15,23,42,.08)", boxShadow: "0 18px 45px rgba(2,6,23,.10)", height: "clamp(120px, 15vw, 180px)" }}>
          <img src={bottomLeftImage} alt="Bottom left" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ borderRadius: 22, overflow: "hidden", border: "1px solid rgba(15,23,42,.08)", boxShadow: "0 18px 45px rgba(2,6,23,.10)", height: "clamp(120px, 15vw, 180px)" }}>
          <img src={bottomRightImage} alt="Bottom right" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      </div>
    </div>
  );
}

export default function StrategySection() {
  return (
    <section style={{ width: "100%", background: "#ffffff", padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        <PillHeading text="OUR STRATEGY" />

        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 47px)",
            fontWeight: 900,
            color: "#0f172a",
            textAlign: "center",
            margin: "0 auto",
            maxWidth: 900,
            lineHeight: 1.1,
            fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          We Don't Just Build — We Strategize
        </h2>

        <p
          style={{
            textAlign: "center",
            margin: "16px auto 56px",
            color: "#64748b",
            maxWidth: 860,
            lineHeight: 1.8,
            fontSize: "clamp(14px, 2vw, 17px)",
          }}
        >
          Our consulting services go beyond technical implementation. We partner with you to create clear roadmaps,
          scalable architecture, and ROI-focused decisions that support sustainable growth.
        </p>

        <div
          className="strategyWrap"
          style={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: 52,
            alignItems: "center",
          }}
        >
          <ImageCollage />

          <div>
            <div
              style={{
                background: "#f8fbff",
                border: "1px solid rgba(37,99,235,.15)",
                borderRadius: 26,
                padding: "clamp(18px, 3vw, 28px) clamp(16px, 3vw, 26px)",
                boxShadow: "0 18px 50px rgba(2,6,23,.06)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
                <StrategyItem
                  title="Strategic Planning & Roadmapping"
                  desc="Clear technology roadmaps aligned with your business objectives and growth targets."
                />
                <StrategyItem
                  title="Scalability & Performance Optimization"
                  desc="Systems designed to scale efficiently as you grow, without performance bottlenecks or technical debt."
                />
                <StrategyItem
                  title="Cost Optimization & ROI Analysis"
                  desc="Reduce technology costs while maximizing value and long-term return on investment."
                />
              </div>

              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 26,
                  background: "#22c55e",
                  color: "#ffffff",
                  padding: "14px 22px",
                  borderRadius: 14,
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 18px 40px rgba(34,197,94,.30)",
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                }}
              >
                Talk to Our Experts
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .strategyWrap {
            grid-template-columns: 1fr !important;
            gap: 34px !important;
          }
        }
      `}</style>
    </section>
  );
}