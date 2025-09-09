"use client";

import Image from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
}

export function ProjectCard({ name, description, image }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Project Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        {/* Project Name with border decoration */}
        <div className="relative mb-3">
          
          <h3 className="relative text-lg md:text-xl font-bold text-red-600 leading-tight z-10 px-2">
            {name}
          </h3>
        </div>
        
        {/* Project Description */}
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}