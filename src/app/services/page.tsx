import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { SocialSidebar } from "@/components/global/SocialSidebar";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServiceBlock } from "@/components/services/ServiceBlock";

const servicesData = [
  {
    id: 1,
    title: "Brand Activation",
    description: "We specialize in creating unforgettable brand experiences that bring your vision to life. Our brand activations go beyond traditional marketing, focusing on building genuine connections with your target audience. From innovative product launches and interactive campaigns to engaging live experiences, we ensure your brand leaves a lasting impact. With creative strategies and flawless execution, we transform consumer interactions into brand loyalty.",
    image: "/EOD/ADI00545.JPG",
    imagePosition: "left"
  },
  {
    id: 2,
    title: "Rural Marketing",
    description: "India's heart lies in its villages, and we understand how vital it is to connect with rural markets. Our rural marketing strategies are designed to bridge the gap between brands and rural audiences through innovative roadshows, community engagement programs, and local touchpoints. By leveraging cultural insights and grassroots-level activities, we make your brand relevant, relatable, and accessible to rural consumers—building strong, long-term brand recall in untapped markets.",
    image: "/EOD/ADI00548.JPG",
    imagePosition: "right"
  },
  {
    id: 3,
    title: "Online/Offline Campaigning",
    description: "In today's hybrid world, campaigns need to be impactful both online and offline. We design integrated campaigns that deliver maximum visibility across digital platforms and on-ground activities. Whether it's social media promotions, influencer collaborations, roadshows, or mall activations, our campaigns are data-driven, creative, and result-oriented. Our expertise ensures your brand message is consistent, compelling, and reaches the right audience wherever they are.",
    image: "/EOD/ADI00861.JPG",
    imagePosition: "left"
  },
  {
    id: 4,
    title: "Shop/Retail Marketing",
    description: "Your retail presence is more than just a point of sale—it's your brand's frontline. We help you create immersive in-store experiences that attract, engage, and convert customers. From designing captivating retail displays and in-shop branding to promotional events and shopper engagement activities, our retail marketing solutions enhance customer experience and maximize sales. Our goal is to make your retail outlets not just a store, but a brand destination.",
    image: "/EOD/ADI00540.JPG",
    imagePosition: "right"
  },
  {
    id: 5,
    title: "Events / Conferences / Exhibitions",
    description: "With nearly a decade of expertise, we excel in planning and executing high-impact corporate events, conferences, and exhibitions. Our team manages every detail—from concept development and venue selection to technical production and audience engagement. Whether it's a large-scale trade show, a leadership summit, or an intimate corporate gathering, we deliver experiences that inspire, connect, and leave a mark. We ensure your event reflects your brand's identity while achieving your business objectives seamlessly.",
    image: "/EOD/ADI00628.JPG",
    imagePosition: "left"
  },
  {
    id: 6,
    title: "Branding",
    description: "Branding is more than just a logo—it's the story, the experience, and the impression you create. We help brands build a strong identity through creative branding solutions that resonate with their audience. Our services include logo design, visual identity development, collateral design, and brand communication strategies. With a balance of creativity and strategy, we ensure your brand stands out in the competitive market and communicates its values effectively.",
    image: "/EOD/ADI00869.JPG",
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