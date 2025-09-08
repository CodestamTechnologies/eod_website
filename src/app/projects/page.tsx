import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { SocialSidebar } from "@/components/global/SocialSidebar";
import { ProjectsHeroSection } from "@/components/projects/ProjectsHeroSection";
import { ProjectCard } from "@/components/projects/ProjectCard";

const projectsData = [
  {
    id: 1,
    name: "Brand Launch Campaign",
    description: "A comprehensive brand activation campaign that created buzz and drove significant engagement across multiple touchpoints.",
    image: "/images/Event.jpg"
  },
  {
    id: 2,
    name: "Corporate Conference 2024",
    description: "Large-scale corporate event management with seamless execution and exceptional attendee experience.",
    image: "/images/NPHO3703.JPG"
  },
  {
    id: 3,
    name: "Retail Marketing Initiative",
    description: "Strategic retail campaign that increased footfall and sales through innovative in-store experiences.",
    image: "/images/Retail Marketing.JPG"
  },
  {
    id: 4,
    name: "Red Bull Activation",
    description: "High-energy brand activation event that perfectly captured the brand's adventurous spirit and values.",
    image: "/images/RedBull_2.jpg"
  },
  {
    id: 5,
    name: "Rural Outreach Program",
    description: "Community-focused marketing campaign that successfully connected with rural audiences through local insights.",
    image: "/images/Rural Marketing.png"
  },
  {
    id: 6,
    name: "Creative Design Project",
    description: "Comprehensive brand identity and creative campaign that elevated the client's market presence.",
    image: "/images/DSC06316.JPG"
  },
  {
    id: 7,
    name: "Health Awareness Campaign",
    description: "Impactful public health initiative that drove positive behavioral change in target communities.",
    image: "/images/Public Health_1.jpg"
  },
  {
    id: 8,
    name: "Digital Marketing Success",
    description: "Data-driven digital campaign that achieved exceptional ROI and increased online brand visibility.",
    image: "/images/NPHO3744.JPG"
  },
  {
    id: 9,
    name: "Exhibition Management",
    description: "Professional trade show management that maximized client exposure and generated quality leads.",
    image: "/images/IC208155.JPG"
  },
  {
    id: 10,
    name: "Product Launch Event",
    description: "Memorable product launch that created media buzz and drove immediate market adoption.",
    image: "/images/IMG_6262.JPG"
  },
  {
    id: 11,
    name: "Corporate Branding",
    description: "Complete brand transformation project that repositioned the client in their competitive market.",
    image: "/images/0R6_1588.JPG"
  },
  {
    id: 12,
    name: "Event Photography",
    description: "Professional event documentation that captured key moments and created lasting brand memories.",
    image: "/images/NPHO3700.JPG"
  },
  {
    id: 13,
    name: "Office Space Design",
    description: "Modern office environment design that reflects brand values and enhances employee experience.",
    image: "/images/Office_JS.jpg"
  },
  {
    id: 14,
    name: "Reception Area Branding",
    description: "Welcoming reception space design that creates positive first impressions for visitors and clients.",
    image: "/images/reception_JS.jpg"
  },
  {
    id: 15,
    name: "Cultural Event Management",
    description: "Traditional cultural event that celebrated heritage while incorporating modern event management practices.",
    image: "/images/ramayan1.PNG"
  },
  {
    id: 16,
    name: "Food & Beverage Campaign",
    description: "Appetizing marketing campaign that increased brand awareness and drove sales in competitive F&B market.",
    image: "/images/Fuji2.jpg"
  },
  {
    id: 17,
    name: "Healthcare Initiative",
    description: "Comprehensive healthcare awareness program that reached diverse audiences with targeted messaging.",
    image: "/images/Public Health_2.jpg"
  },
  {
    id: 18,
    name: "Corporate Photography",
    description: "Professional corporate photography session that enhanced brand image and marketing materials.",
    image: "/images/352.jpg"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <SocialSidebar />
      <div className="pt-16">
        <ProjectsHeroSection />
        
        {/* Latest Work Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Latest Work
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
              Discover our portfolio of successful campaigns and events that have delivered exceptional results for our clients. 
              Each project represents our commitment to creativity, innovation, and measurable impact.
            </p>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}