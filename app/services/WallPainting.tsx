'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function WallPainting() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = section.querySelectorAll('.service-card');
    const reveal = (entries: any[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };
    const observer = new window.IntersectionObserver(reveal, { threshold: 0.15 });
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const paintTypes = [
    {
      title: 'PU Deco Finishes',
      description: 'Premium polyurethane-based decorative finishes for durability and elegance',
      image: 'https://i.pinimg.com/736x/e7/f1/b0/e7f1b0d38c43ac6c50fadbc6a56fcd5c.jpg'
    },
    {
      title: 'Finix Royale Velvet',
      description: 'Soft velvet texture paint that adds sophistication and warmth to any space',
      image: 'https://i.pinimg.com/1200x/28/7a/61/287a6120474aebdba28813a266d779c1.jpg'
    },
    {
      title: 'Stucco Marble',
      description: 'Authentic marble-like textures that provide the look of natural stone',
      image: 'https://i.pinimg.com/1200x/7a/b1/cf/7ab1cf798c515454c3ffe9bf06faa4b9.jpg'
    },
    {
      title: 'Shine Coat Lustre',
      description: 'High-gloss lustrous finish that reflects light beautifully',
      image: 'https://i.pinimg.com/1200x/c8/d5/45/c8d545c12f9ae0a81959963b7d1e51ac.jpg'
    },
    {
      title: 'OBD & Emulsions',
      description: 'Premium OBD paints and emulsions from the Finix range for lasting beauty',
      image: 'https://i.pinimg.com/1200x/4c/e7/eb/4ce7ebf61418910017d0f0c26fd94d73.jpg'
    }
  ];

  return (
  <section id="wall-painting" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Decorative Wall Painting</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div 
              className="h-96 bg-cover bg-center rounded-lg service-card scroll-reveal"
              style={{
                backgroundImage: `url('https://i.pinimg.com/1200x/52/f3/38/52f338f7f3245f3dbb6b2e840b4323d1.jpg')`
              }}
            ></div>
            <div className="service-card scroll-reveal">
              <h3 className="text-2xl font-semibold mb-6">Premium Wall Finishes</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Transform your walls into works of art with our premium decorative painting services. 
                We specialize in various textures and finishes that add character and elegance to any space.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Expert application techniques
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Premium quality materials
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Customized color schemes
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Long-lasting durability
                </li>
              </ul>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Explore More
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintTypes.map((paint, index) => (
              <div key={index} className="service-animated-card">
                <div className="service-slide service-slide1">
                  <div className="service-img-full" style={{ backgroundImage: `url(${paint.image})` }}></div>
                </div>
                <div className="service-slide service-slide2">
                  <div className="service-content">
                    <h4>{paint.title}</h4>
                    <p>{paint.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}