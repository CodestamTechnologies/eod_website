"use client";

import Image from "next/image";
import { Clock, Coffee, Gamepad2, Utensils } from "lucide-react";

const balanceFeatures = [
  {
    icon: Clock,
    title: "1. Brand Activation",
    description: "We specialize in creating unforgettable brand experiences that bring your vision to life. Our brand activations go beyond traditional marketing, focusing on building genuine connections with your target audience. From innovative product launches and interactive campaigns to engaging live experiences, we ensure your brand leaves a lasting impact."
  },
  {
    icon: Coffee,
    title: "2. Rural Marketing",
    description: "India's heart lies in its villages, and we understand how vital it is to connect with rural markets. Our rural marketing strategies are designed to bridge the gap between brands and rural audiences through innovative roadshows, community engagement programs, and local touchpoints."
  },
  {
    icon: Gamepad2,
    title: "3. Online/Offline Campaigning",
    description: "In today's hybrid world, campaigns need to be impactful both online and offline. We design integrated campaigns that deliver maximum visibility across digital platforms and on-ground activities. Whether it's social media promotions, influencer collaborations, roadshows, or mall activations, our campaigns are data-driven, creative, and result-oriented."
  },
  {
    icon: Utensils,
    title: "4. Shop/Retail Marketing",
    description: "Your retail presence is more than just a point of sale—it's your brand's frontline. We help you create immersive in-store experiences that attract, engage, and convert customers. From designing captivating retail displays and in-shop branding to promotional events and shopper engagement activities."
  }
];

export function WorkLifeBalanceSection() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            SERVICES
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive experiential marketing solutions designed to create memorable brand experiences and drive measurable results across all touchpoints.
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
                  src="/EOD/ADI00511.JPG"
                  alt="Team collaboration"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/EOD/ADI00514.JPG"
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
                  src="/EOD/ADI00520.JPG"
                  alt="Team activities"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/EOD/ADI00540.JPG"
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