import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { SocialSidebar } from "@/components/global/SocialSidebar";
import { ProjectsHeroSection } from "@/components/projects/ProjectsHeroSection";
import { ProjectCard } from "@/components/projects/ProjectCard";

const projectsData = [
  {
    id: 1,
    name: "Corporate Annual Conference",
    description: "Large-scale corporate conference organized across multiple cities with seamless coordination and exceptional attendee experience.",
    image: "/images/Event.jpg"
  },
  {
    id: 2,
    name: "Community Welfare Drive",
    description: "Multi-city welfare event that brought communities together for health awareness and social support programs.",
    image: "/images/NPHO3703.JPG"
  },
  {
    id: 3,
    name: "Cultural Festival Showcase",
    description: "Vibrant cultural festival celebrating local traditions and bringing diverse communities together in celebration.",
    image: "/images/Retail Marketing.JPG"
  },
  {
    id: 4,
    name: "Youth Empowerment Event",
    description: "High-energy youth empowerment event that inspired and motivated young participants across different cities.",
    image: "/images/RedBull_2.jpg"
  },
  {
    id: 5,
    name: "Rural Community Outreach",
    description: "Community-focused welfare program that successfully connected with rural audiences and provided essential services.",
    image: "/images/Rural Marketing.png"
  },
  {
    id: 6,
    name: "Educational Workshop Series",
    description: "Comprehensive educational workshop series that enhanced learning opportunities for participants across multiple venues.",
    image: "/images/DSC06316.JPG"
  },
  {
    id: 7,
    name: "Health Awareness Campaign",
    description: "Impactful public health awareness event that drove positive behavioral change and community engagement.",
    image: "/images/Public Health_1.jpg"
  },
  {
    id: 8,
    name: "Digital Innovation Showcase",
    description: "Technology showcase event that highlighted digital innovations and connected tech enthusiasts across cities.",
    image: "/images/NPHO3744.JPG"
  },
  {
    id: 9,
    name: "Trade Exhibition Management",
    description: "Professional trade exhibition that maximized exhibitor exposure and generated valuable business connections.",
    image: "/images/IC208155.JPG"
  },
  {
    id: 10,
    name: "Product Launch Celebration",
    description: "Memorable product launch event that created excitement and drove immediate community engagement.",
    image: "/images/IMG_6262.JPG"
  },
  {
    id: 11,
    name: "Corporate Team Building",
    description: "Engaging corporate team building event that strengthened relationships and improved workplace collaboration.",
    image: "/images/0R6_1588.JPG"
  },
  {
    id: 12,
    name: "Event Documentation",
    description: "Professional event photography and documentation services that captured key moments and preserved memories.",
    image: "/images/NPHO3700.JPG"
  },
  {
    id: 13,
    name: "Venue Setup & Design",
    description: "Creative venue setup and design that transformed spaces into memorable event environments.",
    image: "/images/Office_JS.jpg"
  },
  {
    id: 14,
    name: "Welcome Reception Event",
    description: "Welcoming reception event that created positive first impressions and fostered networking opportunities.",
    image: "/images/reception_JS.jpg"
  },
  {
    id: 15,
    name: "Traditional Cultural Event",
    description: "Traditional cultural celebration that honored heritage while bringing communities together in celebration.",
    image: "/images/ramayan1.PNG"
  },
  {
    id: 16,
    name: "Food Festival Organization",
    description: "Delicious food festival that celebrated culinary diversity and brought food enthusiasts together.",
    image: "/images/Fuji2.jpg"
  },
  {
    id: 17,
    name: "Healthcare Awareness Drive",
    description: "Comprehensive healthcare awareness event that reached diverse audiences with important health messaging.",
    image: "/images/Public Health_2.jpg"
  },
  {
    id: 18,
    name: "Professional Event Coverage",
    description: "Professional event coverage and documentation that enhanced event impact and created lasting memories.",
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
              Discover our portfolio of successful events that have brought communities together and created lasting impact. 
              Each project represents our commitment to organizing meaningful experiences across cities and communities.
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