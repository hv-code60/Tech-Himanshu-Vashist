export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor: "#081F2D",
        isolation: "isolate",
      }}
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <source src="/Hero_1.mp4" type="video/mp4" />
      </video>

      {/* HERO CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 24px 180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1000, width: "100%" }}>
          <div
            style={{
              color: "#2ECC71",
              fontSize: "clamp(13px, 2vw, 20px)",
              fontWeight: 600,
              letterSpacing: 1,
              marginBottom: 14,
              textTransform: "uppercase",
            }}
          >
            Innovate • Secure • Grow
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 6vw, 56px)",
              lineHeight: 1.15,
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: 20,
            }}
          >
            Building Scalable & Secure
            <br />
            Technology Solutions
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.7,
              color: "#E6EEF4",
              maxWidth: 720,
              margin: "0 auto 36px",
            }}
          >
            Engineering technology that secures today and empowers tomorrow.
          </p>
        </div>
      </div>

      {/* FLOATING APPOINTMENT CTA */}
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 32px)",
          maxWidth: 900,
          zIndex: 3,
        }}
      >
        <div
          style={{
            background: "#fefefe",
            borderRadius: 14,
            padding: "20px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          }}
        >
          <h2
            style={{
              color: "#0B3C5D",
              marginBottom: 12,
              fontWeight: 900,
              textAlign: "left",
              fontSize: "clamp(15px, 2.5vw, 19px)",
            }}
          >
            Make An Appointment Now !!
          </h2>

          <form
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <input type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="tel" placeholder="Phone Number" style={inputStyle} />

            <button
              type="submit"
              className="appt-btn"
              style={{
                padding: "14px 24px",
                background: "#2ECC71",
                color: "#FFFFFF",
                border: "none",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: 0.5,
                cursor: "pointer",
                width: "100%",
                maxWidth: 220,
                height: 50,
                flexShrink: 0,
              }}
            >
              BOOK APPOINTMENT
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .appt-btn {
            max-width: 100% !important;
            margin: 4px auto 0 !important;
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  flex: "1 1 140px",
  minWidth: 120,
  padding: "10px 12px",
  borderRadius: 4,
  border: "none",
  background: "#c1c5c140",
  outline: "none",
  height: 50,
  fontSize: 14,
};