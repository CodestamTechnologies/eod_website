"use client";

import { Instagram, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/eventofdistinction",
    color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
    hoverColor: "group-hover:text-white"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/eventofdistinction",
    color: "hover:bg-blue-600",
    hoverColor: "group-hover:text-white"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/eventofdistinction",
    color: "hover:bg-black",
    hoverColor: "group-hover:text-white"
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@eventofdistinction",
    color: "hover:bg-red-600",
    hoverColor: "group-hover:text-white"
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/eventofdistinction",
    color: "hover:bg-blue-500",
    hoverColor: "group-hover:text-white"
  }
];

export function SocialSidebar() {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative w-12 h-12 bg-white border-2 border-gray-200 rounded-full 
                flex items-center justify-center shadow-lg transition-all duration-300 
                hover:scale-110 hover:shadow-xl ${social.color} hover:border-transparent
                animate-bounce
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '2s',
                animationIterationCount: 'infinite'
              }}
            >
              <Icon 
                className={`w-5 h-5 text-gray-600 transition-colors duration-300 ${social.hoverColor}`} 
              />
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {social.name}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
              </div>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
            </a>
          );
        })}
      </div>
      
      {/* Connecting Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-red-400 to-red-200 transform -translate-x-1/2 -z-10"></div>
    </div>
  );
}