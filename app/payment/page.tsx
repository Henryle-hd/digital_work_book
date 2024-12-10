'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 3 seconds
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 flex flex-col items-center justify-center p-4">
      {loading ? (
        <div className="flex justify-center items-center space-x-2">
          <div className="w-8 h-8 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          <span className="text-lg text-blue-600">Loading...</span>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-lg w-full">
          <h1 className="text-3xl font-semibold text-blue-600 mb-4">🎉 Payment Successful! 🎉</h1>
          <p className="text-lg text-gray-700 mb-6">
            {"Thank you for your purchase! Your plan is now activated, and we're thrilled to have you on board."}
          </p>
        </div>
      )}

    {!loading&&(<Link
        href="/workbook"  // Replace with your desired page link
        className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-light-blue-600 transition-all duration-300 mt-10"
      >
        Start Your 2025 Journey
      </Link>)}  
    </div>
  );
}
