import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { SocialSidebar } from "@/components/global/SocialSidebar";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServiceBlock } from "@/components/services/ServiceBlock";

const servicesData = [
  {
    id: 1,
    title: "Brand Activation",
    description: "Creating memorable brand experiences that connect with your audience and drive engagement through innovative activation strategies. Our team specializes in experiential marketing, product launches, sampling campaigns, and interactive brand experiences that create lasting emotional connections. We design and execute campaigns that not only increase brand awareness but also drive consumer behavior and build brand loyalty through immersive storytelling and creative engagement techniques.",
    image: "/images/Event.jpg",
    imagePosition: "left"
  },
  {
    id: 2,
    title: "Events & Conferences",
    description: "Professional event management services for conferences, exhibitions, and corporate events that leave lasting impressions. From concept development to flawless execution, we handle every aspect of your event including venue selection, logistics coordination, speaker management, audio-visual production, and attendee engagement. Our expertise spans corporate conferences, trade shows, product launches, award ceremonies, and networking events that deliver measurable results and exceed expectations.",
    image: "/images/NPHO3703.JPG",
    imagePosition: "right"
  },
  {
    id: 3,
    title: "Shopper & Retail Marketing",
    description: "Strategic retail marketing solutions that influence purchase decisions and enhance the shopping experience. We create compelling in-store displays, point-of-sale materials, promotional campaigns, and shopper journey optimization strategies. Our approach combines consumer psychology with retail insights to drive foot traffic, increase basket size, and improve conversion rates through targeted merchandising, seasonal campaigns, and innovative retail activation programs.",
    image: "/images/Retail Marketing.JPG",
    imagePosition: "left"
  },
  {
    id: 4,
    title: "Integrated Media Campaigns",
    description: "Comprehensive media campaigns that deliver consistent messaging across all channels for maximum impact. Our integrated approach combines traditional and digital media planning, creative development, and campaign optimization to reach your target audience effectively. We leverage data-driven insights to create cohesive campaigns across TV, radio, print, outdoor, digital, and social media platforms, ensuring optimal reach, frequency, and engagement while maximizing your marketing ROI.",
    image: "/images/RedBull_2.jpg",
    imagePosition: "right"
  },
  {
    id: 5,
    title: "Rural Marketing",
    description: "Specialized marketing strategies designed to reach and engage rural audiences with culturally relevant approaches. Understanding the unique characteristics of rural markets, we develop localized campaigns that resonate with rural consumers through appropriate messaging, media selection, and activation strategies. Our services include rural media planning, village-level activations, agricultural marketing, local influencer partnerships, and community engagement programs that build trust and drive adoption in rural markets.",
    image: "/images/Rural Marketing.png",
    imagePosition: "left"
  },
  {
    id: 6,
    title: "Creative Services",
    description: "Full-service creative solutions including design, content creation, and brand development to bring your vision to life. Our creative team delivers compelling visual identities, advertising campaigns, digital content, packaging design, and brand communications that capture attention and drive action. We combine strategic thinking with artistic excellence to create memorable brand experiences across all touchpoints, from logo design and brand guidelines to campaign creative and digital assets.",
    image: "/images/DSC06316.JPG",
    imagePosition: "right"
  },
  {
    id: 7,
    title: "Public Health Programs",
    description: "Impactful public health communication campaigns that educate, inform, and drive positive behavioral change. We partner with government agencies, NGOs, and healthcare organizations to develop and implement awareness campaigns on critical health issues. Our expertise includes health education programs, vaccination drives, disease prevention campaigns, maternal and child health initiatives, and community health interventions that create meaningful social impact and improve public health outcomes.",
    image: "/images/Public Health_1.jpg",
    imagePosition: "left"
  },
  {
    id: 8,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including social media, SEO, and online advertising to boost your digital presence. Our digital experts create data-driven campaigns that increase online visibility, drive website traffic, and generate qualified leads. Services include search engine optimization, pay-per-click advertising, social media marketing, content marketing, email campaigns, influencer partnerships, and digital analytics to help you succeed in the competitive digital landscape.",
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