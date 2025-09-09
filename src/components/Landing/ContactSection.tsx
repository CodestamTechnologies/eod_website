import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

export function ContactSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading with hollow text */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Have Any Project{" "}
              <span 
                style={{ WebkitTextStroke: '2px #1f2937', color: 'transparent' }}
              >
                on
              </span>{" "}
              Mind?{" "}
              <span 
                style={{ WebkitTextStroke: '2px #1f2937', color: 'transparent' }}
              >
                Contact
              </span>{" "}
              Us
            </h2>
            
            {/* Email Section */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Mail className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-700 mb-1">Email</p>
                <a 
                  href="mailto:info@jagransolutions.com" 
                  className="text-xl text-gray-900 hover:text-red-500 transition-colors duration-300"
                >
                  info@eventofdistinction.com
                </a>
              </div>
            </div>
            
            {/* Send Message Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send us a message
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/EOD/main4.jpeg"
                alt="Contact us"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-100 rounded-full opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-100 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}