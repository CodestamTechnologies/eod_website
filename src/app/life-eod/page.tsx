import { LifeEodHeroSection } from "@/components/life-eod/LifeEodHeroSection";
import { CultureSection } from "@/components/life-eod/CultureSection";
import { BenefitsSection } from "@/components/life-eod/BenefitsSection";

export default function LifeEodPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="pt-16">
        <LifeEodHeroSection />
        <CultureSection />
        <BenefitsSection />
      </div>
    </div>
  );
}