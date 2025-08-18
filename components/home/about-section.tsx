'use client'

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div className="flex flex-col md:flex-row items-center px-2">
            {/* Left Content - About Text */}
            <div className="md:w-4/5 p-8 md:p-12 lg:px-16">
              <h2 className="text-6xl text-primary mb-8">
                About <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">Us</span>
              </h2>
              
              <p className="text-secondary text-lg md:text-xl mb-6 leading-relaxed">
                Empire Blue Pvt. Ltd. Established July 2025 Based on Chhindwara Madhya Pradesh is a pioneering company in the bottled water industry recognized as the world&apos;s first manufacturer of non-expiry bacteria free water bottles.
              </p>
              
              <p className="text-secondary text-lg md:text-xl mb-6 leading-relaxed">
                Our mission is to revolutionize the way people consume water by ensuring purity, longevity, and health benefits in every drop.
              </p>
              
              {/* Call to Action Button */}
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg font-medium mt-6 flex items-center gap-2 transition-all duration-300">
                <span>Learn More</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Right Content - Building Image */}
            <div className="md:w-1/2 w-full h-[600px] md:h-[450px] relative shadow-xl border-8 border-white rounded-4xl flex items-center justify-center">
              {/* Modern Building/Office Representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src="/about.jpeg" 
                  alt="Empire Blue Headquarters" 
                  fill 
                  className="object-cover rounded-3xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
