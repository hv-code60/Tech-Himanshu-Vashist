import React, { useMemo, useState } from "react";

const faqData = [
  { question: "What services does ZyntrAa Solutions provide?", answer: "ZyntrAa Solutions offers end-to-end technology solutions including custom software development, web development, mobile applications, AI automation, cloud infrastructure, DevOps, UI/UX design, and IT consulting." },
  { question: "Do you build custom software for specific business needs?", answer: "Yes. We build custom dashboards, CRMs, admin panels, SaaS platforms, and enterprise systems designed around your workflow, business goals, and future scalability needs." },
  { question: "What technologies do you use for web development?", answer: "We use modern technologies such as React, Next.js, Node.js, scalable backend systems, and cloud infrastructure to build fast, secure, and SEO-friendly websites and portals." },
  { question: "Can ZyntrAa Solutions develop mobile applications?", answer: "Yes. We develop Android and iOS apps using Flutter and React Native with secure login, intuitive user experience, strong performance, and third-party integrations." },
  { question: "Do you provide AI automation solutions?", answer: "Yes. We create chatbots, WhatsApp automation, lead automation systems, and workflow tools that help businesses reduce manual effort and improve response speed." },
  { question: "Do you offer cloud deployment and DevOps services?", answer: "Yes. We provide AWS and VPS deployment, CI/CD pipelines, monitoring, backups, security best practices, and performance optimization for stable production environments." },
  { question: "How long does it take to develop a software project?", answer: "The timeline depends on the scope. A basic website may take 2 to 3 weeks, while larger SaaS platforms or custom business systems may take 6 to 12 weeks or more." },
  { question: "Can you redesign an existing website or software product?", answer: "Absolutely. We improve existing websites and applications by upgrading design, performance, architecture, responsiveness, SEO structure, and user experience." },
  { question: "Do you provide UI/UX design services?", answer: "Yes. We design clean modern interfaces, wireframes, clickable prototypes, and design systems that improve trust, usability, and conversions." },
  { question: "Will I receive support after the project is completed?", answer: "Yes. We provide post-launch support, maintenance, updates, monitoring, and long-term technical assistance based on project requirements." },
];

const FaqItem = ({ item, index, isOpen, onToggle }) => {
  const serial = String(index + 1).padStart(2, "0");
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: isOpen ? "1px solid rgba(35, 197, 94, 0.10)" : "1px solid rgba(8, 21, 49, 0.04)",
        borderRadius: 22,
        boxShadow: isOpen ? "0 18px 40px rgba(35, 197, 94, 0.08)" : "0 10px 30px rgba(8, 21, 49, 0.03)",
        overflow: "hidden",
        transition: "all 0.25s ease",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        style={{
          width: "100%", border: "none", background: "transparent",
          padding: "18px 18px", display: "flex", alignItems: "center",
          gap: 12, cursor: "pointer", textAlign: "left",
        }}
      >
        <span style={{ width: 24, height: 24, minWidth: 24, borderRadius: "50%", background: "#EAF7EE", color: "#23C55E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800 }}>
          {serial}
        </span>
        <p style={{ flex: 1, margin: 0, color: "#081531", fontSize: "clamp(13px, 1.5vw, 15px)", lineHeight: 1.5, fontWeight: 700, textAlign: "left" }}>
          {item.question}
        </p>
        <span style={{ width: 38, height: 38, minWidth: 38, borderRadius: 12, border: "none", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 500, background: "linear-gradient(180deg, #31CF6A 0%, #1FBA53 100%)", boxShadow: "0 10px 20px rgba(35, 197, 94, 0.24)", flexShrink: 0 }}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div style={{ padding: "0 18px 18px 54px" }}>
          <p style={{ margin: 0, fontSize: "clamp(13px, 1.5vw, 14px)", lineHeight: 1.9, color: "#4F6783" }}>
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const { leftFaqs, rightFaqs } = useMemo(() => {
    const middle = Math.ceil(faqData.length / 2);
    return { leftFaqs: faqData.slice(0, middle), rightFaqs: faqData.slice(middle) };
  }, []);

  const toggleFaq = (index) => setOpenIndex((prev) => (prev === index ? null : index));
  const getGlobalIndex = (side, i) => side === "left" ? i : Math.ceil(faqData.length / 2) + i;

  return (
    <section
      style={{ background: "#FFFFFF", padding: "60px 20px", fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
      id="faq"
    >
      <div style={{ maxWidth: 1250, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "6px 16px", borderRadius: 999, background: "#EDF7EF", border: "1px solid #D9EFDF", color: "#23C55E", fontSize: 12, fontWeight: 700, marginBottom: 16, letterSpacing: "0.04em" }}>
            FAQS
          </div>
          <h2 style={{ margin: 0, color: "#081531", fontWeight: 900, fontSize: "clamp(26px, 5vw, 64px)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
            Frequently Asked Questions
          </h2>
        </div>

        {/* Desktop: 3-col layout */}
        <div className="faqDesktopGrid" style={{ display: "grid", gridTemplateColumns: "1fr 300px 1fr", gap: 34, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {leftFaqs.map((item, i) => (
              <FaqItem key={i} item={item} index={getGlobalIndex("left", i)} isOpen={openIndex === getGlobalIndex("left", i)} onToggle={() => toggleFaq(getGlobalIndex("left", i))} />
            ))}
          </div>

          {/* Center circle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: 300, aspectRatio: "1 / 1", borderRadius: "50%", border: "2px solid #E3EFE6", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(circle at center, rgba(255,255,255,0.98) 0%, rgba(244,248,245,0.95) 100%)", boxShadow: "inset 0 0 0 10px rgba(35, 197, 94, 0.04)" }}>
              <div style={{ width: "78%", height: "78%", borderRadius: "50%", border: "1.5px solid #E3EFE6", background: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 24, boxSizing: "border-box", boxShadow: "0 10px 24px rgba(8, 21, 49, 0.03)" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "5px 12px", borderRadius: 999, background: "#EDF7EF", border: "1px solid #D9EFDF", color: "#23C55E", fontSize: 11, fontWeight: 700, marginBottom: 14 }}>FAQs</div>
                <h3 style={{ margin: 0, fontSize: 18, lineHeight: 1.2, fontWeight: 800, color: "#081531" }}>
                  Answers to your <br /><span style={{ color: "#23C55E" }}>tech questions</span>
                </h3>
                <p style={{ margin: "14px 0 16px 0", fontSize: 12, lineHeight: 1.75, color: "#5F7691", maxWidth: 200 }}>
                  Find quick answers about development, mobile apps, cloud setup, automation, and project planning.
                </p>
                <div style={{ width: "70%", height: 1, background: "#E5EFE8", margin: "0 0 14px 0" }} />
                <p style={{ margin: "0 0 10px 0", color: "#081531", fontWeight: 700, fontSize: 13 }}>Still need help?</p>
                <button type="button" style={{ border: "none", borderRadius: 999, background: "linear-gradient(180deg, #31CF6A 0%, #1FBA53 100%)", color: "#fff", fontSize: 13, fontWeight: 700, padding: "10px 18px", cursor: "pointer", boxShadow: "0 10px 20px rgba(35, 197, 94, 0.22)" }}
                  onClick={() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}>
                  Contact Team
                </button>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {rightFaqs.map((item, i) => (
              <FaqItem key={i} item={item} index={getGlobalIndex("right", i)} isOpen={openIndex === getGlobalIndex("right", i)} onToggle={() => toggleFaq(getGlobalIndex("right", i))} />
            ))}
          </div>
        </div>

        {/* Mobile: stacked single column */}
        <div className="faqMobileList" style={{ display: "none", flexDirection: "column", gap: 14 }}>
          {faqData.map((item, i) => (
            <FaqItem key={i} item={item} index={i} isOpen={openIndex === i} onToggle={() => toggleFaq(i)} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .faqDesktopGrid { display: none !important; }
          .faqMobileList  { display: flex !important; }
        }
      `}</style>
    </section>
  );
}