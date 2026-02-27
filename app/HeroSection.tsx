'use client';

import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [revealed, setRevealed] = useState(false);

  // Parallax effect for image
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const y = window.scrollY;
        imageRef.current.style.transform = `translateY(${y * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    setRevealed(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden hero-gradient-bg">
      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 z-0 hero-gradient-bg" aria-hidden="true"></div>
      {/* SVG Paint/Wave Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none select-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        </svg>
        {/* Particle Effect Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-30">
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className={`particle-dot particle-dot-${i}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      {/* Parallax/slide-in image */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-10 hero-image-slide"  
        style={{
          backgroundImage:`linear-gradient(rgba(27, 34, 34, 0.5),rgba(14, 16, 16, 0.5)), url('https://i.pinimg.com/1200x/f6/44/d5/f644d5876131e9a18d6a0c6d52af523e.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-20 cta-slide-up ${revealed ? 'revealed' : ''}`}>
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight fade-in-scale" style={{fontFamily: 'Quicksand, Raleway,Nunito Sans, sens-serif ', color: '#faf8f8ff', animationDelay: '0.1s'}}>
           <span className="masked-text">Precision</span> in Design.
           <br className="hidden sm:block" />
           <span className="masked-text">Perfection</span> in Execution.
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-xl sm:max-w-3xl mx-auto fade-in-scale" style={{animationDelay: '0.2s', color: '#ffffffcc'}}>
          Expert interior design, construction, and architectural solutions for homes and offices
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-scale" style={{animationDelay: '0.4s'}}>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap animated-btn pulse-glow">
            Get Free Consultation
          </Link>
          <Link href="/portfolio" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}