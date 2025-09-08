"use client";

import Image from "next/image";

export function CompanyHeroSection() {
  return (
    <div className="relative w-full h-screen bg-red-600 overflow-hidden">
      {/* Main Background Element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 w-full h-full opacity-30">
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
        <div className="absolute top-10 left-10 w-20 h-20">
          <Image
            src="/images/shape-1_o.png"
            alt="Decorative Shape"
            fill
            className="object-contain"
          />
        </div>
        
        {/* Shape 4 - Bottom Right */}
        <div className="absolute bottom-20 right-10 w-28 h-28">
          <Image
            src="/images/shape-4_orange.png"
            alt="Decorative Shape"
            fill
            className="object-contain"
          />
        </div>
        
        {/* Additional floating shapes for more visual interest */}
        <div className="absolute top-1/3 right-1/3 w-12 h-12">
          <Image
            src="/images/shape-1_o.png"
            alt="Decorative Shape"
            fill
            className="object-contain animate-pulse"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-6 relative z-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
              OUR COMPANY
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-lg drop-shadow-md">
              India&apos;s youngest brand activation agency leading the industry with innovative brand experiences and award-winning campaigns. We are Events of Distinction.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end relative z-20">
            <div className="relative w-full max-w-md lg:max-w-lg h-80 lg:h-[400px]">
              <Image
                src="/EOD/main.jpeg"
                alt="Company Hero Image"
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