'use client'

import React from 'react';
import Image from 'next/image';

const InfoSection = () => {
  return (
    <section className="py-16 bg-[#E6F3FF] relative z-10 -mt-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f3f9ff] rounded-3xl shadow-xl p-8 sm:p-12 border-2 border-white relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Column */}
            <div className="w-full">
              <h3 className="text-2xl md:text-4xl font-['Elephant'] text-primary mb-6">
                Current Situation
              </h3>
              <p className="text-secondary text-base mb-4 leading-relaxed">
                Approximately 2.2 billion people do not have access to safe drinking water and 3.5 billion people do not have access to clean drinking water.
              </p>
              <p className="text-secondary text-base mb-4 leading-relaxed">
                This problem is increasing due to the rapidly increasing population.
              </p>
              <p className="text-secondary text-base mb-4 leading-relaxed">
                Poor water management has further aggravated the crisis.
              </p>
              <p className="text-secondary text-base leading-relaxed">
                The top countries facing severe water crisis include Lebanon, Pakistan, Afghanistan, Syria.
              </p>
            </div>
            
            {/* Right Column */}
            <div className="w-full text-right">
              <h3 className="text-2xl md:text-4xl font-['Elephant'] text-primary mb-6">
                Health Impact of<br />contaminated water
              </h3>
              <p className="text-secondary text-base mb-4 leading-relaxed">
                Every 33 seconds a person dies from heart disease across the worldwide and around 26,300 people die from cancer every day.
              </p>
              <p className="text-secondary text-base leading-relaxed">
                Contaminated water releases harmful bacteria and micro plastics which is lead to health problems like cancer and also cause high blood pressure and heart problems.
              </p>
            </div>
          </div>
          
          {/* Water Droplet - Centered in the middle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-[180px] h-[180px] md:w-[260px] md:h-[260px]">
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


