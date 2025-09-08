"use client";

import Image from "next/image";

const clients = [
  { name: "Coca-Cola", logo: "/images/clients/coca-cola.png" },
  { name: "PepsiCo", logo: "/images/clients/pepsi.png" },
  { name: "Unilever", logo: "/images/clients/unilever.png" },
  { name: "Procter & Gamble", logo: "/images/clients/pg.png" },
  { name: "Nestlé", logo: "/images/clients/nestle.png" },
  { name: "Johnson & Johnson", logo: "/images/clients/jnj.png" },
  { name: "L'Oréal", logo: "/images/clients/loreal.png" },
  { name: "Samsung", logo: "/images/clients/samsung.png" },
  { name: "Apple", logo: "/images/clients/apple.png" },
  { name: "Microsoft", logo: "/images/clients/microsoft.png" },
  { name: "Google", logo: "/images/clients/google.png" },
  { name: "Amazon", logo: "/images/clients/amazon.png" },
  { name: "Nike", logo: "/images/clients/nike.png" },
  { name: "Adidas", logo: "/images/clients/adidas.png" },
  { name: "McDonald's", logo: "/images/clients/mcdonalds.png" },
  { name: "KFC", logo: "/images/clients/kfc.png" },
  { name: "Starbucks", logo: "/images/clients/starbucks.png" },
  { name: "Toyota", logo: "/images/clients/toyota.png" },
  { name: "BMW", logo: "/images/clients/bmw.png" },
  { name: "Mercedes-Benz", logo: "/images/clients/mercedes.png" },
  { name: "HDFC Bank", logo: "/images/clients/hdfc.png" },
  { name: "ICICI Bank", logo: "/images/clients/icici.png" },
  { name: "State Bank of India", logo: "/images/clients/sbi.png" },
  { name: "Reliance Industries", logo: "/images/clients/reliance.png" },
  { name: "Tata Group", logo: "/images/clients/tata.png" },
  { name: "Infosys", logo: "/images/clients/infosys.png" },
  { name: "TCS", logo: "/images/clients/tcs.png" },
  { name: "Wipro", logo: "/images/clients/wipro.png" },
  { name: "Airtel", logo: "/images/clients/airtel.png" },
  { name: "Vodafone", logo: "/images/clients/vodafone.png" },
  { name: "Jio", logo: "/images/clients/jio.png" },
  { name: "Flipkart", logo: "/images/clients/flipkart.png" },
  { name: "Paytm", logo: "/images/clients/paytm.png" },
  { name: "Zomato", logo: "/images/clients/zomato.png" },
  { name: "Swiggy", logo: "/images/clients/swiggy.png" },
  { name: "Ola", logo: "/images/clients/ola.png" },
  { name: "Uber", logo: "/images/clients/uber.png" },
  { name: "MakeMyTrip", logo: "/images/clients/makemytrip.png" },
  { name: "BookMyShow", logo: "/images/clients/bookmyshow.png" },
  { name: "Myntra", logo: "/images/clients/myntra.png" }
];

export function ClientsGridSection() {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
            Our Partners
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Trusted by Leading Brands
          </h3>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 group hover:border-red-200"
            >
              <div className="text-center space-y-4">
                {/* Client Logo */}
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    sizes="64px"
                  />
                </div>
                
                {/* Client Name */}
                <h4 className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  {client.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are proud to have worked with these industry leaders and many more, delivering innovative marketing solutions 
            that drive growth and create lasting impact. Our diverse client portfolio spans across various industries including 
            technology, FMCG, automotive, banking, telecommunications, and e-commerce.
          </p>
        </div>
      </div>
    </div>
  );
}