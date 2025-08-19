import React from 'react';
import Link from 'next/link';

const ColorDots = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  let positionClasses = '';
  
  switch (position) {
    case 'top-left':
      positionClasses = 'top-4 left-4 md:top-8 md:left-8';
      break;
    case 'top-right':
      positionClasses = 'top-4 right-4 md:top-8 md:right-8';
      break;
    case 'bottom-left':
      positionClasses = 'bottom-4 left-4 md:bottom-8 md:left-8';
      break;
    case 'bottom-right':
      positionClasses = 'bottom-4 right-4 md:bottom-8 md:right-8';
      break;
  }
  
  return (
    <div className={`absolute ${positionClasses}`}>
      <div className="flex gap-1 md:gap-1.5">
        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-red-500"></div>
        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-500"></div>
        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-500"></div>
      </div>
      <div className="flex gap-1 md:gap-1.5 ml-2 md:ml-4 mt-1 md:mt-2">
        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-red-500"></div>
        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-500"></div>
        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-500"></div>
      </div>
      <div className="flex gap-1 md:gap-1.5 ml-4 md:ml-8 mt-1 md:mt-2">
        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-red-500"></div>
        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-500"></div>
        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-500"></div>
      </div>
    </div>
  );
};

export default function CTA() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto bg-[#f3f9ff] rounded-3xl shadow-lg p-6 md:p-12 relative">
        <ColorDots position="top-left" />
        <ColorDots position="top-right" />
        
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-6 md:mt-0">
            <span className="text-primary">Take the </span>
            <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">Next Step</span>
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">Towards Better Health</h3>
          
          <p className="text-gray-500 text-base max-w-2xl mx-auto mb-10">
          Empire Blue Operates in the growing health and wellness market  health conscious individuals seeking natural solutions for disease prevention and immune support with increasing awareness of health risks like cancer and heart disease demand for mineral based supplements in mineral water Ready to experience our exceptional innovative water? book your first can  today and discover how we can help you live your healthiest life.
          </p>
          
          <Link href="/book-now">
            <div className="inline-block bg-primary text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Book Now
            </div>
          </Link>
        </div>
        
        <ColorDots position="bottom-left" />
        <ColorDots position="bottom-right" />
      </div>
    </div>
  );
}
