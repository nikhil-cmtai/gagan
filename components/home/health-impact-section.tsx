'use client'

import React from 'react';
import Image from 'next/image';

const HealthImpactSection = () => {
  const impacts = [
    {
      title: "Global Water Crisis",
      description: "2.4 billion people lack access to safe drinking water",
      icon: "/icons/global.svg",
      color: "bg-red-50",
      iconColor: "#FF4D6B",
      stat: "2.4B+",
      position: { top: '10%', right: '15%' },
      rotation: "rotate-[0deg]"
    },
    {
      title: "Health Risks",
      description: "Every 33 seconds, someone faces water-related health issues",
      icon: "/icons/health.svg",
      color: "bg-blue-50",
      iconColor: "#4284FF",
      stat: "33s",
      position: { bottom: '10%', right: '15%' },
      rotation: "rotate-[72deg]"
    },
    {
      title: "Daily Impact",
      description: "26,300 people affected daily by contaminated water",
      icon: "/icons/impact.svg",
      color: "bg-green-50",
      iconColor: "#2ECC71",
      stat: "26.3K",
      position: { bottom: '10%', left: '15%' },
      rotation: "rotate-[144deg]"
    },
    {
      title: "Population Risk",
      description: "3.5 billion people lack access to clean water",
      icon: "/icons/population.svg",
      color: "bg-purple-50",
      iconColor: "#9333EA",
      stat: "3.5B",
      position: { top: '50%', left: '5%', transform: 'translateY(-50%)' },
      rotation: "rotate-[216deg]"
    },
    {
      title: "Crisis Growth",
      description: "Rapidly increasing due to population growth",
      icon: "/icons/growth.svg",
      color: "bg-orange-50",
      iconColor: "#F97316",
      stat: "↗️",
      position: { top: '10%', left: '15%' },
      rotation: "rotate-[288deg]"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF4D6B]/10 to-[#FF4D6B]/5 px-3 sm:px-4 py-2 rounded-full mb-4">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FF4D6B] rounded-full animate-pulse"></div>
            <span className="text-[#FF4D6B] text-xs sm:text-sm font-medium">Health Alert</span>
          </div>
          
          <h2 className="text-[#1D1D42] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Impact of
            <span className="relative mx-2">
              <span className="relative z-10 bg-gradient-to-r from-[#FF4D6B] to-[#4284FF] text-transparent bg-clip-text">Contaminated</span>
              <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#FF4D6B]/10 rounded-full -z-0"></div>
            </span>
            Water
          </h2>
        </div>

        {/* Mobile Layout (< 1024px) */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {impacts.map((impact, index) => (
              <div 
                key={index}
                className={`${impact.color} rounded-xl p-4 sm:p-6 group hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={impact.icon}
                      alt={impact.title}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <div className="text-xl font-bold" style={{ color: impact.iconColor }}>
                        {impact.stat}
                      </div>
                      <div className="h-px w-6 bg-gradient-to-r from-current to-transparent opacity-30"></div>
                    </div>
                    <h3 className="text-[#1D1D42] text-sm font-semibold mb-1">
                      {impact.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Circular Layout (≥ 1024px) */}
        <div className="hidden lg:block">
          <div className="relative mx-auto" style={{ width: '1000px', height: '700px' }}>
            {/* Center Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full shadow-lg flex items-center justify-center z-20">
              <div className="text-center">
                <div className="text-[#FF4D6B] text-2xl font-semibold mb-1">Water</div>
                <div className="text-[#1D1D42] text-lg">Impact</div>
              </div>
            </div>

            {/* Impact Cards */}
            {impacts.map((impact, index) => (
              <div
                key={index}
                className={`absolute ${Object.entries(impact.position).map(([key, value]) => `${key}-[${value}]`).join(' ')} w-[280px] transition-all duration-500 hover:scale-105`}
              >
                <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] group hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${impact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Image
                        src={impact.icon}
                        alt={impact.title}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <div className="text-xl font-bold" style={{ color: impact.iconColor }}>
                          {impact.stat}
                        </div>
                        <div className="h-px w-8 bg-gradient-to-r from-current to-transparent opacity-30"></div>
                      </div>
                      <h3 className="text-[#1D1D42] text-base font-medium mb-1">
                        {impact.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {impact.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Animated Circles */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] animate-spin-slow">
              <div className="absolute inset-0 border border-dashed rounded-full" style={{ borderColor: '#FF4D6B', opacity: 0.1 }}></div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-spin-slower">
              <div className="absolute inset-0 border border-dashed rounded-full" style={{ borderColor: '#4284FF', opacity: 0.1 }}></div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-spin-slowest">
              <div className="absolute inset-0 border border-dashed rounded-full" style={{ borderColor: '#2ECC71', opacity: 0.1 }}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes spin-slowest {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 25s linear infinite;
        }
        .animate-spin-slowest {
          animation: spin-slowest 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HealthImpactSection;