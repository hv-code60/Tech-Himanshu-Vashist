import React, { useEffect, useRef, useState } from 'react';

const PillHeading = ({ text = "OUR STRATEGY" }) => (
  <div style={{ textAlign: "center", marginBottom: 24 }}>
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 28px",
        borderRadius: 999,
        background: "#eef6ff",
        border: "1px solid rgba(34,197,94,0.35)",
        backdropFilter: "blur(2px)",
      }}
    >
      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
      <span style={{ fontWeight: 800, letterSpacing: 3, fontSize: 13, textTransform: "uppercase", color: "#0f6a3b" }}>
        {text}
      </span>
    </div>
  </div>
);

const CheckIcon = () => (
  <div
    style={{
      width: 52,
      height: 52,
      minWidth: 52,
      borderRadius: 34,
      background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 12px 24px rgba(34,197,94,0.25)",
    }}
  >
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const StrategyItem = ({ title, desc, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={itemRef}
      style={{
        display: "flex",
        gap: 20,
        alignItems: "flex-start",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <CheckIcon />
      <div>
        <h4 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 800, color: "#0f172a", margin: 0 }}>
          {title}
        </h4>
        <p style={{ marginTop: 8, marginBottom: 0, color: "#475569", lineHeight: 1.65, fontSize: "clamp(14px, 1.6vw, 16px)" }}>
          {desc}
        </p>
      </div>
    </div>
  );
};

const ImageCollage = () => {
  const [hoveredImg, setHoveredImg] = useState(null);

  const images = {
    top: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    bottomLeft: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    bottomRight: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  };

  const handleConsultClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('✨ Connect with our experts — schedule a strategy call!');
    }
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* Top Image */}
      <div
        style={{
          borderRadius: 32,
          overflow: "hidden",
          boxShadow: "0 35px 70px rgba(2,6,23,0.12)",
          border: "1px solid rgba(255,255,255,0.4)",
        }}
      >
        <img
          src={images.top}
          alt="Team strategy meeting"
          style={{
            width: "100%",
            height: "clamp(200px, 28vw, 340px)",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.5s ease",
            transform: hoveredImg === 'top' ? 'scale(1.03)' : 'scale(1)',
          }}
          onMouseEnter={() => setHoveredImg('top')}
          onMouseLeave={() => setHoveredImg(null)}
        />
      </div>

      {/* Floating Badge */}
      <div
        onClick={handleConsultClick}
        style={{
          position: "absolute",
          left: 20,
          bottom: 140,
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(12px)",
          borderRadius: 28,
          padding: "12px 20px",
          display: "flex",
          gap: 16,
          alignItems: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
          border: "1px solid rgba(255,255,255,0.7)",
          cursor: "pointer",
          transition: "all 0.25s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.background = "rgba(255,255,255,1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "rgba(255,255,255,0.96)";
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 26,
            background: "#22c55e",
            display: "grid",
            placeItems: "center",
            boxShadow: "0 8px 18px rgba(34,197,94,0.4)",
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <path d="M5 12h12" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M13 6l6 6-6 6" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#475569" }}>Quick Action</div>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a" }}>Consult Now</div>
        </div>
      </div>

      {/* Bottom Images Grid */}
      <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        {['bottomLeft', 'bottomRight'].map((key, idx) => (
          <div
            key={key}
            style={{
              borderRadius: 26,
              overflow: "hidden",
              border: "1px solid rgba(15,23,42,0.08)",
              boxShadow: "0 18px 36px rgba(0,0,0,0.08)",
              transition: "transform 0.25s, box-shadow 0.25s",
              cursor: "pointer",
              height: "clamp(130px, 16vw, 180px)",
              transform: hoveredImg === key ? 'translateY(-6px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredImg(key)}
            onMouseLeave={() => setHoveredImg(null)}
          >
            <img
              src={images[key]}
              alt={`Strategy ${idx + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.5s ease",
                transform: hoveredImg === key ? 'scale(1.04)' : 'scale(1)',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const StrategySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const strategyItems = [
    {
      title: "Strategic Planning & Roadmapping",
      desc: "Clear technology roadmaps aligned with your business objectives and growth targets.",
      delay: 100,
    },
    {
      title: "Scalability & Performance Optimization",
      desc: "Systems designed to scale efficiently as you grow, without performance bottlenecks or technical debt.",
      delay: 200,
    },
    {
      title: "Cost Optimization & ROI Analysis",
      desc: "Reduce technology costs while maximizing value and long-term return on investment.",
      delay: 300,
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        background: "#ffffff",
        padding: "clamp(50px, 8vw, 100px) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decoration */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(34,197,94,0.03) 0%, rgba(255,255,255,0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px", position: "relative" }}>
        <PillHeading />

        <h2
          style={{
            fontSize: "clamp(32px, 6vw, 54px)",
            fontWeight: 900,
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textAlign: "center",
            margin: "0 auto",
            maxWidth: 980,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          We Don't Just Build — We Strategize
        </h2>

        <p
          style={{
            textAlign: "center",
            margin: "20px auto 48px",
            color: "#475569",
            maxWidth: 880,
            lineHeight: 1.7,
            fontSize: "clamp(15px, 2vw, 18px)",
          }}
        >
          Our consulting services go beyond technical implementation. We partner with you to create clear roadmaps,
          scalable architecture, and ROI-focused decisions that support sustainable growth.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "clamp(36px, 5vw, 68px)",
            alignItems: "center",
          }}
          className="strategy-grid"
        >
          <ImageCollage />

          <div
            style={{
              background: "#ffffff",
              borderRadius: 40,
              border: "1px solid rgba(34,197,94,0.2)",
              padding: "clamp(28px, 4vw, 40px) clamp(22px, 3vw, 34px)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.05)",
              transition: "transform 0.25s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 35px 70px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.05)";
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {strategyItems.map((item, idx) => (
                <StrategyItem key={idx} {...item} />
              ))}
            </div>

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginTop: 36,
                background: "linear-gradient(105deg, #22c55e 0%, #15803d 100%)",
                color: "#ffffff",
                padding: "16px 32px",
                borderRadius: 60,
                fontWeight: 800,
                textDecoration: "none",
                fontSize: "clamp(14px, 1.5vw, 16px)",
                boxShadow: "0 16px 32px rgba(34,197,94,0.35)",
                transition: "all 0.25s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 22px 40px rgba(34,197,94,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 16px 32px rgba(34,197,94,0.35)";
              }}
            >
              Talk to Our Experts
              <span style={{ fontSize: 18, transition: "transform 0.2s" }}>→</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .strategy-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 540px) {
          .strategy-grid > div:last-child {
            padding: clamp(20px, 4vw, 28px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StrategySection;