import { Zap, MapPin, Globe, ShoppingBag, Calendar, Palette } from "lucide-react";

const services = [
  // First row - 3 services
  { id: 1, title: "Brand Activation", icon: Zap },
  { id: 2, title: "Rural Marketing", icon: MapPin },
  { id: 3, title: "Online/Offline Campaigning", icon: Globe },
  // Second row - 3 services
  { id: 4, title: "Shop/Retail Marketing", icon: ShoppingBag },
  { id: 5, title: "Events / Conferences / Exhibitions", icon: Calendar },
  { id: 6, title: "Branding", icon: Palette },
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
          {/* First Row - 3 Services */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
              {services.slice(0, 3).map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`
                      bg-white border-2 border-red-200 h-48 w-full flex flex-col items-center justify-center text-center p-4 xl:p-6 transition-all duration-300 hover:border-red-400 group cursor-pointer
                      ${index === 0 ? 'rounded-l-2xl' : ''}
                      ${index === 2 ? 'rounded-r-2xl' : ''}
                      ${index > 0 ? 'border-l-0 sm:border-l-2 md:border-l-0' : ''}
                      ${index === 1 ? 'sm:rounded-r-2xl md:rounded-r-none' : ''}
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

          {/* Second Row - 3 Services */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
              {services.slice(3, 6).map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`
                      bg-white border-2 border-red-200 h-48 w-full flex flex-col items-center justify-center text-center p-4 xl:p-6 transition-all duration-300 hover:border-red-400 group cursor-pointer
                      ${index === 0 ? 'rounded-l-2xl' : ''}
                      ${index === 2 ? 'rounded-r-2xl' : ''}
                      ${index > 0 ? 'border-l-0 sm:border-l-2 md:border-l-0' : ''}
                      ${index === 1 ? 'sm:rounded-r-2xl md:rounded-r-none' : ''}
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