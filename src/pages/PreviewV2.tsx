import { Link } from "react-router-dom";
import NavbarV2 from "@/components/NavbarV2";
import HeroSectionV2 from "@/components/HeroSectionV2";
import AboutStrip from "@/components/AboutStrip";
import TrackRecordSection from "@/components/TrackRecordSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import TeamSection from "@/components/TeamSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import MissionSection from "@/components/MissionSection";
import CTASectionV2 from "@/components/CTASectionV2";
import FooterV2 from "@/components/FooterV2";

/**
 * Design system v2 preview — Home page re-themed with the new palette
 * derived from the selected logo (Signal Violet #5A2BFD / Ink Navy #00102D)
 * and the finalized logo lockup. Scoped via the "theme-v2" class in
 * index.css so it doesn't affect the live site's default tokens.
 *
 * Only the pieces that hardcoded the old indigo/near-black literals were
 * duplicated (Navbar, Footer, Hero, HeroProofCard, CTA) — every other
 * section below is reused unmodified because it's already driven by the
 * semantic color tokens the new theme overrides.
 */
const PreviewV2 = () => {
  return (
    <div className="theme-v2 min-h-screen bg-background">
      <div className="h-9 flex items-center justify-center bg-accent text-white text-center text-sm font-body px-4 fixed top-0 left-0 right-0 z-[60]">
        Design system v2 preview — <Link to="/" className="underline font-medium ml-1">compare with the live site</Link>
      </div>
      <div className="pt-9">
        <NavbarV2 />
        <HeroSectionV2 />
        <AboutStrip />
        <TrackRecordSection />
        <ServicesSection />
        <HowWeWorkSection />
        <TeamSection />
        <WhoWeServeSection />
        <MissionSection />
        <CTASectionV2 />
        <FooterV2 />
      </div>
    </div>
  );
};

export default PreviewV2;
