import React from 'react';

export const BenefitsSection = () => {
  return (
    <div>
      <h2 className="text-center text-5xl text-primary font-bold mb-12">Health Benefits</h2> 

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Circle at start, cards below in single row */}
        <div className="block lg:hidden">
          {/* Central Circle for Mobile */}
          <div className="flex justify-center mb-8">
            <div className="relative w-[350px] h-[350px]">
              {/* Ring using SVG for proper ring shape */}
              <svg className="w-full h-full" viewBox="0 0 350 350">
                {/* Outer Ring */}
                <defs>
                  <linearGradient id="ringGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#f8fafc', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#e2e8f0', stopOpacity: 1}} />
                  </linearGradient>
                  <filter id="ringShadowMobile">
                    <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="rgba(0,0,0,0.15)"/>
                    <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="rgba(0,0,0,0.08)"/>
                  </filter>
                </defs>
                
                {/* Ring shape - donut with hole */}
                <path 
                  d="M175 50 A125 125 0 0 1 300 175 A125 125 0 0 1 175 300 A125 125 0 0 1 50 175 A125 125 0 0 1 175 50 Z M175 75 A100 100 0 0 0 75 175 A100 100 0 0 0 175 275 A100 100 0 0 0 275 175 A100 100 0 0 0 175 75 Z" 
                  fill="url(#ringGradientMobile)" 
                  stroke="#d1d5db" 
                  strokeWidth="1"
                  filter="url(#ringShadowMobile)"
                />
              </svg>
              
              {/* Inner Circle with Lung Illustration */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-[inset_4px_4px_12px_rgba(0,0,0,0.15),inset_-4px_-4px_12px_rgba(255,255,255,0.9),8px_8px_24px_rgba(0,0,0,0.2),-8px_-4px_24px_rgba(255,255,255,0.8)] flex items-center justify-center">
                <div className="w-20 h-20">
                  {/* Lung Illustration */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Left Lung */}
                    <path d="M25 30 Q20 40 25 60 Q30 70 35 60 Q40 50 35 40 Q30 30 25 30" 
                          fill="#ff6b6b" stroke="#e74c3c" strokeWidth="1"/>
                    {/* Right Lung */}
                    <path d="M65 30 Q60 40 65 60 Q70 70 75 60 Q80 50 75 40 Q70 30 65 30" 
                          fill="#ff6b6b" stroke="#e74c3c" strokeWidth="1"/>
                    {/* Trachea */}
                    <rect x="45" y="20" width="10" height="40" fill="#74b9ff" stroke="#0984e3" strokeWidth="1"/>
                    {/* Bronchi */}
                    <path d="M45 40 Q40 45 35 50" stroke="#74b9ff" strokeWidth="2" fill="none"/>
                    <path d="M55 40 Q60 45 65 50" stroke="#74b9ff" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>

              {/* Icons around the ring for mobile */}
              <div className="absolute inset-0">
                {/* Top Icon - Heart */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-500 rounded-full shadow-[inset_2px_2px_8px_rgba(0,0,0,0.2),inset_-2px_-2px_8px_rgba(255,255,255,0.3),4px_4px_16px_rgba(0,0,0,0.1),-4px_-4px_16px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>

                {/* Right Icon - Brain */}
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-12 h-12 bg-pink-500 rounded-full shadow-[inset_2px_2px_8px_rgba(0,0,0,0.2),inset_-2px_-2px_8px_rgba(255,255,255,0.3),4px_4px_16px_rgba(0,0,0,0.1),-4px_-4px_16px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>

                {/* Bottom Icon - Kidney */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full shadow-[inset_2px_2px_8px_rgba(0,0,0,0.2),inset_-2px_-2px_8px_rgba(255,255,255,0.3),4px_4px_16px_rgba(0,0,0,0.1),-4px_-4px_16px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>

                {/* Left Icon - Heart */}
                <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full shadow-[inset_2px_2px_8px_rgba(0,0,0,0.2),inset_-2px_-2px_8px_rgba(255,255,255,0.3),4px_4px_16px_rgba(0,0,0,0.1),-4px_-4px_16px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Cards - One card per row */}
          <div className="space-y-4">
            {/* Anthoxanthin */}
            <div className="w-full border-2 border-white rounded-md p-4">
              <h3 className="font-bold text-black text-base mb-2">Anthoxanthin</h3>
              <p className="text-xs text-primary leading-relaxed">
                Antioxidant properties beneficial for cancer treatment and heart health. 
                Improves blood flow and reduces oxidative stress.
              </p>
            </div>

            {/* Chlorophyll */}
            <div className="w-full border-2 border-white rounded-md p-4">
              <h3 className="font-bold text-black text-base mb-2">Chlorophyll</h3>
              <p className="text-xs text-primary leading-relaxed">
                Strengthens the immune system and help block cancer-causing chemicals. 
                Aids in weight loss and lowers cholesterol levels.
              </p>
            </div>

            {/* Lycopene */}
            <div className="w-full border-2 border-white rounded-md p-4">
              <h3 className="font-bold text-black text-base mb-2">Lycopene</h3>
              <p className="text-xs text-primary leading-relaxed">
                Powerful antioxidant that reduces oxidative damage and inflammation. 
                Protects against various cancers and supports heart health.
              </p>
            </div>

            {/* Carotenoids */}
            <div className="w-full border-2 border-white rounded-md p-4">
              <h3 className="font-bold text-black text-base mb-2">Carotenoids</h3>
              <p className="text-xs text-primary leading-relaxed">
                Essential for vitamin A production supporting immune health. 
                Reduces inflammation and promotes eye health while aiding hair growth.
              </p>
            </div>

            {/* Anthocyanin */}
            <div className="w-full border-2 border-white rounded-md p-4">
              <h3 className="font-bold text-black text-base mb-2">Anthocyanin</h3>
              <p className="text-xs text-primary leading-relaxed">
                Lowers blood pressure and reduces the risk of heart disease. 
                Protects brain function and may slow cancer growth.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original Design */}
        <div className="hidden lg:block">
        <div className="relative flex justify-center items-center">
            {/* Outer Ring - Proper Ring Shape */}
            <div className="relative w-[550px] h-[550px]">
              {/* Ring using SVG for proper ring shape */}
              <svg className="w-full h-full" viewBox="0 0 550 550">
                {/* Outer Ring */}
                <defs>
                  <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#f8fafc', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#e2e8f0', stopOpacity: 1}} />
                  </linearGradient>
                  <filter id="ringShadow">
                    <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="rgba(0,0,0,0.15)"/>
                    <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="rgba(0,0,0,0.08)"/>
                  </filter>
                </defs>
                
                {/* Ring shape - donut with hole */}
                <path 
                  d="M275 50 A225 225 0 0 1 500 275 A225 225 0 0 1 275 500 A225 225 0 0 1 50 275 A225 225 0 0 1 275 50 Z M275 100 A175 175 0 0 0 100 275 A175 175 0 0 0 275 450 A175 175 0 0 0 450 275 A175 175 0 0 0 275 100 Z" 
                  fill="url(#ringGradient)" 
                  stroke="#d1d5db" 
                  strokeWidth="1"
                  filter="url(#ringShadow)"
                />
              </svg>
              
              {/* Inner Circle with Lung Illustration */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full shadow-[inset_4px_4px_12px_rgba(0,0,0,0.15),inset_-4px_-4px_12px_rgba(255,255,255,0.9),8px_8px_24px_rgba(0,0,0,0.2),-8px_-4px_24px_rgba(255,255,255,0.8)] flex items-center justify-center">
            <div className="w-32 h-32">
              {/* Lung Illustration */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Left Lung */}
                <path d="M25 30 Q20 40 25 60 Q30 70 35 60 Q40 50 35 40 Q30 30 25 30" 
                      fill="#ff6b6b" stroke="#e74c3c" strokeWidth="1"/>
                {/* Right Lung */}
                <path d="M65 30 Q60 40 65 60 Q70 70 75 60 Q80 50 75 40 Q70 30 65 30" 
                      fill="#ff6b6b" stroke="#e74c3c" strokeWidth="1"/>
                {/* Trachea */}
                <rect x="45" y="20" width="10" height="40" fill="#74b9ff" stroke="#0984e3" strokeWidth="1"/>
                {/* Bronchi */}
                <path d="M45 40 Q40 45 35 50" stroke="#74b9ff" strokeWidth="2" fill="none"/>
                <path d="M55 40 Q60 45 65 50" stroke="#74b9ff" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>

              {/* Icons aligned with cards - 4 corners + 1 below */}
              <div className="absolute inset-0">
                {/* Top Left Icon - Heart (aligned with Anthoxanthin card) */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-red-500 rounded-full shadow-[inset_2px_2px_8px_rgba(0,0,0,0.2),inset_-2px_-2px_8px_rgba(255,255,255,0.3),4px_4px_16px_rgba(0,0,0,0.1),-4px_-4px_16px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>

                {/* Top Right Icon - Brain (aligned with Chlorophyll card) */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-pink-500 rounded-full shadow-[inset_2px_2px_8px_rgba(0,0,0,0.2),inset_-2px_-2px_8px_rgba(255,255,255,0.3),4px_4px_16px_rgba(0,0,0,0.1),-4px_-4px_16px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>

                {/* Bottom Right Icon - Kidney (aligned with Lycopene card) */}
                <div className="absolute bottom-8 right-4 w-16 h-16 bg-blue-600 rounded-full shadow-[inset_2px_2px_8px_rgba(0,0,0,0.2),inset_-2px_-2px_8px_rgba(255,255,255,0.3),4px_4px_16px_rgba(0,0,0,0.1),-4px_-4px_16px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>

                {/* Bottom Left Icon - Heart (aligned with Carotenoids card) - Moved up */}
                <div className="absolute bottom-12 left-4 w-16 h-16 bg-orange-500 rounded-full shadow-[inset_2px_2px_8px_rgba(0,0,0,0.2),inset_-2px_-2px_8px_rgba(255,255,255,0.3),4px_4px_16px_rgba(0,0,0,0.1),-4px_-4px_16px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>

                {/* Below Icon - Stomach (aligned with Anthocyanin card) */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-16 h-16 bg-green-500 rounded-full shadow-[inset_2px_2px_8px_rgba(0,0,0,0.2),inset_-2px_-2px_8px_rgba(255,255,255,0.3),4px_4px_16px_rgba(0,0,0,0.1),-4px_-4px_16px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="15%" y1="15%" x2="35%" y2="35%" stroke="#e0e0e0" strokeWidth="1"/>
                  <line x1="85%" y1="15%" x2="65%" y2="35%" stroke="#e0e0e0" strokeWidth="1"/>
                  <line x1="85%" y1="80%" x2="65%" y2="65%" stroke="#e0e0e0" strokeWidth="1"/>
                  <line x1="15%" y1="75%" x2="35%" y2="65%" stroke="#e0e0e0" strokeWidth="1"/>
                  <line x1="50%" y1="90%" x2="50%" y2="65%" stroke="#e0e0e0" strokeWidth="1"/>
            </svg>
          </div>
        </div>

            {/* Health Benefits Content - 4 corners + 1 below */}
            <div className="absolute w-full h-full">
              {/* Top Left Corner - Anthoxanthin */}
              <div className="absolute top-0 left-0 w-80 border-2 border-white rounded-md p-5">
                <h3 className="font-bold text-black text-lg mb-2">Anthoxanthin</h3>
                <p className="text-sm text-primary leading-relaxed">
                  Antioxidant properties beneficial for cancer treatment and heart health. 
                  Improves blood flow and reduces oxidative stress.
                </p>
              </div>

              {/* Top Right Corner - Chlorophyll */}
              <div className="absolute top-0 right-0 w-80 border-2 border-white rounded-md p-5">
                <h3 className="font-bold text-black text-lg mb-2">Chlorophyll</h3>
                <p className="text-sm text-primary leading-relaxed">
                  Strengthens the immune system and help block cancer-causing chemicals. 
                  Aids in weight loss and lowers cholesterol levels.
                </p>
          </div>

              {/* Bottom Right Corner - Lycopene */}
              <div className="absolute bottom-0 right-0 w-80 border-2 border-white rounded-md p-5">
                <h3 className="font-bold text-black text-lg mb-2">Lycopene</h3>
                <p className="text-sm text-primary leading-relaxed">
                  Powerful antioxidant that reduces oxidative damage and inflammation. 
                  Protects against various cancers and supports heart health.
                </p>
          </div>

              {/* Bottom Left Corner - Carotenoids */}
              <div className="absolute bottom-0 left-0 w-80 border-2 border-white rounded-md p-5">
                <h3 className="font-bold text-black text-lg mb-2">Carotenoids</h3>
                <p className="text-sm text-primary leading-relaxed">
                  Essential for vitamin A production supporting immune health. 
                  Reduces inflammation and promotes eye health while aiding hair growth.
                </p>
          </div>

              {/* Below Circle - Anthocyanin */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 translate-y-32 w-80 border-2 border-white rounded-md p-5">
                <h3 className="font-bold text-black text-lg mb-2">Anthocyanin</h3>
                <p className="text-sm text-primary leading-relaxed">
                  Lowers blood pressure and reduces the risk of heart disease. 
                  Protects brain function and may slow cancer growth.
                </p>
          </div>
          </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

