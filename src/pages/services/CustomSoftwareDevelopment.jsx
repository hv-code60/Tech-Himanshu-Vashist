import React from "react";
import { Link } from "react-router-dom";

export default function CustomSoftwareDevelopment() {
  const deliverables = [
    {
      title: "Custom Business Software",
      desc: "Tailored software solutions designed around your exact business workflows, processes, and operational goals.",
    },
    {
      title: "Admin Panels & Dashboards",
      desc: "Clean, scalable, and role-based admin systems that help your team manage data, operations, and users efficiently.",
    },
    {
      title: "CRM & Internal Tools",
      desc: "Purpose-built CRMs, lead systems, workflow tools, and internal platforms that improve productivity and visibility.",
    },
    {
      title: "Secure Architecture",
      desc: "Software engineered with performance, access control, security, and long-term maintainability in mind.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Requirement Mapping",
      desc: "We understand your business model, team workflow, objectives, pain points, and future scalability needs.",
    },
    {
      step: "02",
      title: "Planning & Architecture",
      desc: "We define the right features, user roles, tech stack, database structure, and software architecture.",
    },
    {
      step: "03",
      title: "UI/UX & Product Structure",
      desc: "We create clear product flows and intuitive interfaces that make the system easier to use and manage.",
    },
    {
      step: "04",
      title: "Development & Integrations",
      desc: "We build the software with clean code, secure logic, and required integrations for your operations.",
    },
    {
      step: "05",
      title: "Testing & Quality Assurance",
      desc: "Every module is tested for functionality, performance, security, and reliability before deployment.",
    },
    {
      step: "06",
      title: "Deployment & Support",
      desc: "We deploy your software, optimize it for production, and provide support for updates and future scaling.",
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
    { name: "Cloudinary", icon: "☁️" },
    { name: "AWS / VPS", icon: "📦" },
  ];

  const whyUs = [
    "Built around your exact workflow",
    "Scalable architecture for future growth",
    "Secure authentication and role-based access",
    "Premium user experience and clean dashboards",
    "Fast development with long-term maintainability",
    "Business-focused execution, not just coding",
  ];

  const stats = [
    { value: "Tailored", label: "Built around business goals" },
    { value: "Secure", label: "Role-based protected systems" },
    { value: "Scalable", label: "Designed for long-term growth" },
    { value: "Modern", label: "Clean UX with powerful backend" },
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

  const CubeIcon = () => (
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
      <path d="M12 2l8 4.5v11L12 22l-8-4.5v-11L12 2z" />
      <path d="M12 22V11" />
      <path d="M20 6.5l-8 4.5-8-4.5" />
    </svg>
  );

  const ShieldIcon = () => (
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
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
      <path d="M9.5 12l1.8 1.8L15 10.2" />
    </svg>
  );

  const GridIcon = () => (
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

  const BoltIcon = () => (
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
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );

  const featureIcons = [CubeIcon, GridIcon, BoltIcon, ShieldIcon];

  const styles = {
    page: {
      position: "relative",
      minHeight: "100vh",
      background:
        "radial-gradient(circle at top left, rgba(34,197,94,0.10), transparent 28%), radial-gradient(circle at top right, rgba(16,185,129,0.08), transparent 26%), linear-gradient(180deg, #f8fffb 0%, #ffffff 26%, #f7fafc 100%)",
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      color: "#0f172a",
      overflow: "hidden",
    },

    noise: {
      position: "absolute",
      inset: 0,
      opacity: 0.18,
      pointerEvents: "none",
      backgroundImage:
        "radial-gradient(rgba(15,23,42,0.07) 0.6px, transparent 0.6px)",
      backgroundSize: "18px 18px",
      maskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0.30), rgba(0,0,0,0.06))",
      WebkitMaskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0.30), rgba(0,0,0,0.06))",
    },

    glowOne: {
      position: "absolute",
      top: "-120px",
      left: "-120px",
      width: "380px",
      height: "380px",
      borderRadius: "50%",
      background: "rgba(34, 197, 94, 0.12)",
      filter: "blur(110px)",
      pointerEvents: "none",
    },

    glowTwo: {
      position: "absolute",
      top: "240px",
      right: "-140px",
      width: "420px",
      height: "420px",
      borderRadius: "50%",
      background: "rgba(20, 184, 166, 0.10)",
      filter: "blur(120px)",
      pointerEvents: "none",
    },

    gridOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to right, rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.03) 1px, transparent 1px)",
      backgroundSize: "46px 46px",
      maskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0.18), transparent 85%)",
      WebkitMaskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0.18), transparent 85%)",
      pointerEvents: "none",
    },

    section: {
      position: "relative",
      zIndex: 2,
      padding: "96px 20px 34px",
    },

    container: {
      maxWidth: "1220px",
      margin: "0 auto",
    },

    heroWrap: {
      display: "grid",
      gridTemplateColumns: "1.08fr 0.92fr",
      gap: "34px",
      alignItems: "center",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 16px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.72)",
      border: "1px solid rgba(34,197,94,0.18)",
      color: "#15803d",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      marginTop: 40,
      marginBottom: "22px",
      boxShadow: "0 10px 30px rgba(15,23,42,0.04)",
      backdropFilter: "blur(14px)",
    },

    badgeDot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #22c55e 0%, #10b981 100%)",
      boxShadow: "0 0 0 6px rgba(34,197,94,0.12)",
    },

    heroTitle: {
      fontSize: "clamp(42px, 5vw, 74px)",
      lineHeight: 0.98,
      fontWeight: 900,
      letterSpacing: "-0.065em",
      margin: "0 0 20px 0",
      maxWidth: "760px",
      color: "#0b1220",
    },

    heroGradient: {
      background: "linear-gradient(135deg, #0f172a 0%, #166534 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },

    heroDesc: {
      margin: "0 0 28px 0",
      fontSize: "17px",
      lineHeight: 1.95,
      color: "#5b667a",
      maxWidth: "720px",
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
      background: "rgba(255,255,255,0.85)",
      border: "1px solid rgba(15,23,42,0.06)",
      color: "#0f172a",
      fontSize: "13px",
      fontWeight: 700,
      boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
      backdropFilter: "blur(12px)",
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
      gap: "10px",
      justifyContent: "center",
      textDecoration: "none",
      background: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
      color: "#ffffff",
      padding: "16px 24px",
      borderRadius: "18px",
      fontWeight: 800,
      boxShadow: "0 18px 38px rgba(34,197,94,0.24)",
      fontSize: "15px",
      border: "1px solid rgba(255,255,255,0.12)",
    },

    secondaryBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      justifyContent: "center",
      textDecoration: "none",
      background: "rgba(255,255,255,0.82)",
      color: "#0f172a",
      padding: "16px 24px",
      borderRadius: "18px",
      fontWeight: 800,
      border: "1px solid rgba(15,23,42,0.08)",
      boxShadow: "0 12px 28px rgba(15,23,42,0.05)",
      fontSize: "15px",
      backdropFilter: "blur(12px)",
    },

    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: "14px",
    },

    statCard: {
      background: "rgba(255,255,255,0.72)",
      border: "1px solid rgba(15,23,42,0.06)",
      borderRadius: "22px",
      padding: "18px 18px",
      boxShadow: "0 12px 28px rgba(15,23,42,0.04)",
      backdropFilter: "blur(12px)",
    },

    statValue: {
      fontSize: "20px",
      fontWeight: 900,
      letterSpacing: "-0.04em",
      color: "#0f172a",
      marginBottom: "6px",
    },

    statLabel: {
      fontSize: "13px",
      lineHeight: 1.6,
      color: "#64748b",
    },

    heroPanel: {
      position: "relative",
      borderRadius: "34px",
      padding: "24px",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.94) 100%)",
      border: "1px solid rgba(255,255,255,0.7)",
      boxShadow: "0 30px 70px rgba(15,23,42,0.10)",
      overflow: "hidden",
      backdropFilter: "blur(18px)",
    },

    panelGlow: {
      position: "absolute",
      top: "-20%",
      right: "-10%",
      width: "240px",
      height: "240px",
      borderRadius: "50%",
      background: "rgba(34,197,94,0.14)",
      filter: "blur(70px)",
      pointerEvents: "none",
    },

    topLine: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "1px",
      background:
        "linear-gradient(90deg, rgba(34,197,94,0), rgba(34,197,94,0.85), rgba(16,185,129,0.25), rgba(34,197,94,0))",
      opacity: 0.95,
    },

    panelMiniBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "8px 12px",
      borderRadius: "999px",
      background: "rgba(34,197,94,0.08)",
      border: "1px solid rgba(34,197,94,0.12)",
      fontSize: "12px",
      fontWeight: 800,
      color: "#15803d",
      marginBottom: "18px",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },

    heroCardTitle: {
      margin: "0 0 10px 0",
      fontSize: "28px",
      lineHeight: 1.15,
      fontWeight: 900,
      letterSpacing: "-0.04em",
      color: "#0f172a",
    },

    heroCardText: {
      margin: "0 0 24px 0",
      color: "#64748b",
      fontSize: "15px",
      lineHeight: 1.9,
    },

    bulletList: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      marginBottom: "22px",
    },

    bulletRow: {
      display: "flex",
      gap: "14px",
      alignItems: "flex-start",
      color: "#334155",
      fontSize: "15px",
      lineHeight: 1.75,
      paddingBottom: "14px",
      borderBottom: "1px solid rgba(15,23,42,0.06)",
    },

    bulletDot: {
      width: "30px",
      height: "30px",
      minWidth: "30px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "1px",
      boxShadow: "0 10px 20px rgba(34,197,94,0.22)",
    },

    panelFooter: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "14px",
    },

    miniCard: {
      borderRadius: "20px",
      padding: "16px",
      background: "rgba(248,250,252,0.9)",
      border: "1px solid rgba(15,23,42,0.06)",
    },

    miniCardTitle: {
      fontSize: "14px",
      fontWeight: 800,
      color: "#0f172a",
      marginBottom: "6px",
    },

    miniCardText: {
      fontSize: "13px",
      lineHeight: 1.7,
      color: "#64748b",
    },

    contentSection: {
      position: "relative",
      zIndex: 2,
      padding: "20px 20px 100px",
    },

    sectionBlock: {
      maxWidth: "1220px",
      margin: "0 auto 34px",
    },

    sectionHeadWrap: {
      display: "flex",
      alignItems: "end",
      justifyContent: "space-between",
      gap: "18px",
      marginBottom: "26px",
      flexWrap: "wrap",
    },

    sectionKicker: {
      display: "inline-block",
      marginBottom: "10px",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "#16a34a",
    },

    sectionHeading: {
      margin: 0,
      fontSize: "38px",
      fontWeight: 900,
      letterSpacing: "-0.05em",
      color: "#0f172a",
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
        "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(250,252,255,0.98) 100%)",
      border: "1px solid rgba(15,23,42,0.06)",
      borderRadius: "28px",
      padding: "26px",
      boxShadow: "0 18px 36px rgba(15,23,42,0.05)",
      overflow: "hidden",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
    },

    cardIconWrap: {
      width: "54px",
      height: "54px",
      borderRadius: "18px",
      background: "linear-gradient(135deg, #ecfdf5 0%, #dcfce7 100%)",
      color: "#15803d",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "18px",
      boxShadow: "inset 0 0 0 1px rgba(34,197,94,0.10)",
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
        "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,1) 100%)",
      border: "1px solid rgba(15,23,42,0.06)",
      borderRadius: "26px",
      padding: "24px",
      boxShadow: "0 16px 34px rgba(15,23,42,0.045)",
      overflow: "hidden",
    },

    stepBadge: {
      width: "48px",
      height: "48px",
      borderRadius: "16px",
      background: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 900,
      fontSize: "14px",
      boxShadow: "0 14px 24px rgba(34,197,94,0.20)",
      marginBottom: "18px",
    },

    processTitle: {
      margin: "0 0 10px 0",
      fontSize: "18px",
      fontWeight: 800,
      color: "#0f172a",
      lineHeight: 1.35,
      letterSpacing: "-0.03em",
    },

    processDesc: {
      margin: 0,
      color: "#64748b",
      fontSize: "15px",
      lineHeight: 1.82,
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
        "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,1) 100%)",
      border: "1px solid rgba(15,23,42,0.06)",
      boxShadow: "0 14px 28px rgba(15,23,42,0.04)",
    },

    ctaBox: {
      maxWidth: "1220px",
      margin: "8px auto 0",
      borderRadius: "34px",
      padding: "42px 30px",
      background:
        "linear-gradient(135deg, #0f172a 0%, #166534 60%, #22c55e 100%)",
      color: "#ffffff",
      boxShadow: "0 28px 60px rgba(15,23,42,0.18)",
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
      lineHeight: 1.03,
      fontWeight: 900,
      letterSpacing: "-0.05em",
      maxWidth: "700px",
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
      gap: "10px",
      justifyContent: "center",
      textDecoration: "none",
      background: "#ffffff",
      color: "#166534",
      padding: "15px 24px",
      borderRadius: "16px",
      fontWeight: 800,
      fontSize: "15px",
      boxShadow: "0 12px 24px rgba(255,255,255,0.14)",
    },

    ctaSecondary: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
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
      <div style={styles.noise} />

      <section style={styles.section}>
        <div style={styles.container}>
          <div className="serviceHeroGrid" style={styles.heroWrap}>
            <div>
              <div style={styles.badge}>
                <span style={styles.badgeDot} />
                Premium Software Solutions
              </div>

              <h1 style={styles.heroTitle}>
                <span style={styles.heroGradient}>Custom Software</span>
                <br />
                Development
              </h1>

              <p style={styles.heroDesc}>
                We craft high-performance software tailored to your business
                operations, internal workflows, customer management, and future
                scale—designed to feel premium, powerful, and practical from day
                one.
              </p>

              <div style={styles.tagsWrap}>
                <span style={styles.tag}>Custom SaaS</span>
                <span style={styles.tag}>Enterprise Dashboards</span>
                <span style={styles.tag}>RBAC Systems</span>
                <span style={styles.tag}>CRM Solutions</span>
                <span style={styles.tag}>Workflow Automation</span>
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

            <div style={styles.heroPanel}>
              <div style={styles.panelGlow} />
              <div style={styles.topLine} />

              <div style={styles.panelMiniBadge}>
                <span style={styles.badgeDot} />
                Built for serious businesses
              </div>

              <h3 style={styles.heroCardTitle}>What this service is best for</h3>
              <p style={styles.heroCardText}>
                Perfect for organizations that need software built specifically
                around their business model, internal processes, user roles,
                reporting structure, and long-term operational growth.
              </p>

              <div style={styles.bulletList}>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Internal business platforms and admin systems</div>
                </div>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Custom CRM, workflow, and process automation tools</div>
                </div>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Scalable SaaS products with role-based permissions</div>
                </div>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Secure, maintainable architecture ready for expansion</div>
                </div>
              </div>

              <div style={styles.panelFooter}>
                <div style={styles.miniCard}>
                  <div style={styles.miniCardTitle}>Business-first thinking</div>
                  <div style={styles.miniCardText}>
                    We build for outcomes, not just features.
                  </div>
                </div>
                <div style={styles.miniCard}>
                  <div style={styles.miniCardTitle}>Long-term scalability</div>
                  <div style={styles.miniCardText}>
                    Clean systems that grow with your company.
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
              <h2 style={styles.sectionHeading}>Software built with clarity and scale</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              We create custom digital systems that are robust, elegant, secure,
              and aligned with how your business truly operates.
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
              <span style={styles.sectionKicker}>How we work</span>
              <h2 style={styles.sectionHeading}>A refined development process</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              From discovery to deployment, every phase is structured to reduce
              friction, increase clarity, and deliver a stronger final product.
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
              <span style={styles.sectionKicker}>Technology</span>
              <h2 style={styles.sectionHeading}>Modern stack, stable foundation</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              We choose tools that support performance, scalability,
              maintainability, and smooth business operations.
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
              <span style={styles.sectionKicker}>Why NexaH</span>
              <h2 style={styles.sectionHeading}>Why businesses trust our execution</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              Our approach combines strong product thinking, solid engineering,
              and practical business understanding—so the final result is useful
              from both technical and operational perspectives.
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
          <h2 style={styles.ctaTitle}>Need custom software built for your business?</h2>
          <p style={styles.ctaText}>
            Let’s turn your workflows, team requirements, and business goals
            into a secure, scalable, and premium software solution that actually
            supports growth.
          </p>

          <div style={styles.ctaBtns}>
            <Link to="/contact" style={styles.ctaPrimary}>
              Contact Us
              <ArrowIcon />
            </Link>
            <Link to="/#capabilities" style={styles.ctaSecondary}>
              View Other Services
            </Link>
          </div>
        </div>
      </section>

      <style>{`
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