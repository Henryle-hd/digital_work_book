
'use client'
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'henrydionizi@gmail.com',
          from: formData.email,
          message: formData.message
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="bg-gradient-to-b from-sky-200 to-sky-100 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-sky-900">Contact Us</h2>
          <p className="text-gray-600 text-center mb-12">{"Have questions about our services? Send us a message and we'll get back to you as soon as possible."}</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white px-8 py-4 rounded-lg hover:from-sky-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
