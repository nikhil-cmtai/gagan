'use client'

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-start py-4 sm:py-8 lg:py-12 overflow-hidden">

      <div className="mx-auto w-full relative z-5">
        {/* Main Card with Stats */}
        <div className="max-w-6xl mx-auto relative">
          {/* Main White Card */}
          <div
            className="rounded-[20px] sm:rounded-[40px] relative overflow-hidden z-5 shadow-[0_0_30px_0_rgba(0,84,231,0.15)] mt-2 sm:mt-6 lg:mt-8"
          >

            {/* Hero Content */}
            <div className="flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 pt-4 sm:pt-8 lg:pt-12 pb-8 sm:pb-16 lg:pb-24 text-center lg:text-left bg-[#E4E9ED]">
              {/* Left Content - Water Bottle Image - 40% */}
              <div className="flex-1 flex justify-center lg:justify-start items-center relative z-10 mb-6 lg:mb-0 order-1">
                <div className="relative w-[280px] sm:w-[350px] lg:w-[500px] aspect-[400/380]">
                  <Image
                    src="/can1.png"
                    alt="Empire Blue Can"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Right Content - 60% */}
              <div className="flex-1 w-full lg:max-w-[60%] z-10 mb-4 lg:mb-0 order-2">
                {/* Logo positioned better */}
                <div className="flex justify-center lg:justify-start mb-3 sm:mb-4 lg:mb-6">
                  <div className="relative w-[240px] sm:w-[280px] lg:w-[320px] h-[60px] sm:h-[70px] lg:h-[90px]">
                    <Image
                      src="/image.png"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[''] font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">
                  <span className="text-secondary">World&apos;s</span>{' '}
                  <span className="bg-gradient-to-r from-[#0054E7] via-[#3378FF] to-[#0066FF] text-transparent bg-clip-text">First Non-Expiry</span>{' '}
                  <span className="text-secondary">Water</span>
                </h1>

                <p className="text-secondary text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Empire Blue Pvt. Ltd. We prioritize health, innovation, and sustainability we are committed to seating new industry standards and providing a safe, reliable and beneficial hydration solution for people worldwide.
                </p>

                <div className="flex flex-col items-center lg:items-start gap-2">
                  {/* Contact Us Button */}
                  <button
                    className="bg-primary hover:bg-primary-dark transition-colors text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold mt-2 sm:mt-4 lg:mt-6 w-fit flex items-center gap-2"
                    style={{
                      boxShadow: '0px 6px 24px rgba(0, 84, 231, 0.25)'
                    }}
                  >
                    <span>Contact Us</span>
                    <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Wave Section - Moved higher up */}
        <div className="absolute -bottom-8 left-0 right-0 w-full z-25">
          <svg
            className="w-full h-[120px] sm:h-[140px]"
            viewBox="0 0 1440 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* White border that follows the curve */}
            <path
              d="M0,0 
            C240,250 480,350 720,350 
            C960,350 1200,250 1440,0"
              stroke="#fff"
              strokeWidth="14"
              fill="none"
            />
            <path
              d="M0,12 
            C240,250 480,350 720,350 
            C960,350 1200,250 1440,12 
            L1440,500 L0,500 Z"
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
