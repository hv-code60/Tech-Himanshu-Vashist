import React from "react";

export default function ProjectCTA() {
  return (
    <section style={{ padding: "40px 0px", color: "#d9dce3" }}>
      <div className="projectCtaBox">
        {/* glow background */}
        <div className="ctaGlow" />

        <h2 className="ctaTitle" style={{ padding: "0px 0px 0px" }}>Ready to start your project?</h2>

        <p className="ctaDesc">
          Let’s discuss your requirements and build a clean, secure and scalable
          solution for your business.
        </p>

        {/* main buttons */}
        <div className="ctaButtons">
          <a href="#contact" className="ctaPrimary">
            Contact Us
          </a>

          {/* <a href="#portfolio" className="ctaSecondary">
            View Portfolio
          </a> */}
        </div>

        {/* WhatsApp CTA (below buttons)
        <div className="ctaChips">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="ctaChip"
          >
            Chat on WhatsApp
          </a>
        </div> */}
      </div>

      <style>{`
        .projectCtaBox{
          position: relative;
          max-width: 1100px;
          margin: auto;
          border-radius: 24px;
          padding: 55px 10px;
          text-align: center;
          color: white;
          background: linear-gradient(135deg,#16a34a,#15803d);
          box-shadow: 0 35px 70px rgba(22,163,74,0.35);
          overflow: hidden;
        }

        .ctaGlow{
          position:absolute;
          inset:-120px;
          background:
          radial-gradient(circle at 20% 30%, rgba(255,255,255,.25), transparent 55%),
          radial-gradient(circle at 80% 70%, rgba(255,255,255,.18), transparent 60%);
          pointer-events:none;
        }

        .ctaTitle{
          margin:0;
          font-size: clamp(26px,3vw,38px);
          font-weight:900;
          letter-spacing:-0.5px;
          position:relative;
        }

        .ctaDesc{
          margin:12px auto 0;
          max-width:700px;
          opacity:.95;
          line-height:1.7;
          font-size:16px;
          position:relative;
        }

        .ctaButtons{
          margin-top:22px;
          display:flex;
          gap:12px;
          justify-content:center;
          flex-wrap:wrap;
          position:relative;
        }

        .ctaPrimary{
          background:white;
          color:#15803d;
          padding:13px 10px;
          border-radius:12px;
          font-weight:900;
          text-decoration:none;
          box-shadow:0 12px 24px rgba(2,6,23,.15);
          transition:.25s;
        }
        .ctaPrimary:hover{
          transform:translateY(-2px);
        }

        .ctaSecondary{
          border:1px solid rgba(255,255,255,.35);
          background:rgba(255,255,255,.12);
          color:white;
          padding:13px 22px;
          border-radius:12px;
          font-weight:900;
          text-decoration:none;
          transition:.25s;
        }
        .ctaSecondary:hover{
          background:rgba(255,255,255,.2);
        }

        .ctaChips{
          margin-top:16px;
          display:flex;
          gap:10px;
          justify-content:center;
          flex-wrap:wrap;
          position:relative;
        }

        .ctaChip{
          font-size:13px;
          font-weight:800;
          padding:10px 16px;
          border-radius:999px;
          border:1px solid rgba(255,255,255,.35);
          background:rgba(255,255,255,.12);
          color:white;
          text-decoration:none;
          transition:.25s;
        }
        .ctaChip:hover{
          background:rgba(255,255,255,.25);
          transform:translateY(-2px);
        }

        @media(max-width:640px){
          .projectCtaBox{padding:45px 18px;}
        }
      `}</style>
    </section>
  );
}