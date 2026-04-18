import React from "react";
import { Link } from "react-router-dom";

export default function WebPortalDevelopment() {
  const deliverables = [
    {
      title: "Custom Web Portals",
      desc: "Structured portals for customers, teams, partners, vendors, or internal users with secure access and organized workflows.",
    },
    {
      title: "Business Websites",
      desc: "Modern business websites designed to present your brand clearly, build trust, and support business growth.",
    },
    {
      title: "User Dashboards",
      desc: "Interactive dashboards for users, admins, and teams with data visibility, actions, and role-based experiences.",
    },
    {
      title: "SEO & Performance Optimization",
      desc: "Fast, responsive, and search-friendly web experiences built for visibility, usability, and long-term scalability.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Requirement Discovery",
      desc: "We understand your audience, portal users, business workflows, content structure, and platform goals before development starts.",
    },
    {
      step: "02",
      title: "Architecture & Page Planning",
      desc: "We define navigation, access roles, dashboard logic, page hierarchy, and the right technical structure for the portal.",
    },
    {
      step: "03",
      title: "UI/UX & Product Layout",
      desc: "We design premium interfaces and user journeys that make your portal simple, clear, and efficient to use.",
    },
    {
      step: "04",
      title: "Development & Integration",
      desc: "We build the frontend and backend with secure logic, responsive design, and third-party integrations where needed.",
    },
    {
      step: "05",
      title: "Testing & Optimization",
      desc: "We test portal flows, role permissions, responsiveness, speed, and usability to ensure a reliable launch.",
    },
    {
      step: "06",
      title: "Launch & Ongoing Support",
      desc: "We deploy your platform, optimize production performance, and support future improvements and scaling.",
    },
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "⬢" },
    { name: "Express.js", icon: "⚡" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "REST APIs", icon: "🔌" },
    { name: "JWT/Auth", icon: "🔐" },
    { name: "SEO Optimization", icon: "🔍" },
    { name: "Responsive Design", icon: "📱" },
  ];

  const whyUs = [
    "Portals designed around real business workflows",
    "Responsive and premium user experience",
    "Secure access and role-based architecture",
    "SEO-friendly structure for public-facing pages",
    "Scalable codebase for future expansion",
    "Strong balance of business thinking and technical execution",
  ];

  const stats = [
    { value: "Fast", label: "Built for speed and responsiveness" },
    { value: "Scalable", label: "Ready for future business growth" },
    { value: "Secure", label: "Protected role-based portal access" },
    { value: "Premium", label: "Refined design with business clarity" },
  ];

  const CheckIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );

  const ArrowIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );

  const GlobeIcon = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" />
    </svg>
  );

  const LayersIcon = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </svg>
  );

  const PanelIcon = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );

  const RocketIcon = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.5-1.5 3 0 3s3 0 4.5-1.5L7 14l-2.5 2.5z" />
      <path d="M14 10l-4 4" />
      <path d="M15 3c3.5 0 6 2.5 6 6-4.5 1-8 4.5-9 9-3.5 0-6-2.5-6-6 1-4.5 4.5-8 9-9z" />
    </svg>
  );

  const featureIcons = [LayersIcon, GlobeIcon, PanelIcon, RocketIcon];

  const styles = {
    page: {
      position: "relative",
      minHeight: "100vh",
      background:
        "radial-gradient(circle at left top, rgba(34,197,94,0.14), transparent 28%), radial-gradient(circle at 80% 15%, rgba(16,185,129,0.08), transparent 24%), linear-gradient(180deg, #eef9f1 0%, #f7fbf8 22%, #fbfdfc 100%)",
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      color: "#0f172a",
      overflow: "hidden",
    },

    glowOne: {
      position: "absolute",
      top: "-100px",
      left: "-120px",
      width: "360px",
      height: "360px",
      borderRadius: "50%",
      background: "rgba(34,197,94,0.16)",
      filter: "blur(110px)",
      pointerEvents: "none",
    },

    glowTwo: {
      position: "absolute",
      top: "180px",
      right: "-120px",
      width: "360px",
      height: "360px",
      borderRadius: "50%",
      background: "rgba(16,185,129,0.10)",
      filter: "blur(120px)",
      pointerEvents: "none",
    },

    gridOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to right, rgba(15,23,42,0.018) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.018) 1px, transparent 1px)",
      backgroundSize: "42px 42px",
      WebkitMaskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0.16), transparent 85%)",
      maskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0.16), transparent 85%)",
      pointerEvents: "none",
    },

    section: {
      position: "relative",
      zIndex: 2,
      padding: "88px 20px 28px",
      marginTop: "40px",
    },

    container: {
      maxWidth: "1220px",
      margin: "0 auto",
    },

    heroWrap: {
      display: "grid",
      gridTemplateColumns: "1.08fr 0.92fr",
      gap: "36px",
      alignItems: "center",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px 18px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.78)",
      border: "1px solid rgba(34,197,94,0.10)",
      color: "#15803d",
      fontSize: "12px",
      fontWeight: 900,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      marginBottom: "22px",
      boxShadow: "0 10px 24px rgba(15,23,42,0.04)",
      backdropFilter: "blur(14px)",
      width: "fit-content",
    },

    badgeDot: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#22c55e",
      boxShadow: "0 0 0 8px rgba(34,197,94,0.10)",
    },

    heroTitle: {
      fontSize: "clamp(44px, 5vw, 78px)",
      lineHeight: 0.96,
      fontWeight: 900,
      letterSpacing: "-0.07em",
      margin: "0 0 22px 0",
      color: "#07132a",
      maxWidth: "760px",
    },

    heroGradient: {
      background: "linear-gradient(135deg, #0b132b 0%, #166534 62%, #15803d 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },

    heroDesc: {
      margin: "0 0 28px 0",
      fontSize: "17px",
      lineHeight: 1.95,
      color: "#52657f",
      maxWidth: "760px",
    },

    tagsWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      marginBottom: "30px",
    },

    tag: {
      padding: "10px 14px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.80)",
      border: "1px solid rgba(34,197,94,0.08)",
      color: "#133a2f",
      fontSize: "13px",
      fontWeight: 700,
      boxShadow: "0 8px 18px rgba(15,23,42,0.03)",
    },

    heroBtns: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap",
      marginBottom: "34px",
    },

    primaryBtn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      textDecoration: "none",
      background: "linear-gradient(135deg, #34c759 0%, #22c55e 100%)",
      color: "#ffffff",
      padding: "16px 26px",
      borderRadius: "18px",
      fontWeight: 800,
      fontSize: "15px",
      boxShadow: "0 18px 34px rgba(34,197,94,0.22)",
      border: "1px solid rgba(255,255,255,0.14)",
    },

    secondaryBtn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      textDecoration: "none",
      background: "rgba(255,255,255,0.82)",
      color: "#0f172a",
      padding: "16px 26px",
      borderRadius: "18px",
      fontWeight: 800,
      fontSize: "15px",
      border: "1px solid rgba(15,23,42,0.06)",
      boxShadow: "0 10px 22px rgba(15,23,42,0.04)",
      backdropFilter: "blur(10px)",
    },

    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: "14px",
    },

    statCard: {
      background: "rgba(255,255,255,0.75)",
      border: "1px solid rgba(34,197,94,0.06)",
      borderRadius: "22px",
      padding: "18px",
      boxShadow: "0 12px 26px rgba(15,23,42,0.035)",
      backdropFilter: "blur(12px)",
    },

    statValue: {
      fontSize: "22px",
      fontWeight: 900,
      letterSpacing: "-0.04em",
      color: "#081226",
      marginBottom: "5px",
    },

    statLabel: {
      fontSize: "13px",
      lineHeight: 1.65,
      color: "#62748f",
    },

    heroCard: {
      position: "relative",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(250,252,251,0.96) 100%)",
      border: "1px solid rgba(34,197,94,0.10)",
      borderRadius: "34px",
      padding: "36px",
      boxShadow: "0 24px 60px rgba(15,23,42,0.08)",
      overflow: "hidden",
      backdropFilter: "blur(18px)",
    },

    cardGlow: {
      position: "absolute",
      top: "60px",
      right: "40px",
      width: "54px",
      height: "54px",
      borderRadius: "50%",
      background: "rgba(148,163,184,0.22)",
      filter: "blur(8px)",
      pointerEvents: "none",
    },

    topLine: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "1px",
      background:
        "linear-gradient(90deg, rgba(34,197,94,0), rgba(34,197,94,0.75), rgba(16,185,129,0.18), rgba(34,197,94,0))",
      opacity: 0.85,
    },

    panelBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      padding: "10px 16px",
      borderRadius: "999px",
      background: "#edf6ef",
      border: "1px solid rgba(34,197,94,0.08)",
      fontSize: "12px",
      fontWeight: 900,
      color: "#15803d",
      marginBottom: "24px",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    },

    heroCardTitle: {
      margin: "0 0 14px 0",
      fontSize: "28px",
      fontWeight: 900,
      letterSpacing: "-0.04em",
      color: "#0d1730",
      lineHeight: 1.14,
    },

    heroCardText: {
      margin: "0 0 24px 0",
      color: "#64748b",
      fontSize: "15px",
      lineHeight: 1.95,
    },

    bulletList: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      marginBottom: "22px",
    },

    bulletRow: {
      display: "flex",
      gap: "16px",
      alignItems: "flex-start",
      color: "#334155",
      fontSize: "15px",
      lineHeight: 1.8,
    },

    bulletDot: {
      width: "46px",
      height: "46px",
      minWidth: "46px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #34c759 0%, #22c55e 100%)",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "1px",
      boxShadow: "0 10px 24px rgba(34,197,94,0.22)",
    },

    panelFooter: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "14px",
      marginTop: "18px",
    },

    miniCard: {
      borderRadius: "20px",
      padding: "16px",
      background: "rgba(255,255,255,0.62)",
      border: "1px solid rgba(15,23,42,0.05)",
    },

    miniCardTitle: {
      fontSize: "14px",
      fontWeight: 800,
      color: "#0f172a",
      marginBottom: "6px",
    },

    miniCardText: {
      fontSize: "13px",
      lineHeight: 1.72,
      color: "#64748b",
    },

    contentSection: {
      position: "relative",
      zIndex: 2,
      padding: "34px 20px 100px",
    },

    sectionBlock: {
      maxWidth: "1220px",
      margin: "0 auto 36px",
    },

    sectionHeadWrap: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      gap: "18px",
      flexWrap: "wrap",
      marginBottom: "26px",
    },

    sectionHeadLeft: {
      maxWidth: "560px",
    },

    sectionKicker: {
      display: "inline-block",
      marginBottom: "10px",
      fontSize: "12px",
      fontWeight: 900,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "#15803d",
    },

    sectionHeading: {
      margin: 0,
      fontSize: "38px",
      fontWeight: 900,
      letterSpacing: "-0.05em",
      color: "#081226",
      lineHeight: 1.05,
    },

    sectionText: {
      margin: 0,
      color: "#64748b",
      fontSize: "16px",
      lineHeight: 1.9,
      maxWidth: "760px",
    },

    sectionHeadWrapCentered: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "18px",
      marginBottom: "26px",
      textAlign: "center",
    },

    sectionTextCentered: {
      margin: "0 auto",
      color: "#64748b",
      fontSize: "16px",
      lineHeight: 1.9,
      maxWidth: "760px",
    },

    grid4: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "20px",
    },

    card: {
      position: "relative",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(252,253,252,1) 100%)",
      border: "1px solid rgba(15,23,42,0.05)",
      borderRadius: "28px",
      padding: "28px",
      boxShadow: "0 16px 34px rgba(15,23,42,0.04)",
      overflow: "hidden",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
    },

    cardIconWrap: {
      width: "58px",
      height: "58px",
      borderRadius: "18px",
      background: "linear-gradient(135deg, #ebf9ef 0%, #daf6e4 100%)",
      color: "#15803d",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "18px",
      boxShadow: "inset 0 0 0 1px rgba(34,197,94,0.08)",
    },

    cardTitle: {
      margin: "0 0 10px 0",
      fontSize: "21px",
      fontWeight: 800,
      color: "#0f172a",
      letterSpacing: "-0.03em",
    },

    cardDesc: {
      margin: 0,
      color: "#64748b",
      fontSize: "15px",
      lineHeight: 1.85,
    },

    processGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "18px",
    },

    processCard: {
      position: "relative",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(249,251,250,1) 100%)",
      border: "1px solid rgba(15,23,42,0.05)",
      borderRadius: "26px",
      padding: "24px",
      boxShadow: "0 14px 30px rgba(15,23,42,0.04)",
      overflow: "hidden",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
    },

    stepBadge: {
      width: "48px",
      height: "48px",
      borderRadius: "16px",
      background: "linear-gradient(135deg, #34c759 0%, #22c55e 100%)",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 900,
      fontSize: "14px",
      boxShadow: "0 12px 24px rgba(34,197,94,0.18)",
      marginBottom: "18px",
    },

    processTitle: {
      margin: "0 0 10px 0",
      fontSize: "18px",
      fontWeight: 800,
      color: "#0f172a",
      lineHeight: 1.36,
      letterSpacing: "-0.03em",
    },

    processDesc: {
      margin: 0,
      color: "#64748b",
      fontSize: "15px",
      lineHeight: 1.84,
    },

    stackWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "900px",
      margin: "0 auto",
    },

    stackItem: {
      padding: "16px 22px",
      borderRadius: "18px",
      background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,252,255,0.92) 100%)",
      border: "1.2px solid rgba(34,197,94,0.15)",
      color: "#0f172a",
      fontSize: "15px",
      fontWeight: 800,
      letterSpacing: "-0.01em",
      boxShadow: "0 12px 32px rgba(34,197,94,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
      transition: "all 0.3s cubic-bezier(0.23, 1, 0.320, 1)",
      cursor: "pointer",
    },

    whyGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "16px",
    },

    whyItem: {
      display: "flex",
      gap: "14px",
      alignItems: "flex-start",
      padding: "20px",
      borderRadius: "22px",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(249,251,250,1) 100%)",
      border: "1px solid rgba(15,23,42,0.05)",
      boxShadow: "0 14px 28px rgba(15,23,42,0.04)",
    },

    ctaBox: {
      maxWidth: "1220px",
      margin: "10px auto 0",
      borderRadius: "34px",
      padding: "44px 30px",
      background:
        "linear-gradient(135deg, #081226 0%, #14532d 58%, #22c55e 100%)",
      color: "#ffffff",
      boxShadow: "0 28px 58px rgba(15,23,42,0.18)",
      position: "relative",
      overflow: "hidden",
    },

    ctaGlow: {
      position: "absolute",
      top: "-40px",
      right: "-20px",
      width: "260px",
      height: "260px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.12)",
      filter: "blur(80px)",
    },

    ctaTitle: {
      margin: "0 0 12px 0",
      fontSize: "40px",
      lineHeight: 1.04,
      fontWeight: 900,
      letterSpacing: "-0.05em",
      maxWidth: "760px",
      position: "relative",
      zIndex: 2,
    },

    ctaText: {
      margin: "0 0 24px 0",
      fontSize: "16px",
      lineHeight: 1.9,
      maxWidth: "760px",
      color: "rgba(255,255,255,0.88)",
      position: "relative",
      zIndex: 2,
    },

    ctaBtns: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap",
      position: "relative",
      zIndex: 2,
    },

    ctaPrimary: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      textDecoration: "none",
      background: "#ffffff",
      color: "#15803d",
      padding: "15px 24px",
      borderRadius: "16px",
      fontWeight: 800,
      fontSize: "15px",
      boxShadow: "0 12px 24px rgba(255,255,255,0.15)",
    },

    ctaSecondary: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      background: "rgba(255,255,255,0.10)",
      color: "#ffffff",
      padding: "15px 24px",
      borderRadius: "16px",
      fontWeight: 800,
      fontSize: "15px",
      border: "1px solid rgba(255,255,255,0.16)",
      backdropFilter: "blur(12px)",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />
      <div style={styles.gridOverlay} />

      <section style={styles.section}>
        <div style={styles.container}>
          <div className="serviceHeroGrid" style={styles.heroWrap}>
            <div>
              <div style={styles.badge}>
                <span style={styles.badgeDot} />
                Premium Web Solutions
              </div>

              <h1 style={styles.heroTitle}>
                <span style={styles.heroGradient}>Web & Portal</span>
                <br />
                Development
              </h1>

              <p style={styles.heroDesc}>
                We design and develop modern websites and powerful web portals
                that are fast, premium, responsive, and built to support real
                business workflows, engagement, and long-term digital growth.
              </p>

              <div style={styles.tagsWrap}>
                <span style={styles.tag}>React / Next.js</span>
                <span style={styles.tag}>SEO Ready</span>
                <span style={styles.tag}>Landing Pages</span>
                <span style={styles.tag}>Web Portals</span>
                <span style={styles.tag}>Dashboards</span>
              </div>

              <div style={styles.heroBtns}>
                <Link to="/contact" style={styles.primaryBtn}>
                  Start Your Project
                  <ArrowIcon />
                </Link>
                <Link to="/contact" style={styles.secondaryBtn}>
                  Talk to Our Experts
                </Link>
              </div>

              <div className="statsGrid" style={styles.statsGrid}>
                {stats.map((item, index) => (
                  <div key={index} style={styles.statCard}>
                    <div style={styles.statValue}>{item.value}</div>
                    <div style={styles.statLabel}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.heroCard}>
              <div style={styles.cardGlow} />
              <div style={styles.topLine} />

              <div style={styles.panelBadge}>
                <span style={styles.badgeDot} />
                Built for serious businesses
              </div>

              <h3 style={styles.heroCardTitle}>What this service is best for</h3>
              <p style={styles.heroCardText}>
                Ideal for businesses that need professional websites, client
                portals, internal dashboards, user panels, or scalable web
                platforms with strong performance, structured workflows, and a
                clean premium experience.
              </p>

              <div style={styles.bulletList}>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Corporate websites and premium business presence</div>
                </div>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>User portals, client panels, and dashboard systems</div>
                </div>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Landing pages and SEO-friendly web architecture</div>
                </div>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Responsive, scalable, and conversion-focused web products</div>
                </div>
              </div>

              <div style={styles.panelFooter}>
                <div style={styles.miniCard}>
                  <div style={styles.miniCardTitle}>Design + usability</div>
                  <div style={styles.miniCardText}>
                    Premium interfaces that remain practical and easy to use.
                  </div>
                </div>
                <div style={styles.miniCard}>
                  <div style={styles.miniCardTitle}>Scalable foundation</div>
                  <div style={styles.miniCardText}>
                    Built to expand with new modules, roles, and workflows.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.contentSection}>
        <div style={styles.sectionBlock}>
          <div style={styles.sectionHeadWrapCentered}>
            <div style={{ textAlign: 'center' }}>
              <span style={styles.sectionKicker}>What we deliver</span>
              <h2 style={styles.sectionHeading}>Web platforms built to perform</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              We create digital products that combine sharp presentation,
              efficient workflows, premium user experience, and practical
              business usability.
            </p>
          </div>

          <div className="serviceGrid2" style={styles.grid4}>
            {deliverables.map((item, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <div key={index} style={styles.card}>
                  <div style={styles.topLine} />
                  <div style={styles.cardIconWrap}>
                    <Icon />
                  </div>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.cardDesc}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div style={styles.sectionBlock}>
          <div style={styles.sectionHeadWrapCentered}>
            <div style={{ textAlign: 'center' }}>
              <span style={styles.sectionKicker}>Our process</span>
              <h2 style={styles.sectionHeading}>A refined portal development flow</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              Every website or portal is built through a structured process that
              ensures clarity, scalability, and a polished final result.
            </p>
          </div>

          <div className="processGrid3" style={styles.processGrid}>
            {process.map((item, index) => (
              <div key={index} style={styles.processCard}>
                <div style={styles.topLine} />
                <div style={styles.stepBadge}>{item.step}</div>
                <h3 style={styles.processTitle}>{item.title}</h3>
                <p style={styles.processDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...styles.sectionBlock, paddingTop: "50px", paddingBottom: "50px" }}>
          <div style={styles.sectionHeadWrapCentered}>
            <div style={{ textAlign: 'center' }}>
              <span style={styles.sectionKicker}>Tech stack</span>
              <h2 style={styles.sectionHeading}>Modern tools, stable architecture</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              We use modern frontend and backend technologies to build web
              products that are fast, maintainable, responsive, and future-ready.
            </p>
          </div>

          <div style={styles.stackWrap}>
            {techStack.map((item, index) => (
              <span key={index} style={styles.stackItem}>
                <span style={{ fontSize: "18px", marginRight: "8px" }}>{item.icon}</span>
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div style={styles.sectionBlock}>
          <div style={styles.sectionHeadWrapCentered}>
            <div style={{ textAlign: 'center' }}>
              <span style={styles.sectionKicker}>Why Zyntraa</span>
              <h2 style={styles.sectionHeading}>Why businesses choose our web expertise</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              We don’t just build pages. We create web platforms that align
              with brand identity, usability, performance, and measurable
              business objectives.
            </p>
          </div>

          <div className="serviceGrid2" style={styles.whyGrid}>
            {whyUs.map((item, index) => (
              <div key={index} style={styles.whyItem}>
                <div style={styles.bulletDot}>
                  <CheckIcon />
                </div>
                <div
                  style={{
                    color: "#334155",
                    lineHeight: 1.8,
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.ctaBox}>
          <div style={styles.ctaGlow} />
          <h2 style={styles.ctaTitle}>
            Need a website or portal built for your business?
          </h2>
          <p style={styles.ctaText}>
            Let’s create a premium web experience that is responsive, scalable,
            and designed to support your business goals, digital presence, and
            user workflows.
          </p>

          <div style={styles.ctaBtns}>
            <Link to="/contact" style={styles.ctaPrimary}>
              Contact Us
              <ArrowIcon />
            </Link>
            <Link to="/services" style={styles.ctaSecondary}>
              Explore More Services
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .serviceGrid2 > div:hover,
        .processGrid3 > div:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 50px rgba(15, 23, 42, 0.08) !important;
        }

        span[style*="rgba(34,197,94,0.15)"] {
          position: relative;
          overflow: hidden;
        }

        span[style*="rgba(34,197,94,0.15)"]:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 48px rgba(34,197,94,0.20), inset 0 1px 0 rgba(255,255,255,0.8) !important;
          border-color: rgba(34,197,94,0.25) !important;
          background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(236,253,245,0.95) 100%) !important;
        }

        span[style*="rgba(34,197,94,0.15)"]::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        span[style*="rgba(34,197,94,0.15)"]:hover::before {
          left: 100%;
        }

        @media (max-width: 1100px) {
          .serviceHeroGrid {
            grid-template-columns: 1fr !important;
          }

          .statsGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 992px) {
          .serviceGrid2 {
            grid-template-columns: 1fr !important;
          }

          .processGrid3 {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .statsGrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}