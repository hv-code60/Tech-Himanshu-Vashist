import React from "react";

export const OurClients = () => {
  return (
    <section
      className="bg-primary w-full"
      style={{ padding: "clamp(140px, 15vw, 150px) 0 40px 0" }}
    >
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl px-6">
          <div className="flex flex-col gap-8">
            <h1
              className="text-center font-bold"
              style={{
                color: "#0f172a",
                fontFamily:
                  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: "clamp(22px, 5vw, 47px)",
                fontWeight: 800,
                paddingBottom: "20px",
              }}
            >
              Our Trusted Partners
            </h1>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px 40px",
              }}
            >
              <img
                alt="Traveon"
                src="/ourclientslogo/traveon.png"
                style={{ height: "clamp(48px, 8vw, 80px)", objectFit: "contain", maxWidth: 160 }}
              />
              <img
                alt="IBIEA 2025"
                src="/ourclientslogo/IBIEA.jpg"
                style={{ height: "clamp(48px, 8vw, 80px)", objectFit: "contain", maxWidth: 160 }}
              />
              <img
                alt="ICCICT"
                src="/ourclientslogo/ICCICT.png"
                style={{ height: "clamp(48px, 8vw, 80px)", objectFit: "contain", maxWidth: 160 }}
              />
              <img
                alt="nexa tech innovation"
                src="/ourclientslogo/nexatechinnovation.png"
                style={{ height: "clamp(48px, 8vw, 80px)", objectFit: "contain", maxWidth: 160 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};