import React, { useState } from "react";
import SuccessPopup from "./SuccessPopup";

const API_BASE = import.meta.env.VITE_API_URL || "https://tech-website-backend-production.up.railway.app/";

const SERVICE_MAP = {
  "custom-software": "Custom Software Development",
  "web-development": "Web & Portal Development",
  "mobile-apps": "Mobile Applications",
  "ai-automation": "AI & Automation",
  "cloud-devops": "Cloud & DevOps",
  "ui-ux": "UI/UX Design",
};

const BUDGET_MAP = {
  "under-50k": "Under ₹50K",
  "50k-1l": "₹50K – ₹1L",
  "1l-3l": "₹1L – ₹3L",
  "3l-5l": "₹3L – ₹5L",
  "5l-plus": "₹5L+",
};

const inputBase = {
  width: "100%",
  boxSizing: "border-box",
  padding: "14px 15px",
  borderRadius: 14,
  border: "1px solid #e2e8f0",
  background: "#ffffff",
  fontSize: "clamp(13px, 1.5vw, 15px)",
  color: "#0f172a",
  outline: "none",
  transition: "all 0.25s ease",
};

const inputFocus = (e) => {
  e.target.style.border = "1px solid rgba(34, 197, 94, 0.45)";
  e.target.style.boxShadow = "0 0 0 4px rgba(34, 197, 94, 0.08)";
};
const inputBlur = (e) => {
  e.target.style.border = "1px solid #e2e8f0";
  e.target.style.boxShadow = "none";
};

export default function PremiumGetInTouchSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (success) setSuccess("");
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    const payload = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      companyName: formData.company || null,
      serviceNeeded: SERVICE_MAP[formData.service] || null,
      estimatedBudget: BUDGET_MAP[formData.budget] || null,
      projectDetails: formData.message,
    };
    try {
      const res = await fetch(`${API_BASE}/api/contact/home`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (data.success) {
        setSuccess(data.message);
        setShowPopup(true);
        setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
      } else {
        setError(data.errors?.length > 0 ? data.errors.map((e) => e.message).join(" • ") : data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please make sure the server is running and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        position: "relative", overflow: "hidden", background: "#ffffff",
        padding: "90px 20px 50px",
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
      id="contact"
    >
      <SuccessPopup show={showPopup} onClose={() => setShowPopup(false)} />

      {/* Glow blobs */}
      <div style={{ position: "absolute", top: "-80px", left: "-90px", width: 300, height: 300, borderRadius: "50%", background: "rgba(34, 197, 94, 0.08)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-100px", right: "-80px", width: 300, height: 300, borderRadius: "50%", background: "rgba(20, 184, 166, 0.08)", filter: "blur(90px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.025) 1px, transparent 1px)", backgroundSize: "42px 42px", maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent 85%)", WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent 85%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1220, margin: "0 auto" }}>
        {/* Top heading */}
        <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 52px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "9px 16px", borderRadius: 999, background: "rgba(34, 197, 94, 0.08)", border: "1px solid rgba(34, 197, 94, 0.16)", color: "#16a34a", fontSize: 13, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>
            • Get In Touch
          </div>
          <h2 style={{ margin: "0 0 16px 0", fontSize: "clamp(26px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.05em" }}>
            Let's build something powerful together
          </h2>
          <p style={{ margin: 0, fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.9, color: "#64748b", maxWidth: 760, marginInline: "auto" }}>
            Tell us about your project, product idea, or business requirement. We'll help you find the right technology approach with clarity, speed, and a premium execution standard.
          </p>
        </div>

        {/* Content grid */}
        <div className="contactGrid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.15fr)", gap: 28, alignItems: "stretch" }}>

          {/* Left card */}
          <div style={{ position: "relative", background: "linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #0f9f68 100%)", borderRadius: 30, padding: "clamp(24px, 4vw, 36px) clamp(20px, 4vw, 30px)", overflow: "hidden", boxShadow: "0 30px 60px rgba(34,197,94,0.18), 0 14px 30px rgba(15,23,42,0.08)", boxSizing: "border-box" }}>
            <div style={{ position: "absolute", top: "-50px", right: "-50px", width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,0.12)", filter: "blur(60px)", pointerEvents: "none" }} />

            <h3 style={{ position: "relative", zIndex: 2, margin: "0 0 14px 0", fontSize: "clamp(22px, 3vw, 34px)", lineHeight: 1.1, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em" }}>
              Start the conversation
            </h3>
            <p style={{ position: "relative", zIndex: 2, margin: "0 0 28px 0", fontSize: "clamp(13px, 1.5vw, 15px)", lineHeight: 1.9, color: "rgba(255,255,255,0.88)" }}>
              Whether you need a website, a custom platform, automation, or a complete digital solution, our team is ready to understand your goals and guide you toward the right build.
            </p>

            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              {[
                { icon: "✉", label: "Email", value: "tech@himanshuvashist.com" },
                { icon: "☎", label: "Phone", value: "+91 8373931024" },
                { icon: "⌂", label: "Availability", value: "India based team with global delivery support" },
              ].map((info) => (
                <div key={info.label} style={{ display: "flex", alignItems: "flex-start", gap: 14, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 18, padding: "14px", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                  <div style={{ width: 42, height: 42, minWidth: 42, borderRadius: 12, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: 18, fontWeight: 700 }}>{info.icon}</div>
                  <div>
                    <p style={{ margin: "0 0 4px 0", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.72)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{info.label}</p>
                    <p style={{ margin: 0, fontSize: "clamp(13px, 1.5vw, 15px)", lineHeight: 1.7, color: "#ffffff", fontWeight: 600 }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[{ n: "Fast", l: "Clear first response" }, { n: "Secure", l: "Thoughtful tech planning" }, { n: "Scalable", l: "Built for growth" }].map((t) => (
                <div key={t.n} style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 18, padding: "14px 10px", textAlign: "center" }}>
                  <p style={{ margin: "0 0 6px 0", fontSize: "clamp(14px, 2vw, 20px)", fontWeight: 800, color: "#ffffff" }}>{t.n}</p>
                  <p style={{ margin: 0, fontSize: "clamp(10px, 1.2vw, 12px)", lineHeight: 1.5, color: "rgba(255,255,255,0.78)" }}>{t.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div style={{ background: "rgba(255,255,255,0.94)", border: "1px solid rgba(15, 23, 42, 0.06)", borderRadius: 30, padding: "clamp(20px, 4vw, 30px)", boxShadow: "0 18px 40px rgba(15,23,42,0.06)", boxSizing: "border-box" }}>
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ margin: "0 0 8px 0", fontSize: "clamp(22px, 3vw, 30px)", lineHeight: 1.15, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.04em" }}>Send your query</h3>
              <p style={{ margin: 0, fontSize: "clamp(13px, 1.5vw, 15px)", lineHeight: 1.8, color: "#64748b" }}>Share a few details and we'll reach out with the best next step.</p>
            </div>

            {success && <div style={{ background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0", borderRadius: 12, padding: "13px 16px", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>✅ {success}</div>}
            {error && <div style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca", borderRadius: 12, padding: "13px 16px", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>❌ {error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="formGrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { label: "Full Name", name: "name", type: "text", placeholder: "Enter your name", required: true },
                  { label: "Email Address", name: "email", type: "email", placeholder: "Enter your email", required: true },
                  { label: "Phone Number", name: "phone", type: "text", placeholder: "Enter your phone" },
                  { label: "Company Name", name: "company", type: "text", placeholder: "Your company or brand" },
                ].map((f) => (
                  <div key={f.name} style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 0 }}>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#334155", letterSpacing: "0.02em" }}>{f.label}</label>
                    <input type={f.type} name={f.name} placeholder={f.placeholder} value={formData[f.name]} onChange={handleChange} onFocus={inputFocus} onBlur={inputBlur} style={inputBase} required={f.required} />
                  </div>
                ))}

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 700, color: "#334155" }}>Service Needed</label>
                  <select name="service" value={formData.service} onChange={handleChange} onFocus={inputFocus} onBlur={inputBlur} style={inputBase}>
                    <option value="">Select a service</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="web-development">Web & Portal Development</option>
                    <option value="mobile-apps">Mobile Applications</option>
                    <option value="ai-automation">AI & Automation</option>
                    <option value="cloud-devops">Cloud & DevOps</option>
                    <option value="ui-ux">UI/UX Design</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 700, color: "#334155" }}>Estimated Budget</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} onFocus={inputFocus} onBlur={inputBlur} style={inputBase}>
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₹50K</option>
                    <option value="50k-1l">₹50K – ₹1L</option>
                    <option value="1l-3l">₹1L – ₹3L</option>
                    <option value="3l-5l">₹3L – ₹5L</option>
                    <option value="5l-plus">₹5L+</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1 / -1" }}>
                  <label style={{ fontSize: 13, fontWeight: 700, color: "#334155" }}>Project Details</label>
                  <textarea name="message" placeholder="Tell us about your requirement, goals, timeline, or any specific features you need" value={formData.message} onChange={handleChange} onFocus={inputFocus} onBlur={inputBlur} style={{ ...inputBase, resize: "vertical", minHeight: 130 }} required />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginTop: 16, flexWrap: "wrap" }}>
                <p style={{ margin: 0, fontSize: 13, color: "#64748b", lineHeight: 1.7, maxWidth: 340 }}>
                  By submitting this form, you're sharing your project details so our team can get back to you with the right solution.
                </p>
                <button type="submit" disabled={loading}
                  style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)", color: "#ffffff", border: "none", borderRadius: 14, padding: "15px 26px", fontSize: 15, fontWeight: 800, cursor: loading ? "not-allowed" : "pointer", boxShadow: "0 14px 28px rgba(34,197,94,0.22)", opacity: loading ? 0.7 : 1, transition: "opacity 0.2s", whiteSpace: "nowrap" }}>
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