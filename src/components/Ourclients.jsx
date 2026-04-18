import React from "react";

export const OurClients = () => {
  return (
    <section className="bg-primary w-full" style={{ padding: "150px 0 0px 0" }}>
      {/* this wrapper forces true centering */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl px-6">
          <div className="flex flex-col gap-8">
            <h1
                className="text-center font-bold"
                style={{
                  color: "#0f172a",
                  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: "47px",
                  fontWeight: 800,
                  paddingBottom: "20px"
                }}
              >
                Our Trusted Partners
            </h1>
            {/* <p className="text-center text-md font-medium text-tertiary" style={{ paddingTop: "0px" }}>
              Join 4,000+ companies already growing
            </p> */}

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
             <img
                alt="Traveon"
                src="/ourclientslogo/traveon.png"
                className="h-14 md:h-20 object-contain"
              />
              <img
                alt="IBIEA 2025"
                src="/ourclientslogo/IBIEA.jpg"
                className="h-14 md:h-20 object-contain"
              />
              <img
                alt="ICCICT"
                src="/ourclientslogo/ICCICT.png"
                className="h-14 md:h-20 object-contain"
              />
              <img
                alt="nexa tech innovation"
                src="/ourclientslogo/nexatechinnovation.png"
                className="h-14 md:h-20 object-contain"
              />

              {/* Repeat if needed */}
              {/* <img
                alt="Magnolia"
                src="https://www.untitledui.com/logos/logotype/color/magnolia.svg"
                className="h-14 md:h-20 object-contain"
              />
              <img
                alt="Warpspeed"
                src="https://www.untitledui.com/logos/logotype/color/warpspeed.svg"
                className="h-14 md:h-20 object-contain"
              />
              <img
                alt="Sisyphus"
                src="https://www.untitledui.com/logos/logotype/color/sisyphus.svg"
                className="h-14 md:h-20 object-contain"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
