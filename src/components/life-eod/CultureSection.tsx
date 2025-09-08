"use client";

import Image from "next/image";
import { Heart, Users, Lightbulb, Target } from "lucide-react";

const cultureValues = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "We believe in doing what we love and loving what we do. Every project is an opportunity to create something extraordinary."
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Teamwork makes the dream work. We foster an environment where every voice is heard and every idea matters."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions for our clients."
  },
  {
    icon: Target,
    title: "Excellence Focused",
    description: "We set high standards and consistently deliver results that exceed expectations, both for our clients and ourselves."
  }
];

export function CultureSection() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Culture
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
             At Events of Distinction, we&apos;ve built more than just a workplace – we&apos;ve created India&apos;s most dynamic brand activation hub where young talent thrives, breakthrough ideas flourish, and every team member contributes to award-winning campaigns that set industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/Office_JS.jpg"
                alt="Our office culture and workspace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Work Environment</h3>
              <p className="text-gray-600 text-sm">
                Modern, collaborative spaces designed to inspire creativity and foster innovation.
              </p>
            </div>
          </div>

          {/* Right Side - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cultureValues.map((value) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section - Team Photo */}
        <div className="text-center">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/reception_JS.jpg"
              alt="Our team at work"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Join Our Growing Family</h3>
                <p className="text-lg md:text-xl">Where every day brings new opportunities to grow and excel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}