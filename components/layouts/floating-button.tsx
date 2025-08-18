"use client";

import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Phone, MessageCircle, X, ArrowUp } from "lucide-react";
import Link from "next/link";

export const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Chat and social buttons - Fixed at the bottom right */}
      <div className="fixed bottom-24 right-6 z-50">
        {/* Social buttons that appear when main button is clicked */}
        <div className={`flex flex-col-reverse gap-3 mb-3 transition-all duration-300 ${isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 pointer-events-none'}`}>
          <Link 
            href="https://wa.me/+918867268719" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all hover:scale-110"
          >
            <MessageCircle size={24} strokeWidth={2} />
          </Link>
          <Link 
            href="tel:+918867268719" 
            className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
          >
            <Phone size={24} strokeWidth={2} />
          </Link>
          <Link 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 transition-all hover:scale-110"
          >
            <Instagram size={24} strokeWidth={2} />
          </Link>
          <Link 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all hover:scale-110"
          >
            <Facebook size={24} strokeWidth={2} />
          </Link>
        </div>

        {/* Main floating button */}
        <button 
          onClick={toggleMenu}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none"
        >
          {isOpen ? (
            <X size={24} strokeWidth={2} />
          ) : (
            <div className="relative">
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <MessageCircle size={24} strokeWidth={2} className="animate-pulse" />
            </div>
          )}
        </button>
      </div>

      {/* Scroll to top button - Fixed at the bottom right, below chat button */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${showScrollTop ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 pointer-events-none'}`}>
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
        >
          <ArrowUp size={24} strokeWidth={2} />
        </button>
      </div>
    </>
  );
};

export default FloatingButton;


