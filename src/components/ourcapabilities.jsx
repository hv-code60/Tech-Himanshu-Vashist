import React from "react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    title: "Custom Software Development",
    desc: "Scalable dashboards, CRMs, admin panels, and enterprise tools built around your workflow and future growth needs.",
    tags: [{ name: "SaaS", icon: "⚙️" }, { name: "Dashboards", icon: "📊" }, { name: "RBAC", icon: "🔐" }],
    icon: "⌘",
    route: "/services/custom-software-development",
  },
  {
    title: "Web & Portal Development",
    desc: "SEO-optimized websites and portals that load fast, look premium, and convert visitors into qualified leads.",
    tags: [{ name: "React/Next.js", icon: "⚛️" }, { name: "SEO", icon: "🔍" }, { name: "Landing Pages", icon: "📄" }],
    icon: "◉",
    route: "/services/web-portal-development",
  },
  {
    title: "Mobile Applications",
    desc: "Android and iOS apps with secure login, smooth UX, notifications, and seamless third-party integrations.",
    tags: [{ name: "Android", icon: "🤖" }, { name: "iOS", icon: "🍎" }, { name: "Flutter/RN", icon: "🎨" }],
    icon: "◫",
    route: "/services/mobile-applications",
  },
  {
    title: "AI & Automation",
    desc: "Chatbots, WhatsApp automation, and lead workflows to reduce manual work and improve speed across teams.",
    tags: [{ name: "Chatbots", icon: "🤖" }, { name: "Automation", icon: "⚡" }, { name: "Workflows", icon: "🔄" }],
    icon: "✦",
    route: "/services/ai-automation",
  },
  {
    title: "Cloud & DevOps",
    desc: "Secure deployments with CI/CD, monitoring, backups, and performance tuning for production stability.",
    tags: [{ name: "AWS/VPS", icon: "☁️" }, { name: "CI/CD", icon: "🚀" }, { name: "Monitoring", icon: "📡" }],
    icon: "☁",
    route: "/services/cloud-devops",
  },
  {
    title: "UI/UX Design",
    desc: "Clean modern UI systems, prototypes, and product experiences designed to improve trust and conversions.",
    tags: [{ name: "Figma", icon: "🎭" }, { name: "Design System", icon: "🎨" }, { name: "Prototypes", icon: "🎬" }],
    icon: "◌",
    route: "/services/ui-ux-design",
  },
];

export default function PremiumCapabilitiesSection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#ffffff",
        padding: "60px 20px 40px",
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
      id="capabilities"
    >
      {/* Glow blobs */}
      <div style={{ position: "absolute", top: "-100px", left: "-120px", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(34, 197, 94, 0.08)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "180px", right: "-100px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(20, 184, 166, 0.08)", filter: "blur(90px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.025) 1px, transparent 1px)", backgroundSize: "42px 42px", maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent 85%)", WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent 85%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1220, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto 52px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(34, 197, 94, 0.08)", border: "1px solid rgba(34, 197, 94, 0.16)", color: "#16a34a", fontSize: 13, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>
            • Our Capabilities
          </div>
          <h2 style={{ margin: "0 0 16px 0", fontSize: "clamp(28px, 5vw, 58px)", lineHeight: 1.05, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.05em" }}>
            What We Strategize
          </h2>
          <p style={{ margin: 0, fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.9, color: "#64748b", maxWidth: 760, marginInline: "auto" }}>
            From custom software and mobile apps to AI automation and cloud infrastructure, we deliver end-to-end technology solutions designed for speed, security, and sustainable growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 22, marginBottom: 34 }}>
          {capabilities.map((item, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(15, 23, 42, 0.06)",
                borderRadius: 26,
                padding: "26px 24px 22px",
                boxShadow: "0 12px 28px rgba(15,23,42,0.05), 0 2px 10px rgba(15,23,42,0.03)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease",
                minHeight: 250,
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 24px 50px rgba(15,23,42,0.09), 0 10px 24px rgba(34,197,94,0.08)";
                e.currentTarget.style.border = "1px solid rgba(34, 197, 94, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(15,23,42,0.05), 0 2px 10px rgba(15,23,42,0.03)";
                e.currentTarget.style.border = "1px solid rgba(15, 23, 42, 0.06)";
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 1, background: "linear-gradient(90deg, rgba(34,197,94,0), rgba(34,197,94,0.7), rgba(20,184,166,0), rgba(34,197,94,0))", opacity: 0.9 }} />
              <div style={{ width: 52, height: 52, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(20,184,166,0.10) 100%)", border: "1px solid rgba(34, 197, 94, 0.14)", color: "#16a34a", fontSize: 24, fontWeight: 700, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)", marginBottom: 18 }}>
                {item.icon}
              </div>
              <h3 style={{ margin: "0 0 12px 0", fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.3, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em" }}>{item.title}</h3>
              <p style={{ margin: "0 0 18px 0", fontSize: "clamp(13px, 1.5vw, 15px)", lineHeight: 1.85, color: "#64748b", minHeight: 84 }}>{item.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
                {item.tags.map((tag, i) => (
                  <span key={i} style={{ padding: "7px 11px", borderRadius: 999, background: "rgba(34, 197, 94, 0.08)", border: "1px solid rgba(34, 197, 94, 0.12)", color: "#15803d", fontSize: 12, fontWeight: 700, lineHeight: 1 }}>
                    <span style={{ marginRight: 4 }}>{tag.icon}</span>{tag.name}
                  </span>
                ))}
              </div>
              <Link to={item.route} style={{ textDecoration: "none" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 800, color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Learn More <span>→</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}