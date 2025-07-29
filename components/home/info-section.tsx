'use client'

import React from 'react';
import Image from 'next/image';

const InfoSection = () => {
  return (
    <section className="py-10 sm:py-16 bg-[#E6F3FF] relative z-10 -mt-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f3f9ff] rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 border-2 border-white relative">
          {/* Water Droplet - Above content on mobile, centered in the middle on desktop */}
          <div className="relative w-full flex justify-center mb-8 md:hidden">
            <div className="relative w-[120px] h-[120px]">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse"></div>
              <Image
                src="/water-droplet.png"
                alt="Water Droplet"
                fill
                className="object-contain animate-float"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start relative">
            {/* Left Column */}
            <div className="w-full">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-['Elephant'] text-primary mb-4 sm:mb-6 text-center md:text-left">
                Current Situation
              </h3>
              <div className="space-y-3">
                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  Approximately 2.2 billion people do not have access to safe drinking water and 3.5 billion people do not have access to clean drinking water.
                </p>
                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  This problem is increasing due to the rapidly increasing population.
                </p>
                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  Poor water management has further aggravated the crisis.
                </p>
                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  The top countries facing severe water crisis include Lebanon, Pakistan, Afghanistan, Syria.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="w-full">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-['Elephant'] text-primary mb-4 sm:mb-6 text-center md:text-right">
                Health Impact of<br className="hidden sm:block" />contaminated water
              </h3>
              <div className="space-y-3">
                <p className="text-secondary text-sm sm:text-base leading-relaxed text-center md:text-right">
                  Every 33 seconds a person dies from heart disease across the worldwide and around 26,300 people die from cancer every day.
                </p>
                <p className="text-secondary text-sm sm:text-base leading-relaxed text-center md:text-right">
                  Contaminated water releases harmful bacteria and micro plastics which is lead to health problems like cancer and also cause high blood pressure and heart problems.
                </p>
              </div>
            </div>
          </div>
          
          {/* Water Droplet - Hidden on mobile, centered in the middle on desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-[180px] h-[180px] lg:w-[220px] lg:h-[220px]">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse"></div>
              <Image
                src="/water-droplet.png"
                alt="Water Droplet"
                fill
                className="object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection; 


