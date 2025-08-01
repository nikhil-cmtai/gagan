'use client'

import React from 'react';
import Image from 'next/image';

const InfoSection = () => {
  return (
    <section className="py-21 relative z-10 -mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f3f9ff] rounded-3xl shadow-xl p-6 sm:p-10 border-2 border-white relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 xl:gap-32 items-center">
            {/* Left Column */}
            <div className="w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 text-center lg:text-left relative z-20 mb-8 lg:mb-0">
              <div>
                <h3 className="text-2xl md:text-3xl font-[''] text-primary mb-4">
                  Current Situation
                </h3>
                <p className="text-secondary text-md sm:text-lg mb-3 leading-relaxed">
                  Approximately 2.2 billion people do not have access to safe drinking water and 3.5 billion people do not have access to clean drinking water.
                </p>
                <p className="text-secondary text-md sm:text-lg mb-3 leading-relaxed">
                  This problem is increasing due to the rapidly increasing population.
                </p>
                <p className="text-secondary text-md sm:text-lg mb-3 leading-relaxed">
                  Poor water management has further aggravated the crisis.
                </p>
                <p className="text-secondary text-md sm:text-lg leading-relaxed">
                  The top countries facing severe water crisis include Lebanon, Pakistan, Afghanistan, Syria.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 text-center lg:text-right relative z-20">
              <div>
                <h3 className="text-2xl md:text-3xl font-[''] text-primary mb-4">
                  Health Impact of<br />contaminated water
                </h3>
                <p className="text-secondary text-md sm:text-lg mb-3 leading-relaxed">
                  Every 33 seconds a person dies from heart disease across the worldwide and around 26,300 people die from cancer every day.
                </p>
                <p className="text-secondary text-md sm:text-lg leading-relaxed">
                  Contaminated water releases harmful bacteria and micro plastics which is lead to health problems like cancer and also cause high blood pressure and heart problems.
                </p>
              </div>
            </div>
          </div>
          
          {/* Water Droplet - Centered between content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-70 hidden lg:block">
            <div className="relative w-[180px] h-[180px] xl:w-[240px] xl:h-[240px]">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse"></div>
              <Image
                src="/water-droplet.png"
                alt="Water Droplet"
                fill
                className="object-contain animate-float opacity-80"
              />
            </div>
          </div>
          
          {/* Mobile/Tablet Water Droplet - Shown between columns */}
          <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-70">
            <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse"></div>
              <Image
                src="/water-droplet.png"
                alt="Water Droplet"
                fill
                className="object-contain animate-float opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection; 


