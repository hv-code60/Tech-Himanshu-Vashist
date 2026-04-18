import React from "react";

export default function AIAutomation() {
  const deliverables = [
    {
      title: "Chatbots & Conversational Flows",
      desc: "Smart chatbot systems for lead capture, support, and faster customer interaction across channels.",
    },
    {
      title: "WhatsApp & Lead Automation",
      desc: "Automated workflows for lead qualification, follow-ups, reminders, and response routing.",
    },
    {
      title: "Workflow Automation",
      desc: "Reduce repetitive manual work by automating internal operations, notifications, and approval flows.",
    },
    {
      title: "Business Efficiency Systems",
      desc: "Automation solutions designed to save time, improve speed, and increase operational consistency.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Process Discovery",
      desc: "We identify repetitive tasks, response gaps, manual bottlenecks, and opportunities for automation.",
    },
    {
      step: "02",
      title: "Workflow Planning",
      desc: "We define triggers, logic, user paths, integrations, and automation rules based on business needs.",
    },
    {
      step: "03",
      title: "Bot & Logic Design",
      desc: "We structure chatbot flows, automation sequences, fallback paths, and system behavior clearly.",
    },
    {
      step: "04",
      title: "Implementation & Integration",
      desc: "We connect APIs, messaging systems, CRM tools, and required automation platforms into one flow.",
    },
    {
      step: "05",
      title: "Testing & Optimization",
      desc: "We test responses, conditions, edge cases, and efficiency to make sure the workflow works smoothly.",
    },
    {
      step: "06",
      title: "Monitoring & Improvements",
      desc: "We refine workflows after launch to improve conversion, reduce friction, and increase reliability.",
    },
  ];

  const techStack = [
    { name: "ChatGPT", icon: "🤖" },
    { name: "Chatbots", icon: "💬" },
    { name: "WhatsApp", icon: "💬" },
    { name: "Automation", icon: "⚡" },
    { name: "Workflows", icon: "🔄" },
    { name: "APIs", icon: "🔌" },
    { name: "Integration", icon: "🔗" },
    { name: "AI Model", icon: "🧠" },
    { name: "NLP", icon: "📝" },
    { name: "RPA", icon: "🤖" },
  ];

  const whyUs = [
    "Automation planned around real business operations",
    "Fast response systems with practical workflow design",
    "Better lead handling and reduced manual workload",
    "Scalable automation that grows with your business",
    "Integration-focused implementation",
    "Business-first approach instead of generic automation setups",
  ];

  const stats = [
    { value: "Smart", label: "Flows designed for real business logic" },
    { value: "Fast", label: "Improves response speed and execution time" },
    { value: "Scalable", label: "Automation ready for business growth" },
    { value: "Efficient", label: "Less manual work, more consistency" },
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

  const BotIcon = () => (
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
      <rect x="4" y="8" width="16" height="11" rx="3" />
      <path d="M9 8V5a3 3 0 0 1 6 0v3" />
      <circle cx="9" cy="13" r="1" />
      <circle cx="15" cy="13" r="1" />
      <path d="M9 16h6" />
    </svg>
  );

  const MessageIcon = () => (
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
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );

  const WorkflowIcon = () => (
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
      <path d="M12 17h3" />
    </svg>
  );

  const ZapIcon = () => (
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

  const featureIcons = [BotIcon, MessageIcon, WorkflowIcon, ZapIcon];

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
                Premium AI Solutions
              </div>

              <h1 style={styles.heroTitle}>
                <span style={styles.heroGradient}>AI &</span>
                <br />
                Automation
              </h1>

              <p style={styles.heroDesc}>
                We build practical AI and automation systems that reduce manual
                work, improve response speed, streamline workflows, and help
                businesses operate more efficiently.
              </p>

              <div style={styles.tagsWrap}>
                <span style={styles.tag}>Chatbots</span>
                <span style={styles.tag}>Automation</span>
                <span style={styles.tag}>Workflows</span>
                <span style={styles.tag}>Lead Systems</span>
                <span style={styles.tag}>Integrations</span>
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
                Ideal for businesses that want faster lead handling, smarter
                customer interaction, reduced manual processes, and better
                operational efficiency.
              </p>

              <div style={styles.bulletList}>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Lead automation and customer response flows</div>
                </div>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Chatbots and conversational support systems</div>
                </div>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Internal task automation and operational workflows</div>
                </div>
                <div style={styles.bulletRow}>
                  <div style={styles.bulletDot}>
                    <CheckIcon />
                  </div>
                  <div>Integrated systems built for speed and efficiency</div>
                </div>
              </div>

              <div style={styles.panelFooter}>
                <div style={styles.miniCard}>
                  <div style={styles.miniCardTitle}>Speed + efficiency</div>
                  <div style={styles.miniCardText}>
                    Faster responses and smoother operations with less manual effort.
                  </div>
                </div>
                <div style={styles.miniCard}>
                  <div style={styles.miniCardTitle}>Scalable automation</div>
                  <div style={styles.miniCardText}>
                    Systems structured to grow with your business complexity.
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
              <h2 style={styles.sectionHeading}>Automation built to perform</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              We create automation systems that are practical, scalable, and
              aligned with your actual business workflows and performance goals.
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
              <h2 style={styles.sectionHeading}>A refined automation workflow</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              We move from workflow understanding to implementation with a
              strong focus on efficiency, usability, and business impact.
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
              <h2 style={styles.sectionHeading}>Modern tools, stable automation logic</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              We use integration-first systems and automation tools that support
              speed, reliability, maintainability, and smarter execution.
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
              <h2 style={styles.sectionHeading}>Why businesses choose our automation expertise</h2>
            </div>
            <p style={styles.sectionTextCentered}>
              We build automation that is actually useful in daily business
              operations, not just technically impressive.
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
          <h2 style={styles.ctaTitle}>Need smarter workflows for your business?</h2>
          <p style={styles.ctaText}>
            Let’s build automation systems that improve response speed, save
            time, reduce manual effort, and strengthen operational consistency.
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