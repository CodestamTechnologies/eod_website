"use client";

import Image from "next/image";

export function LifeEodHeroSection() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-red-600 to-red-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <Image
            src="/images/contact-2.png"
            alt="Background decoration"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Shape 1 - Top Left */}
        <div className="absolute top-10 left-10 w-32 h-32">
          <Image
            src="/images/shape-1_o.png"
            alt="Decorative Shape"
            fill
            className="object-contain animate-pulse"
          />
        </div>
        
        {/* Shape 4 - Bottom Right */}
        <div className="absolute bottom-20 right-10 w-28 h-28">
          <Image
            src="/images/shape-4_orange.png"
            alt="Decorative Shape"
            fill
            className="object-contain animate-bounce"
          />
        </div>
        
        {/* Additional floating shapes */}
        <div className="absolute top-1/3 right-1/4 w-16 h-16">
          <Image
            src="/images/shape-1_o.png"
            alt="Decorative Shape"
            fill
            className="object-contain animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-6 relative z-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
              LIFE @EOD
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-lg drop-shadow-md">
              Discover what makes Event of Distinction a great place to work. Join our passionate team dedicated to creating meaningful events that bring communities together and make a positive impact across cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Join Our Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end relative z-20">
            <div className="relative w-full max-w-md lg:max-w-lg h-96 lg:h-[500px]">
              <Image
                src="/images/NPHO3703.JPG"
                alt="Life at EOD - Team working together"
                fill
                className="object-cover rounded-lg shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}