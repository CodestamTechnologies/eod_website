"use client";

import Image from "next/image";

export function ContactHeroSection() {
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
        <div className="flex items-center justify-center h-full">
          {/* Centered Text Content */}
          <div className="text-white text-center space-y-6 relative z-20 max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
              CONTACT US
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed drop-shadow-md">
              Ready to create memorable brand experiences? Get in touch with India&apos;s youngest brand activation agency and let&apos;s discuss how we can bring your brand vision to life with innovative activations and award-winning campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}