"use client";

import { useState, FormEvent } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email) {
      setStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: 'Please enter your email address.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    try {
      setStatus({
        ...status,
        isSubmitting: true,
        message: ''
      });
      
      // In a real application, you would send this to an API endpoint
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success
      setStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Thank you for subscribing to our newsletter!'
      });
      
      // Reset form
      setEmail('');
      
    } catch (error) {
      let errorMessage = 'Failed to subscribe. Please try again later.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: errorMessage
      });
    }
  };

  return (
    <div>
      {/* Form status message */}
      {status.isSubmitted && (
        <div className={`p-4 mb-4 rounded-md ${status.isError ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
          {status.message}
        </div>
      )}
      
      <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="flex-grow px-4 py-3 text-gray-500 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400"
          disabled={status.isSubmitting}
        >
          {status.isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      <p className="text-gray-500 text-sm mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
