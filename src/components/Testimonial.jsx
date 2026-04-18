import React, { useEffect, useMemo, useState } from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Founder, ScaleEdge Solutions",
    company: "ScaleEdge",
    text: "Zyntraa Solutions helped us streamline our internal operations with a custom dashboard that was clean, fast, and highly reliable. The team understood our requirements quickly and delivered exactly what our business needed.",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Priya Mehta",
    role: "Director, Innovent Labs",
    company: "Innovent",
    text: "We approached Zyntraa for a complete website revamp and the results were excellent. The new website looks premium, loads faster, and has significantly improved our lead quality.",
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Rohan Verma",
    role: "Operations Head, CloudBridge Tech",
    company: "CloudBridge",
    text: "Their development process was structured and transparent from day one. From UI design to deployment, everything was handled professionally. We especially appreciated their focus on scalability and security.",
    image: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Sneha Kapoor",
    role: "Co-Founder, GrowthNest",
    company: "GrowthNest",
    text: "The automation solutions built by Zynntraa saved our team hours of repetitive work every week. Their ability to combine business understanding with technical execution made a huge difference.",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Vikram Sethi",
    role: "CEO, PixelForge Digital",
    company: "PixelForge",
    text: "What stood out most was their responsiveness and clarity. They did not just build features, they gave us better direction on product flow, performance, and long-term architecture decisions.",
    image: "https://i.pravatar.cc/100?img=68",
  },
];

export default function PremiumTiltedTestimonials() {
  const [current, setCurrent] = useState(2);
  const [screenW, setScreenW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onResize = () => setScreenW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % testimonials.length),
      4200
    );
    return () => clearInterval(timer);
  }, [hovered]);

  const nextSlide = () =>
    setCurrent((p) => (p + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  // Breakpoints
  const isSm = screenW < 480;
  const isMd = screenW >= 480 && screenW < 900;

  // Center card width (px)
  const centerW = isSm
    ? Math.min(screenW - 48, 320)
    : isMd
    ? Math.min(screenW - 100, 360)
    : 360;

  // Side card config — scaled to screen
  const sideOffsetX = isSm ? screenW * 0.37 : isMd ? screenW * 0.33 : 300;
  const farOffsetX  = isSm ? screenW * 0.68 : isMd ? screenW * 0.60 : 560;
  const sideW       = isSm ? centerW * 0.70 : isMd ? centerW * 0.74 : 270;
  const farW        = isSm ? centerW * 0.56 : isMd ? centerW * 0.60 : 220;

  // carousel container height
  const carouselH = isSm ? 460 : isMd ? 510 : 560;

  const positionStyles = {
    center: {
      width: centerW,
      transform: "translateX(0px) translateY(0px) rotate(0deg) scale(1)",
      opacity: 1,
      zIndex: 5,
      boxShadow:
        "0 30px 70px rgba(15,23,42,0.13), 0 12px 34px rgba(34,197,94,0.10)",
      border: "1.5px solid rgba(34, 197, 94, 0.22)",
    },
    left: {
      width: sideW,
      transform: `translateX(-${sideOffsetX}px) translateY(22px) rotate(-5deg) scale(1)`,
      opacity: isSm ? 0.52 : 0.72,
      zIndex: 4,
      filter: isSm ? "blur(0.8px)" : "none",
    },
    right: {
      width: sideW,
      transform: `translateX(${sideOffsetX}px) translateY(22px) rotate(5deg) scale(1)`,
      opacity: isSm ? 0.52 : 0.72,
      zIndex: 4,
      filter: isSm ? "blur(0.8px)" : "none",
    },
    farLeft: {
      width: farW,
      transform: `translateX(-${farOffsetX}px) translateY(52px) rotate(-9deg) scale(1)`,
      opacity: isSm ? 0.18 : isMd ? 0.28 : 0.42,
      zIndex: 3,
      filter: "blur(1.5px)",
    },
    farRight: {
      width: farW,
      transform: `translateX(${farOffsetX}px) translateY(52px) rotate(9deg) scale(1)`,
      opacity: isSm ? 0.18 : isMd ? 0.28 : 0.42,
      zIndex: 3,
      filter: "blur(1.5px)",
    },
  };

  const visibleCards = useMemo(() => {
    const total = testimonials.length;
    return [
      { ...testimonials[(current - 2 + total) % total], position: "farLeft",  index: (current - 2 + total) % total },
      { ...testimonials[(current - 1 + total) % total], position: "left",     index: (current - 1 + total) % total },
      { ...testimonials[current],                        position: "center",   index: current },
      { ...testimonials[(current + 1) % total],          position: "right",    index: (current + 1) % total },
      { ...testimonials[(current + 2) % total],          position: "farRight", index: (current + 2) % total },
    ];
  }, [current]);

  const ArrowLeft = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const ArrowRight = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#ffffff",
        padding: isSm
          ? "48px 0 64px"
          : isMd
          ? "60px 0 80px"
          : "78px 0 120px",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* Glow blobs */}
      <div style={{ position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)", width: isSm ? "260px" : "540px", height: isSm ? "260px" : "540px", borderRadius: "50%", background: "rgba(34,197,94,0.07)", filter: "blur(100px)", pointerEvents: "none", zIndex: 1 }} />
      <div style={{ position: "absolute", top: "80px", right: "-60px", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(20,184,166,0.06)", filter: "blur(90px)", pointerEvents: "none", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1380, margin: "0 auto", padding: "0 20px" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: isSm ? "28px" : "42px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "8px 14px", borderRadius: 999, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.16)", color: "#16a34a", fontSize: isSm ? 12 : 14, fontWeight: 700, letterSpacing: "0.02em", marginBottom: 18 }}>
            Testimonials
          </div>
          <h2 style={{ margin: 0, color: "#0f172a", fontWeight: 800, fontSize: isSm ? "26px" : isMd ? "32px" : "clamp(38px, 5vw, 58px)", lineHeight: 1.05, letterSpacing: "-0.05em" }}>
            Trusted by teams that care about quality
          </h2>
          <p style={{ maxWidth: 760, margin: "14px auto 0", color: "#64748b", fontSize: isSm ? "14px" : "17px", lineHeight: 1.85 }}>
            Real feedback from businesses that chose Zyntraa Solutions for websites, software, automation, and scalable digital products.
          </p>
          <div style={{ marginTop: 16, fontSize: isSm ? 13 : 14, color: "#16a34a", fontWeight: 600 }}>
            Built with clarity, speed, and long-term trust.
          </div>
        </div>

        {/* Fan Carousel */}
        <div style={{ position: "relative" }}>

          {/* Left fade edge */}
          <div style={{ position: "absolute", top: 0, left: 0, width: isSm ? "18%" : "12%", height: "100%", background: "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))", zIndex: 10, pointerEvents: "none" }} />
          {/* Right fade edge */}
          <div style={{ position: "absolute", top: 0, right: 0, width: isSm ? "18%" : "12%", height: "100%", background: "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))", zIndex: 10, pointerEvents: "none" }} />

          <div
            style={{ position: "relative", height: carouselH, display: "flex", alignItems: "center", justifyContent: "center" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {visibleCards.map((item) => (
              <div
                key={`${item.position}-${item.index}`}
                onClick={() => {
                  if (item.position === "left" || item.position === "farLeft") prevSlide();
                  if (item.position === "right" || item.position === "farRight") nextSlide();
                }}
                style={{
                  position: "absolute",
                  borderRadius: 24,
                  padding: isSm ? "18px 16px 16px" : "24px 20px 20px",
                  boxSizing: "border-box",
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(15,23,42,0.07)",
                  boxShadow: "0 12px 28px rgba(15,23,42,0.06)",
                  transition: "all 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
                  textAlign: "left",
                  cursor: item.position !== "center" ? "pointer" : "default",
                  overflow: "hidden",
                  userSelect: "none",
                  ...positionStyles[item.position],
                }}
              >
                {/* Top shimmer */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 1, background: "linear-gradient(90deg, rgba(34,197,94,0), rgba(34,197,94,0.7), rgba(20,184,166,0))", opacity: 0.8 }} />

                {/* Avatar + name */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width: isSm ? 42 : 50, height: isSm ? 42 : 50, minWidth: isSm ? 42 : 50, borderRadius: "50%", padding: 2, background: "linear-gradient(135deg, rgba(34,197,94,0.55), rgba(20,184,166,0.35))" }}>
                    <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "nowrap" }}>
                      <p style={{ margin: 0, fontSize: isSm ? 12 : 14, fontWeight: 700, color: "#0f172a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "110px" }}>{item.name}</p>
                      <span style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", padding: "2px 6px", borderRadius: 999, background: "rgba(15,23,42,0.05)", color: "#475569", fontSize: 10, fontWeight: 600 }}>Client</span>
                    </div>
                    <p style={{ margin: "3px 0 0", fontSize: isSm ? 10 : 11, color: "#64748b", lineHeight: 1.4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div style={{ display: "flex", gap: 2, marginBottom: 10, color: "#16a34a", fontSize: isSm ? 11 : 13 }}>
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>

                {/* Quote mark */}
                <div style={{ fontSize: 34, lineHeight: 0.7, color: "rgba(34,197,94,0.18)", fontWeight: 800, marginBottom: 6 }}>"</div>

                {/* Text — clamp side cards */}
                <p style={{
                  fontSize: isSm ? 11 : 13,
                  lineHeight: 1.8,
                  color: "#334155",
                  margin: "0 0 16px",
                  display: "-webkit-box",
                  WebkitLineClamp: item.position === "center" ? 99 : 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {item.text}
                </p>

                {/* Divider + company */}
                <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, #e2e8f0, #f8fafc)", marginBottom: 10 }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <p style={{ margin: 0, fontSize: 9, color: "#64748b", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{item.company}</p>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg, #22c55e, #14b8a6)", boxShadow: "0 0 0 3px rgba(34,197,94,0.10)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div style={{ marginTop: isSm ? 20 : 28, display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
          <button type="button" onClick={prevSlide} aria-label="Previous"
            style={{ width: isSm ? 42 : 48, height: isSm ? 42 : 48, borderRadius: "50%", border: "1px solid rgba(15,23,42,0.08)", background: "#ffffff", color: "#0f172a", cursor: "pointer", boxShadow: "0 8px 20px rgba(15,23,42,0.06)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.25s ease" }}
          >
            <ArrowLeft />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {testimonials.map((_, i) => (
              <button key={i} type="button" onClick={() => setCurrent(i)} aria-label={`Testimonial ${i + 1}`}
                style={{ width: current === i ? 28 : 8, height: 8, borderRadius: 999, border: "none", padding: 0, cursor: "pointer", background: current === i ? "linear-gradient(90deg, #22c55e, #14b8a6)" : "#cbd5e1", transition: "all 0.3s ease" }}
              />
            ))}
          </div>

          <button type="button" onClick={nextSlide} aria-label="Next"
            style={{ width: isSm ? 42 : 48, height: isSm ? 42 : 48, borderRadius: "50%", border: "1px solid rgba(15,23,42,0.08)", background: "#ffffff", color: "#0f172a", cursor: "pointer", boxShadow: "0 8px 20px rgba(15,23,42,0.06)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.25s ease" }}
          >
            <ArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}