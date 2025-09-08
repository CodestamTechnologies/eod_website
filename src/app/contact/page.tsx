import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { SocialSidebar } from "@/components/global/SocialSidebar";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactInfoSection } from "@/components/contact/ContactInfoSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <SocialSidebar />
      <div className="pt-16">
        <ContactHeroSection />
        <ContactInfoSection />
      </div>
      <Footer />
    </div>
  );
}