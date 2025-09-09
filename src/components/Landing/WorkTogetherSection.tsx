import Image from "next/image";

export function WorkTogetherSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Small Heading */}
            <h2 className="text-lg md:text-xl font-medium text-white font-bold">
              Let&apos;s Work
            </h2>
            
            {/* Main Description with outlined words */}
            <p className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-bold">
              Let&apos;s work{" "}
              <span 
                style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
              >
                together
              </span>{" "}
              to{" "}
              <span 
                style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
              >
                create
              </span>{" "}
              memorable{" "}
              <span 
                style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
              >
                brand experiences
              </span>
            </p>
          </div>

          {/* Right Content - Layered Images */}
          <div className="relative">
            {/* Background Map Image */}
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/images/map.png"
                alt="Map background"
                fill
                className="object-cover"
                sizes="(max-width: 900px) 150vw, 100vw"
              />
            </div>
            
            {/* Overlay Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/352.jpg"
                alt="Overlay image"
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}