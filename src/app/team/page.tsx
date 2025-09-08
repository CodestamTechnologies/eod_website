import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { SocialSidebar } from "@/components/global/SocialSidebar";
import { TeamHeroSection } from "@/components/team/TeamHeroSection";
import { TeamSection } from "@/components/global/TeamSection";

export default function TeamPage() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <SocialSidebar />
      <div className="pt-16">
        <TeamHeroSection />
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
}