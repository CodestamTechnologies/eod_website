"use client";

import Image from "next/image";
import { 
  GraduationCap, 
  Heart, 
  DollarSign, 
  Calendar, 
  Shield, 
  Zap,
  Users,
  Award
} from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous learning opportunities, workshops, certifications, and skill development programs.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness programs, and mental health support.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Market-competitive salaries, performance bonuses, and annual increments.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Calendar,
    title: "Flexible Time Off",
    description: "Generous vacation policy, sick leave, and flexible working arrangements.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Shield,
    title: "Job Security",
    description: "Stable employment with growth opportunities and long-term career planning.",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: Zap,
    title: "Innovation Time",
    description: "Dedicated time for creative projects and innovation initiatives.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Cross-functional projects and collaborative work environment.",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: Award,
    title: "Recognition Programs",
    description: "Employee of the month, achievement awards, and public recognition.",
    color: "bg-orange-100 text-orange-600"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "/images/352.jpg",
    quote: "EOD has been instrumental in my professional growth. The learning opportunities and supportive environment have helped me advance my career beyond my expectations."
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    image: "/images/NPHO3700.JPG",
    quote: "The work-life balance here is exceptional. I can pursue my passion for creativity while maintaining a healthy personal life. It's the best of both worlds."
  },
  {
    name: "Priya Sharma",
    role: "Marketing Specialist",
    image: "/images/DSC06316.JPG",
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
            Why Choose EOD?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer more than just a job – we provide a platform for growth, creativity, and personal fulfillment. 
            Here's what makes EOD an exceptional place to build your career.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-red-200"
              >
                <div className={`inline-flex p-3 rounded-full ${benefit.color} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            What Our Team Says
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
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
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join a team that values your growth, celebrates your achievements, and supports your dreams. 
            Your next career milestone awaits at Event of Distinction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Browse Careers
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-colors duration-300">
              Contact HR
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