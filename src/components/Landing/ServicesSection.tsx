"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Zap, MapPin, Globe, ShoppingBag, Calendar, Palette } from "lucide-react";
import Image from "next/image";

const services = [
  { id: 1, title: "Brand Activation", icon: Zap },
  { id: 2, title: "Rural Marketing", icon: MapPin },
  { id: 3, title: "Online/Offline Campaigning", icon: Globe },
  { id: 4, title: "Shop/Retail Marketing", icon: ShoppingBag },
  { id: 5, title: "Events / Conferences / Exhibitions", icon: Calendar },
  { id: 6, title: "Branding", icon: Palette },
];

export function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}


        {/* Right Side Content */}
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold text-red-500 mb-6"
            data-aos="fade-left"
          >
            Services We Offer
          </h2>
          <ul className="space-y-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <li
                  key={service.id}
                  className="flex items-center gap-3 text-gray-700 text-lg md:text-xl"
                  data-aos="fade-right"
                  data-aos-delay={idx * 100}   // 200ms gap between each item
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-500">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="font-medium">{service.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div data-aos="fade-left" className="flex justify-center flex-row-reverse">
          <Image
            src="/images/logo.png" // replace with your image path
            alt="Services Illustration"
            width={500}
            height={500}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
