"use client";

import Image from "next/image";
import { Clock, Coffee, Gamepad2, Utensils } from "lucide-react";

const balanceFeatures = [
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work-life balance is important to us. We offer flexible working hours to help you manage your personal and professional commitments."
  },
  {
    icon: Coffee,
    title: "Break Areas",
    description: "Comfortable break areas with premium coffee, snacks, and relaxation spaces to recharge during your workday."
  },
  {
    icon: Gamepad2,
    title: "Recreation Zone",
    description: "Gaming area and recreational facilities to unwind and bond with colleagues during breaks."
  },
  {
    icon: Utensils,
    title: "Team Meals",
    description: "Regular team lunches and celebrations to build stronger relationships and create lasting memories."
  }
];

export function WorkLifeBalanceSection() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Work-Life Balance
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe that happy employees create exceptional work. That&apos;s why we&apos;ve designed our workplace 
            to support both your professional growth and personal well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8">
            {balanceFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.title}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/DSC06316.JPG"
                  alt="Team collaboration"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/NPHO3700.JPG"
                  alt="Office environment"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/352.jpg"
                  alt="Team activities"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/NPHO3744.JPG"
                  alt="Work environment"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Team?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Experience a workplace where your growth matters, your ideas are valued, and your work-life balance is respected.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}