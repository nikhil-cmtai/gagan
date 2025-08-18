'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm font-['Open_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <Image src="/logo.png" alt="Imperial Water" width={200} height={45} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-[#4284FF] transition-colors relative group text-lg font-[''] tracking-wide font-semibold"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4284FF] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Book Now Button */}
            <Link 
              href="/book-now"
              className="relative flex items-center gap-2 overflow-hidden bg-primary transition-colors text-white px-6 py-2 rounded-full text-lg tracking-wide font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#4284FF] focus:ring-offset-2"
            >
              <span className="relative z-10">Book Now</span>
              <ArrowRightIcon className="w-4 h-4 relative z-10" />
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
          <div className="py-4 space-y-4">
            {/* Mobile Navigation Links */}
            {navItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="block text-gray-600 hover:text-[#4284FF] transition-colors px-1 py-2 text-lg font-[''] tracking-wide"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Book Now Button */}
            <Link 
              href="/book-now"
              className="block w-full bg-[#4284FF] text-white px-6 py-3.5 rounded-xl text-center text-lg font-[''] tracking-wide hover:bg-[#2563EB] transition-all duration-300 mt-4"
            >
              Book Now
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}