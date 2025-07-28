'use client'

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div 
          className="bg-white rounded-[20px] sm:rounded-[40px] relative overflow-hidden"
          style={{
            boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.08)'
          }}
        >
          {/* Top Hero Content */}
          <div className="flex flex-col lg:flex-row items-center px-6 sm:px-12 lg:px-16 pt-8 sm:pt-12 text-center lg:text-left">
            {/* Left Content - 60% */}
            <div className="flex-1 w-full lg:max-w-[60%] z-10">
              <h1 className="text-[#1D1D42] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.15] mb-6 sm:mb-10">
                World&apos;s First<br />
                Non-Expiry<br />
                Water
              </h1>

              <div className="flex flex-col items-center lg:items-start gap-3">
                {/* Feature Pills */}
                <div 
                  className="bg-[#4284FF] text-white pl-4 sm:pl-6 pr-6 sm:pr-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-base w-fit"
                  style={{
                    boxShadow: '0px 4px 20px rgba(66, 132, 255, 0.15)'
                  }}
                >
                  • For Health Conscious People
                </div>

                <div 
                  className="bg-[#4284FF] text-white pl-4 sm:pl-6 pr-6 sm:pr-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-base w-fit"
                  style={{
                    boxShadow: '0px 4px 20px rgba(66, 132, 255, 0.15)'
                  }}
                >
                  • Safe & Reliable Hydration
                </div>

                <div 
                  className="bg-[#4284FF] text-white pl-4 sm:pl-6 pr-6 sm:pr-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-base w-fit"
                  style={{
                    boxShadow: '0px 4px 20px rgba(66, 132, 255, 0.15)'
                  }}
                >
                  • Innovative Technology
                </div>

                {/* Contact Us Button */}
                <button 
                  className="bg-[#4284FF] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-base mt-2 w-fit"
                  style={{
                    boxShadow: '0px 4px 20px rgba(66, 132, 255, 0.15)'
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Content - Water Bottle Image - 40% */}
            <div className="flex-1 flex justify-center lg:justify-end items-end relative z-10 mt-8 lg:mt-0">
              <div className="relative w-[280px] sm:w-[340px] lg:w-[400px] aspect-[400/380]">
                <Image
                  src="/water-bottle.png"
                  alt="Empire Blue Water Bottle"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8 sm:py-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {/* Company Mission */}
              <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-xl sm:rounded-2xl">
                <h2 className="text-[#1D1D42] text-base sm:text-lg font-bold mb-3 sm:mb-4">Our Mission</h2>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed">
                    At Empire Blue Pvt. Ltd., we prioritize health, innovation, and sustainability.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed">
                    We are committed to setting new industry standards in water preservation.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed">
                    Our goal is to provide a safe, reliable and beneficial hydration solution for people worldwide.
                  </p>
                </div>
              </div>

              {/* Innovation */}
              <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-xl sm:rounded-2xl">
                <h2 className="text-[#1D1D42] text-base sm:text-lg font-bold mb-3 sm:mb-4">Our Innovation</h2>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed">
                    We&apos;ve developed the world&apos;s first non-expiry water formula, revolutionizing water storage and consumption.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed">
                    Our advanced technology ensures the water remains pure, fresh, and beneficial for your health, setting new 
                    standards in the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div 
            className="absolute bottom-0 left-0 right-0 w-full"
            style={{
              height: '12%',
              background: '#EEF1F6',
              borderTopLeftRadius: '100% 100%',
              borderTopRightRadius: '100% 100%',
              transform: 'scaleX(1.5)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
    