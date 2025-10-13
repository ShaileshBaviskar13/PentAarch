'use client';

import { useState } from 'react';
import { contactAPI } from '../../lib/api';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Prepare contact data
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `Inquiry for ${formData.service || 'General Services'}`,
        message: formData.message,
        service: formData.service ? formData.service.toLowerCase().replace(/\s+/g, '-') : 'other'
      };

      // Call the backend API
      const response = await contactAPI.submitContact(contactData);

      if (response.success) {
        setSubmitStatus('Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmitStatus(error.message || 'Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get Free Consultation</h2>
          
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none"
                    title="Service Interested In"
                  >
                    <option value="">Select a service</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Wall Painting">Decorative Wall Painting</option>
                    <option value="Metallic Epoxy">Metallic Epoxy Flooring</option>
                    <option value="Civil Contracting">Civil Contracting</option>
                    <option value="Vastu Consultation">Vastu Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                placeholder="Tell us about your project requirements..."
              ></textarea>
              <div className="text-sm text-gray-500 mt-1">
                {formData.message.length}/500 characters
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || formData.message.length > 500}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap animated-btn"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus && (
              <div className={`text-center p-4 rounded-lg ${
                submitStatus.includes('Thank you') 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}