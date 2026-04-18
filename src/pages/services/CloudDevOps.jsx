import React from "react";

export default function CloudDevOps() {
  const deliverables = [
    {
      title: "Cloud Deployment Setup",
      desc: "Production-ready cloud and server environments configured for reliability, speed, and secure access.",
    },
    {
      title: "CI/CD Pipelines",
      desc: "Automated build and deployment workflows that reduce manual effort and improve release consistency.",
    },
    {
      title: "Monitoring & Alerts",
      desc: "Monitoring systems and alerting flows to improve uptime, issue visibility, and production awareness.",
    },
    {
      title: "Backups & Performance Tuning",
      desc: "Infrastructure designed with backup workflows, server optimization, and long-term production stability.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Infrastructure Review",
      desc: "We understand your current hosting, environment needs, deployment flow, and production requirements.",
    },
    {
      step: "02",
      title: "Cloud Architecture Planning",
      desc: "We define the right server, deployment, storage, backup, and scaling strategy for your project.",
    },
    {
      step: "03",
      title: "Environment Setup",
      desc: "We configure production, staging, environment variables, access permissions, and core infrastructure.",
    },
    {
      step: "04",
      title: "CI/CD & Automation",
      desc: "We implement automated deployments and release workflows to improve speed and reduce risk.",
    },
    {
      step: "05",
      title: "Monitoring & Hardening",
      desc: "We add monitoring, alerts, security rules, and performance checks for production readiness.",
    },
    {
      step: "06",
      title: "Maintenance & Scaling Support",
      desc: "We help maintain the system, improve uptime, and support scaling as your usage grows.",
    },
  ];

  const techStack = [
    { name: "AWS", icon: "☁️" },
    { name: "VPS", icon: "💾" },
    { name: "Docker", icon: "🐳" },
    { name: "CI/CD", icon: "🚀" },
    { name: "Monitoring Tools", icon: "📡" },
    { name: "Backups", icon: "💾" },
    { name: "Environment Management", icon: "⚙️" },
    { name: "Deployment Workflows", icon: "🔄" },
    { name: "Server Optimization", icon: "⚡" },
    { name: "Production Security", icon: "🔒" },
  ];

  const whyUs = [
    "Built on AWS, VPS, and proven cloud platforms",
    "Automated CI/CD pipelines for reliable deployments",
    "Real-time monitoring and alerting for visibility",
    "Database backups and disaster recovery planning",
    "Performance tuning and security best practices",
    "Production-ready infrastructure from day one",
  ];

  const stats = [
    { value: "Reliable", label: "Built for uptime and stable production use" },
    { value: "Secure", label: "Protected environments and access control" },
    { value: "Scalable", label: "Infrastructure ready for product growth" },
    { value: "Automated", label: "Faster releases with CI/CD workflows" },
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

  const CloudIcon = () => (
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
      <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.2 9.1 4 4 0 0 0 6 17h11.5z" />
    </svg>
  );

  const PipelineIcon = () => (
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
      <rect x="3" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="14" width="6" height="6" rx="1.5" />
      <path d="M9 7h6" />
      <path d="M18 10v4" />
      <path d="M9 17h6" />
    </svg>
  );

  const MonitorIcon = () => (
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
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="M7 12l2-2 2 2 4-4 2 2" />
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

  const featureIcons = [CloudIcon, PipelineIcon, MonitorIcon, ShieldIcon];

  const styles = {
    page: {
      position: "relative",
      minHeight: "100vh",
      background:
        "radial-gradient(circle at left top, rgba(34,197,94,0.14), transparent 28%), radial-gradient(circle at 82% 12%, rgba(16,185,129,0.08), transparent 24%), linear-gradient(180deg, #eef9f1 0%, #f7fbf8 22%, #fbfdfc 100%)",
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
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "900px",
      margin: "0 auto",
      gap: "16px",
    },

    stackItem: {
      padding: "16px 22px",
      borderRadius: "18px",
      background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,252,255,0.92) 100%)",
      border: "1.2px solid rgba(34,197,94,0.15)",
      color: "#102a22",
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
                Premium Cloud Solutions
              </div>

              <h1 style={styles.heroTitle}>
                <span style={styles.heroGradient}>Cloud &</span>
                <br />
                DevOps
              </h1>

              <p style={styles.heroDesc}>
                We set up cloud infrastructure and DevOps workflows that help
                your products stay stable, secure, scalable, and ready for
                smooth production use.
              </p>

              <div style={styles.tagsWrap}>
                <span style={styles.tag}>AWS / VPS</span>
                <span style={styles.tag}>CI/CD</span>
                <span style={styles.tag}>Monitoring</span>
                <span style={styles.tag}>Backups</span>
                <span style={styles.tag}>Optimization</span>
              </div>

              <div style={styles.heroBtns}>
                <a href="/contact" style={styles.primaryBtn}>
                  Start Your Project
                  <ArrowIcon />
                </a>
                <a href="/contact" style={styles.secondaryBtn}>
                  Talk to Our Experts
                </a>
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
                Ideal for teams that need reliable production deployments,
                automated workflows, server visibility, and better performance
                across live environments.
              </p>

              <div style={styles.bulletList}>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Cloud deployment and environment setup</div>
                </div>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>CI/CD implementation and release automation</div>
                </div>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Monitoring, alerts, and operational visibility</div>
                </div>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Performance tuning and production readiness</div>
                </div>
              </div>

              <div style={styles.panelFooter}>
                <div style={styles.miniCard}>
                  <div style={styles.miniCardTitle}>Stable production</div>
                  <div style={styles.miniCardText}>
                    Infrastructure designed for dependable real-world performance.
                  </div>
                </div>
                <div style={styles.miniCard}>
                  <div style={styles.miniCardTitle}>Scalable operations</div>
                  <div style={styles.miniCardText}>
                    Systems prepared for traffic growth, automation, and long-term maintenance.
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
              <h2 style={styles.sectionHeading}>Infrastructure built to perform</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              We build infrastructure systems that support uptime, release speed,
              environment consistency, and long-term platform reliability.
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
              <h2 style={styles.sectionHeading}>A refined DevOps workflow</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              We implement cloud and deployment systems through a practical,
              production-focused workflow designed for reliability and scale.
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

        <div style={styles.sectionBlock}>
          <div style={styles.sectionHeadWrapCentered}>
            <div style={{ textAlign: 'center' }}>
              <span style={styles.sectionKicker}>Tech stack</span>
              <h2 style={styles.sectionHeading}>Modern tools, stable architecture</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              We use modern cloud and deployment tools that make environments more
              reliable, manageable, and scalable.
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
              <h2 style={styles.sectionHeading}>Why businesses choose our infrastructure expertise</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              We focus on infrastructure that is dependable in real production
              conditions, not just setup for setup’s sake.
            </p>
          </div>

          <div className="serviceGrid2" style={styles.grid4}>
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
          <h2 style={styles.ctaTitle}>Need reliable cloud infrastructure?</h2>
          <p style={styles.ctaText}>
            Let’s build a deployment and DevOps setup that keeps your product
            stable, secure, observable, and ready to scale.
          </p>

          <div style={styles.ctaBtns}>
            <a href="/contact" style={styles.ctaPrimary}>
              Contact Us
              <ArrowIcon />
            </a>
            <a href="/services" style={styles.ctaSecondary}>
              Explore More Services
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .serviceGrid2 > div:hover,
        .processGrid3 > div:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 50px rgba(15, 23, 42, 0.08) !important;
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