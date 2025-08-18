'use client'

import Image from 'next/image';

export default function InnovationSection() {

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
            
            <h2 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8">
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
          <div className="relative w-full max-w-[400px] lg:w-[550px] aspect-square lg:h-[450px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4284FF]/10 via-[#2ECC71]/10 to-transparent rounded-[40px] transform rotate-6 animate-pulse"></div>
            <div className="absolute inset-4 bg-white rounded-[40px] shadow-lg backdrop-blur-xl">
              <div className="relative w-full h-full p-8 sm:p-12">
                <Image 
                  src="/innovation.png" 
                  alt="Water drop logo" 
                  fill
                  className="object-cover p-6 sm:p-8 animate-float"
                />
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