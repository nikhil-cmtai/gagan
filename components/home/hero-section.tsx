'use client'

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className=" h-screen flex items-start py-6 sm:py-12 relative overflow-hidden ">

      <div className="mx-auto w-full relative z-5">
        {/* Main Card with Stats */}
        <div className="max-w-6xl mx-auto relative">
          {/* Main White Card */}
          <div
            className="rounded-[20px] sm:rounded-[40px] relative overflow-hidden z-5 shadow-[0_0_30px_0_rgba(0,84,231,0.15)] mt-4 sm:mt-8"
          >

            {/* Hero Content */}
            <div className="flex flex-col lg:flex-row items-center px-6 sm:px-12 lg:px-16 pt-6 sm:pt-12 pb-16 sm:pb-24 text-center lg:text-left bg-[#ECF0F3]">
              {/* Left Content - Water Bottle Image - 40% */}
              <div className="flex-1 flex justify-center lg:justify-start items-center relative z-10 mb-8 lg:mb-0 order-1">
                <div className="relative w-[320px] sm:w-[400px] lg:w-[500px] aspect-[400/380]">
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
              <div className="flex-1 w-full lg:max-w-[60%] z-10 mb-6 lg:mb-0 order-2">
                {/* Logo positioned better */}
                <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                  <div className="relative w-[280px] sm:w-[320px] h-[70px] sm:h-[90px]">
                    <Image
                      src="/image.png"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl font-['Elephant'] font-bold mb-3 sm:mb-4">
                  <span className="text-secondary">World&apos;s</span>{' '}
                  <span className="bg-gradient-to-r from-[#0054E7] via-[#3378FF] to-[#0066FF] text-transparent bg-clip-text">First Non-Expiry</span>{' '}
                  <span className="text-secondary">Water</span>
                </h1>

                <p className="text-secondary text-base sm:text-lg mb-4 sm:mb-6 max-w-lg mx-auto lg:mx-0">
                  Empire Blue Pvt. Ltd. We prioritize health, innovation, and sustainability we are committed to seating new industry standards and providing a safe, reliable and beneficial hydration solution for people worldwide.
                </p>

                <div className="flex flex-col items-center lg:items-start gap-2">
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
        <div className="absolute -bottom-30 left-0 right-0 w-full z-25">
          <svg
            className="w-full h-[120px]"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ transform: 'translateY(-60%)' }}
          >
            <path
              d="M0,0 
            C240,100 480,150 720,150 
            C960,150 1200,100 1440,0 
            L1440,320 L0,320 Z"
              fill="#D7E0E7"
              filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
