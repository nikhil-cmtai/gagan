import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <div className="relative w-[200px] h-[50px]">
                <Image 
                  src="/logo.png" 
                  alt="Empire Blue" 
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Providing clean and safe water solutions for a healthier tomorrow. Our commitment to quality and innovation makes us the trusted choice in water treatment.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#1D22BF] transition-colors">
                  <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#1D22BF] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#1D22BF] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#1D22BF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6 text-xl">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#1D22BF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#1D22BF] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-600 hover:text-[#1D22BF] transition-colors">
                  Meet Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-[#1D22BF] transition-colors">
                  Latest News
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6 text-xl">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/water-testing" className="text-gray-600 hover:text-[#1D22BF] transition-colors">
                  Water Testing
                </Link>
              </li>
              <li>
                <Link href="/services/purification" className="text-gray-600 hover:text-[#1D22BF] transition-colors">
                  Water Purification
                </Link>
              </li>
              <li>
                <Link href="/services/treatment" className="text-gray-600 hover:text-[#1D22BF] transition-colors">
                  Water Treatment
                </Link>
              </li>
              <li>
                <Link href="/services/consultation" className="text-gray-600 hover:text-[#1D22BF] transition-colors">
                  Expert Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6 text-xl">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3B82F6] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">
                  Empire Blue Pvt. Ltd.<br />
                  Chhindwara, Madhya Pradesh<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <Link href="tel:+919876543210" className="text-gray-600 hover:text-[#1D22BF] transition-colors">
                +91 98765 43210
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Link href="mailto:info@empireblue.in" className="text-gray-600 hover:text-[#1D22BF] transition-colors">
                  info@empireblue.in
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Imperial Water. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-[#1D22BF] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-[#1D22BF] transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}