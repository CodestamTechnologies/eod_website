import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { SocialSidebar } from "@/components/global/SocialSidebar";
import { CompanyHeroSection } from "@/components/company/CompanyHeroSection";
import { CompanyInfoSection } from "@/components/company/CompanyInfoSection";
import { GroupCompaniesSection } from "@/components/company/GroupCompaniesSection";

export default function CompanyPage() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <SocialSidebar />
      <div className="pt-16">
        <CompanyHeroSection />
        <CompanyInfoSection />
        <GroupCompaniesSection />
      </div>
      <Footer />
    </div>
  );
}