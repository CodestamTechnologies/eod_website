import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactInfoSection } from "@/components/contact/ContactInfoSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="pt-16">
        <ContactHeroSection />
        <ContactInfoSection />
      </div>
    </div>
  );
}