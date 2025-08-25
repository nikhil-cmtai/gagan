"use client";

import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    position: "Health Coach",
    location: "Mumbai",
    rating: 5,
    image: "/images/testimonials/priya.jpg",
    review: "Newtro-X water has completely transformed my daily routine. The non-expiry feature is a game-changer, and I can taste the difference in purity. My clients love it too!",
    avatar: "PS"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    position: "Restaurant Owner",
    location: "Delhi",
    rating: 5,
    image: "/images/testimonials/rajesh.jpg",
    review: "As a restaurant owner, I need reliable water suppliers. Newtro-X has been exceptional - consistent quality, great pricing, and excellent customer service. Highly recommended!",
    avatar: "RK"
  },
  {
    id: 3,
    name: "Dr. Meera Patel",
    position: "Pediatrician",
    location: "Bangalore",
    rating: 5,
    image: "/images/testimonials/meera.jpg",
    review: "I recommend Newtro-X to all my patients' families. The bacteria-free technology gives me peace of mind, and the health benefits are remarkable. A must-have for every household.",
    avatar: "MP"
  },
  {
    id: 4,
    name: "Amit Singh",
    position: "Fitness Trainer",
    location: "Pune",
    rating: 5,
    image: "/images/testimonials/amit.jpg",
    review: "Since switching to Newtro-X, my energy levels have improved significantly. The mineral content is perfect for post-workout hydration. My gym members love it!",
    avatar: "AS"
  },
  {
    id: 5,
    name: "Kavita Reddy",
    position: "Yoga Instructor",
    location: "Hyderabad",
    rating: 5,
    image: "/images/testimonials/kavita.jpg",
    review: "Pure water is essential for my yoga practice. Newtro-X delivers exactly what it promises - pure, healthy water that supports my wellness journey. Absolutely love it!",
    avatar: "KR"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-[#f3f9ff] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            What Our <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our valued customers have to say about their experience with Newtro-X.
          </p>
        </div>


        {/* Featured Testimonial */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#E4E9ED] rounded-3xl p-12 shadow-lg relative">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 text-blue-100">
              <Quote size={48} />
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 z-10 border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 z-10 border border-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            <div className="text-center">
              {/* Rating */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mx-1" />
                ))}
              </div>

              {/* Review */}
              <p className="text-xl text-gray-700 mb-8 leading-relaxed italic max-w-3xl mx-auto">
                &quot;{currentTestimonial.review}&quot;
              </p>

              {/* Customer Info */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {currentTestimonial.avatar}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">{currentTestimonial.name}</h4>
                <p className="text-gray-600 mb-1">{currentTestimonial.position}</p>
                <p className="text-sm text-gray-500">{currentTestimonial.location}</p>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;