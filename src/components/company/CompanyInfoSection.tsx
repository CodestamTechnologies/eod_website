"use client";

import Image from "next/image";

export function CompanyInfoSection() {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full h-70 lg:h-90">
                <Image
                  src="/images/logo.png"
                  alt="Our Company"
                  fill
                  className="object-contain"
                  sizes="(max-width: 400px) 90vw, 30vw"
                />
              </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Title with background border */}
            <div className="relative mb-6">
              {/* Background border image */}
              <div className="absolute -left-8 -top-6 w-48 h-24 z-0">
                <Image
                  src="/images/border-2.png"
                  alt="Border decoration"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 leading-tight z-10 px-4 py-2">
                Our Company
              </h2>
            </div>
            
            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Events of Distinction is India&apos;s youngest brand activation agency, leading the industry with innovative brand experiences and award-winning campaigns. We specialize in creating memorable brand activations that drive engagement and deliver measurable results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We offer end to end experiential marketing solutions using an integrated approach involving: on-ground, events, digital, P.R., print, mobile, outdoor, consumer generated media, word of mouth & so on.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We offer duplication free, relevant, scalable & sustainable brand experiences. In short, we are about buzz, experiences, engagement, eye-balls, touch-points, media-multiplication, conversations & above all IDEAS!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}