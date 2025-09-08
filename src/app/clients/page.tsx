import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { SocialSidebar } from "@/components/global/SocialSidebar";
import { ClientsHeroSection } from "@/components/clients/ClientsHeroSection";
import { ClientsGridSection } from "@/components/clients/ClientsGridSection";

export default function ClientsPage() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <SocialSidebar />
      <div className="pt-16">
        <ClientsHeroSection />
        <ClientsGridSection />
      </div>
      <Footer />
    </div>
  );
}