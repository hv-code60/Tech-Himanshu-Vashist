// src/components/SuccessPopup.jsx
// ─────────────────────────────────────────────
// Reusable success popup — import in both forms
// Usage: <SuccessPopup show={showPopup} onClose={() => setShowPopup(false)} />
// ─────────────────────────────────────────────

import React, { useEffect } from "react";

export default function SuccessPopup({ show, onClose }) {
  // Auto-close after 5 seconds
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [show, onClose]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: "fixed", inset: 0,
        background: "rgba(15, 23, 42, 0.45)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        zIndex: 9998,
        animation: "fadeIn 0.2s ease",
      }} />

      {/* Popup Card */}
      <div style={{
        position: "fixed",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        width: "90%", maxWidth: "420px",
        background: "#ffffff",
        borderRadius: "28px",
        padding: "40px 36px 36px",
        boxShadow: "0 32px 80px rgba(15,23,42,0.18), 0 8px 24px rgba(15,23,42,0.10)",
        textAlign: "center",
        animation: "popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      }}>

        {/* Close button */}
        <button onClick={onClose} style={{
          position: "absolute", top: "16px", right: "16px",
          width: "32px", height: "32px", borderRadius: "50%",
          border: "none", background: "#f1f5f9",
          color: "#64748b", fontSize: "16px",
          cursor: "pointer", display: "flex",
          alignItems: "center", justifyContent: "center",
          lineHeight: 1,
        }}>✕</button>

        {/* Green checkmark icon */}
        <div style={{
          width: "72px", height: "72px", borderRadius: "50%",
          background: "linear-gradient(135deg, #4ade80, #22c55e)",
          boxShadow: "0 16px 40px rgba(34,197,94,0.30)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "32px", margin: "0 auto 20px",
          animation: "bounceIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both",
        }}>✓</div>

        {/* Title */}
        <h3 style={{
          margin: "0 0 10px", fontSize: "24px", fontWeight: 800,
          color: "#0f172a", letterSpacing: "-0.04em", lineHeight: 1.1,
        }}>
          Query Submitted!
        </h3>

        {/* Message */}
        <p style={{
          margin: "0 0 24px", fontSize: "15px", lineHeight: 1.8,
          color: "#64748b", maxWidth: "320px", marginInline: "auto",
        }}>
          Thank you for reaching out. Our team will review your project details
          and get back to you within <strong style={{ color: "#0f172a" }}>24–48 hours</strong>.
        </p>

        {/* Progress bar — drains over 5 seconds */}
        <div style={{
          width: "100%", height: "4px", background: "#f1f5f9",
          borderRadius: "999px", overflow: "hidden", marginBottom: "20px",
        }}>
          <div style={{
            height: "100%",
            background: "linear-gradient(90deg, #22c55e, #16a34a)",
            borderRadius: "999px",
            animation: "drain 5s linear forwards",
          }} />
        </div>

        {/* Close button */}
        <button onClick={onClose} style={{
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          color: "#ffffff", border: "none",
          borderRadius: "14px", padding: "13px 32px",
          fontSize: "15px", fontWeight: 700,
          cursor: "pointer", width: "100%",
          boxShadow: "0 10px 24px rgba(34,197,94,0.22)",
          letterSpacing: "0.01em",
        }}>
          Got it 👍
        </button>

      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: translate(-50%, -48%) scale(0.92); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes bounceIn {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes drain {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </>
  );
}