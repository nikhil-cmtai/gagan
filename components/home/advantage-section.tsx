import React from 'react';
import Image from 'next/image';

const advantages = [
  {
    icon: "🌎",
    title: "World's first non-expiry water",
    description: "Our revolutionary water that never expires"
  },
  {
    icon: "❤️",
    title: "Health benefits",
    description: "Unique water formulation helps prevent major health risks such as cancer and heart attacks while boosting the immune system"
  },
  {
    icon: "⭐",
    title: "Premium mineral enrichment",
    description: "Infused with essential minerals Ever Fresh provides superior nourishment compared to regular bottled water"
  },
  {
    icon: "✓",
    title: "Bacteria free",
    description: "Ensure that never release microplastic or harmful bacteria"
  },
  {
    icon: "⚙️",
    title: "Technology",
    description: "Utilization of cutting edge - ultra purification and preservation methods to maintain water qualities"
  },
  {
    icon: "🥤",
    title: "Preservation",
    description: "With no expiry date consumers can store the product indefinitely without the risk of contamination or quality degradation reducing frequent repurcesing cost"
  }
];

const AdvantageSection = () => {
    return (
        <div className="py-16 px-4 mt-21">
            <div className="max-w-7xl mx-auto relative">
                <h2 className="text-center text-3xl md:text-5xl text-primary font-bold mb-12">Competitive Advantage Beyond The Ordinary</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {advantages.slice(0, 3).map((advantage, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-4">
                            <div className="text-4xl mb-4">{advantage.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-primary">{advantage.title}</h3>
                            <p className="text-black">{advantage.description}</p>
                        </div>
                    ))}
                </div>
                
                <div className="flex justify-between items-center my-8 px-8 hidden md:flex">
                    {[1, 2, 3, 4, 5, 6].map((step) => (
                        <React.Fragment key={step}>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary font-bold border-2 border-primary">
                                {step}
                            </div>
                            {step < 6 && <div className="flex-1 h-1 bg-primary mx-2"></div>}
                        </React.Fragment>
                    ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-0">
                    {advantages.slice(3).map((advantage, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-4">
                            <div className="text-4xl mb-4">{advantage.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-primary">{advantage.title}</h3>
                            <p className="text-black">{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdvantageSection;