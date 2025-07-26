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
                We Are<br />
                Concernend<br />
                About Water
              </h1>

              <div className="flex flex-col items-center lg:items-start gap-3">
                {/* Feature Pills */}
                <div 
                  className="bg-[#4284FF] text-white pl-4 sm:pl-6 pr-6 sm:pr-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-base w-fit"
                  style={{
                    boxShadow: '0px 4px 20px rgba(66, 132, 255, 0.15)'
                  }}
                >
                  • Non-expiry formula
                </div>

                <div 
                  className="bg-[#4284FF] text-white pl-4 sm:pl-6 pr-6 sm:pr-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-base w-fit"
                  style={{
                    boxShadow: '0px 4px 20px rgba(66, 132, 255, 0.15)'
                  }}
                >
                  • Bacteria-free technology
                </div>

                <div 
                  className="bg-[#4284FF] text-white pl-4 sm:pl-6 pr-6 sm:pr-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-base w-fit"
                  style={{
                    boxShadow: '0px 4px 20px rgba(66, 132, 255, 0.15)'
                  }}
                >
                  • Health benefits
                </div>

                {/* Get Started Button */}
                <button 
                  className="bg-[#4284FF] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-base mt-2 w-fit"
                  style={{
                    boxShadow: '0px 4px 20px rgba(66, 132, 255, 0.15)'
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Right Content - Doctor Image - 40% */}
            <div className="flex-1 flex justify-center lg:justify-end items-end relative z-10 mt-8 lg:mt-0">
              <div className="relative w-[280px] sm:w-[340px] lg:w-[400px] aspect-[400/380]">
                <Image
                  src="/doctor.png"
                  alt="Doctor illustration"
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
              {/* Current Situation */}
              <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-xl sm:rounded-2xl">
                <h2 className="text-[#1D1D42] text-base sm:text-lg font-bold mb-3 sm:mb-4">Current situation</h2>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed">
                    Approximately 2.4 billion people do not have access to safe drinking water 
                    and 3.5 billion people do not have access to clean drinking water.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed">
                    This problem is increasing due to the rapidly increasing population.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed">
                    Poor water management has further aggravated the crisis.
                  </p>
                </div>
              </div>

              {/* Health Impact */}
              <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-xl sm:rounded-2xl">
                <h2 className="text-[#1D1D42] text-base sm:text-lg font-bold mb-3 sm:mb-4">Health impact of contaminated water</h2>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed">
                    Every 33 seconds a person dies from heart disease across the worldwide 
                    and around 26,300 people die from today.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed">
                    Contaminated water releases harmful bacteria and micro plastics which lead 
                    to health problems like cancer, and also cause high blood pressure and heart 
                    problems.
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
    