"use client";

import Image from "next/image";

interface ServiceBlockProps {
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

export function ServiceBlock({ title, description, image, imagePosition }: ServiceBlockProps) {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
          imagePosition === "right" ? "lg:grid-flow-col-dense" : ""
        }`}>
          {/* Image */}
          <div className={`${imagePosition === "right" ? "lg:col-start-2" : ""}`}>
            <div className="relative w-full h-80 lg:h-96">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`flex flex-col justify-start h-80 lg:h-96 ${imagePosition === "right" ? "lg:col-start-1" : ""}`}>
            {/* Title with background border */}
            <div className="relative mb-4">
              {/* Background border image */}
              <div className="absolute -left-8 -top-6 w-48 h-24 z-0">
                <Image
                  src="/images/border-2.png"
                  alt="Border decoration"
                  fill
                  className="object-contain opacity-100"
                  priority
                />
              </div>
              <h2 className="relative text-xl md:text-2xl lg:text-3xl font-bold text-red-600 leading-tight z-20 px-4 py-2">
                {title}
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}