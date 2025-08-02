'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BookNow() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    quantity: '1',
    deliveryDate: '',
    deliveryTime: 'morning',
    specialInstructions: '',
    paymentMethod: 'cod'
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    quantity: '',
    deliveryDate: '',
    general: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      valid = false;
    } else {
      newErrors.firstName = '';
    }
    
    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    } else {
      newErrors.lastName = '';
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    } else {
      newErrors.email = '';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      valid = false;
    } else {
      newErrors.phone = '';
    }
    
    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
      valid = false;
    } else {
      newErrors.address = '';
    }
    
    // City validation
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      valid = false;
    } else {
      newErrors.city = '';
    }
    
    // State validation
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
      valid = false;
    } else {
      newErrors.state = '';
    }
    
    // Zip Code validation
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'Zip code is required';
      valid = false;
    } else if (!/^\d{5,6}$/.test(formData.zipCode.replace(/\D/g, ''))) {
      newErrors.zipCode = 'Please enter a valid zip code';
      valid = false;
    } else {
      newErrors.zipCode = '';
    }
    
    // Quantity validation
    if (!formData.quantity || parseInt(formData.quantity) < 1) {
      newErrors.quantity = 'Please select a valid quantity';
      valid = false;
    } else {
      newErrors.quantity = '';
    }
    
    // Delivery Date validation
    if (!formData.deliveryDate) {
      newErrors.deliveryDate = 'Delivery date is required';
      valid = false;
    } else {
      const selectedDate = new Date(formData.deliveryDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.deliveryDate = 'Delivery date cannot be in the past';
        valid = false;
      } else {
        newErrors.deliveryDate = '';
      }
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setErrors({ ...errors, general: '' });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Show success message and redirect
      alert('Booking submitted successfully! We will contact you soon.');
      router.push('/');
    }, 2000);
  };

  const calculateTotal = () => {
    const pricePerUnit = 299; // ₹299 per unit
    return parseInt(formData.quantity) * pricePerUnit;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="bg-white rounded-3xl shadow-xl border-2 border-white overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-dark p-6 sm:p-8 text-white">
              <div className="flex justify-center mb-4">
                <Image
                  src="/logo.png"
                  alt="Empire Blue Logo"
                  width={180}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-center">Book Your Order</h1>
              <p className="text-center mt-2 opacity-90">Get your premium healthy water delivered to your doorstep</p>
            </div>
            
            {/* Form */}
            <div className="p-6 sm:p-8">
              {errors.general && (
                <div className="mb-6 bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                  {errors.general}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`block w-full px-3 py-3 border ${errors.firstName ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                        placeholder="Enter first name"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                      )}
                    </div>
                    
                    {/* Last Name */}
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`block w-full px-3 py-3 border ${errors.lastName ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                        placeholder="Enter last name"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full px-3 py-3 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                    
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`block w-full px-3 py-3 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                        placeholder="Enter phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Delivery Address</h3>
                  <div className="space-y-4">
                    {/* Address */}
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Street Address *
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        rows={3}
                        value={formData.address}
                        onChange={handleChange}
                        className={`block w-full px-3 py-3 border ${errors.address ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                        placeholder="Enter your complete address"
                      />
                      {errors.address && (
                        <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* City */}
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City *
                        </label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          value={formData.city}
                          onChange={handleChange}
                          className={`block w-full px-3 py-3 border ${errors.city ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                          placeholder="City"
                        />
                        {errors.city && (
                          <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                        )}
                      </div>
                      
                      {/* State */}
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          State *
                        </label>
                        <input
                          id="state"
                          name="state"
                          type="text"
                          value={formData.state}
                          onChange={handleChange}
                          className={`block w-full px-3 py-3 border ${errors.state ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                          placeholder="State"
                        />
                        {errors.state && (
                          <p className="mt-1 text-sm text-red-600">{errors.state}</p>
                        )}
                      </div>
                      
                      {/* Zip Code */}
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                          Zip Code *
                        </label>
                        <input
                          id="zipCode"
                          name="zipCode"
                          type="text"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className={`block w-full px-3 py-3 border ${errors.zipCode ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                          placeholder="Zip code"
                        />
                        {errors.zipCode && (
                          <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Quantity */}
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                        Quantity *
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className={`block w-full px-3 py-3 border ${errors.quantity ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                      >
                        <option value="1">1 Unit</option>
                        <option value="2">2 Units</option>
                        <option value="3">3 Units</option>
                        <option value="4">4 Units</option>
                        <option value="5">5 Units</option>
                        <option value="6">6 Units</option>
                        <option value="7">7 Units</option>
                        <option value="8">8 Units</option>
                        <option value="9">9 Units</option>
                        <option value="10">10 Units</option>
                      </select>
                      {errors.quantity && (
                        <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>
                      )}
                    </div>
                    
                    {/* Delivery Date */}
                    <div>
                      <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Delivery Date *
                      </label>
                      <input
                        id="deliveryDate"
                        name="deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        className={`block w-full px-3 py-3 border ${errors.deliveryDate ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                      />
                      {errors.deliveryDate && (
                        <p className="mt-1 text-sm text-red-600">{errors.deliveryDate}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Delivery Time */}
                  <div className="mt-4">
                    <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Delivery Time
                    </label>
                    <select
                      id="deliveryTime"
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleChange}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                      <option value="evening">Evening (3 PM - 6 PM)</option>
                      <option value="night">Night (6 PM - 9 PM)</option>
                    </select>
                  </div>
                  
                  {/* Special Instructions */}
                  <div className="mt-4">
                    <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700 mb-1">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      id="specialInstructions"
                      name="specialInstructions"
                      rows={3}
                      value={formData.specialInstructions}
                      onChange={handleChange}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Any special delivery instructions..."
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="ml-3 text-sm text-gray-700">Cash on Delivery (COD)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        checked={formData.paymentMethod === 'online'}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="ml-3 text-sm text-gray-700">Online Payment (Credit/Debit Card)</span>
                    </label>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center items-center bg-primary hover:bg-primary-dark text-white font-medium py-4 px-6 rounded-xl transition-colors duration-300"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Place Order
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-white rounded-3xl shadow-xl border-2 border-white overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              {/* Product Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-20 h-20">
                  <Image
                    src="/can.png"
                    alt="Empire Blue Water"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Empire Blue Premium Water</h3>
                  <p className="text-sm text-gray-600">World&apos;s First Non-Expiry Water</p>
                  <p className="text-sm text-gray-500">1 Unit = 20L</p>
                </div>
              </div>
              
              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity:</span>
                  <span className="font-medium">{formData.quantity} Unit{parseInt(formData.quantity) > 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per unit:</span>
                  <span className="font-medium">₹299</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery fee:</span>
                  <span className="font-medium">₹50</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary">₹{calculateTotal() + 50}</span>
                </div>
              </div>
              
              {/* Features */}
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">What you get:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Premium healthy water
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free doorstep delivery
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Non-expiry guarantee
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 customer support
                  </li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Need help? Contact us:</p>
                <p className="text-primary font-medium">+91 98765 43210</p>
                <p className="text-sm text-gray-500">support@empireblue.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}