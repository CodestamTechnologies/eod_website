import { Navbar } from "@/components/global/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorkTogetherSection } from "@/components/WorkTogetherSection";
import { WhyPeopleLikeUsSection } from "@/components/WhyPeopleLikeUsSection";
import { TeamSection } from "@/components/global/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/global/Footer";
import { SocialSidebar } from "@/components/global/SocialSidebar";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <SocialSidebar />
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <AboutUsSection />
        <ServicesSection />
        <WorkTogetherSection />
        <WhyPeopleLikeUsSection />
        <TeamSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}