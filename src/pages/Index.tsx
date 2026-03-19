import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutStrip from "@/components/AboutStrip";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import MissionSection from "@/components/MissionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutStrip />
      <ServicesSection />
      <HowWeWorkSection />
      <WhoWeServeSection />
      <MissionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
