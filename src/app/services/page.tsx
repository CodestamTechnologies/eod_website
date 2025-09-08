import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { SocialSidebar } from "@/components/global/SocialSidebar";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServiceBlock } from "@/components/services/ServiceBlock";

const servicesData = [
  {
    id: 1,
    title: "Corporate Events",
    description: "Professional corporate event organization services that create impactful business experiences. We handle everything from corporate conferences and seminars to product launches and company celebrations. Our team manages venue selection, logistics coordination, audio-visual setup, catering arrangements, and guest management to ensure your corporate events run seamlessly and achieve their objectives while reflecting your company's professional image.",
    image: "/images/Event.jpg",
    imagePosition: "left"
  },
  {
    id: 2,
    title: "Welfare Events",
    description: "Meaningful welfare events that make a positive impact on communities and society. We organize charity fundraisers, community welfare programs, health camps, educational initiatives, and social awareness campaigns. Our approach focuses on creating events that not only raise awareness but also drive meaningful action and support for important causes, bringing communities together for the greater good.",
    image: "/images/NPHO3703.JPG",
    imagePosition: "right"
  },
  {
    id: 3,
    title: "Community Celebrations",
    description: "Vibrant community celebrations that bring people together and strengthen social bonds. We organize festivals, cultural events, neighborhood gatherings, and community milestones celebrations. Our team understands the importance of local traditions and customs, ensuring every community event respects cultural values while creating memorable experiences that foster unity and celebration among community members.",
    image: "/images/Retail Marketing.JPG",
    imagePosition: "left"
  },
  {
    id: 4,
    title: "Event Showcases",
    description: "Dynamic event showcases that highlight talents, products, or achievements in spectacular fashion. We create exhibitions, talent shows, product demonstrations, and achievement ceremonies that captivate audiences and create lasting impressions. Our showcase events are designed to provide platforms for recognition, networking, and celebration while ensuring maximum engagement and memorable experiences for all participants.",
    image: "/images/RedBull_2.jpg",
    imagePosition: "right"
  },
  {
    id: 5,
    title: "Multi-City Events",
    description: "Seamless multi-city event coordination that extends your reach across different locations. We manage the complexities of organizing events in multiple cities simultaneously, ensuring consistent quality and experience across all venues. Our expertise includes logistics coordination, local vendor management, travel arrangements, and maintaining brand consistency while adapting to local preferences and requirements in each city.",
    image: "/images/Rural Marketing.png",
    imagePosition: "left"
  },
  {
    id: 6,
    title: "Event Photography & Documentation",
    description: "Professional event photography and documentation services that capture every important moment. Our skilled photographers and videographers ensure your events are beautifully documented for future reference, marketing purposes, and memory preservation. We provide comprehensive coverage including candid moments, formal presentations, group photos, and highlight reels that tell the complete story of your event.",
    image: "/images/DSC06316.JPG",
    imagePosition: "right"
  },
  {
    id: 7,
    title: "Event Promotion & Marketing",
    description: "Strategic event promotion and marketing services that ensure maximum attendance and engagement. We create comprehensive marketing campaigns using digital platforms, traditional media, and community outreach to build awareness and excitement for your events. Our promotional strategies include social media campaigns, press releases, influencer partnerships, and targeted advertising to reach your desired audience effectively.",
    image: "/images/Public Health_1.jpg",
    imagePosition: "left"
  },
  {
    id: 8,
    title: "Complete Event Planning",
    description: "End-to-end event planning services that handle every detail from conception to completion. Our comprehensive planning includes concept development, budget management, vendor coordination, timeline creation, risk management, and on-site execution. We work closely with clients to understand their vision and objectives, then bring those ideas to life through meticulous planning and flawless execution that exceeds expectations.",
    image: "/images/NPHO3744.JPG",
    imagePosition: "right"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <SocialSidebar />
      <div className="pt-16">
        <ServicesHeroSection />
        <div className="py-16">
          {servicesData.map((service) => (
            <ServiceBlock
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              imagePosition={service.imagePosition as "left" | "right"}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}