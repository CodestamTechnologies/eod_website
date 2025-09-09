"use client";
import { Award, Target, Zap, Trophy, MapPin } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    id: 1,
    icon: Award,
    number: "500+",
    label: "PROJECTS",
  },
  {
    id: 2,
    icon: Target,
    number: "15+",
    label: "CLIENTS",
  },
  {
    id: 3,
    icon: Zap,
    number: "8+",
    label: "YEARS OF EXPERIENCE",
  },
  {
    id: 5,
    icon: Trophy,
    number: "20+",
    label: "AWARDS",
  },
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
        </div>

        {/* Layout: Image + Stats */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side Image */}
          <div className="flex justify-center" data-aos="fade-right">
            <Image
              src="/images/india-map.png" // replace with your map image
              alt="Pan India Coverage"
              width={500}
              height={500}
              className=""
            />
          </div>

          {/* Right Side Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
            {stats.slice(0, 4).map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="bg-white border-2 border-red-200 rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:border-red-400 transition-all duration-300 group"
                >
                  {/* Icon */}
                  <Icon className="w-10 h-10 text-red-500 mb-3 group-hover:text-red-600 transition-colors duration-300" />

                  {/* Number */}
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-sm md:text-base font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Optional Extra Stat (5th one below the grid) */}
        <div className="mt-10 flex justify-center" data-aos="fade-up">
          {stats[4] && (() => {
            const Icon = stats[4].icon;
            return (
              <div className="bg-white border-2 border-red-200 rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:border-red-400 transition-all duration-300 group w-56">
                <Icon className="w-10 h-10 text-red-500 mb-3 group-hover:text-red-600 transition-colors duration-300" />
                <div className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                  {stats[4].number}
                </div>
                <div className="text-sm md:text-base font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {stats[4].label}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
