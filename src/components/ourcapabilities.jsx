import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    title: "Custom Software Development",
    desc: "Scalable dashboards, CRMs, admin panels, and enterprise tools built around your workflow and future growth needs.",
    tags: [{ name: "SaaS", icon: "⚙️" }, { name: "Dashboards", icon: "📊" }, { name: "RBAC", icon: "🔐" }],
    icon: "⌘",
    route: "/services/custom-software-development",
    gradient: "linear-gradient(135deg, #22c55e20, #16a34a10)",
  },
  {
    title: "Web & Portal Development",
    desc: "SEO-optimized websites and portals that load fast, look premium, and convert visitors into qualified leads.",
    tags: [{ name: "React/Next.js", icon: "⚛️" }, { name: "SEO", icon: "🔍" }, { name: "Landing Pages", icon: "📄" }],
    icon: "◉",
    route: "/services/web-portal-development",
    gradient: "linear-gradient(135deg, #22c55e20, #16a34a10)",
  },
  {
    title: "Mobile Applications",
    desc: "Android and iOS apps with secure login, smooth UX, notifications, and seamless third-party integrations.",
    tags: [{ name: "Android", icon: "🤖" }, { name: "iOS", icon: "🍎" }, { name: "Flutter/RN", icon: "🎨" }],
    icon: "◫",
    route: "/services/mobile-applications",
    gradient: "linear-gradient(135deg, #22c55e20, #16a34a10)",
  },
  {
    title: "AI & Automation",
    desc: "Chatbots, WhatsApp automation, and lead workflows to reduce manual work and improve speed across teams.",
    tags: [{ name: "Chatbots", icon: "🤖" }, { name: "Automation", icon: "⚡" }, { name: "Workflows", icon: "🔄" }],
    icon: "✦",
    route: "/services/ai-automation",
    gradient: "linear-gradient(135deg, #22c55e20, #16a34a10)",
  },
  {
    title: "Cloud & DevOps",
    desc: "Secure deployments with CI/CD, monitoring, backups, and performance tuning for production stability.",
    tags: [{ name: "AWS/VPS", icon: "☁️" }, { name: "CI/CD", icon: "🚀" }, { name: "Monitoring", icon: "📡" }],
    icon: "☁",
    route: "/services/cloud-devops",
    gradient: "linear-gradient(135deg, #22c55e20, #16a34a10)",
  },
  {
    title: "UI/UX Design",
    desc: "Clean modern UI systems, prototypes, and product experiences designed to improve trust and conversions.",
    tags: [{ name: "Figma", icon: "🎭" }, { name: "Design System", icon: "🎨" }, { name: "Prototypes", icon: "🎬" }],
    icon: "◌",
    route: "/services/ui-ux-design",
    gradient: "linear-gradient(135deg, #22c55e20, #16a34a10)",
  },
];

const CapabilityCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease, transform 0.6s ease`,
      }}
    >
      <div
        style={{
          position: "relative",
          background: "#ffffff",
          border: isHovered ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid rgba(15, 23, 42, 0.08)",
          borderRadius: 32,
          padding: "28px 26px 26px",
          boxShadow: isHovered 
            ? "0 25px 50px -12px rgba(34, 197, 94, 0.25), 0 0 0 1px rgba(34, 197, 94, 0.1)" 
            : "0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.02)",
          transition: "all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          overflow: "hidden",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated gradient border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, #22c55e, #16a34a, #22c55e)",
            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 0.4s ease",
            transformOrigin: "left",
          }}
        />

        {/* Background glow on hover */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "200%",
            height: "200%",
            background: "radial-gradient(circle, rgba(34,197,94,0.03) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}
        />

        {/* Icon */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: isHovered 
              ? "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" 
              : "linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(22,163,74,0.08) 100%)",
            border: isHovered ? "1px solid rgba(34,197,94,0.3)" : "1px solid rgba(34,197,94,0.15)",
            color: isHovered ? "#ffffff" : "#16a34a",
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 24,
            transition: "all 0.3s ease",
            boxShadow: isHovered ? "0 8px 20px rgba(34,197,94,0.3)" : "none",
          }}
        >
          {item.icon}
        </div>

        {/* Title */}
        <h3
          style={{
            margin: "0 0 12px 0",
            fontSize: "clamp(18px, 2vw, 22px)",
            lineHeight: 1.35,
            fontWeight: 800,
            color: "#0f172a",
            letterSpacing: "-0.02em",
            transition: "color 0.3s ease",
          }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          style={{
            margin: "0 0 20px 0",
            fontSize: "clamp(13px, 1.5vw, 15px)",
            lineHeight: 1.7,
            color: "#64748b",
            flex: 1,
          }}
        >
          {item.desc}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 24,
          }}
        >
          {item.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                padding: "6px 14px",
                borderRadius: 40,
                background: isHovered 
                  ? "linear-gradient(135deg, #22c55e15, #16a34a10)" 
                  : "rgba(34, 197, 94, 0.08)",
                border: isHovered 
                  ? "1px solid rgba(34, 197, 94, 0.25)" 
                  : "1px solid rgba(34, 197, 94, 0.12)",
                color: "#15803d",
                fontSize: 12,
                fontWeight: 700,
                lineHeight: 1,
                transition: "all 0.3s ease",
              }}
            >
              <span style={{ marginRight: 6, fontSize: 13 }}>{tag.icon}</span>
              {tag.name}
            </span>
          ))}
        </div>

        {/* Learn More Link */}
        <Link
          to={item.route}
          style={{
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 13,
              fontWeight: 800,
              color: "#16a34a",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              transition: "all 0.3s ease",
              borderBottom: "2px solid transparent",
              paddingBottom: 4,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.gap = "14px";
              e.currentTarget.style.color = "#15803d";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.gap = "10px";
              e.currentTarget.style.color = "#16a34a";
            }}
          >
            <span>Learn More</span>
            <span
              style={{
                fontSize: 14,
                transition: "transform 0.3s ease",
                display: "inline-block",
              }}
              className="arrow-icon"
            >
              →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default function PremiumCapabilitiesSection() {
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

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#ffffff",
        padding: "80px 24px 100px",
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
      id="capabilities"
    >
      {/* Premium Background Decorations */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.03) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      
      {/* Subtle Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(15,23,42,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,23,42,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.3), transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.3), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            textAlign: "center",
            maxWidth: 860,
            margin: "0 auto 64px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #22c55e10, #16a34a08)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
              backdropFilter: "blur(4px)",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                color: "#16a34a",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Our Capabilities
            </span>
          </div>

          {/* Main Heading */}
          <h2
            style={{
              margin: "0 0 20px 0",
              fontSize: "clamp(32px, 6vw, 58px)",
              lineHeight: 1.1,
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.03em",
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            What We Strategize
          </h2>

          {/* Description */}
          <p
            style={{
              margin: 0,
              fontSize: "clamp(15px, 2vw, 17px)",
              lineHeight: 1.7,
              color: "#64748b",
              maxWidth: 720,
              marginInline: "auto",
            }}
          >
            From custom software and mobile apps to AI automation and cloud infrastructure, 
            we deliver end-to-end technology solutions designed for speed, security, and sustainable growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 350px), 1fr))",
            gap: 28,
          }}
        >
          {capabilities.map((item, index) => (
            <CapabilityCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(0.95);
          }
        }
        
        @media (max-width: 768px) {
          .capability-card:hover {
            transform: translateY(-4px) !important;
          }
        }
        
        .arrow-icon {
          transition: transform 0.3s ease;
        }
        
        div:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}