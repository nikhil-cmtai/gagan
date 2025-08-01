'use client'

import Image from 'next/image';

export default function CompanySection() {
  const features = [
    {
      title: "Revolutionary Technology",
      description: "Groundbreaking invention that eliminates the expiration date on bottled water",
      icon: "/icons/tech.svg",
      color: "bg-blue-50",
      iconColor: "#4284FF",
      gradient: "from-blue-50/50"
    },
    {
      title: "Safe & Pure",
      description: "Ensuring lifelong freshness and health through advanced purification",
      icon: "/icons/pure.svg",
      color: "bg-green-50",
      iconColor: "#2ECC71",
      gradient: "from-green-50/50"
    },
    {
      title: "Sustainable Solution",
      description: "Eco-friendly approach to water preservation and distribution",
      icon: "/icons/eco.svg",
      color: "bg-purple-50",
      iconColor: "#9333EA",
      gradient: "from-purple-50/50"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 mb-16 lg:mb-32">
          {/* Left Content */}
          <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4284FF]/10 to-[#4284FF]/5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-[#4284FF] rounded-full animate-pulse"></div>
              <span className="text-[#4284FF] text-sm font-medium">Water Innovation</span>
            </div>
            
            <h2 className="text-[#1D1D42] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8">
              Revolutionizing
              <span className="relative mx-2 sm:mx-3">
                <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">Water</span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-[#4284FF]/10 rounded-full -z-0"></div>
              </span>
              Technology
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We&apos;re pioneering the future of water technology with our groundbreaking 
              innovation that eliminates expiration dates from bottled water, ensuring 
              pure and safe drinking water for generations to come.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <button className="w-full sm:w-auto group bg-[#4284FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-[#2563EB] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 relative overflow-hidden">
                <span className="relative z-10">Explore Technology</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4284FF] to-[#2563EB] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button className="w-full sm:w-auto group text-[#4284FF] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium border-2 border-[#4284FF] hover:bg-[#4284FF] hover:text-white transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-[#4284FF] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-[400px] lg:w-[550px] aspect-square lg:h-[550px] flex items-center justify-center mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4284FF]/10 via-[#2ECC71]/10 to-transparent rounded-[40px] transform rotate-6 animate-pulse"></div>
            <div className="absolute inset-4 bg-white/10 rounded-[40px] shadow-lg backdrop-blur-xl">
              <div className="relative w-full h-full p-8 sm:p-12">
                <Image 
                  src="/water-drop.png" 
                  alt="Water drop logo" 
                  fill
                  className="object-contain p-6 sm:p-8 animate-float"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 lg:mb-32">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <h3 className="text-[#1D1D42] text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D42] to-[#2C2C66] rounded-2xl sm:rounded-[32px]"></div>
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
          <div className="relative bg-gradient-to-r from-[#1D1D42] to-[#2C2C66] rounded-2xl sm:rounded-[32px] p-8 sm:p-12 lg:p-16 text-white">
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#4284FF]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-[#2ECC71]/20 rounded-full blur-xl"></div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
                Provide non-expiry water
                <span className="text-[#4284FF]"> for everyone</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed text-center lg:text-left">
                We are committed to producing safe drinking water. Our innovative substance, 
                when added to water, ensures lifelong freshness and health benefits, making 
                clean water accessible to all.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="group bg-white text-[#1D1D42] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-[#4284FF] hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#4284FF]/20 inline-flex items-center gap-2 sm:gap-3">
                  Discover Purification Technologies
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 