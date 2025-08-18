'use client'

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  // Simple validation for name and email
  const validate = (data: typeof formData) => {
    const newErrors: { name?: string; email?: string } = {};
    if (!data.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!data.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Invalid email address.';
    }
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Validate on change for name and email
    if (name === 'name' || name === 'email') {
      setErrors(prev => ({ ...prev, ...validate({ ...formData, [name]: value }) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('Please fill all fields.');
      return;
    }
    if (validationErrors.name || validationErrors.email) {
      setStatus(validationErrors.name || validationErrors.email || 'Please fix the errors.');
      return;
    }
    setIsSubmitting(true);
    try {
      // Send mail to admin and user
      const adminMail = fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'locationtracker21@gmail.com',
          subject: formData.subject,
          text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`,
          html: `<b>Name:</b> ${formData.name}<br/><b>Email:</b> ${formData.email}<br/><b>Phone:</b> ${formData.phone}<br/><b>Subject:</b> ${formData.subject}<br/><b>Message:</b><br/>${formData.message}`,
        }),
      });
      const userMail = fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: formData.email,
          subject: 'Thank you for contacting us!',
          text: `Dear ${formData.name},\nThank you for reaching out to Location Track. We have received your message and will get back to you soon.`,
          html: `<b>Dear ${formData.name},</b><br/>Thank you for reaching out to Location Track. We have received your message and will get back to you soon.`,
        }),
      });
      const [adminRes, userRes] = await Promise.all([adminMail, userMail]);
      const adminData = await adminRes.json();
      const userData = await userRes.json();
      if (adminRes.ok && userRes.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setSubmitSuccess(true);
      } else {
        setStatus(adminData.error || userData.error || 'Failed to send message.');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setStatus('Failed to send message.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#E6F3FF] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">Contact Us</h1>
          <p className="text-secondary text-base sm:text-lg lg:text-xl leading-relaxed">
            Have questions about our revolutionary water technology? We&apos;re here to help! Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="bg-[#f3f9ff] rounded-3xl shadow-xl border-2 border-white overflow-hidden">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-0">
            {/* Left - Contact Form */}
            <div className="xl:col-span-2 p-6 sm:p-8 lg:p-12">
              {submitSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                  <p className="text-secondary text-lg">Your message has been sent successfully. We&apos;ll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status && (
                    <div
                      className={`text-center text-sm py-2 rounded-xl ${
                        status.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {status}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Product Information">Product Information</option>
                        <option value="Business Partnership">Business Partnership</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Please enter your message here..."
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Right - Contact Info */}
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 sm:p-8 lg:p-12 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 sm:space-y-8 mb-auto">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1">Our Location</h4>
                    <p className="text-white/80 text-sm sm:text-base">
                      Empire Blue Pvt. Ltd.<br />
                      Chhindwara, Madhya Pradesh<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1">Call Us</h4>
                    <p className="text-white/80 text-sm sm:text-base">+91 8867268719</p>
                    <p className="text-white/80 text-sm sm:text-base">+91 8319439382</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1">Email Us</h4>
                    <p className="text-white/80 text-sm sm:text-base">info@empireblue.com</p>
                    <p className="text-white/80 text-sm sm:text-base">support@empireblue.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-12">
                <h4 className="text-base sm:text-lg font-semibold mb-4">Connect With Us</h4>
                <div className="flex gap-3 sm:gap-4">
                  <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}