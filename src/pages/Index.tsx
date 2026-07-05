import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutStrip from "@/components/AboutStrip";
import TrackRecordSection from "@/components/TrackRecordSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import TeamSection from "@/components/TeamSection";
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
      <TrackRecordSection />
      <ServicesSection />
      <HowWeWorkSection />
      <TeamSection />
      <WhoWeServeSection />
      <MissionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
