import { Award, Target, Zap, Trophy, MapPin } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Award,
    number: "500+",
    label: "PROJECTS"
  },
  {
    id: 2,
    icon: Target,
    number: "15+",
    label: "CLIENTS"
  },
  {
    id: 3,
    icon: Zap,
    number: "8+",
    label: "YEARS OF EXPERIENCE"
  },
  {
    id: 4,
    icon: MapPin,
    number: "5",
    label: "OFFICES"
  },
  {
    id: 5,
    icon: Trophy,
    number: "20+",
    label: "AWARDS"
  }
];

export function WhyPeopleLikeUsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            WHY PEOPLE TRUST US
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            AVAILABLE PAN INDIA
          </p>
        </div>

        {/* Stats Grid - 5 attached rectangles */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className={`
                    bg-white border-2 border-red-200 h-64 w-full flex flex-col items-center justify-center text-center p-4 xl:p-6 transition-all duration-300 hover:border-red-400 group cursor-pointer
                    ${index === 0 ? 'rounded-l-2xl' : ''}
                    ${index === stats.length - 1 ? 'rounded-r-2xl' : ''}
                    ${index > 0 ? 'border-l-0 sm:border-l-2 lg:border-l-0' : ''}
                    ${index === 2 ? 'sm:rounded-r-2xl md:rounded-r-none lg:rounded-r-none' : ''}
                    ${index === 3 ? 'sm:rounded-l-2xl md:rounded-l-none lg:rounded-l-none' : ''}
                  `}
                  style={{
                    boxShadow: '0 0 30px rgba(239, 68, 68, 0.4), 0 0 60px rgba(239, 68, 68, 0.2), 0 0 90px rgba(239, 68, 68, 0.1)',
                  }}
                >
                  {/* Icon */}
                  <div className="mb-3 xl:mb-4">
                    <Icon className="w-10 h-10 xl:w-12 xl:h-12 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-2 group-hover:text-red-500 transition-colors duration-300">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-base xl:text-lg font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}