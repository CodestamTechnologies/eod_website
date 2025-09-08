import { Megaphone, Calendar, Monitor, Sparkles, Users, BarChart3, Palette, Lightbulb } from "lucide-react";

const services = [
  // First row - 4 services
  { id: 1, title: "Brand Activation", icon: Megaphone },
  { id: 2, title: "Event Management", icon: Calendar },
  { id: 3, title: "Digital Marketing", icon: Monitor },
  { id: 4, title: "Experiential Marketing", icon: Sparkles },
  // Second row - 4 services
  { id: 5, title: "Public Relations", icon: Users },
  { id: 6, title: "Media Planning", icon: BarChart3 },
  { id: 7, title: "Creative Solutions", icon: Palette },
  { id: 8, title: "Strategic Consulting", icon: Lightbulb },
];

export function ServicesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
            Services we offer
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Check the services we offer
          </p>
        </div>

        {/* Services Grid - 2 Rows of Attached Rectangles */}
        <div className="space-y-4">
          {/* First Row - 4 Services */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full">
              {services.slice(0, 4).map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`
                      bg-white border-2 border-red-200 h-48 w-full flex flex-col items-center justify-center text-center p-4 xl:p-6 transition-all duration-300 hover:border-red-400 group cursor-pointer
                      ${index === 0 ? 'rounded-l-2xl' : ''}
                      ${index === 3 ? 'rounded-r-2xl' : ''}
                      ${index > 0 ? 'border-l-0 sm:border-l-2 md:border-l-0' : ''}
                      ${index === 1 ? 'sm:rounded-r-2xl md:rounded-r-none' : ''}
                      ${index === 2 ? 'sm:rounded-l-2xl md:rounded-l-none' : ''}
                    `}
                    style={{
                      boxShadow: '0 0 30px rgba(239, 68, 68, 0.4), 0 0 60px rgba(239, 68, 68, 0.2), 0 0 90px rgba(239, 68, 68, 0.1)',
                    }}
                  >
                    {/* Icon */}
                    <div className="mb-3 xl:mb-4">
                      <Icon className="w-8 h-8 xl:w-10 xl:h-10 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
                    </div>
                    
                    {/* Service Title */}
                    <div className="text-base xl:text-lg font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                      {service.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Second Row - 4 Services */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full">
              {services.slice(4, 8).map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`
                      bg-white border-2 border-red-200 h-48 w-full flex flex-col items-center justify-center text-center p-4 xl:p-6 transition-all duration-300 hover:border-red-400 group cursor-pointer
                      ${index === 0 ? 'rounded-l-2xl' : ''}
                      ${index === 3 ? 'rounded-r-2xl' : ''}
                      ${index > 0 ? 'border-l-0 sm:border-l-2 md:border-l-0' : ''}
                      ${index === 1 ? 'sm:rounded-r-2xl md:rounded-r-none' : ''}
                      ${index === 2 ? 'sm:rounded-l-2xl md:rounded-l-none' : ''}
                    `}
                    style={{
                      boxShadow: '0 0 30px rgba(239, 68, 68, 0.4), 0 0 60px rgba(239, 68, 68, 0.2), 0 0 90px rgba(239, 68, 68, 0.1)',
                    }}
                  >
                    {/* Icon */}
                    <div className="mb-3 xl:mb-4">
                      <Icon className="w-8 h-8 xl:w-10 xl:h-10 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
                    </div>
                    
                    {/* Service Title */}
                    <div className="text-base xl:text-lg font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                      {service.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}