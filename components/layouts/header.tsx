'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: 'Water Testing', description: 'Professional water quality analysis' },
    { name: 'Purification', description: 'Advanced water treatment solutions' },
    { name: 'Health Check', description: 'Water-related health assessments' },
    { name: 'Consultation', description: 'Expert advice and recommendations' }
  ];

  const doctors = [
    { name: 'Water Specialists', description: 'Expert water quality professionals' },
    { name: 'Health Experts', description: 'Medical professionals for consultation' },
    { name: 'Research Team', description: 'Scientific research and analysis' },
    { name: 'Support Staff', description: '24/7 customer support team' }
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Text */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="text-[#4284FF] text-xl sm:text-2xl font-bold group-hover:text-[#2563EB] transition-colors">
              Empire Blue
            </span>
            <span className="text-gray-600 text-xs sm:text-sm mt-0.5 group-hover:text-[#4284FF] transition-colors">
              For Health Conscious People
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 group-hover:text-[#4284FF] transition-colors">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown Content */}
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="p-4 space-y-3">
                  {services.map((service, index) => (
                    <Link 
                      key={index}
                      href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex flex-col p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-[#1D1D42] font-medium">{service.name}</span>
                      <span className="text-sm text-gray-500">{service.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Doctors Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 group-hover:text-[#4284FF] transition-colors">
                Doctors
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown Content */}
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="p-4 space-y-3">
                  {doctors.map((doctor, index) => (
                    <Link 
                      key={index}
                      href={`/doctors/${doctor.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex flex-col p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-[#1D1D42] font-medium">{doctor.name}</span>
                      <span className="text-sm text-gray-500">{doctor.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Schedule */}
            <Link 
              href="/schedule" 
              className="text-gray-600 hover:text-[#4284FF] transition-colors relative group"
            >
              Schedule
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4284FF] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* News with Badge */}
            <div className="relative group">
              <Link 
                href="/news" 
                className="text-gray-600 hover:text-[#4284FF] transition-colors relative"
              >
                News
                <span className="absolute -top-2 -right-6 bg-[#FF4D6B] text-white text-xs px-1.5 py-0.5 rounded-full group-hover:animate-pulse">
                  New
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4284FF] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Contact Us */}
            <Link 
              href="/contact" 
              className="text-[#4284FF] hover:text-[#2563EB] transition-colors relative group"
            >
              Contact us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563EB] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Get Started Button */}
            <Link 
              href="/get-started"
              className="relative overflow-hidden bg-[#4284FF] text-white px-6 py-2 rounded-full font-medium group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-[#2563EB] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden group p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 block w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
              <span className={`absolute left-0 block w-full h-0.5 bg-gray-600 top-2 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 block w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'} transition-all duration-300 overflow-hidden`}>
          <div className="py-4 space-y-6">
            {/* Mobile Services */}
            <div className="space-y-3">
              <div className="text-[#4284FF] font-medium px-1">Services</div>
              <div className="pl-4 space-y-2">
                {services.map((service, index) => (
                  <Link 
                    key={index}
                    href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="text-[#1D1D42] font-medium">{service.name}</div>
                    <div className="text-sm text-gray-500">{service.description}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Doctors */}
            <div className="space-y-3">
              <div className="text-[#4284FF] font-medium px-1">Doctors</div>
              <div className="pl-4 space-y-2">
                {doctors.map((doctor, index) => (
                  <Link 
                    key={index}
                    href={`/doctors/${doctor.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="text-[#1D1D42] font-medium">{doctor.name}</div>
                    <div className="text-sm text-gray-500">{doctor.description}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Mobile Links */}
            <div className="space-y-4 px-1">
              <Link 
                href="/schedule" 
                className="block text-gray-600 hover:text-[#4284FF] transition-colors"
              >
                Schedule
              </Link>
              
              <div className="relative">
                <Link 
                  href="/news" 
                  className="block text-gray-600 hover:text-[#4284FF] transition-colors"
                >
                  News
                  <span className="ml-2 inline-block bg-[#FF4D6B] text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
                    New
                  </span>
                </Link>
              </div>

              <Link 
                href="/contact" 
                className="block text-[#4284FF] hover:text-[#2563EB] transition-colors"
              >
                Contact us
              </Link>

              <Link 
                href="/get-started"
                className="block w-full bg-[#4284FF] text-white px-6 py-3 rounded-xl text-center font-medium hover:bg-[#2563EB] transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}