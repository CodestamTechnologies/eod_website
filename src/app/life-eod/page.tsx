import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { SocialSidebar } from "@/components/global/SocialSidebar";
import { LifeEodHeroSection } from "@/components/life-eod/LifeEodHeroSection";
import { CultureSection } from "@/components/life-eod/CultureSection";
import { WorkLifeBalanceSection } from "@/components/life-eod/WorkLifeBalanceSection";
import { TeamActivitiesSection } from "@/components/life-eod/TeamActivitiesSection";
import { BenefitsSection } from "@/components/life-eod/BenefitsSection";

export default function LifeEodPage() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <SocialSidebar />
      <div className="pt-16">
        <LifeEodHeroSection />
        <CultureSection />
        <WorkLifeBalanceSection />
        <TeamActivitiesSection />
        <BenefitsSection />
      </div>
      <Footer />
    </div>
  );
}