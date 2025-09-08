"use client";

import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const cities = [
  "New Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad"
];

const services = [
  "Brand Activation",
  "Rural Marketing",
  "Online/Offline Campaigning",
  "Shop/Retail Marketing",
  "Events / Conferences / Exhibitions",
  "Branding"
];

export function ContactInfoSection() {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* First Section - Contact Info and Office Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Get in Touch */}
            <h2 className="text-2xl md:text-3xl font-bold text-red-600">
              Get in Touch
            </h2>
            
            {/* Have Any Project on Mind */}
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Have Any Project on Mind?
              </h3>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Work Together
              </h3>
            </div>
            
            {/* Location Block */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              {/* Location Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
                <h4 className="text-xl font-semibold text-gray-900">Location</h4>
              </div>
              
              {/* Know about more locations */}
              <p className="text-gray-600 mb-4">
                Know about more locations
              </p>
              
              {/* City Dropdown */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city.toLowerCase().replace(' ', '-')}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Right Side - Office Image */}
          <div className="relative w-full h-80 lg:h-96">
            <Image
              src="/EOD/main2.jpeg"
              alt="Office Image"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        
        {/* Email Section - Horizontal Layout */}
        <div className="bg-red-600 p-8 rounded-lg">
          <div className="flex items-center justify-center gap-4 text-white flex-wrap">
            <Mail className="w-8 h-8 text-white flex-shrink-0" />
            <span className="text-xl font-semibold">Email Address</span>
            <span className="text-lg">•</span>
            <a 
              href="mailto:info@jagransolutions.com"
              className="text-lg hover:text-red-100 transition-colors duration-300"
            >
              info@eventofdistinction.com
            </a>
            <span className="text-lg">•</span>
            <span className="text-sm text-red-100">
              Events of Distinction | India&apos;s Youngest Brand Activation Agency | Available Pan India
            </span>
          </div>
        </div>

        {/* Head Office Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Head Office</h3>
          
          {/* Google Map */}
          <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.4567890123456!2d85.3239605!3d23.3440997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5b7c9d%3A0x6be5b2b4e9c5d8a7!2sLalpur%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Head Office Location - Lalpur, Ranchi"
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-50 p-12 rounded-lg">
          {/* Form Header */}
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl text-red-600 mb-6 font-bold">
              Message us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Get Any Consultations? Contact With Us
            </h2>
          </div>

          {/* Contact Form */}
          <form className="space-y-8 max-w-4xl mx-auto">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-12 text-base"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Your Company Name"
                  className="w-full h-12 text-base"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Designation"
                  className="w-full h-12 text-base"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-12 text-base"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone No"
                  className="w-full h-12 text-base"
                />
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-full h-12 text-base">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message Box */}
            <div>
              <Textarea
                placeholder="Your Message"
                className="w-full min-h-40 text-base p-4"
                rows={8}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button 
                type="submit" 
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg font-semibold rounded-lg"
              >
                Send Message
              </Button>
              <p className="text-xs text-gray-500 mt-6">
                All fields are required to submit the form.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}