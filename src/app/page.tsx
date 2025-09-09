import { Navbar } from "@/components/global/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorkTogetherSection } from "@/components/WorkTogetherSection";
import { WhyPeopleLikeUsSection } from "@/components/WhyPeopleLikeUsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/global/Footer";

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