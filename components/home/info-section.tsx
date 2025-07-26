'use client'

import React from 'react';
import Image from 'next/image';

const InfoSection = () => {
  const achievements = [
    { number: "17,47,783", label: "People Supported" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  const features = [
    {
      title: "Compassionate Care",
      description: "Building strong and healthy communities",
      icon: "/icons/care.svg",
      color: "bg-orange-50",
      iconColor: "#F97316"
    },
    {
      title: "Excellence & Innovation",
      description: "Leading with integrity and innovation",
      icon: "/icons/excellence.svg",
      color: "bg-blue-50",
      iconColor: "#4284FF"
    }
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">
          {/* Left Side */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-10 h-full">
              {/* Profile Image */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/doctor-profile.jpg"
                  alt="Doctor Profile"
                  fill
                  className="object-cover"
                />
                {/* Verification Badge */}
                <div className="absolute right-4 bottom-4 w-12 h-12 bg-[#2ECC71] rounded-full flex items-center justify-center shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17L4 12"/>
                  </svg>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-[#1D1D42] text-xl sm:text-2xl font-bold mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`${feature.color} rounded-xl p-4 flex items-start gap-4 group hover:shadow-md transition-all duration-300`}
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <h3 className="text-[#1D1D42] font-semibold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <div className="h-full flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4284FF]/10 to-[#4284FF]/5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6">
                <div className="w-2 h-2 bg-[#4284FF] rounded-full animate-pulse"></div>
                <span className="text-[#4284FF] text-sm font-medium">Our Mission</span>
              </div>

              <h2 className="text-[#1D1D42] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Our Commitment to
                <span className="relative block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">
                    Care and Community
                  </span>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-[#4284FF]/10 rounded-full -z-0"></div>
                </span>
              </h2>

              <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                Our mission: excellence, compassion, innovation;
                empowering lives, building resilient communities.
                We strive to provide the highest quality care while
                maintaining our commitment to community health and wellbeing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-[#4284FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-[#2563EB] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 relative overflow-hidden">
                  <span className="relative z-10">Join Our Mission</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4284FF] to-[#2563EB] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                <button className="group text-[#4284FF] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium border-2 border-[#4284FF] hover:bg-[#4284FF] hover:text-white transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-[#4284FF] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection; 


