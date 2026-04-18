import React, { useMemo, useState } from "react";

const faqData = [
  {
    question: "What services does ZyntrAa Solutions provide?",
    answer:
      "ZyntrAa Solutions offers end-to-end technology solutions including custom software development, web development, mobile applications, AI automation, cloud infrastructure, DevOps, UI/UX design, and IT consulting.",
  },
  {
    question: "Do you build custom software for specific business needs?",
    answer:
      "Yes. We build custom dashboards, CRMs, admin panels, SaaS platforms, and enterprise systems designed around your workflow, business goals, and future scalability needs.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "We use modern technologies such as React, Next.js, Node.js, scalable backend systems, and cloud infrastructure to build fast, secure, and SEO-friendly websites and portals.",
  },
  {
    question: "Can ZyntrAa Solutions develop mobile applications?",
    answer:
      "Yes. We develop Android and iOS apps using Flutter and React Native with secure login, intuitive user experience, strong performance, and third-party integrations.",
  },
  {
    question: "Do you provide AI automation solutions?",
    answer:
      "Yes. We create chatbots, WhatsApp automation, lead automation systems, and workflow tools that help businesses reduce manual effort and improve response speed.",
  },
  {
    question: "Do you offer cloud deployment and DevOps services?",
    answer:
      "Yes. We provide AWS and VPS deployment, CI/CD pipelines, monitoring, backups, security best practices, and performance optimization for stable production environments.",
  },
  {
    question: "How long does it take to develop a software project?",
    answer:
      "The timeline depends on the scope. A basic website may take 2 to 3 weeks, while larger SaaS platforms or custom business systems may take 6 to 12 weeks or more.",
  },
  {
    question: "Can you redesign an existing website or software product?",
    answer:
      "Absolutely. We improve existing websites and applications by upgrading design, performance, architecture, responsiveness, SEO structure, and user experience.",
  },
  {
    question: "Do you provide UI/UX design services?",
    answer:
      "Yes. We design clean modern interfaces, wireframes, clickable prototypes, and design systems that improve trust, usability, and conversions.",
  },
  {
    question: "Will I receive support after the project is completed?",
    answer:
      "Yes. We provide post-launch support, maintenance, updates, monitoring, and long-term technical assistance based on project requirements.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const { leftFaqs, rightFaqs } = useMemo(() => {
    const middle = Math.ceil(faqData.length / 2);
    return {
      leftFaqs: faqData.slice(0, middle),
      rightFaqs: faqData.slice(middle),
    };
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const getGlobalIndex = (side, localIndex) => {
    if (side === "left") return localIndex;
    return Math.ceil(faqData.length / 2) + localIndex;
  };

  const styles = {
    section: {
      background: "#FFFFFF",
      padding: "0px 20px",
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    },
    container: {
      maxWidth: "1250px",
      margin: "0 auto",
    },
    topWrap: {
      textAlign: "center",
      marginBottom: "54px",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0px 16px",
      borderRadius: "999px",
      background: "#EDF7EF",
      border: "1px solid #D9EFDF",
      color: "#23C55E",
      fontSize: "12px",
      fontWeight: 700,
      marginBottom: "16px",
      letterSpacing: "0.04em",
    },
    heading: {
      margin: 0,
      color: "#081531",
      fontWeight: 900,
      fontSize: "clamp(34px, 5vw, 64px)",
      lineHeight: 1.08,
      letterSpacing: "-0.03em",
    },
    mainGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 360px 1fr",
      gap: "34px",
      alignItems: "center",
    },
    faqColumn: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    faqCard: {
      background: "#FFFFFF",
      border: "1px solid rgba(8, 21, 49, 0.04)",
      borderRadius: "22px",
      boxShadow: "0 10px 30px rgba(8, 21, 49, 0.03)",
      overflow: "hidden",
      transition: "all 0.25s ease",
    },
    faqCardOpen: {
      border: "1px solid rgba(35, 197, 94, 0.10)",
      boxShadow: "0 18px 40px rgba(35, 197, 94, 0.08)",
    },
    faqButton: {
      width: "100%",
      border: "none",
      background: "transparent",
      padding: "22px 22px",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      cursor: "pointer",
      textAlign: "left",
    },
    numberBadge: {
      width: "24px",
      height: "24px",
      minWidth: "24px",
      borderRadius: "50%",
      background: "#EAF7EE",
      color: "#23C55E",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "10px",
      fontWeight: 800,
    },
    questionText: {
      flex: 1,
      margin: 0,
      color: "#081531",
      fontSize: "15px",
      lineHeight: 1.5,
      fontWeight: 700,
    },
    plusIcon: {
      width: "42px",
      height: "42px",
      minWidth: "42px",
      borderRadius: "14px",
      border: "none",
      color: "#FFFFFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      fontWeight: 500,
      background: "linear-gradient(180deg, #31CF6A 0%, #1FBA53 100%)",
      boxShadow: "0 14px 28px rgba(35, 197, 94, 0.24)",
    },
    answerWrap: {
      padding: "0 22px 22px 60px",
    },
    answerText: {
      margin: 0,
      fontSize: "14px",
      lineHeight: 1.9,
      color: "#4F6783",
      maxWidth: "92%",
    },
    centerWrap: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    outerCircle: {
      width: "100%",
      maxWidth: "330px",
      aspectRatio: "1 / 1",
      borderRadius: "50%",
      border: "2px solid #E3EFE6",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "radial-gradient(circle at center, rgba(255,255,255,0.98) 0%, rgba(244,248,245,0.95) 100%)",
      boxShadow: "inset 0 0 0 10px rgba(35, 197, 94, 0.04)",
    },
    innerCircle: {
      width: "78%",
      height: "78%",
      borderRadius: "50%",
      border: "1.5px solid #E3EFE6",
      background: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "24px",
      boxSizing: "border-box",
      boxShadow: "0 10px 24px rgba(8, 21, 49, 0.03)",
    },
    centerBadge: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5px 12px",
      borderRadius: "999px",
      background: "#EDF7EF",
      border: "1px solid #D9EFDF",
      color: "#23C55E",
      fontSize: "11px",
      fontWeight: 700,
      marginBottom: "16px",
    },
    centerTitle: {
      margin: 0,
      fontSize: "20px",
      lineHeight: 1.2,
      fontWeight: 800,
      color: "#081531",
    },
    centerTitleAccent: {
      color: "#23C55E",
    },
    centerText: {
      margin: "16px 0 18px 0",
      fontSize: "13px",
      lineHeight: 1.75,
      color: "#5F7691",
      maxWidth: "220px",
    },
    divider: {
      width: "70%",
      height: "1px",
      background: "#E5EFE8",
      margin: "0 0 16px 0",
    },
    helpText: {
      margin: "0 0 10px 0",
      color: "#081531",
      fontWeight: 700,
      fontSize: "13px",
    },
    button: {
      border: "none",
      borderRadius: "999px",
      background: "linear-gradient(180deg, #31CF6A 0%, #1FBA53 100%)",
      color: "#fff",
      fontSize: "13px",
      fontWeight: 700,
      padding: "11px 20px",
      cursor: "pointer",
      boxShadow: "0 10px 20px rgba(35, 197, 94, 0.22)",
    },
  };

  const renderFaq = (item, index, side) => {
    const actualIndex = getGlobalIndex(side, index);
    const isOpen = openIndex === actualIndex;
    const serial = String(actualIndex + 1).padStart(2, "0");

    return (
      <div
        key={actualIndex}
        style={{
          ...styles.faqCard,
          ...(isOpen ? styles.faqCardOpen : {}),
        }}
      >
        <button
          type="button"
          style={styles.faqButton}
          onClick={() => toggleFaq(actualIndex)}
        >
          <span style={styles.numberBadge}>{serial}</span>
          <p style={styles.questionText}>{item.question}</p>
          <span style={styles.plusIcon}>{isOpen ? "−" : "+"}</span>
        </button>

        {isOpen && (
          <div style={styles.answerWrap}>
            <p style={styles.answerText}>{item.answer}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section style={styles.section} id="faq">
      <div style={styles.container}>
        <div style={styles.topWrap}>
          <div style={styles.badge}>FAQS</div>
          <h2 style={styles.heading}>Frequently Asked Questions</h2>
        </div>

        <div style={styles.mainGrid}>
          <div style={styles.faqColumn}>
            {leftFaqs.map((item, index) => renderFaq(item, index, "left"))}
          </div>

          <div style={styles.centerWrap}>
            <div style={styles.outerCircle}>
              <div style={styles.innerCircle}>
                <div style={styles.centerBadge}>FAQs</div>
                <h3 style={styles.centerTitle}>
                  Answers to your <br />
                  <span style={styles.centerTitleAccent}>tech questions</span>
                </h3>
                <p style={styles.centerText}>
                  Find quick answers about development, mobile apps, cloud
                  setup, automation, and project planning.
                </p>
                <div style={styles.divider} />
                <p style={styles.helpText}>Still need help?</p>
                <button
                  type="button"
                  style={styles.button}
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Team
                </button>
              </div>
            </div>
          </div>

          <div style={styles.faqColumn}>
            {rightFaqs.map((item, index) => renderFaq(item, index, "right"))}
          </div>
        </div>
      </div>
    </section>
  );
}