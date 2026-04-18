import React from "react";

const css = `
  .about-section { padding: 100px 28px; font-family: 'Inter', align: right ui-sans-serif, system-ui, sans-serif; background: #FFFFFF; }
  .about-wrap { max-width: 1200px; margin: 0 auto; display: flex }
  .about-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 52px; align-items: center; }

  /* Badge */
  .about-badge { display: inline-flex; align-items: center; gap: 9px; padding: 9px 16px; border-radius: 999px; border: 1.5px solid #E4EBE7; background: #fff; color: #555; font-size: 13px; font-weight: 600; margin-bottom: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
  .about-dot { width: 9px; height: 9px; border-radius: 50%; background: #31CF6A; flex-shrink: 0; }

  /* Text */
  .about-h1 { color: #081531; font-size: clamp(30px, 3.6vw, 50px); line-height: 1.25; font-weight: 800; letter-spacing: -0.035em; margin-bottom: 18px; }
  .about-accent { color: #31CF6A; }
  .about-para { color: #5F7691; font-size: 15.5px; line-height: 1.82; margin-bottom: 28px; max-width: 510px; }

  /* Buttons */
  .about-btns { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 36px; }
  .about-btn-p { padding: 14px 28px; border-radius: 14px; background: linear-gradient(180deg,#31CF6A 0%,#1FBA53 100%); color: #fff; font-size: 15px; font-weight: 700; border: none; cursor: pointer; box-shadow: 0 10px 24px rgba(31,186,83,0.28); transition: opacity 0.2s; }
  .about-btn-p:hover { opacity: 0.88; }
  .about-btn-s { padding: 14px 24px; border-radius: 14px; background: #fff; color: #081531; font-size: 15px; font-weight: 700; border: 1.5px solid #DDE5E0; cursor: pointer; box-shadow: 0 2px 10px rgba(0,0,0,0.05); transition: border-color 0.2s; }
  .about-btn-s:hover { border-color: #31CF6A; }

  /* Stats */
  .about-stats { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 12px; }
  .about-stat { background: #fff; border: 1.5px solid #EAF0EC; border-radius: 18px; padding: 20px 12px; text-align: center; box-shadow: 0 4px 16px rgba(8,21,49,0.04); }
  .about-stat-icon { width: 38px; height: 38px; margin: 0 auto 10px; border-radius: 11px; background: #EDF7EF; color: #1FBA53; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800; }
  .about-stat-val { color: #081531; font-size: 17px; font-weight: 800; margin-bottom: 3px; }
  .about-stat-lbl { color: #8A9BB0; font-size: 12px; line-height: 1.4; }

  /* ── VISUAL CIRCLE ── */
  .about-rside { display: flex; justify-content: center; align-items: center; }
  .about-vw { position: relative; width: 100%; max-width: 460px; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; }

  /* Concentric glow rings */
  .about-ring { position: absolute; border-radius: 50%; }
  .about-ring-1 { width: 100%; height: 100%; background: radial-gradient(circle, rgba(49,207,106,0.07) 0%, transparent 70%); border: 1.5px solid rgba(49,207,106,0.10); }
  .about-ring-2 { width: 82%; height: 82%; background: radial-gradient(circle, rgba(49,207,106,0.10) 0%, transparent 70%); border: 1.5px solid rgba(49,207,106,0.15); }
  .about-ring-3 { width: 65%; height: 65%; background: radial-gradient(circle, rgba(8,21,49,0.06) 0%, transparent 70%); border: 1.5px solid rgba(49,207,106,0.20); }

  /* Main circle */
  .about-mc {
    width: 56%; height: 56%; border-radius: 50%;
    background: linear-gradient(145deg, #081531 0%, #0D2144 40%, #0E3B2A 100%);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; padding: 20px; position: relative; z-index: 2;
    box-shadow: 0 0 0 8px rgba(49,207,106,0.08), 0 0 0 16px rgba(49,207,106,0.04), 0 32px 72px rgba(8,21,49,0.30);
  }

  /* Frosted logo box — same style as screenshot */
  .about-logo {
    width: 76px; height: 76px; border-radius: 22px;
    background: rgba(255,255,255,0.12);
    border: 1.5px solid rgba(255,255,255,0.20);
    backdrop-filter: blur(8px);
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-size: 12px; font-weight: 800;
    margin-bottom: 14px; text-align: center; line-height: 1.4;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.15);
  }
  .about-brand { color: #fff; font-size: clamp(13px,1.5vw,18px); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 8px; }
  .about-stars { color: #FFD700; font-size: 18px; letter-spacing: 3px; margin-bottom: 8px; }
  .about-trust { color: rgba(255,255,255,0.65); font-size: 11px; line-height: 1.6; }

  /* Floating cards */
  .about-fc {
    position: absolute; background: #fff;
    border: 1.5px solid rgba(8,21,49,0.08);
    border-radius: 18px; padding: 11px 16px; z-index: 3;
    color: #081531; font-weight: 700; font-size: 13px;
    display: flex; align-items: center; gap: 9px;
    box-shadow: 0 8px 32px rgba(8,21,49,0.12);
  }
  .about-fi {
    width: 28px; height: 28px; border-radius: 9px;
    background: #EDF7EF; color: #1FBA53;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; font-weight: 800; flex-shrink: 0;
  }
  .about-fc-top { top: 7%; right: 4%; }
  .about-fc-mid {
    top: 48%; right: -8%;
    background: #1FBA53;
    color: #fff; border: none;
    box-shadow: 0 10px 28px rgba(31,186,83,0.35);
    border-radius: 16px;
  }
  .about-fc-mid .about-fi { background: #12c13b21; color: #fff; }
  .about-fc-bot { bottom: 8%; left: 2%; }
  .about-mid-val { font-size: 18px; font-weight: 800; line-height: 1; }
  .about-mid-sub { font-size: 11px; opacity: 0.90; margin-top: 2px; }

  .about-logo {
  width: 80px;
  height: 80px;
  border-radius: 20px;

  background: rgb(255, 255, 255);
  border: 1px solid hsl(0, 0%, 100%);

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}

.about-logo img {
  width: 70%;
  height: 70%;
  object-fit: contain;
}

  /* Responsive */
  @media (max-width: 960px) {
    .about-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
    .about-vw { max-width: 380px !important; }
    .about-stats { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
  }
  @media (max-width: 560px) {
    .about-section { padding: 52px 16px !important; }
    .about-h1 { font-size: clamp(26px, 7vw, 36px) !important; }
    .about-btns { flex-direction: column !important; }
    .about-btn-p, .about-btn-s { width: 100% !important; text-align: center !important; }
    .about-vw { max-width: 300px !important; }
    .about-fc { font-size: 11px !important; padding: 8px 12px !important; }
  }
`;

const stats = [
  { icon: "</>", value: "120+", label: "Projects Delivered" },
  { icon: "⚙", value: "40+", label: "Business Systems Built" },
  { icon: "AI", value: "15+", label: "Automation Workflows" },
  { icon: "↑", value: "98%", label: "Client Satisfaction" },
];

export default function AboutTechSection() {
  return (
    <>
      <style>{css}</style>
      <section className="about-section" id="about">
        <div className="about-wrap">
          <div className="about-grid">

            {/* ── LEFT COLUMN ── */}
            <div>
              {/* <div className="about-badge">
                <span className="about-dot" />
                Building modern digital products for ambitious businesses
              </div> */}

              <h1 className="about-h1">
                We build systems that{" "}
                <span className="about-accent">scale your business.</span>
              </h1>

              <p className="about-para">
                We help startups and growing businesses build powerful web platforms, mobile apps,
                and automation systems that drive real growth, efficiency, and long-term scalability.
              </p>

              <div className="about-btns">
                <button
                  className="about-btn-p"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Let's Build Together
                </button>
                <button
                  className="about-btn-s"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Services
                </button>
              </div>

              <div className="about-stats">
                {stats.map((s, i) => (
                  <div className="about-stat" key={i}>
                    <div className="about-stat-icon">{s.icon}</div>
                    <div className="about-stat-val">{s.value}</div>
                    <div className="about-stat-lbl">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT COLUMN — concentric ring visual ── */}
            <div className="about-rside">
              <div className="about-vw">

                {/* 3 concentric glowing rings */}
                <div className="about-ring about-ring-1" />
                <div className="about-ring about-ring-2" />
                <div className="about-ring about-ring-3" />

                {/* Main dark circle */}
                <div className="about-mc">
                 <div className="about-logo">
  <img src="/nexahtechnologies_favicon.png" alt="logo" />
</div>
                  <div className="about-brand">ZyntrAa Solutions</div>
                  <div className="about-stars">★★★★★</div>
                  <div className="about-trust">
                    Trusted by startups and businesses<br />
                    for modern web, app &amp; AI solutions
                  </div>
                </div>

                {/* Floating card — Top Rated */}
                <div className="about-fc about-fc-top">
                  <span className="about-fi">★</span>
                  Top Rated
                </div>

                {/* Floating card — Projects (gradient) */}
                <div className="about-fc about-fc-mid">
                  <span className="about-fi">↗</span>
                  <div>
                    <div className="about-mid-val">120+</div>
                    <div className="about-mid-sub">Projects launched</div>
                  </div>
                </div>

                {/* Floating card — Success */}
                <div className="about-fc about-fc-bot">
                  <span className="about-fi">↑</span>
                  98% Success Rate
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}