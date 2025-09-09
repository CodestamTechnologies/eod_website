"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "/EOD/ADI01022.JPG",
    quote: "EOD has been instrumental in my professional growth. The learning opportunities and supportive environment have helped me advance my career beyond my expectations."
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    image: "/EOD/main.jpeg",
    quote: "The work-life balance here is exceptional. I can pursue my passion for creativity while maintaining a healthy personal life. It's the best of both worlds."
  },
  {
    name: "Priya Sharma",
    role: "Marketing Specialist",
    image: "/EOD/main3.jpeg",
    quote: "What I love most about EOD is the collaborative culture. Every idea is valued, and there's always someone willing to help you succeed."
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    image: "/EOD/main.jpeg",
    quote: "The work-life balance here is exceptional. I can pursue my passion for creativity while maintaining a healthy personal life. It's the best of both worlds."
  },
  {
    name: "Priya Sharma",
    role: "Marketing Specialist",
    image: "/EOD/main3.jpeg",
    quote: "What I love most about EOD is the collaborative culture. Every idea is valued, and there's always someone willing to help you succeed."
  }
];

export function BenefitsSection() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            WHY PEOPLE TRUST US
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself. With years of experience and hundreds of successful campaigns, we have established ourselves as India&apos;s most trusted brand activation agency.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">PROJECTS</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">CLIENTS</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">8+</div>
            <div className="text-gray-600 font-medium">YEARS OF EXPERIENCE</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">5</div>
            <div className="text-gray-600 font-medium">OFFICES</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
            <div className="text-lg md:text-xl font-bold text-red-600 mb-2">AVAILABLE</div>
            <div className="text-gray-600 font-medium">PAN INDIA</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">20+</div>
            <div className="text-gray-600 font-medium">AWARDS</div>
          </div>
        </div>

        <section className="p-8 mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Testimonials
          </h3>

          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 mb-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col  border border-red-500">
                    {/* Profile */}
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 italic leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls */}
            <CarouselPrevious className="left-0 -translate-x-16 hidden md:flex" />
            <CarouselNext className="right-0 translate-x-16 hidden md:flex" />
          </Carousel>
        </section>
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join India&apos;s youngest brand activation agency where innovation meets opportunity. Be part of a dynamic team that creates award-winning campaigns and memorable brand experiences that shape the future of marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Browse Careers
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-2">Have questions about working with us?</p>
          <p className="text-gray-900 font-medium">
            Email us at <a href="mailto:careers@eventofdistinction.com" className="text-red-600 hover:underline">careers@eventofdistinction.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}