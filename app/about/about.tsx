'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      image: '/team/founder.jpg',
      bio: 'With over 20 years of experience in water purification technology, Dr. Kumar founded Empire Blue with a vision to revolutionize water storage and consumption.'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Scientific Officer',
      image: '/team/scientist.jpg',
      bio: 'Leading our R&D team, Dr. Sharma has pioneered our patented non-expiry formula that keeps water fresh indefinitely.'
    },
    {
      name: 'Amit Patel',
      role: 'Head of Operations',
      image: '/team/operations.jpg',
      bio: 'Amit ensures our production facilities maintain the highest standards of quality and efficiency in delivering our revolutionary water products.'
    },
    {
      name: 'Neha Gupta',
      role: 'Marketing Director',
      image: '/team/marketing.jpg',
      bio: 'Neha leads our efforts to spread awareness about water safety and the benefits of our non-expiry water technology.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#E6F3FF]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-['Elephant'] text-primary mb-6">Our Story</h1>
              <p className="text-secondary text-lg md:text-xl leading-relaxed mb-8">
                Founded in 2018, Empire Blue began with a simple mission: to solve the global crisis of water expiry and contamination. Our team of scientists and engineers worked tirelessly to develop a revolutionary formula that keeps water fresh indefinitely.
              </p>
              <p className="text-secondary text-lg md:text-xl leading-relaxed">
                Today, we&apos;re proud to offer the world&apos;s first truly non-expiry water solution, helping communities worldwide access safe drinking water without worrying about expiration dates or bacterial contamination.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="relative h-80 md:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-10"></div>
                <Image
                  src="/about-hero.jpg" 
                  alt="Empire Blue Laboratory"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback for missing image
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.style.backgroundColor = '#4284FF';
                      parent.style.display = 'flex';
                      parent.style.alignItems = 'center';
                      parent.style.justifyContent = 'center';
                      const text = document.createElement('div');
                      text.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" viewBox="0 0 16 16"><path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-.58.58-.708.708l-.708-.708c.29-.29.58-.58.708-.708Zm-1.292 1.292l-.708-.708c.29-.29.579-.579.708-.708l.708.708c-.29.29-.58.58-.708.708Zm3.292-3.292l.708.708c-.29.29-.58.58-.708.708l-.708-.708c.29-.29.58-.58.708-.708Zm-1.292 1.292l-.708-.708c.29-.29.579-.579.708-.708l.708.708c-.29.29-.58.58-.708.708Z"/></svg>';
                      parent.appendChild(text);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-['Elephant'] text-primary mb-6">Our Mission & Vision</h2>
            <p className="text-secondary text-lg md:text-xl leading-relaxed">
              We&apos;re committed to revolutionizing how the world thinks about water storage and consumption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-[#f3f9ff] rounded-3xl shadow-xl border-2 border-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-.58.58-.708.708l-.708-.708c.29-.29.58-.58.708-.708Zm-1.292 1.292l-.708-.708c.29-.29.579-.579.708-.708l.708.708c-.29.29-.58.58-.708.708Zm3.292-3.292l.708.708c-.29.29-.58.58-.708.708l-.708-.708c.29-.29.58-.58.708-.708Zm-1.292 1.292l-.708-.708c.29-.29.579-.579.708-.708l.708.708c-.29.29-.58.58-.708.708Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-['Elephant'] text-primary mb-4">Our Mission</h3>
                <p className="text-secondary text-lg leading-relaxed mb-6">
                  To provide safe, bacteria-free, non-expiry water solutions to communities worldwide, tackling the global water crisis through revolutionary technology.
                </p>
                <ul className="space-y-3">
                  {['Eliminate water expiry concerns', 'Reduce plastic waste from discarded bottles', 'Make safe water accessible to all', 'Educate communities about water safety'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-[#f3f9ff] rounded-3xl shadow-xl border-2 border-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM6.5 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-9 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-['Elephant'] text-primary mb-4">Our Vision</h3>
                <p className="text-secondary text-lg leading-relaxed mb-6">
                  A world where everyone has access to safe drinking water that never expires, eliminating health concerns related to water contamination and storage.
                </p>
                <ul className="space-y-3">
                  {['Become the global standard for water safety', 'Establish water purification centers worldwide', 'Partner with governments for water crisis solutions', 'Continuous innovation in water technology'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="py-20 bg-[#E6F3FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f3f9ff] rounded-3xl shadow-xl border-2 border-white overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-['Elephant'] text-primary mb-6">Revolutionary Technology</h2>
                <p className="text-secondary text-lg leading-relaxed mb-6">
                  Our patented water purification and preservation technology is the result of years of research and development. Unlike traditional methods that rely on chemicals with limited effectiveness, our approach creates a molecular barrier that prevents bacterial growth indefinitely.
                </p>
                <p className="text-secondary text-lg leading-relaxed mb-8">
                  The key benefits of our technology include:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-1">Non-Expiry Formula</h4>
                      <p className="text-secondary">Water stays fresh indefinitely without the need for chemicals or preservatives.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-1">Bacteria-Free Technology</h4>
                      <p className="text-secondary">Eliminates 99.9999% of harmful bacteria and prevents new growth.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-1">Health Benefits</h4>
                      <p className="text-secondary">Enhanced with essential minerals that support overall health and wellbeing.</p>
                    </div>
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300"
                >
                  Learn More About Our Technology
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-primary to-primary-dark p-8 md:p-12 flex items-center justify-center">
                <div className="relative w-full h-80 md:h-full">
                  <Image
                    src="/can.png"
                    alt="Empire Blue Water Can"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-ripple absolute w-32 h-32 rounded-full bg-white/10"></div>
                    <div className="animate-ripple absolute w-48 h-48 rounded-full bg-white/5" style={{ animationDelay: '0.5s' }}></div>
                    <div className="animate-ripple absolute w-64 h-64 rounded-full bg-white/5" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-['Elephant'] text-primary mb-6">Meet Our Team</h2>
            <p className="text-secondary text-lg md:text-xl leading-relaxed">
              Our dedicated team of scientists, engineers, and water experts are committed to solving the global water crisis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#f3f9ff] rounded-3xl shadow-lg border border-white overflow-hidden group">
                <div className="h-64 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback for missing image
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.style.backgroundColor = '#4284FF';
                        parent.style.display = 'flex';
                        parent.style.alignItems = 'center';
                        parent.style.justifyContent = 'center';
                        const text = document.createElement('div');
                        text.innerHTML = `<div class="text-white text-4xl font-bold">${member.name.split(' ').map(n => n[0]).join('')}</div>`;
                        parent.appendChild(text);
                      }
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-primary/70 mb-4">{member.role}</p>
                  <p className="text-secondary text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300"
            >
              Join Our Team
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#E6F3FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Elephant'] text-white mb-6">Ready to Experience Non-Expiry Water?</h2>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8">
                Join us in our mission to revolutionize water consumption and storage. Contact us today to learn more about our products and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-8 rounded-xl transition-colors duration-300 inline-flex items-center justify-center"
                >
                  Contact Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
                <Link 
                  href="/" 
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white/70 font-medium py-3 px-8 rounded-xl transition-colors duration-300 inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}