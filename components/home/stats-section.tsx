"use client";

import React, { useState, useEffect } from 'react';
import { Users, Package, TrendingUp, Award, Truck } from 'lucide-react';

const StatsSection = () => {
  const [counts, setCounts] = useState({
    customers: 0,
    reviews: 0,
    products: 0,
    satisfaction: 0,
    awards: 0
  });

  const stats = [
    {
      icon: Users,
      label: "Happy Customers",
      value: 50000,
      suffix: "+",
      color: "text-blue-600",
      key: "customers" as const,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Truck,
      label: "Orders Delivered",
      value: 100000,
      suffix: "+",
      color: "text-yellow-500",
      key: "reviews" as const,
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Package,
      label: "Products Launched",
      value: 15,
      suffix: "+",
      color: "text-green-600",
      key: "products" as const,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      label: "Satisfaction Rate",
      value: 98,
      suffix: "%",
      color: "text-purple-600",
      key: "satisfaction" as const,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Award,
      label: "Industry Awards",
      value: 25,
      suffix: "+",
      color: "text-red-600",
      key: "awards" as const,
      gradient: "from-red-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting animation
            stats.forEach((stat) => {
              const duration = 2000; // 2 seconds
              const steps = 60;
              const increment = stat.value / steps;
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  current = stat.value;
                  clearInterval(timer);
                }
                
                setCounts(prev => ({
                  ...prev,
                  [stat.key]: Math.floor(current)
                }));
              }, duration / steps);
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Our <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">Success</span> Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by thousands of customers across India, delivering pure and healthy water solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const currentValue = counts[stat.key];
            
            return (
              <div 
                key={stat.label}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
                    {currentValue.toLocaleString()}{stat.suffix}
                  </div>
                  
                  <h3 className="text-base font-semibold text-gray-700 mb-3 leading-tight">
                    {stat.label}
                  </h3>
                  
                  <div className={`w-12 h-1 bg-gradient-to-r ${stat.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;