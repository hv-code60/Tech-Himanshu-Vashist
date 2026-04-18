import React, { useState } from "react";
import SuccessPopup from "./SuccessPopup";

const API_BASE = import.meta.env.VITE_API_URL || "https://tech-website-backend-production.up.railway.app/";

// Service dropdown value → exact backend enum
const SERVICE_MAP = {
  "custom-software": "Custom Software Development",
  "web-development":  "Web & Portal Development",
  "mobile-apps":      "Mobile Applications",
  "ai-automation":    "AI & Automation",
  "cloud-devops":     "Cloud & DevOps",
  "ui-ux":            "UI/UX Design",
};

// Budget dropdown value → exact backend enum
const BUDGET_MAP = {
  "under-50k": "Under ₹50K",
  "50k-1l":    "₹50K – ₹1L",
  "1l-3l":     "₹1L – ₹3L",
  "3l-5l":     "₹3L – ₹5L",
  "5l-plus":   "₹5L+",
};

export default function PremiumGetInTouchSection() {
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
    if (success) setSuccess("");
    if (error)   setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    // Map form field names → backend field names
    const payload = {
      fullName:        formData.name,
      email:           formData.email,
      phone:           formData.phone   || null,
      companyName:     formData.company || null,
      serviceNeeded:   SERVICE_MAP[formData.service] || null,
      estimatedBudget: BUDGET_MAP[formData.budget]   || null,
      projectDetails:  formData.message,
    };

    try {
      const res  = await fetch(`${API_BASE}/api/contact/home`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(data.message);
        setShowPopup(true);
        setFormData({
          name: "", email: "", phone: "", company: "",
          service: "", budget: "", message: "",
        });
      } else {
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
    section: {
      position: "relative",
      overflow: "hidden",
      background: "#ffffff",
      padding: "90px 20px 100px",
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    },
    glowOne: {
      position: "absolute", top: "-80px", left: "-90px",
      width: "300px", height: "300px", borderRadius: "50%",
      background: "rgba(34, 197, 94, 0.08)", filter: "blur(80px)", pointerEvents: "none",
    },
    glowTwo: {
      position: "absolute", bottom: "-100px", right: "-80px",
      width: "300px", height: "300px", borderRadius: "50%",
      background: "rgba(20, 184, 166, 0.08)", filter: "blur(90px)", pointerEvents: "none",
    },
    gridOverlay: {
      position: "absolute", inset: 0,
      background: "linear-gradient(to right, rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.025) 1px, transparent 1px)",
      backgroundSize: "42px 42px",
      maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent 85%)",
      WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent 85%)",
      pointerEvents: "none",
    },
    container: { position: "relative", zIndex: 2, maxWidth: "1220px", margin: "0 auto" },
    topWrap: { textAlign: "center", maxWidth: "820px", margin: "0 auto 52px" },
    badge: {
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      gap: "8px", padding: "9px 16px", borderRadius: "999px",
      background: "rgba(34, 197, 94, 0.08)", border: "1px solid rgba(34, 197, 94, 0.16)",
      color: "#16a34a", fontSize: "13px", fontWeight: 800,
      letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "18px",
    },
    heading: {
      margin: "0 0 16px 0", fontSize: "clamp(34px, 5vw, 56px)",
      lineHeight: 1.05, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.05em",
    },
    subHeading: {
      margin: 0, fontSize: "17px", lineHeight: 1.9,
      color: "#64748b", maxWidth: "760px", marginInline: "auto",
    },
    contentWrap: {
      display: "grid",
      gridTemplateColumns: "minmax(320px, 0.95fr) minmax(420px, 1.15fr)",
      gap: "28px", alignItems: "stretch",
    },
    leftCard: {
      position: "relative",
      background: "linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #0f9f68 100%)",
      borderRadius: "30px", padding: "36px 30px", overflow: "hidden",
      boxShadow: "0 30px 60px rgba(34,197,94,0.18), 0 14px 30px rgba(15,23,42,0.08)",
      minHeight: "100%", boxSizing: "border-box",
    },
    leftGlow: {
      position: "absolute", top: "-50px", right: "-50px",
      width: "220px", height: "220px", borderRadius: "50%",
      background: "rgba(255,255,255,0.12)", filter: "blur(60px)", pointerEvents: "none",
    },
    leftTitle: {
      position: "relative", zIndex: 2, margin: "0 0 14px 0",
      fontSize: "34px", lineHeight: 1.1, fontWeight: 800,
      color: "#ffffff", letterSpacing: "-0.04em",
    },
    leftText: {
      position: "relative", zIndex: 2, margin: "0 0 28px 0",
      fontSize: "15px", lineHeight: 1.9, color: "rgba(255,255,255,0.88)", maxWidth: "420px",
    },
    infoList: { position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" },
    infoItem: {
      display: "flex", alignItems: "flex-start", gap: "14px",
      background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: "18px", padding: "14px 14px",
      backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
    },
    infoIcon: {
      width: "42px", height: "42px", minWidth: "42px", borderRadius: "12px",
      background: "rgba(255,255,255,0.18)", display: "flex",
      alignItems: "center", justifyContent: "center",
      color: "#ffffff", fontSize: "18px", fontWeight: 700,
    },
    infoLabel: { margin: "0 0 4px 0", fontSize: "13px", fontWeight: 700, color: "rgba(255,255,255,0.72)", textTransform: "uppercase", letterSpacing: "0.05em" },
    infoValue: { margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#ffffff", fontWeight: 600 },
    trustBox: { position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginTop: "14px" },
    trustItem: {
      background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: "18px", padding: "16px 12px", textAlign: "center",
    },
    trustNumber: { margin: "0 0 6px 0", fontSize: "22px", fontWeight: 800, color: "#ffffff" },
    trustLabel: { margin: 0, fontSize: "12px", lineHeight: 1.5, color: "rgba(255,255,255,0.78)" },
    formCard: {
      background: "rgba(255,255,255,0.94)", border: "1px solid rgba(15, 23, 42, 0.06)",
      borderRadius: "30px", padding: "30px",
      boxShadow: "0 18px 40px rgba(15,23,42,0.06), 0 4px 14px rgba(15,23,42,0.04)",
      backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", boxSizing: "border-box",
    },
    formTop: { marginBottom: "24px" },
    formTitle: { margin: "0 0 8px 0", fontSize: "30px", lineHeight: 1.15, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.04em" },
    formText: { margin: 0, fontSize: "15px", lineHeight: 1.8, color: "#64748b" },
    formGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" },
    fieldWrap: { display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" },
    fullWidth: { gridColumn: "1 / -1" },
    label: { fontSize: "13px", fontWeight: 700, color: "#334155", letterSpacing: "0.02em" },
    input: {
      width: "100%", boxSizing: "border-box", padding: "14px 15px",
      borderRadius: "14px", border: "1px solid #e2e8f0", background: "#ffffff",
      fontSize: "15px", color: "#0f172a", outline: "none", transition: "all 0.25s ease",
    },
    select: {
      width: "100%", boxSizing: "border-box", padding: "14px 15px",
      borderRadius: "14px", border: "1px solid #e2e8f0", background: "#ffffff",
      fontSize: "15px", color: "#0f172a", outline: "none", transition: "all 0.25s ease",
    },
    textarea: {
      width: "100%", boxSizing: "border-box", padding: "14px 15px",
      borderRadius: "14px", border: "1px solid #e2e8f0", background: "#ffffff",
      fontSize: "15px", color: "#0f172a", outline: "none", transition: "all 0.25s ease",
      resize: "vertical", minHeight: "140px",
    },
    submitWrap: {
      display: "flex", justifyContent: "space-between", alignItems: "center",
      gap: "16px", marginTop: "10px", flexWrap: "wrap",
    },
    smallNote: { margin: 0, fontSize: "13px", color: "#64748b", lineHeight: 1.7, maxWidth: "340px" },
    submitBtn: {
      background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
      color: "#ffffff", border: "none", borderRadius: "14px",
      padding: "15px 26px", fontSize: "15px", fontWeight: 800,
      cursor: loading ? "not-allowed" : "pointer",
      boxShadow: "0 14px 28px rgba(34,197,94,0.22)",
      opacity: loading ? 0.7 : 1, transition: "opacity 0.2s",
    },
    alertSuccess: {
      background: "#f0fdf4", color: "#15803d",
      border: "1px solid #bbf7d0", borderRadius: "12px",
      padding: "13px 16px", fontSize: "14px",
      lineHeight: 1.6, marginBottom: "20px",
    },
    alertError: {
      background: "#fef2f2", color: "#dc2626",
      border: "1px solid #fecaca", borderRadius: "12px",
      padding: "13px 16px", fontSize: "14px",
      lineHeight: 1.6, marginBottom: "20px",
    },
  };

  const inputFocus = (e) => {
    e.target.style.border = "1px solid rgba(34, 197, 94, 0.45)";
    e.target.style.boxShadow = "0 0 0 4px rgba(34, 197, 94, 0.08)";
  };

  const inputBlur = (e) => {
    e.target.style.border = "1px solid #e2e8f0";
    e.target.style.boxShadow = "none";
  };

  return (
    <section style={styles.section} id="contact">
      <SuccessPopup show={showPopup} onClose={() => setShowPopup(false)} />
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />
      <div style={styles.gridOverlay} />

      <div style={styles.container}>
        <div style={styles.topWrap}>
          <div style={styles.badge}>• Get In Touch</div>
          <h2 style={styles.heading}>Let's build something powerful together</h2>
          <p style={styles.subHeading}>
            Tell us about your project, product idea, or business requirement.
            We'll help you find the right technology approach with clarity,
            speed, and a premium execution standard.
          </p>
        </div>

        <div className="contactGrid" style={styles.contentWrap}>
          <div style={styles.leftCard}>
            <div style={styles.leftGlow} />
            <h3 style={styles.leftTitle}>Start the conversation</h3>
            <p style={styles.leftText}>
              Whether you need a website, a custom platform, automation, or a
              complete digital solution, our team is ready to understand your
              goals and guide you toward the right build.
            </p>

            <div style={styles.infoList}>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>✉</div>
                <div>
                  <p style={styles.infoLabel}>Email</p>
                  <p style={styles.infoValue}>info@zyntraasolutions.com</p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>☎</div>
                <div>
                  <p style={styles.infoLabel}>Phone</p>
                  <p style={styles.infoValue}>+91 9319303073</p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>⌂</div>
                <div>
                  <p style={styles.infoLabel}>Availability</p>
                  <p style={styles.infoValue}>India based team with global delivery support</p>
                </div>
              </div>
            </div>

            <div style={styles.trustBox}>
              <div style={styles.trustItem}>
                <p style={styles.trustNumber}>Fast</p>
                <p style={styles.trustLabel}>Clear first response</p>
              </div>
              <div style={styles.trustItem}>
                <p style={styles.trustNumber}>Secure</p>
                <p style={styles.trustLabel}>Thoughtful tech planning</p>
              </div>
              <div style={styles.trustItem}>
                <p style={styles.trustNumber}>Scalable</p>
                <p style={styles.trustLabel}>Built for growth</p>
              </div>
            </div>
          </div>

          <div style={styles.formCard}>
            <div style={styles.formTop}>
              <h3 style={styles.formTitle}>Send your query</h3>
              <p style={styles.formText}>
                Share a few details and we'll reach out with the best next step.
              </p>
            </div>

            {/* ── Success Message ── */}
            {success && (
              <div style={styles.alertSuccess}>✅ {success}</div>
            )}

            {/* ── Error Message ── */}
            {error && (
              <div style={styles.alertError}>❌ {error}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="formGrid" style={styles.formGrid}>

                <div style={styles.fieldWrap}>
                  <label style={styles.label}>Full Name</label>
                  <input
                    type="text" name="name" placeholder="Enter your name"
                    value={formData.name} onChange={handleChange}
                    onFocus={inputFocus} onBlur={inputBlur}
                    style={styles.input} required
                  />
                </div>

                <div style={styles.fieldWrap}>
                  <label style={styles.label}>Email Address</label>
                  <input
                    type="email" name="email" placeholder="Enter your email"
                    value={formData.email} onChange={handleChange}
                    onFocus={inputFocus} onBlur={inputBlur}
                    style={styles.input} required
                  />
                </div>

                <div style={styles.fieldWrap}>
                  <label style={styles.label}>Phone Number</label>
                  <input
                    type="text" name="phone" placeholder="Enter your phone"
                    value={formData.phone} onChange={handleChange}
                    onFocus={inputFocus} onBlur={inputBlur}
                    style={styles.input}
                  />
                </div>

                <div style={styles.fieldWrap}>
                  <label style={styles.label}>Company Name</label>
                  <input
                    type="text" name="company" placeholder="Your company or brand"
                    value={formData.company} onChange={handleChange}
                    onFocus={inputFocus} onBlur={inputBlur}
                    style={styles.input}
                  />
                </div>

                <div style={styles.fieldWrap}>
                  <label style={styles.label}>Service Needed</label>
                  <select
                    name="service" value={formData.service}
                    onChange={handleChange} onFocus={inputFocus} onBlur={inputBlur}
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
                  <label style={styles.label}>Estimated Budget</label>
                  <select
                    name="budget" value={formData.budget}
                    onChange={handleChange} onFocus={inputFocus} onBlur={inputBlur}
                    style={styles.select}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₹50K</option>
                    <option value="50k-1l">₹50K – ₹1L</option>
                    <option value="1l-3l">₹1L – ₹3L</option>
                    <option value="3l-5l">₹3L – ₹5L</option>
                    <option value="5l-plus">₹5L+</option>
                  </select>
                </div>

                <div style={{ ...styles.fieldWrap, ...styles.fullWidth }}>
                  <label style={styles.label}>Project Details</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirement, goals, timeline, or any specific features you need"
                    value={formData.message} onChange={handleChange}
                    onFocus={inputFocus} onBlur={inputBlur}
                    style={styles.textarea} required
                  />
                </div>
              </div>

              <div style={styles.submitWrap}>
                <p style={styles.smallNote}>
                  By submitting this form, you're sharing your project details
                  so our team can get back to you with the right solution.
                </p>
                <button type="submit" style={styles.submitBtn} disabled={loading}>
                  {loading ? "Sending..." : "Submit Query"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contactGrid { grid-template-columns: 1fr !important; }
          .formGrid     { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}