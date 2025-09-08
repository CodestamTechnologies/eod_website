import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Durgesh Sethi",
    designation: "CEO",
    image: "/images/DURGESH SETHI.jpg"
  },
  {
    id: 2,
    name: "Ajit Grover",
    designation: "CTO",
    image: "/images/AJIT GROVER.png"
  },
  {
    id: 3,
    name: "Arvind Khana",
    designation: "CMO",
    image: "/images/ARVIND KHANA.jpg"
  },
  {
    id: 4,
    name: "Binoy Mathew",
    designation: "COO",
    image: "/images/binoy mathew.jpg"
  }
];

export function TeamSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xl text-red-600 mb-4 font-bold">
            Meet our team
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Experience Team Members
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              {/* Member Image */}
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="256px"
                />
              </div>
              
              {/* Member Info */}
              <div className="space-y-2">
                {/* Name */}
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                  {member.name}
                </h3>
                
                {/* Designation */}
                <p className="text-sm text-gray-500 italic font-light">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}