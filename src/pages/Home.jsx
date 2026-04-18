import Hero from "../components/Hero";
import { OurClients } from "../components/Ourclients";
import TechnologyStrategySection from "../components/Technology";
import OurCapabilitiesWhite from "../components/ourcapabilities";
import FAQSection from "../components/FAQSection";
import PremiumTiltedTestimonials from "../components/Testimonial";
import PremiumGetInTouchSection from "../components/Getintouch";

const Home = () => {
  return (
    <>
      <Hero />
      <OurClients/>
      <TechnologyStrategySection />
      <OurCapabilitiesWhite />
      <PremiumTiltedTestimonials />
      <FAQSection />  
      <PremiumGetInTouchSection/>
    </>
  );
};

export default Home;