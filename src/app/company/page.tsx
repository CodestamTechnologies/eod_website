import { CompanyHeroSection } from "@/components/company/CompanyHeroSection";
import { CompanyInfoSection } from "@/components/company/CompanyInfoSection";
import { GroupCompaniesSection } from "@/components/company/GroupCompaniesSection";

export default function CompanyPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="pt-16">
        <CompanyHeroSection />
        <CompanyInfoSection />
        <GroupCompaniesSection />
      </div>
    </div>
  );
}