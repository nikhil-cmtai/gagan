'use client';
import React, { useState } from 'react';
import { Star, Users, Shield } from 'lucide-react';

const coreValues = [
  {
    icon: <Shield className="w-10 h-10 text-primary mb-4" />,
    title: "Unmatched Purity",
    description: "Our water undergoes rigorous purification and is preserved with non-expiry technology, ensuring every drop is safe and healthy."
  },
  {
    icon: <Star className="w-10 h-10 text-primary mb-4" />,
    title: "Trusted Expertise",
    description: "With 15+ years in water technology and 50,000+ happy customers, we deliver reliability and innovation you can count on."
  },
  {
    icon: <Users className="w-10 h-10 text-primary mb-4" />,
    title: "Customer First",
    description: "We listen, adapt, and provide tailored solutions for every client, making your satisfaction our top priority."
  }
];

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: '',
    serviceType: 'non-expiry-water',
    orderQuantity: '',
    address: '',
    additionalRequirements: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Simple validation for required fields
  const validate = (data: typeof formData) => {
    const errors: { [key: string]: string } = {};
    if (!data.companyName) errors.companyName = 'Company Name is required';
    if (!data.contactPerson) errors.contactPerson = 'Contact Person is required';
    if (!data.email) errors.email = 'Email is required';
    if (!data.phone) errors.phone = 'Phone is required';
    if (!data.city) errors.city = 'City is required';
    if (!data.orderQuantity) errors.orderQuantity = 'Order Quantity is required';
    if (!data.address) errors.address = 'Address is required';
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    setSubmitSuccess(false);

    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setStatus('Please fill all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Compose admin email
      const adminSubject = `New Custom Branding Request from ${formData.companyName}`;
      const adminText = `
Company Name: ${formData.companyName}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
Order Quantity: ${formData.orderQuantity}
Address: ${formData.address}
Additional Requirements: ${formData.additionalRequirements}
      `.trim();

      const adminHtml = `
        <b>Company Name:</b> ${formData.companyName}<br/>
        <b>Contact Person:</b> ${formData.contactPerson}<br/>
        <b>Email:</b> ${formData.email}<br/>
        <b>Phone:</b> ${formData.phone}<br/>
        <b>City:</b> ${formData.city}<br/>
        <b>Order Quantity:</b> ${formData.orderQuantity}<br/>
        <b>Address:</b> ${formData.address}<br/>
        <b>Additional Requirements:</b> ${formData.additionalRequirements || '-'}
      `;

      // Compose user email
      const userSubject = 'Thank you for your Custom Branding Request!';
      const userText = `Dear ${formData.contactPerson || formData.companyName},\nThank you for reaching out to Empire Blue. We have received your request and will get back to you soon.`;
      const userHtml = `<b>Dear ${formData.contactPerson || formData.companyName},</b><br/>Thank you for reaching out to Empire Blue. We have received your request and will get back to you soon.`;

      const adminMail = fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'locationtracker21@gmail.com',
          subject: adminSubject,
          text: adminText,
          html: adminHtml,
        }),
      });

      const userMail = fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: formData.email,
          subject: userSubject,
          text: userText,
          html: userHtml,
        }),
      });

      const [adminRes, userRes] = await Promise.all([adminMail, userMail]);
      const adminData = await adminRes.json();
      const userData = await userRes.json();

      if (adminRes.ok && userRes.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          city: '',
          serviceType: 'non-expiry-water',
          orderQuantity: '',
          address: '',
          additionalRequirements: ''
        });
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
    <div className="min-h-screen bg-[#E6F3FF]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-[''] text-primary mb-6">Non-Expiry Water</h1>
              <p className="text-secondary text-lg md:text-xl leading-relaxed mb-8">
                Experience the world’s first truly non-expiry drinking water. Pure, safe, and preserved without chemicals — designed for homes, offices, and on-the-go.
              </p>
              <p className="text-secondary text-lg md:text-xl leading-relaxed">
                Trusted by 50,000+ customers with a 4.9/5 rating, backed by 15+ years of water technology expertise.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <div className="relative h-80 md:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-primary flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-8xl mb-4">💧</div>
                    <h3 className="text-2xl font-bold">Premium Water Solutions</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-[''] text-primary mb-6">Get Your Custom Branding</h2>
            <p className="text-secondary text-lg md:text-xl leading-relaxed">
              Tell us about your requirements and we&apos;ll provide a personalized solution
            </p>
          </div>

          <div className="bg-[#f3f9ff] rounded-3xl shadow-xl border-2 border-white p-8 md:p-12">
            <form onSubmit={handleSubmit} autoComplete="off">
              {status && (
                <div className={`mb-6 text-center ${submitSuccess ? 'text-green-600' : 'text-red-600'}`}>
                  {status}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-primary font-semibold mb-2">Company Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-primary font-semibold mb-2">Contact Person <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-primary font-semibold mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-primary font-semibold mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-primary font-semibold mb-2">City <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-primary font-semibold mb-2">Order Quantity <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="orderQuantity"
                    value={formData.orderQuantity}
                    onChange={handleInputChange}
                    placeholder="e.g., 1000 units"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-primary font-semibold mb-2">Address <span className="text-red-500">*</span></label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Full address for delivery/quotation"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-primary font-semibold mb-2">Additional Requirements</label>
                <textarea
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about any specific requirements, timeline, or special considerations..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-4 px-8 rounded-xl transition-colors duration-300 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#E6F3FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Why Choose Us?</h2>
            <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              Our core values drive everything we do. Here’s why Empire Blue is the trusted choice for non-expiry water solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-2 border-primary/10 hover:shadow-xl transition">
                {value.icon}
                <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-secondary text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
