"use client";

import Image from "next/image";
import { Calendar, Camera, PartyPopper, Trophy } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Team Building Events",
    description: "Regular team building activities that strengthen bonds and create lasting memories.",
    image: "/images/Event.jpg",
    icon: PartyPopper,
    category: "Events"
  },
  {
    id: 2,
    title: "Professional Photography",
    description: "Capturing moments and milestones with professional photography sessions.",
    image: "/images/IC208155.JPG",
    icon: Camera,
    category: "Memories"
  },
  {
    id: 3,
    title: "Achievement Celebrations",
    description: "Recognizing and celebrating individual and team achievements throughout the year.",
    image: "/images/0R6_1588.JPG",
    icon: Trophy,
    category: "Recognition"
  },
  {
    id: 4,
    title: "Cultural Programs",
    description: "Celebrating diversity through cultural events and traditional celebrations.",
    image: "/images/ramayan1.PNG",
    icon: Calendar,
    category: "Culture"
  },
  {
    id: 5,
    title: "Project Celebrations",
    description: "Celebrating successful project completions and client achievements.",
    image: "/images/IMG_6262.JPG",
    icon: PartyPopper,
    category: "Success"
  },
  {
    id: 6,
    title: "Learning Sessions",
    description: "Knowledge sharing sessions and workshops for continuous learning and growth.",
    image: "/images/Public Health_2.jpg",
    icon: Calendar,
    category: "Learning"
  }
];

export function TeamActivitiesSection() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Team Activities
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beyond work, we create opportunities for our team to connect, celebrate, and grow together. 
            Here&apos;s a glimpse into the vibrant activities that make EOD special.
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
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Team Events</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Participation</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">12</div>
              <div className="text-gray-600 font-medium">Celebrations/Year</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">∞</div>
              <div className="text-gray-600 font-medium">Memories Created</div>
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