import { SlEye } from "react-icons/sl";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        backgroundColor: '#081F2D',
        isolation: 'isolate',
        border: 'none',
        outline: 'none',
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
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <source src="/Hero_1.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(8,31,45,0.85), rgba(8,31,45,0.6))',
          zIndex: 1,
        }}
      /> */}

      {/* HERO CONTENT */}
      <div
  style={{
    position: 'relative',
    zIndex: 2,
    height: '100%',
    maxWidth: 1200,
    margin: '0 auto',
    padding: '30px 24px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // ⭐ center horizontally
    textAlign: 'center',      // ⭐ text center
  }}
>
  <div style={{ maxWidth: 1000 }}>
          <div
            style={{
              color: '#2ECC71',
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 1,
              marginBottom: 14,
              textTransform: 'uppercase',
            }}
          >
            Innovate • Secure • Grow
          </div>

          <h1
            style={{
              fontSize: 'clamp(38px, 6vw, 56px)',
              lineHeight: 1.15,
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: 20,
            }}
          >
            Building Scalable & Secure 
            <br />
            Technology Solutions
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: '#E6EEF4',
              maxWidth: 720,
              alignItems: 'center',
              marginBottom: 36,
            }}
          >
            Engineering technology that secures today and empowers tomorrow.
          </p>

          {/* <button
  style={{
    background: '#2ECC71',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: 14,
    padding: '14px 36px',
    fontSize: 16,
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 12px 32px rgba(46,204,113,0.35)',
    transition: 'all 0.3s ease',
  }}
  onMouseEnter={e => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow =
      '0 18px 40px rgba(46,204,113,0.45)';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow =
      '0 12px 32px rgba(46,204,113,0.35)';
  }}
>
  Get Started
</button> */}
        </div>
      </div>


      {/* ✅ FLOATING APPOINTMENT CTA */}
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth:900,
          padding: "0px",
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
          <h2 style={{ color: "#0B3C5D", marginBottom: 10, fontWeight: 900, textAlign: 'Left', fontSize: 19 }}>
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
            <input
              type="text"
              placeholder="Name"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email"
              style={inputStyle}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                padding: "14px 32px",
                background: "#2ECC71",
                color: "#FFFFFF",
                border: "none",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: 0.5,
                cursor: "pointer",
                minWidth: 200,
                height: 50,
              }}
            >
              BOOK APPOINTMENT
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  flex: 1,
  minWidth: 100,
  padding: "10px 12px",
  borderRadius: 4,
  border: "none",
  background: "#c1c5c140",
  outline: "None",
  style: "borderRadius: 16,",
};


