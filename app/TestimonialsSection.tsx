
'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'Homeowner',
      text: 'PentaArch transformed our home beautifully. The interior design exceeded our expectations and the team was very professional throughout the project.'
    },
    {
      name: 'Priya Patel',
      role: 'Office Manager',
      text: 'The metallic epoxy flooring in our office looks stunning! The team delivered on time and the quality is exceptional. Highly recommended!'
    },
    {
      name: 'Amit Kumar',
      role: 'Restaurant Owner',
      text: 'The decorative wall painting in our restaurant created the perfect ambiance. PentaArch understood our vision and executed it perfectly.'
    },
    {
      name: 'Sunita Verma',
      role: 'Homeowner',
      text: 'The Vastu consultation helped us create a harmonious living space. The team integrated traditional principles with modern design beautifully.'
    }
  ];

  // Slideshow state
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, testimonials.length, paused]);

  const goTo = (idx: number) => setCurrent(idx);
  const goLeft = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goRight = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div
          className="relative max-w-xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Arrow navigation */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-100 text-blue-600 rounded-full p-2 shadow transition-all z-10"
            style={{transform: 'translateY(-50%)'}}
            onClick={goLeft}
            aria-label="Previous testimonial"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-100 text-blue-600 rounded-full p-2 shadow transition-all z-10"
            style={{transform: 'translateY(-50%)'}}
            onClick={goRight}
            aria-label="Next testimonial"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
          <div className="overflow-hidden">
            {/* Tailwind can't do dynamic translateX, so we use style for the slide effect */}
            <div
              className="transition-transform duration-1000 ease-in-out flex"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`min-w-full px-2 testimonial-slide${current === index ? ' active' : ''}`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <div className="flex items-center mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic leading-relaxed text-center">"{testimonial.text}"</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400"></i>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === idx ? 'bg-blue-600 scale-125' : 'bg-gray-300'}`}
                onClick={() => goTo(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}