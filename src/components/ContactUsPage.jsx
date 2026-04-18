import React, { useState } from "react";
import SuccessPopup from "./SuccessPopup";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Service label → exact backend enum value
const SERVICE_MAP = {
  "custom-software": "Custom Software Development",
  "web-development": "Web & Portal Development",
  "mobile-apps":     "Mobile Applications",
  "ai-automation":   "AI & Automation",
  "cloud-devops":    "Cloud & DevOps",
  "ui-ux":           "UI/UX Design",
};

// Stage label → exact backend enum value
const STAGE_MAP = {
  "idea":               "Just an idea",
  "planning":           "Planning phase",
  "design-ready":       "Designs ready",
  "development-ready":  "Ready to start development",
  "existing-product":   "Improving an existing product",
};

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name:    "",
    email:   "",
    phone:   "",
    company: "",
    service: "",
    budget:  "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error,   setError]   = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear messages when user starts typing again
    if (success) setSuccess("");
    if (error)   setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    // Map your form field names → backend field names
    const payload = {
      fullName:       formData.name,
      email:          formData.email,
      phone:          formData.phone   || null,
      companyName:    formData.company || null,
      serviceNeeded:  SERVICE_MAP[formData.service] || null,
      projectStage:   STAGE_MAP[formData.budget]    || null,
      projectDetails: formData.message,
    };

    try {
      const res  = await fetch(`${API_BASE}/api/contact/contact-page`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(data.message);
        setShowPopup(true);
        // Reset form
        setFormData({
          name: "", email: "", phone: "", company: "",
          service: "", budget: "", message: "",
        });
      } else {
        // Show validation errors if any
        if (data.errors && data.errors.length > 0) {
          setError(data.errors.map((e) => e.message).join(" • "));
        } else {
          setError(data.message || "Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      setError("Network error. Please make sure the server is running and try again.");
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    page: {
      background: "#ffffff",
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      color: "#0f172a",
      position: "relative",
      overflow: "hidden",
    },
    bgGlowOne: {
      position: "absolute", top: "-120px", left: "-120px",
      width: "340px", height: "340px", borderRadius: "50%",
      background: "rgba(34, 197, 94, 0.07)", filter: "blur(100px)",
      pointerEvents: "none", zIndex: 0,
    },
    bgGlowTwo: {
      position: "absolute", top: "240px", right: "-120px",
      width: "340px", height: "340px", borderRadius: "50%",
      background: "rgba(20, 184, 166, 0.06)", filter: "blur(110px)",
      pointerEvents: "none", zIndex: 0,
    },
    gridOverlay: {
      position: "absolute", inset: 0,
      background: "linear-gradient(to right, rgba(15,23,42,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.02) 1px, transparent 1px)",
      backgroundSize: "42px 42px",
      WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.20), transparent 82%)",
      maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.20), transparent 82%)",
      pointerEvents: "none", zIndex: 0,
    },
    heroSection: {
      position: "relative", overflow: "hidden",
      padding: "84px 20px 34px", zIndex: 1, textAlign: "center",
    },
    heroGlow: {
      position: "absolute", top: "-80px", right: "-80px",
      width: "260px", height: "260px", borderRadius: "50%",
      background: "rgba(34, 197, 94, 0.08)", filter: "blur(80px)", pointerEvents: "none",
    },
    heroContainer: {
      maxWidth: "1180px", margin: "0 auto", position: "relative", zIndex: 2,
      display: "flex", flexDirection: "column", alignItems: "center",
    },
    badge: {
      display: "inline-flex", alignItems: "center", gap: "10px",
      padding: "10px 16px", borderRadius: "999px",
      background: "rgba(34, 197, 94, 0.08)", border: "1px solid rgba(34, 197, 94, 0.14)",
      color: "#15803d", fontSize: "12px", fontWeight: 800,
      letterSpacing: "0.14em", textTransform: "uppercase",
      marginBottom: "20px", marginTop: 40, marginLeft: "auto", marginRight: "auto",
      boxShadow: "0 8px 24px rgba(15,23,42,0.03)",
    },
    badgeDot: {
      width: "8px", height: "8px", borderRadius: "50%",
      background: "#22c55e", boxShadow: "0 0 0 6px rgba(34,197,94,0.10)",
    },
    heroTitle: {
      fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.02,
      fontWeight: 900, letterSpacing: "-0.055em",
      margin: "0 0 18px 0", maxWidth: "900px", color: "#0f172a",
    },
    heroTitleAccent: { color: "#189646" },
    heroText: {
      fontSize: "17px", lineHeight: 1.95, color: "#64748b",
      margin: 0, maxWidth: "800px",
    },
    cardsRow: {
      display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "18px", marginTop: "36px", width: "100%", maxWidth: "1000px",
    },
    infoCard: {
      position: "relative", background: "rgba(255,255,255,0.94)",
      border: "1px solid rgba(15,23,42,0.06)", borderRadius: "24px",
      padding: "24px 22px", boxShadow: "0 18px 34px rgba(15,23,42,0.05)",
      backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
      overflow: "hidden", textAlign: "center",
      display: "flex", flexDirection: "column", alignItems: "center",
    },
    infoCardTopLine: {
      position: "absolute", top: 0, left: 0, width: "100%", height: "1px",
      background: "linear-gradient(90deg, rgba(34,197,94,0), rgba(34,197,94,0.65), rgba(20,184,166,0), rgba(34,197,94,0))",
      opacity: 0.85,
    },
    infoIcon: {
      width: "54px", height: "54px", borderRadius: "18px",
      background: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)",
      color: "#ffffff", display: "flex", alignItems: "center",
      justifyContent: "center", fontSize: "22px",
      boxShadow: "0 14px 28px rgba(34,197,94,0.22)", marginBottom: "16px",
    },
    infoTitle: { fontSize: "18px", fontWeight: 800, margin: "0 0 8px 0", color: "#0f172a", letterSpacing: "-0.02em" },
    infoText: { margin: 0, color: "#64748b", lineHeight: 1.8, fontSize: "15px" },
    mainSection: { padding: "22px 20px 90px", position: "relative", zIndex: 1 },
    mainContainer: { maxWidth: "1180px", margin: "0 auto" },
    mainGrid: {
      display: "grid", gridTemplateColumns: "0.9fr 1.1fr",
      gap: "28px", alignItems: "stretch", justifyItems: "center", width: "100%",
    },
    leftPanel: {
      position: "relative", overflow: "hidden", borderRadius: "32px",
      padding: "36px 30px",
      background: "linear-gradient(145deg, #0b1220 0%, #0f172a 40%, #14532d 100%)",
      boxShadow: "0 28px 70px rgba(15,23,42,0.14)", minHeight: "100%",
      textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center",
    },
    leftPanelGlow: {
      position: "absolute", top: "-40px", right: "-20px",
      width: "220px", height: "220px", borderRadius: "50%",
      background: "rgba(255,255,255,0.07)", filter: "blur(60px)", pointerEvents: "none",
    },
    leftPanelLine: {
      position: "absolute", top: 0, left: 0, width: "100%", height: "1px",
      background: "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
      opacity: 0.9,
    },
    leftTitle: {
      position: "relative", zIndex: 2, margin: "0 0 14px 0",
      color: "#ffffff", fontSize: "36px", lineHeight: 1.04,
      fontWeight: 800, letterSpacing: "-0.05em", maxWidth: "420px", textAlign: "center",
    },
    leftText: {
      position: "relative", zIndex: 2, margin: "0 0 28px 0",
      color: "rgba(255,255,255,0.80)", fontSize: "15px", lineHeight: 1.92, maxWidth: "460px",
    },
    miniStats: {
      position: "relative", zIndex: 2,
      display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "14px", marginBottom: "24px",
    },
    statCard: {
      borderRadius: "20px", padding: "18px 15px",
      background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)",
      backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
    },
    statValue: { margin: "0 0 6px 0", fontSize: "21px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" },
    statLabel: { margin: 0, fontSize: "13px", lineHeight: 1.65, color: "rgba(255,255,255,0.72)" },
    panelList: { position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: "14px" },
    panelItem: {
      display: "flex", gap: "14px", alignItems: "flex-start",
      padding: "15px 15px", borderRadius: "20px",
      background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)",
      backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
    },
    panelItemIcon: {
      width: "44px", height: "44px", minWidth: "44px", borderRadius: "14px",
      background: "rgba(255,255,255,0.14)", color: "#ffffff",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: "18px", fontWeight: 700,
    },
    panelItemTitle: { margin: "0 0 5px 0", fontSize: "12px", fontWeight: 800, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(255,255,255,0.68)" },
    panelItemText: { margin: 0, fontSize: "15px", lineHeight: 1.75, color: "#ffffff", fontWeight: 600 },
    formWrap: {
      position: "relative", background: "rgba(255,255,255,0.96)",
      border: "1px solid rgba(15,23,42,0.06)", borderRadius: "32px",
      padding: "32px", boxShadow: "0 22px 50px rgba(15,23,42,0.06)",
      backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", overflow: "hidden",
    },
    formWrapTopLine: {
      position: "absolute", top: 0, left: 0, width: "100%", height: "1px",
      background: "linear-gradient(90deg, rgba(34,197,94,0), rgba(34,197,94,0.70), rgba(20,184,166,0), rgba(34,197,94,0))",
      opacity: 0.85,
    },
    formTitle: { margin: "0 0 8px 0", fontSize: "32px", lineHeight: 1.08, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.05em" },
    formDesc: { margin: "0 0 24px 0", fontSize: "15px", lineHeight: 1.85, color: "#64748b", maxWidth: "640px" },
    formGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" },
    fieldWrap: { display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" },
    fullWidth: { gridColumn: "1 / -1" },
    label: { fontSize: "13px", fontWeight: 700, color: "#334155", letterSpacing: "0.02em" },
    input: {
      width: "100%", boxSizing: "border-box", padding: "15px 16px",
      borderRadius: "16px", border: "1px solid #e2e8f0", background: "#ffffff",
      fontSize: "15px", color: "#0f172a", outline: "none", transition: "all 0.25s ease",
    },
    select: {
      width: "100%", boxSizing: "border-box", padding: "15px 16px",
      borderRadius: "16px", border: "1px solid #e2e8f0", background: "#ffffff",
      fontSize: "15px", color: "#0f172a", outline: "none", transition: "all 0.25s ease",
    },
    textarea: {
      width: "100%", boxSizing: "border-box", padding: "15px 16px",
      borderRadius: "16px", border: "1px solid #e2e8f0", background: "#ffffff",
      fontSize: "15px", color: "#0f172a", outline: "none", transition: "all 0.25s ease",
      resize: "vertical", minHeight: "150px",
    },
    formFooter: {
      display: "flex", justifyContent: "space-between", alignItems: "center",
      gap: "16px", flexWrap: "wrap", marginTop: "8px",
    },
    formNote: { margin: 0, fontSize: "13px", color: "#64748b", lineHeight: 1.75, maxWidth: "380px" },
    submitBtn: {
      background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
      color: "#ffffff", border: "none", borderRadius: "16px",
      padding: "15px 30px", fontSize: "15px", fontWeight: 800,
      cursor: loading ? "not-allowed" : "pointer",
      boxShadow: "0 16px 30px rgba(34,197,94,0.20)", letterSpacing: "0.01em",
      opacity: loading ? 0.7 : 1, transition: "opacity 0.2s",
    },
    alertSuccess: {
      background: "#f0fdf4", color: "#15803d",
      border: "1px solid #bbf7d0", borderRadius: "12px",
      padding: "14px 18px", fontSize: "14px",
      lineHeight: 1.6, marginBottom: "20px",
    },
    alertError: {
      background: "#fef2f2", color: "#dc2626",
      border: "1px solid #fecaca", borderRadius: "12px",
      padding: "14px 18px", fontSize: "14px",
      lineHeight: 1.6, marginBottom: "20px",
    },
    bottomSection: {
      marginTop: "34px", display: "grid",
      gridTemplateColumns: "1fr 1fr", gap: "24px",
    },
    bottomCard: {
      position: "relative", background: "rgba(255,255,255,0.96)",
      border: "1px solid rgba(15,23,42,0.06)", borderRadius: "26px",
      padding: "26px", boxShadow: "0 16px 36px rgba(15,23,42,0.04)",
      overflow: "hidden", textAlign: "center",
    },
    bottomCardLine: {
      position: "absolute", top: 0, left: 0, width: "100%", height: "1px",
      background: "linear-gradient(90deg, rgba(34,197,94,0), rgba(34,197,94,0.55), rgba(20,184,166,0), rgba(34,197,94,0))",
      opacity: 0.82,
    },
    bottomTitle: { margin: "0 0 10px 0", fontSize: "22px", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", lineHeight: 1.2 },
    bottomText: { margin: 0, fontSize: "15px", lineHeight: 1.9, color: "#64748b" },
  };

  const inputFocus = (e) => {
    e.target.style.border = "1px solid rgba(34, 197, 94, 0.40)";
    e.target.style.boxShadow = "0 0 0 4px rgba(34, 197, 94, 0.08)";
  };

  const inputBlur = (e) => {
    e.target.style.border = "1px solid #e2e8f0";
    e.target.style.boxShadow = "none";
  };

  return (
    <div style={styles.page}>
      <SuccessPopup show={showPopup} onClose={() => setShowPopup(false)} />
      <div style={styles.bgGlowOne} />
      <div style={styles.bgGlowTwo} />
      <div style={styles.gridOverlay} />

      <section style={styles.heroSection}>
        <div style={styles.heroGlow} />
        <div style={styles.heroContainer}>
          <div style={styles.badge}>
            <span style={styles.badgeDot} />
            Contact Us
          </div>

          <h1 style={styles.heroTitle}>
            Let's talk about your next{" "}
            <span style={styles.heroTitleAccent}>digital build</span>
          </h1>

          <p style={styles.heroText}>
            Whether you need a website, software platform, mobile app, AI
            workflow, or complete technology consultation, our team is ready to
            help you move from idea to execution.
          </p>

          <div className="contactHeroCards" style={styles.cardsRow}>
            <div style={styles.infoCard}>
              <div style={styles.infoCardTopLine} />
              <div style={styles.infoIcon}>✉</div>
              <h3 style={styles.infoTitle}>Email Us</h3>
              <p style={styles.infoText}>
                info@zyntraasolutions.com
                <br />
                Best for detailed requirements, project briefs, and structured discussions.
              </p>
            </div>
            <div style={styles.infoCard}>
              <div style={styles.infoCardTopLine} />
              <div style={styles.infoIcon}>☎</div>
              <h3 style={styles.infoTitle}>Call Us</h3>
              <p style={styles.infoText}>
                +91 9319303073
                <br />
                Ideal for quick conversations, timelines, and direct coordination.
              </p>
            </div>
            <div style={styles.infoCard}>
              <div style={styles.infoCardTopLine} />
              <div style={styles.infoIcon}>⌂</div>
              <h3 style={styles.infoTitle}>Work With Us</h3>
              <p style={styles.infoText}>
                India based team with global delivery support for startups,
                growing brands, and business-focused digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.mainSection}>
        <div style={styles.mainContainer}>
          <div className="mainContactGrid" style={styles.mainGrid}>
            <div style={styles.leftPanel}>
              <div style={styles.leftPanelGlow} />
              <div style={styles.leftPanelLine} />
              <h2 style={styles.leftTitle}>Start the conversation</h2>
              <p style={styles.leftText}>
                Share your goals, current challenges, or project idea. We'll
                help you understand the right scope, approach, and technology
                direction before development begins.
              </p>
              <div style={styles.miniStats}>
                <div style={styles.statCard}>
                  <p style={styles.statValue}>Fast</p>
                  <p style={styles.statLabel}>Clear first response and next steps</p>
                </div>
                <div style={styles.statCard}>
                  <p style={styles.statValue}>Secure</p>
                  <p style={styles.statLabel}>Thoughtful planning before execution</p>
                </div>
                <div style={styles.statCard}>
                  <p style={styles.statValue}>Scalable</p>
                  <p style={styles.statLabel}>Solutions built for long-term growth</p>
                </div>
                <div style={styles.statCard}>
                  <p style={styles.statValue}>Global</p>
                  <p style={styles.statLabel}>India team with worldwide delivery</p>
                </div>
              </div>
              <div style={styles.panelList}>
                <div style={styles.panelItem}>
                  <div style={styles.panelItemIcon}>✉</div>
                  <div>
                    <p style={styles.panelItemTitle}>Email</p>
                    <p style={styles.panelItemText}>info@zyntraasolutions.com</p>
                  </div>
                </div>
                <div style={styles.panelItem}>
                  <div style={styles.panelItemIcon}>☎</div>
                  <div>
                    <p style={styles.panelItemTitle}>Phone</p>
                    <p style={styles.panelItemText}>+91 9319303073</p>
                  </div>
                </div>
                <div style={styles.panelItem}>
                  <div style={styles.panelItemIcon}>⌂</div>
                  <div>
                    <p style={styles.panelItemTitle}>Availability</p>
                    <p style={styles.panelItemText}>
                      Monday to Saturday | Business inquiries and project consultations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.formWrap}>
              <div style={styles.formWrapTopLine} />
              <h2 style={styles.formTitle}>Send your query</h2>
              <p style={styles.formDesc}>
                Tell us a little about your project and we'll get back to you
                with the right next step.
              </p>

              {/* ── Success Message ── */}
              {success && (
                <div style={styles.alertSuccess}>
                  ✅ {success}
                </div>
              )}

              {/* ── Error Message ── */}
              {error && (
                <div style={styles.alertError}>
                  ❌ {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="contactFormGrid" style={styles.formGrid}>

                  <div style={styles.fieldWrap}>
                    <label style={styles.label}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={inputFocus}
                      onBlur={inputBlur}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.fieldWrap}>
                    <label style={styles.label}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={inputFocus}
                      onBlur={inputBlur}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.fieldWrap}>
                    <label style={styles.label}>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={inputFocus}
                      onBlur={inputBlur}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.fieldWrap}>
                    <label style={styles.label}>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company or brand"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={inputFocus}
                      onBlur={inputBlur}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.fieldWrap}>
                    <label style={styles.label}>Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={inputFocus}
                      onBlur={inputBlur}
                      style={styles.select}
                    >
                      <option value="">Select a service</option>
                      <option value="custom-software">Custom Software Development</option>
                      <option value="web-development">Web & Portal Development</option>
                      <option value="mobile-apps">Mobile Applications</option>
                      <option value="ai-automation">AI & Automation</option>
                      <option value="cloud-devops">Cloud & DevOps</option>
                      <option value="ui-ux">UI/UX Design</option>
                    </select>
                  </div>

                  <div style={styles.fieldWrap}>
                    <label style={styles.label}>Project Stage</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      onFocus={inputFocus}
                      onBlur={inputBlur}
                      style={styles.select}
                    >
                      <option value="">Select current stage</option>
                      <option value="idea">Just an idea</option>
                      <option value="planning">Planning phase</option>
                      <option value="design-ready">Designs ready</option>
                      <option value="development-ready">Ready to start development</option>
                      <option value="existing-product">Improving an existing product</option>
                    </select>
                  </div>

                  <div style={{ ...styles.fieldWrap, ...styles.fullWidth }}>
                    <label style={styles.label}>Project Details</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your requirement, goals, expected timeline, and any specific features or challenges"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={inputFocus}
                      onBlur={inputBlur}
                      style={styles.textarea}
                      required
                    />
                  </div>
                </div>

                <div style={styles.formFooter}>
                  <p style={styles.formNote}>
                    By submitting this form, you're sharing your project details
                    so our team can connect with you and recommend the right approach.
                  </p>
                  <button
                    type="submit"
                    style={styles.submitBtn}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit Query"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="bottomContactGrid" style={styles.bottomSection}>
            <div style={styles.bottomCard}>
              <div style={styles.bottomCardLine} />
              <h3 style={styles.bottomTitle}>Project discussions that actually help</h3>
              <p style={styles.bottomText}>
                We don't just collect leads. We understand what you're building,
                identify the right technical direction, and help shape a clear
                path toward execution.
              </p>
            </div>
            <div style={styles.bottomCard}>
              <div style={styles.bottomCardLine} />
              <h3 style={styles.bottomTitle}>Best way to reach us</h3>
              <p style={styles.bottomText}>
                For detailed projects, email works best. For quick conversations
                or follow-ups, use phone or the form above. We typically respond
                within one working day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .contactHeroCards { grid-template-columns: 1fr !important; }
          .mainContactGrid  { grid-template-columns: 1fr !important; }
          .contactFormGrid  { grid-template-columns: 1fr !important; }
          .bottomContactGrid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}