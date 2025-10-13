'use client';

import { useState } from 'react';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!email) {
        setError('Please enter your email address');
        return;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address');
        return;
      }

      // Simulate API call - replace with actual password reset logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, just show success
      console.log('Password reset requested for:', email);
      setSuccess(true);
      
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <i className="ri-check-line text-2xl text-green-600"></i>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Email Sent!</h3>
        <p className="text-gray-600 text-sm">
          We've sent password reset instructions to <strong>{email}</strong>. 
          Please check your email and follow the link to reset your password.
        </p>
        <button
          onClick={() => {
            setSuccess(false);
            setEmail('');
          }}
          className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
        >
          Send to a different email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="Enter your email address"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed animated-btn"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Sending...
          </div>
        ) : (
          'Send Reset Instructions'
        )}
      </button>
    </form>
  );
}
