'use client'

import React from 'react';
import Image from 'next/image';

const InfoSection = () => {
  return (
    <section className="py-16 bg-[#E6F3FF] relative z-10 -mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f3f9ff] rounded-3xl shadow-xl p-6 sm:p-10 border-2 border-white relative">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:gap-32 items-start">
            {/* Left Column */}
            <div className="w-full relative z-20 mb-16 md:mb-0">
              <div>
                <h3 className="text-2xl md:text-3xl font-['Elephant'] text-primary mb-4">
                  Current Situation
                </h3>
                <p className="text-secondary text-sm sm:text-base mb-3 leading-relaxed">
                  Approximately 2.2 billion people do not have access to safe drinking water and 3.5 billion people do not have access to clean drinking water.
                </p>
                <p className="text-secondary text-sm sm:text-base mb-3 leading-relaxed">
                  This problem is increasing due to the rapidly increasing population.
                </p>
                <p className="text-secondary text-sm sm:text-base mb-3 leading-relaxed">
                  Poor water management has further aggravated the crisis.
                </p>
                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  The top countries facing severe water crisis include Lebanon, Pakistan, Afghanistan, Syria.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="w-full text-right relative z-20">
              <div>
                <h3 className="text-2xl md:text-3xl font-['Elephant'] text-primary mb-4">
                  Health Impact of<br />contaminated water
                </h3>
                <p className="text-secondary text-sm sm:text-base mb-3 leading-relaxed">
                  Every 33 seconds a person dies from heart disease across the worldwide and around 26,300 people die from cancer every day.
                </p>
                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  Contaminated water releases harmful bacteria and micro plastics which is lead to health problems like cancer and also cause high blood pressure and heart problems.
                </p>
              </div>
            </div>
          </div>
          
          {/* Water Droplet - Centered in the middle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-60 hidden md:block">
            <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px]">
              <div className="absolute inset-0 bg-blue-400/10 rounded-full animate-pulse"></div>
              <Image
                src="/water-droplet.png"
                alt="Water Droplet"
                fill
                className="object-contain animate-float opacity-70"
              />
            </div>
          </div>
          
          {/* Mobile Water Droplet - Shown between columns */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 bottom-[45%] z-0 pointer-events-none opacity-60">
            <div className="relative w-[80px] h-[80px]">
              <div className="absolute inset-0 bg-blue-400/10 rounded-full animate-pulse"></div>
              <Image
                src="/water-droplet.png"
                alt="Water Droplet"
                fill
                className="object-contain animate-float opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection; 


