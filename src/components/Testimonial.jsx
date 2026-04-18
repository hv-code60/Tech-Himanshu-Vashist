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
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (hovered) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [hovered]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleCards = useMemo(() => {
    const total = testimonials.length;
    const prev2 = (current - 2 + total) % total;
    const prev1 = (current - 1 + total) % total;
    const next1 = (current + 1) % total;
    const next2 = (current + 2) % total;

    if (isMobile) {
      return [{ ...testimonials[current], position: "center", index: current }];
    }

    return [
      { ...testimonials[prev2], position: "farLeft", index: prev2 },
      { ...testimonials[prev1], position: "left", index: prev1 },
      { ...testimonials[current], position: "center", index: current },
      { ...testimonials[next1], position: "right", index: next1 },
      { ...testimonials[next2], position: "farRight", index: next2 },
    ];
  }, [current, isMobile]);

  const styles = {
    section: {
      position: "relative",
      overflow: "hidden",
      background: "#ffffff",
      padding: isMobile ? "56px 16px 92px" : "78px 20px 120px",
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    },

    glowOne: {
      position: "absolute",
      top: "-80px",
      left: "50%",
      transform: "translateX(-50%)",
      width: isMobile ? "260px" : "540px",
      height: isMobile ? "260px" : "540px",
      borderRadius: "50%",
      background: "rgba(34, 197, 94, 0.07)",
      filter: "blur(100px)",
      pointerEvents: "none",
      zIndex: 1,
    },

    glowTwo: {
      position: "absolute",
      top: "80px",
      right: "-60px",
      width: "220px",
      height: "220px",
      borderRadius: "50%",
      background: "rgba(20, 184, 166, 0.06)",
      filter: "blur(90px)",
      pointerEvents: "none",
      zIndex: 1,
    },

    gridGlow: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to right, rgba(15,23,42,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.02) 1px, transparent 1px)",
      backgroundSize: "42px 42px",
      maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 80%)",
      WebkitMaskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 80%)",
      pointerEvents: "none",
      zIndex: 1,
    },

    container: {
      position: "relative",
      zIndex: 2,
      maxWidth: "1380px",
      margin: "0 auto",
    },

    headingWrap: {
      textAlign: "center",
      marginBottom: isMobile ? "28px" : "42px",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      padding: "8px 14px",
      borderRadius: "999px",
      background: "rgba(34, 197, 94, 0.08)",
      border: "1px solid rgba(34, 197, 94, 0.16)",
      color: "#16a34a",
      fontSize: isMobile ? "13px" : "14px",
      fontWeight: 700,
      letterSpacing: "0.02em",
      marginBottom: "18px",
    },

    heading: {
      margin: 0,
      color: "#0f172a",
      fontWeight: 800,
      fontSize: isMobile ? "30px" : "clamp(38px, 5vw, 58px)",
      lineHeight: 1.05,
      letterSpacing: "-0.05em",
      
    },

    subHeading: {
      maxWidth: "760px",
      margin: "14px auto 0",
      color: "#64748b",
      fontSize: isMobile ? "14px" : "17px",
      lineHeight: 1.85,
    },

    trustLine: {
      marginTop: "16px",
      fontSize: isMobile ? "13px" : "14px",
      color: "#16a34a",
      fontWeight: 600,
    },

    carouselWrap: {
      position: "relative",
      minHeight: isMobile ? "430px" : "560px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: isMobile ? "8px" : "18px",
    },

    cardBase: {
      position: isMobile ? "relative" : "absolute",
      width: isMobile ? "100%" : "300px",
      minHeight: isMobile ? "auto" : "360px",
      borderRadius: "28px",
      padding: "28px 24px 24px",
      boxSizing: "border-box",
      background: "rgba(255,255,255,0.92)",
      border: "1px solid rgba(15, 23, 42, 0.07)",
      boxShadow:
        "0 12px 28px rgba(15,23,42,0.06), 0 2px 8px rgba(15,23,42,0.03)",
      transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
      textAlign: "left",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      overflow: "hidden",
    },

    cardHighlight: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "1px",
      background:
        "linear-gradient(90deg, rgba(34,197,94,0), rgba(34,197,94,0.7), rgba(20,184,166,0), rgba(34,197,94,0))",
      opacity: 0.8,
    },

    center: {
      width: isMobile ? "100%" : "360px",
      minHeight: "392px",
      transform: "translateX(0) translateY(0) rotate(0deg) scale(1)",
      opacity: 1,
      zIndex: 5,
      boxShadow:
        "0 30px 70px rgba(15,23,42,0.12), 0 12px 34px rgba(34,197,94,0.08)",
      border: "1px solid rgba(34, 197, 94, 0.18)",
    },

    left: {
      transform: "translateX(-290px) translateY(26px) rotate(-5deg) scale(0.93)",
      opacity: 0.88,
      zIndex: 4,
    },

    right: {
      transform: "translateX(290px) translateY(26px) rotate(5deg) scale(0.93)",
      opacity: 0.88,
      zIndex: 4,
    },

    farLeft: {
      transform: "translateX(-560px) translateY(62px) rotate(-8deg) scale(0.84)",
      opacity: 0.55,
      zIndex: 3,
    },

    farRight: {
      transform: "translateX(560px) translateY(62px) rotate(8deg) scale(0.84)",
      opacity: 0.55,
      zIndex: 3,
    },

    topMeta: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      marginBottom: "20px",
    },

    avatarWrap: {
      width: "54px",
      height: "54px",
      borderRadius: "50%",
      padding: "2px",
      background:
        "linear-gradient(135deg, rgba(34,197,94,0.55), rgba(20,184,166,0.35))",
      flexShrink: 0,
    },

    avatar: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
      display: "block",
      background: "#fff",
    },

    personBlock: {
      minWidth: 0,
      flex: 1,
    },

    nameRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flexWrap: "wrap",
    },

    name: {
      margin: 0,
      fontSize: "16px",
      fontWeight: 700,
      color: "#0f172a",
    },

    chip: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 8px",
      borderRadius: "999px",
      background: "rgba(15,23,42,0.05)",
      color: "#475569",
      fontSize: "11px",
      fontWeight: 600,
    },

    role: {
      margin: "6px 0 0 0",
      fontSize: "13px",
      color: "#64748b",
      lineHeight: 1.6,
    },

    starRow: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      marginBottom: "18px",
      color: "#16a34a",
      fontSize: "14px",
    },

    quoteMark: {
      fontSize: "44px",
      lineHeight: 0.8,
      color: "rgba(34,197,94,0.18)",
      fontWeight: 800,
      marginBottom: "8px",
    },

    text: {
      fontSize: "15px",
      lineHeight: 1.9,
      color: "#334155",
      margin: "0 0 22px 0",
    },

    bottomLine: {
      width: "100%",
      height: "1px",
      background: "linear-gradient(90deg, #e2e8f0 0%, #f8fafc 100%)",
      marginBottom: "16px",
    },

    companyRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "10px",
    },

    companyText: {
      margin: 0,
      fontSize: "12px",
      color: "#64748b",
      fontWeight: 600,
      letterSpacing: "0.03em",
      textTransform: "uppercase",
    },

    verifiedDot: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)",
      boxShadow: "0 0 0 4px rgba(34,197,94,0.08)",
    },

    controlsWrap: {
      marginTop: isMobile ? "24px" : "18px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "16px",
    },

    navBtn: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      border: "1px solid rgba(15,23,42,0.08)",
      background: "#ffffff",
      color: "#0f172a",
      cursor: "pointer",
      boxShadow: "0 10px 24px rgba(15,23,42,0.06)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.25s ease",
    },

    dotsWrap: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },

    dot: {
      width: "8px",
      height: "8px",
      borderRadius: "999px",
      background: "#cbd5e1",
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "all 0.3s ease",
    },

    activeDot: {
      width: "28px",
      background: "linear-gradient(90deg, #22c55e 0%, #14b8a6 100%)",
      boxShadow: "0 6px 16px rgba(34,197,94,0.18)",
    },
  };

  const positionStyle = (position) => {
    if (isMobile) return styles.center;
    return styles[position];
  };

  const ArrowLeft = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ArrowRight = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section style={styles.section} id="testimonials">
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />
      <div style={styles.gridGlow} />

      <div style={styles.container}>
        <div style={styles.headingWrap}>
          <div style={styles.badge}>Testimonials</div>
          <h2 style={styles.heading}>Trusted by teams that care about quality</h2>
          <p style={styles.subHeading}>
            Real feedback from businesses that chose Zyntraa Solutions for
            websites, software, automation, and scalable digital products.
          </p>
          <div style={styles.trustLine}>Built with clarity, speed, and long-term trust.</div>
        </div>

        <div
          style={styles.carouselWrap}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {visibleCards.map((item) => (
            <div
              key={`${item.position}-${item.index}`}
              style={{
                ...styles.cardBase,
                ...positionStyle(item.position),
              }}
            >
              <div style={styles.cardHighlight} />

              <div style={styles.topMeta}>
                <div style={styles.avatarWrap}>
                  <img src={item.image} alt={item.name} style={styles.avatar} />
                </div>

                <div style={styles.personBlock}>
                  <div style={styles.nameRow}>
                    <p style={styles.name}>{item.name}</p>
                    <span style={styles.chip}>Client</span>
                  </div>
                  <p style={styles.role}>{item.role}</p>
                </div>
              </div>

              <div style={styles.starRow}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <div style={styles.quoteMark}>“</div>
              <p style={styles.text}>{item.text}</p>

              <div style={styles.bottomLine} />

              <div style={styles.companyRow}>
                <p style={styles.companyText}>{item.company}</p>
                <div style={styles.verifiedDot} />
              </div>
            </div>
          ))}
        </div>

        <div style={styles.controlsWrap}>
          <button
            type="button"
            onClick={prevSlide}
            style={styles.navBtn}
            aria-label="Previous testimonial"
          >
            <ArrowLeft />
          </button>

          <div style={styles.dotsWrap}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                style={{
                  ...styles.dot,
                  ...(current === index ? styles.activeDot : {}),
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            style={styles.navBtn}
            aria-label="Next testimonial"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}