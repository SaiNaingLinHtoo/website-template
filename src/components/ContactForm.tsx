"use client";

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    try {
      setFormStatus({
        ...formStatus,
        isSubmitting: true,
        message: ''
      });
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      
      // Success
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: data.message || 'Thank you for your message. We will get back to you soon!'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      let errorMessage = 'Failed to submit the form. Please try again later.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: errorMessage
      });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Form status message */}
      {formStatus.isSubmitted && (
        <div className={`p-4 rounded-md ${formStatus.isError ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
          {formStatus.message}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
        <textarea 
          id="message" 
          name="message" 
          rows={6} 
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>
      
      <div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400"
          disabled={formStatus.isSubmitting}
        >
          {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
