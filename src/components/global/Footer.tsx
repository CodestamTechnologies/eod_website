import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerData = {
  eventsOfDistinction: [
    { title: "About Us", link: "about" },
    { title: "Projects", link: "projects" },
    { title: "Clients", link: "clients" },
    { title: "Life@EOD", link: "life-eod" }
  ],
  services: [
    "Brand Activation",
    "Rural Marketing",
    "Online/Offline Campaigning",
    "Shop/Retail Marketing",
    "Events / Conferences / Exhibitions",
    "Branding"
  ],
};

export function Footer() {
  return (
    <footer className="bg-red-600 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Logo */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start items-start pt-25">
            <div className="relative w-60 h-32 bg-white rounded-xl p-4">
              <Image
                src="/images/logo.png"
                alt="Events of Distinction Logo"
                fill
                className="object-contain"
                sizes="240px"
              />
            </div>
          </div>

          {/* Center Vertical Line */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="w-px h-64 bg-white opacity-30 hidden lg:block"></div>
          </div>

          {/* Right Side Content */}
          <div className="lg:col-span-8">
            {/* Header Text */}
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                India&apos;s Youngest Brand Activation Agency
              </h3>
              <div className="w-full h-px bg-white opacity-30"></div>
            </div>

            {/* Footer Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Events of Distinction */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Events of Distinction
                </h4>
                <ul className="space-y-3">
                  {footerData.eventsOfDistinction.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${item.link}`}
                        className="text-white hover:text-red-100 transition-colors duration-300 text-sm font-medium"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Services
                </h4>
                <ul className="space-y-3">
                  {footerData.services.map((service, index) => (
                    <li key={index}>
                      <Link
                        href='#'
                        className="text-white hover:text-red-100 transition-colors duration-300 text-sm font-medium"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>



              {/* Contact Us */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Contact Us
                </h4>

                {/* Email */}
                <div className="flex items-center space-x-3 text-white mb-2">
                  <Mail className="w-4 h-4 text-white" />
                  <a
                    href="mailto:info@eventofdistinction.com"
                    className="hover:text-red-100 transition-colors duration-300 text-sm font-medium"
                  >
                    info@eventofdistinction.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3 text-white">
                  <Phone className="w-4 h-4 text-white" />
                  <a
                    href="tel:+911234567890"
                    className="hover:text-red-100 transition-colors duration-300 text-sm font-medium"
                  >
                    +91 8340715376
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-white border-opacity-30">
          <div className="text-center text-white text-sm font-medium">
            <p>&copy; 2024 Events of Distinction. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}