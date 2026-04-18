import React from "react";
import { Link } from "react-router-dom";
import ProjectCTA from "./cta";

const capabilities = [
  {
    title: "Custom Software Development",
    desc: "Scalable dashboards, CRMs, admin panels, and enterprise tools built around your workflow and future growth needs.",
    tags: [
      { name: "SaaS", icon: "⚙️" },
      { name: "Dashboards", icon: "📊" },
      { name: "RBAC", icon: "🔐" },
    ],
    icon: "⌘",
    route: "/services/custom-software-development",
  },
  {
    title: "Web & Portal Development",
    desc: "SEO-optimized websites and portals that load fast, look premium, and convert visitors into qualified leads.",
    tags: [
      { name: "React/Next.js", icon: "⚛️" },
      { name: "SEO", icon: "🔍" },
      { name: "Landing Pages", icon: "📄" },
    ],
    icon: "◉",
    route: "/services/web-portal-development",
  },
  {
    title: "Mobile Applications",
    desc: "Android and iOS apps with secure login, smooth UX, notifications, and seamless third-party integrations.",
    tags: [
      { name: "Android", icon: "🤖" },
      { name: "iOS", icon: "🍎" },
      { name: "Flutter/RN", icon: "🎨" },
    ],
    icon: "◫",
    route: "/services/mobile-applications",
  },
  {
    title: "AI & Automation",
    desc: "Chatbots, WhatsApp automation, and lead workflows to reduce manual work and improve speed across teams.",
    tags: [
      { name: "Chatbots", icon: "🤖" },
      { name: "Automation", icon: "⚡" },
      { name: "Workflows", icon: "🔄" },
    ],
    icon: "✦",
    route: "/services/ai-automation",
  },
  {
    title: "Cloud & DevOps",
    desc: "Secure deployments with CI/CD, monitoring, backups, and performance tuning for production stability.",
    tags: [
      { name: "AWS/VPS", icon: "☁️" },
      { name: "CI/CD", icon: "🚀" },
      { name: "Monitoring", icon: "📡" },
    ],
    icon: "☁",
    route: "/services/cloud-devops",
  },
  {
    title: "UI/UX Design",
    desc: "Clean modern UI systems, prototypes, and product experiences designed to improve trust and conversions.",
    tags: [
      { name: "Figma", icon: "🎭" },
      { name: "Design System", icon: "🎨" },
      { name: "Prototypes", icon: "🎬" },
    ],
    icon: "◌",
    route: "/services/ui-ux-design",
  },
];

export default function PremiumCapabilitiesSection() {
  const styles = {
    section: {
      position: "relative",
      overflow: "hidden",
      background: "#ffffff",
      padding: "90px 20px 100px",
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    },

    glowOne: {
      position: "absolute",
      top: "-100px",
      left: "-120px",
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      background: "rgba(34, 197, 94, 0.08)",
      filter: "blur(80px)",
      pointerEvents: "none",
    },

    glowTwo: {
      position: "absolute",
      top: "180px",
      right: "-100px",
      width: "280px",
      height: "280px",
      borderRadius: "50%",
      background: "rgba(20, 184, 166, 0.08)",
      filter: "blur(90px)",
      pointerEvents: "none",
    },

    gridOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to right, rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.025) 1px, transparent 1px)",
      backgroundSize: "42px 42px",
      maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent 85%)",
      WebkitMaskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent 85%)",
      pointerEvents: "none",
    },

    container: {
      position: "relative",
      zIndex: 2,
      maxWidth: "1220px",
      margin: "0 auto",
    },

    headingWrap: {
      textAlign: "center",
      maxWidth: "860px",
      margin: "0 auto 52px",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      padding: "0px 16px",
      borderRadius: "999px",
      background: "rgba(34, 197, 94, 0.08)",
      border: "1px solid rgba(34, 197, 94, 0.16)",
      color: "#16a34a",
      fontSize: "13px",
      fontWeight: 800,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      marginBottom: "18px",
    },

    heading: {
      margin: "0 0 16px 0",
      fontSize: "clamp(34px, 5vw, 58px)",
      lineHeight: 1.05,
      fontWeight: 800,
      color: "#0f172a",
      letterSpacing: "-0.05em",
    },

    subHeading: {
      margin: 0,
      fontSize: "17px",
      lineHeight: 1.9,
      color: "#64748b",
      maxWidth: "760px",
      marginInline: "auto",
    },

    cardsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "22px",
      marginBottom: "34px",
    },

    card: {
      position: "relative",
      background: "rgba(255,255,255,0.92)",
      border: "1px solid rgba(15, 23, 42, 0.06)",
      borderRadius: "26px",
      padding: "26px 24px 22px",
      boxShadow:
        "0 12px 28px rgba(15,23,42,0.05), 0 2px 10px rgba(15,23,42,0.03)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      transition: "transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease",
      minHeight: "250px",
      overflow: "hidden",
    },

    cardTopLine: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "1px",
      background:
        "linear-gradient(90deg, rgba(34,197,94,0), rgba(34,197,94,0.7), rgba(20,184,166,0), rgba(34,197,94,0))",
      opacity: 0.9,
    },

    iconWrap: {
      width: "52px",
      height: "52px",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(20,184,166,0.10) 100%)",
      border: "1px solid rgba(34, 197, 94, 0.14)",
      color: "#16a34a",
      fontSize: "24px",
      fontWeight: 700,
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
      marginBottom: "18px",
    },

    cardTitle: {
      margin: "0 0 12px 0",
      fontSize: "22px",
      lineHeight: 1.3,
      fontWeight: 800,
      color: "#0f172a",
      letterSpacing: "-0.03em",
    },

    cardDesc: {
      margin: "0 0 18px 0",
      fontSize: "15px",
      lineHeight: 1.85,
      color: "#64748b",
      minHeight: "84px",
    },

    tagsWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "18px",
    },

    tag: {
      padding: "7px 11px",
      borderRadius: "999px",
      background: "rgba(34, 197, 94, 0.08)",
      border: "1px solid rgba(34, 197, 94, 0.12)",
      color: "#15803d",
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: 1,
    },

    learnMore: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "13px",
      fontWeight: 800,
      color: "#16a34a",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
    },

    ctaBox: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "30px",
      padding: "44px 30px",
      background:
        "linear-gradient(135deg, #22c55e 0%, #16a34a 45%, #0f9f68 100%)",
      boxShadow:
        "0 30px 60px rgba(34,197,94,0.20), 0 14px 30px rgba(15,23,42,0.08)",
      textAlign: "center",
    },

    ctaGlow: {
      position: "absolute",
      top: "-60px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "340px",
      height: "340px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.12)",
      filter: "blur(70px)",
      pointerEvents: "none",
    },

    ctaTitle: {
      position: "relative",
      zIndex: 2,
      margin: "0 0 14px 0",
      fontSize: "clamp(28px, 4vw, 44px)",
      lineHeight: 1.1,
      fontWeight: 800,
      color: "#ffffff",
      letterSpacing: "-0.04em",
    },

    ctaText: {
      position: "relative",
      zIndex: 2,
      margin: "0 auto 26px",
      maxWidth: "760px",
      fontSize: "16px",
      lineHeight: 1.8,
      color: "rgba(255,255,255,0.88)",
    },

    ctaBtns: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "14px",
      flexWrap: "wrap",
    },

    primaryBtn: {
      background: "#ffffff",
      color: "#15803d",
      border: "none",
      borderRadius: "14px",
      padding: "14px 24px",
      fontSize: "15px",
      fontWeight: 800,
      cursor: "pointer",
      boxShadow: "0 12px 24px rgba(255,255,255,0.18)",
    },

    secondaryBtn: {
      background: "rgba(255,255,255,0.16)",
      color: "#ffffff",
      border: "1px solid rgba(255,255,255,0.22)",
      borderRadius: "14px",
      padding: "14px 24px",
      fontSize: "15px",
      fontWeight: 800,
      cursor: "pointer",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    },
  };

  return (
    <section style={styles.section} id="capabilities">
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />
      <div style={styles.gridOverlay} />

      <div style={styles.container}>
        <div style={styles.headingWrap}>
          <div style={styles.badge}>• Our Capabilities</div>
          <h2 style={styles.heading}>What We Strategize</h2>
          <p style={styles.subHeading}>
            From custom software and mobile apps to AI automation and cloud
            infrastructure, we deliver end-to-end technology solutions designed
            for speed, security, and sustainable growth.
          </p>
        </div>

        <div style={styles.cardsGrid}>
          {capabilities.map((item, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 24px 50px rgba(15,23,42,0.09), 0 10px 24px rgba(34,197,94,0.08)";
                e.currentTarget.style.border =
                  "1px solid rgba(34, 197, 94, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(15,23,42,0.05), 0 2px 10px rgba(15,23,42,0.03)";
                e.currentTarget.style.border =
                  "1px solid rgba(15, 23, 42, 0.06)";
              }}
            >
              <div style={styles.cardTopLine} />
              <div style={styles.iconWrap}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.desc}</p>

              <div style={styles.tagsWrap}>
                {item.tags.map((tag, i) => (
                  <span key={i} style={styles.tag}>
                    <span style={{ marginRight: "4px" }}>{tag.icon}</span>
                    {tag.name}
                  </span>
                ))}
              </div>

              <Link to={item.route} style={{ textDecoration: 'none' }}>
                <div style={styles.learnMore}>
                  Learn More <span>→</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* <div style={styles.ctaBox}>
          <div style={styles.ctaGlow} />
          <h3 style={styles.ctaTitle}>Ready to start your project?</h3>
          <p style={styles.ctaText}>
            Let’s discuss your requirements and build a clean, secure, and
            scalable solution tailored to your business goals.
          </p>

          <div style={styles.ctaBtns}>
            <button style={styles.primaryBtn}>Contact Us</button>
            <button style={styles.secondaryBtn}>View Portfolio</button>
          </div>
        </div> */}

        <ProjectCTA />
        
      </div>
    </section>
  );
}