import { ClientsHeroSection } from "@/components/clients/ClientsHeroSection";
import { ClientsGridSection } from "@/components/clients/ClientsGridSection";

export default function ClientsPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="pt-16">
        <ClientsHeroSection />
        <ClientsGridSection />
      </div>
    </div>
  );
}