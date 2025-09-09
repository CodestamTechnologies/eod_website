import { Navbar } from "@/components/global/Navbar";
import { HeroSection } from "@/components/Landing/HeroSection";
import { AboutSection } from "@/components/About/AboutSection";
import { AboutUsSection } from "@/components/About/AboutUsSection";
import { ServicesSection } from "@/components/Landing/ServicesSection";
import { WorkTogetherSection } from "@/components/Landing/WorkTogetherSection";
import { WhyPeopleLikeUsSection } from "@/components/Landing/WhyPeopleLikeUsSection";
import { ContactSection } from "@/components/Landing/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <AboutUsSection />
        <ServicesSection />
        <WorkTogetherSection />
        <WhyPeopleLikeUsSection />
        <ContactSection />
      </div>
    </div>
  );
}