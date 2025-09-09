import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function AboutUsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/EOD/main2.jpeg"
                alt="About us"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-100 rounded-full opacity-20"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Section Title */}
            <h2 className="text-lg font-bold text-red-600 uppercase tracking-wide">
              About us
            </h2>
            
            {/* Main Heading */}
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              WE ARE EVENTS OF DISTINCTION
            </h3>
            
            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed">
              We offer end to end experiential marketing solutions using an integrated approach involving: on-ground, events, 
              digital, P.R., print, mobile, outdoor, consumer generated media, word of mouth & so on. We offer duplication free, 
              relevant, scalable & sustainable brand experiences. In short, we are about buzz, experiences, engagement, eye-balls, 
              touch-points, media-multiplication, conversations & above all IDEAS!
            </p>
            
            {/* Learn More Button */}
            <div className="pt-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 px-6 py-3 text-base font-medium"
              >
                Learn More About us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}