import React from 'react';
import Image from 'next/image';

// Data for health benefits
const benefitsData = [
  {
    key: 'anthoxanthin',
    icon: '/capsule.png',
    heading: 'Anthoxanthin',
    subheading: 'Healthy Bone',
    subheadingGradient: true,
    description:
      'Antioxidant properties beneficial for cancer treatment and heart health. Improves blood flow and reduces oxidative stress.',
  },
  {
    key: 'chlorophyll',
    icon: '/leaf.png',
    heading: 'Chlorophyll',
    subheading: 'Healthy Lungs',
    subheadingGradient: false,
    description:
      'Strengthens the immune system and helps block cancer-causing chemicals. Aids in weight loss and lowers cholesterol levels.',
  },
  {
    key: 'lycopene',
    icon: '/heart.png',
    heading: 'Lycopene',
    subheading: 'Healthy Heart',
    subheadingGradient: false,
    description:
      'Powerful antioxidant that reduces oxidative damage and inflammation. Protects against various cancers and supports heart health.',
  },
  {
    key: 'carotenoids',
    icon: '/vitamin.png',
    heading: 'Carotenoids',
    subheading: 'Immunity Booster',
    subheadingGradient: false,
    description:
      'Essential for vitamin A production supporting immune health. Reduces inflammation and promotes eye health while aiding hair growth.',
  },
  {
    key: 'anthocyanin',
    icon: '/brain.png',
    heading: 'Anthocyanin',
    subheading: 'Healthy Brains',
    subheadingGradient: false,
    description:
      'Lowers blood pressure and reduces the risk of heart disease. Protects brain function and may slow cancer growth.',
  },
];

export const BenefitsSection = () => {
  return (
    <div className="max-w-full mx-auto py-12 px-8 relative mt-12">
      <div className="max-w-7xl mx-auto bg-[#E4E9ED] shadow-lg rounded-3xl py-16 md:py-24 p-6 ">

        {/* Full Width Wave Section - Now at the top */}
        <div className="absolute -top-8 left-0 right-0 w-full z-25">
          <svg
            className="w-full h-[140px] sm:h-[280px] transform scale-y-[-1] mt-12 sm:mt-0"
            viewBox="0 0 1440 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* White border that follows the curve */}
            <path
              d="M0,0 
      C320,320 1120,320 1440,0"
              stroke="#fff"
              strokeWidth="16"
              fill="none"
            />
            <path
              d="M0,0 
      C320,320 1120,320 1440,0 
      L1440,480 L0,480 Z"
              fill="#D7E0E7"
              filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))"
            />
          </svg>
        </div>

        {/* Heading and Subheading */}
        <div className="mb-12">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-primary mt-5">
            <span>Health </span>
            <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">
              Benefits
            </span>
          </h2>
          <p className="text-center mt-4 text-lg md:text-2xl font-semibold text-black bg-clip-text">
            Discover the key nutrients and their powerful effects on your health
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-0 md:mb-42">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            {/* Central Circle for Mobile */}
            <div className="flex justify-center mb-8">
              <div className="relative w-[350px] h-[350px]">
                {/* Ring using SVG for proper ring shape */}
                <svg className="w-full h-full" viewBox="0 0 350 350">
                  <defs>
                    <linearGradient id="ringGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#e2e8f0', stopOpacity: 1 }} />
                    </linearGradient>
                    <filter id="ringShadowMobile" x="-30%" y="-10%" width="160%" height="160%">
                      <feDropShadow dx="-2" dy="-2" stdDeviation="2" floodColor="rgba(0,0,0,0.07)" />
                      <feDropShadow dx="12" dy="18" stdDeviation="16" floodColor="rgba(0,0,0,0.22)" />
                    </filter>
                  </defs>
                  <path
                    d="M175 50 A125 125 0 0 1 300 175 A125 125 0 0 1 175 300 A125 125 0 0 1 50 175 A125 125 0 0 1 175 50 Z M175 90 A85 85 0 0 0 90 175 A85 85 0 0 0 175 260 A85 85 0 0 0 260 175 A85 85 0 0 0 175 90 Z"
                    fill="url(#ringGradientMobile)"
                    stroke="#d1d5db"
                    strokeWidth="1"
                    filter="url(#ringShadowMobile)"
                  />
                </svg>
                {/* Inner Circle with Lung Illustration */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30 md-w-48 md-h-48 h-30 md bg-white rounded-full shadow-[inset_4px_4px_12px_rgba(0,0,0,0.15),inset_-4px_-4px_12px_rgba(255,255,255,0.9),8px_8px_24px_rgba(0,0,0,0.2),-8px_-4px_24px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <div className="w-20 h-20">
                    <Image src="/lungs.png" alt="Lung Illustration" width={150} height={150} />
                  </div>
                </div>
                {/* Icons around the ring for mobile */}
                <div className="absolute inset-0">
                  {/* Top Icon - Anthoxanthin */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center animate-orbit-1">
                    <Image src={benefitsData[0].icon} alt="Anthoxanthin" width={60} height={60} />
                  </div>
                  {/* Right Icon - Chlorophyll */}
                  <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center animate-orbit-2">
                    <Image src={benefitsData[1].icon} alt="Chlorophyll" width={60} height={60} />
                  </div>
                  {/* Bottom Icon - Lycopene */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center animate-orbit-3">
                    <Image src={benefitsData[2].icon} alt="Lycopene" width={60} height={60} />
                  </div>
                  {/* Left Icon - Carotenoids */}
                  <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center animate-orbit-4">
                    <Image src={benefitsData[3].icon} alt="Carotenoids" width={60} height={60} />
                  </div>
                </div>
              </div>
            </div>
            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {benefitsData.map((item) => (
                <div key={item.key} className="w-full rounded-md p-4">
                  <h3 className="font-bold text-base mb-2 text-primary bg-clip-text">{item.heading}</h3>
                  <div
                    className={
                      item.subheadingGradient
                        ? "text-[13px] bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-semibold mb-1"
                        : "text-[13px] text-[#4284FF] font-semibold mb-1"
                    }
                  >
                    {item.subheading}
                  </div>
                  <p className="text-xs text-black leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative flex justify-center items-center">
              {/* Outer Ring */}
              <div className="relative w-[550px] h-[550px]">
                <svg className="w-full h-full" viewBox="0 0 550 550">
                  <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#e2e8f0', stopOpacity: 1 }} />
                    </linearGradient>
                    <filter id="ringShadow" x="-20%" y="-10%" width="160%" height="180%">
                      <feDropShadow dx="-3" dy="-3" stdDeviation="3" floodColor="rgba(0,0,0,0.0)" />
                      <feDropShadow dx="24" dy="32" stdDeviation="24" floodColor="rgba(0,0,0,0.14)" />
                    </filter>
                  </defs>
                  <path
                    d="M275 50 A225 225 0 0 1 500 275 A225 225 0 0 1 275 500 A225 225 0 0 1 50 275 A225 225 0 0 1 275 50 Z M275 120 A155 155 0 0 0 120 275 A155 155 0 0 0 275 430 A155 155 0 0 0 430 275 A155 155 0 0 0 275 120 Z"
                    fill="url(#ringGradient)"
                    stroke="#d1d5db"
                    strokeWidth="1"
                    filter="url(#ringShadow)"
                  />
                </svg>
                {/* Inner Circle with Lung Illustration */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full shadow-[inset_4px_4px_12px_rgba(0,0,0,0.15),inset_-4px_-4px_12px_rgba(255,255,255,0.9),8px_8px_24px_rgba(0,0,0,0.2),-8px_-4px_24px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <div className="w-32 h-32">
                    <Image src="/lungs.png" alt="Lung Illustration" width={150} height={150} />
                  </div>
                </div>
                {/* Icons positioned around the ring */}
                <div className="absolute inset-0">
                  {/* Top Left Icon - Anthoxanthin */}
                  <div className="absolute top-12 left-2 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-1">
                    <Image src={benefitsData[0].icon} alt={benefitsData[0].heading} width={80} height={80} />
                  </div>
                  {/* Top Right Icon - Chlorophyll */}
                  <div className="absolute top-12 right-2 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-2">
                    <Image src={benefitsData[1].icon} alt={benefitsData[1].heading} width={80} height={80} />
                  </div>
                  {/* Bottom Right Icon - Lycopene */}
                  <div className="absolute bottom-28 -right-2 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-3">
                    <Image src={benefitsData[2].icon} alt={benefitsData[2].heading} width={80} height={80} />
                  </div>
                  {/* Bottom Left Icon - Carotenoids */}
                  <div className="absolute bottom-28 -left-2 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-4">
                    <Image src={benefitsData[3].icon} alt={benefitsData[3].heading} width={80} height={80} />
                  </div>
                  {/* Bottom Center Icon - Anthocyanin */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 translate-y-0 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-5">
                    <Image src={benefitsData[4].icon} alt={benefitsData[4].heading} width={80} height={80} />
                  </div>
                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="20%" y1="25%" x2="35%" y2="35%" stroke="#e0e0e0" strokeWidth="1" />
                    <line x1="80%" y1="25%" x2="65%" y2="35%" stroke="#e0e0e0" strokeWidth="1" />
                    <line x1="80%" y1="70%" x2="65%" y2="65%" stroke="#e0e0e0" strokeWidth="1" />
                    <line x1="20%" y1="70%" x2="35%" y2="65%" stroke="#e0e0e0" strokeWidth="1" />
                    <line x1="50%" y1="70%" x2="50%" y2="65%" stroke="#e0e0e0" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              {/* Health Benefits Content - 5 evenly spaced positions */}
              <div className="absolute w-full h-full">
                {/* Top Left - Anthoxanthin */}
                <div className="absolute top-8 left-8 w-80 rounded-md p-5">
                  <h3 className="font-bold text-2xl text-primary bg-clip-text mb-2">
                    {benefitsData[0].heading}
                  </h3>
                  <div className="text-[15px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-bold mb-1">
                    {benefitsData[0].subheading}
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed">{benefitsData[0].description}</p>
                </div>
                {/* Top Right - Chlorophyll */}
                <div className="absolute top-8 right-8 w-80 rounded-md p-5">
                  <h3 className="font-bold text-2xl text-primary bg-clip-text mb-2">
                    {benefitsData[1].heading}
                  </h3>
                  <div className="text-[15px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-bold mb-1">
                    {benefitsData[1].subheading}
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed">{benefitsData[1].description}</p>
                </div>
                {/* Bottom Right - Lycopene */}
                <div className="absolute bottom-8 right-8 w-80 rounded-md p-5">
                  <h3 className="font-bold text-2xl text-primary bg-clip-text mb-2">
                    {benefitsData[2].heading}
                  </h3>
                  <div className="text-[15px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-bold mb-1">
                    {benefitsData[2].subheading}
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed">{benefitsData[2].description}</p>
                </div>
                {/* Bottom Left - Carotenoids */}
                <div className="absolute bottom-8 left-8 w-80 rounded-md p-5">
                  <h3 className="font-bold text-2xl text-primary bg-clip-text mb-2">
                    {benefitsData[3].heading}
                  </h3>
                  <div className="text-[15px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-bold mb-1">
                    {benefitsData[3].subheading}
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed">{benefitsData[3].description}</p>
                </div>
                {/* Bottom Center - Anthocyanin */}
                <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 translate-y-24 w-80 rounded-md p-5">
                  <h3 className="font-bold text-2xl text-primary bg-clip-text mb-2">
                    {benefitsData[4].heading}
                  </h3>
                  <div className="text-[15px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-bold mb-1">
                    {benefitsData[4].subheading}
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed">{benefitsData[4].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
