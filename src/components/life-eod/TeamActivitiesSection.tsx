"use client";

import Image from "next/image";
import { Calendar, Camera, PartyPopper, Trophy } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "5. Events / Conferences / Exhibitions",
    description: "With nearly a decade of expertise, we excel in planning and executing high-impact corporate events, conferences, and exhibitions. Our team manages every detail—from concept development and venue selection to technical production and audience engagement.",
    image: "/EOD/ADI00751.JPG",
    icon: PartyPopper,
    category: "Events"
  },
  {
    id: 2,
    title: "6. Branding",
    description: "Branding is more than just a logo—it's the story, the experience, and the impression you create. We help brands build a strong identity through creative branding solutions that resonate with their audience.",
    image: "/EOD/ADI00815.JPG",
    icon: Camera,
    category: "Branding"
  }
];

export function TeamActivitiesSection() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            MORE SERVICES
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive service portfolio covers every aspect of experiential marketing to ensure your brand creates lasting impressions and achieves measurable success.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div 
                key={activity.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {activity.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900">{activity.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">PROJECTS</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">CLIENTS</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">8+</div>
              <div className="text-gray-600 font-medium">YEARS OF EXPERIENCE</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">OFFICES</div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl italic text-gray-700 max-w-4xl mx-auto">
            &quot;At EOD, we don&apos;t just work together – we celebrate together, grow together, and create memories that last a lifetime. 
            Every team member is part of our extended family.&quot;
          </blockquote>
          <div className="mt-6 text-gray-600 font-medium">- EOD Leadership Team</div>
        </div>
      </div>
    </div>
  );
}