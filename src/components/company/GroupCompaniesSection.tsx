"use client";

import Image from "next/image";

export function GroupCompaniesSection() {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title with background border */}
        <div className="relative mb-12 inline-block">
          
          <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 leading-tight z-10 px-4 py-2">
            Together We Grow
          </h2>
        </div>
        
        {/* Group Companies Image */}
        <div className="relative w-full max-w-4xl mx-auto h-96 lg:h-[500px]">
          <Image
            src="/EOD/ADI00545.JPG"
            alt="Group Companies"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </div>
    </div>
  );
}