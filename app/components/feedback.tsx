
'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import woman from '@/public/woman.jpg';
import man from '@/public/mann.jpg';
import student from '@/public/studentee.jpg';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Entrepreneur",
    image: woman.src,
    content: "The Timiza Malengo Yako workbook has completely transformed how I approach my business goals. Joel's methodology is simply outstanding!"
  },
  {
    name: "James K.",
    role: "Corporate Executive",
    image: man.src,
    content: "I've tried many goal-setting tools, but this digital workbook stands out. The structured approach and Joel's guidance made all the difference."
  },
  {
    name: "Maria L.",
    role: "Student",
    image: student.src,
    content: "As a student, this workbook helped me balance my academic goals with personal development. The premium version is worth every shilling!"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-sky-100 to-sky-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-sky-900">
          What Our Users Say
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center mb-8">
                      <div className="relative w-16 h-16 mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-sky-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg italic">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
              title='pg'
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-sky-600' : 'bg-sky-200'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
