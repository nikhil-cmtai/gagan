'use client'

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#E6F3FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f3f9ff] rounded-3xl shadow-xl border-2 border-white overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Content - About Text */}
            <div className="md:w-3/5 p-8 md:p-12 lg:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Elephant'] text-primary mb-8">
                About Us
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
            <div className="md:w-2/5 relative min-h-[300px] md:min-h-0 bg-gradient-to-r from-primary/5 to-primary/20">
              {/* Modern Building/Office Representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <Image src="/about.jpeg" alt="Empire Blue Headquarters" fill className="object-cover" />
                </div>
              </div>
              
              {/* Blue tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
