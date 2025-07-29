'use client'

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-[120vh] flex items-start py-6 sm:py-12 relative overflow-hidden bg-[#E6F3FF]">
      {/* Background Wave */}
      <div
        className="absolute top-0 left-0 right-0 w-full h-[100%] bg-[#E6F3FF] z-0"
        style={{
          clipPath: 'ellipse(170% 100% at 50% 0%)',
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-5">
        {/* Main Card with Stats */}
        <div className="relative pb-[450px] sm:pb-[400px]">
          {/* Main White Card */}
          <div
            className="bg-[#f3f9ff] rounded-[20px] sm:rounded-[40px] relative overflow-hidden z-5 shadow-2xl mt-4 sm:mt-8"
            style={{
              boxShadow: '0px 10px 50px rgba(0, 84, 231, 0.15)'
            }}
          >

            {/* Hero Content */}
            <div className="flex flex-col-reverse lg:flex-row items-center px-6 sm:px-12 lg:px-16 pt-6 sm:pt-12 pb-16 sm:pb-24 text-center lg:text-right bg-[#f3f9ff]">
              {/* Left Content - Water Bottle Image - 40% */}
              <div className="flex-1 flex justify-center lg:justify-start items-center relative z-10 mb-8 lg:mb-0">
                <div className="relative w-[280px] sm:w-[360px] lg:w-[440px] aspect-[400/380]">
                  <Image
                    src="/can.png"
                    alt="Empire Blue Can"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Right Content - 60% */}
              <div className="flex-1 w-full lg:max-w-[60%] z-10 mb-6 lg:mb-0">
                <h1 className="text-5xl sm:text-6xl font-['Elephant'] font-bold mb-4 sm:mb-6">
                  <span className="text-secondary">World&apos;s</span>{' '}
                  <span className="bg-gradient-to-r from-[#0054E7] via-[#3378FF] to-[#0066FF] text-transparent bg-clip-text">First Non-Expiry</span>{' '}
                  <span className="text-secondary">Water</span>
                </h1>

                {/* Logo positioned better */}
                <div className="flex justify-center lg:justify-end mb-4 sm:mb-6">
                  <div className="relative w-[180px] sm:w-[220px] h-[50px] sm:h-[60px]">
                    <Image
                      src="/image.png"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center lg:items-end gap-2">
                  {/* Contact Us Button */}
                  <button
                    className="bg-primary hover:bg-primary-dark transition-colors text-white px-6 py-2 rounded-full text-base sm:text-lg font-semibold mt-2 sm:mt-6 w-fit flex items-center gap-2"
                    style={{
                      boxShadow: '0px 6px 24px rgba(0, 84, 231, 0.25)'
                    }}
                  >
                    <span>Contact Us</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Wave Section - Moved higher up */}
        <div className="absolute -bottom-12 left-0 right-0 w-full z-25 border-t-4 border-white">
          <svg
            className="w-full h-[400px]"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ transform: 'translateY(-50%)' }} /* Changed from -35% to -50% to move wave up */
          >
            <path
              d="M0,0 
            C240,50 480,100 720,100 
            C960,100 1200,50 1440,0 
            L1440,320 L0,320 Z"
              fill="#E6F3FF"
            />
          </svg>
        </div>

        {/* Statistics Cards - Adjusted position to match new wave position */}
        <div className="absolute bottom-[80px] sm:bottom-[60px] mx-auto left-0 right-0 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 justify-items-center w-full max-w-4xl">
              {/* Current Situation Card */}
              <div className="p-6 sm:p-8 rounded-xl mt-0 transform transition-all duration-300 max-w-md w-full border-2 border-white bg-opacity-90">
                <h2 className="text-primary text-xl sm:text-2xl md:text-4xl font-['Elephant'] mb-3 sm:mb-5">Current Situation</h2>
                <div className="space-y-2 sm:space-y-4">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Approximately 2.4 billion people do not have access to safe drinking water
                    and 3.5 billion people do not have access to clean drinking water.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    This problem is increasing due to the rapidly increasing population.
                  </p>
                </div>
              </div>

              {/* Health Impact Card */}
              <div className="p-6 sm:p-8 rounded-xl mt-0 transform transition-all duration-300 max-w-md w-full border-2 border-white bg-opacity-90">
                <h2 className="text-primary text-xl sm:text-2xl md:text-4xl font-['Elephant'] mb-3 sm:mb-5">Health Impact</h2>
                <div className="space-y-2 sm:space-y-4">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Every 33 seconds a person dies from heart disease across the worldwide
                    and around 26,300 people die from today.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Contaminated water releases harmful bacteria and micro plastics which lead
                    to health problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
