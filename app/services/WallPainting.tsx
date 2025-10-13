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
      image: 'https://PentAarch.ai/api/search-image?query=Luxurious%20PU%20deco%20wall%20finish%20with%20smooth%20polyurethane%20coating%2C%20elegant%20texture%2C%20and%20sophisticated%20appearance%20in%20modern%20interior%20setting%20with%20premium%20quality%20finish&width=300&height=200&seq=pu1&orientation=landscape'
    },
    {
      title: 'Finix Royale Velvet',
      description: 'Soft velvet texture paint that adds sophistication and warmth to any space',
      image: 'https://PentAarch.ai/api/search-image?query=Elegant%20velvet%20texture%20wall%20paint%20with%20soft%20luxurious%20finish%2C%20rich%20color%20depth%2C%20and%20sophisticated%20velvet%20appearance%20in%20upscale%20interior%20design&width=300&height=200&seq=velvet1&orientation=landscape'
    },
    {
      title: 'Stucco Marble',
      description: 'Authentic marble-like textures that provide the look of natural stone',
      image: 'https://PentAarch.ai/api/search-image?query=Beautiful%20stucco%20marble%20texture%20wall%20with%20natural%20stone%20appearance%2C%20elegant%20marble-like%20finish%2C%20and%20sophisticated%20texture%20in%20luxury%20interior%20space&width=300&height=200&seq=stucco1&orientation=landscape'
    },
    {
      title: 'Shine Coat Lustre',
      description: 'High-gloss lustrous finish that reflects light beautifully',
      image: 'https://PentAarch.ai/api/search-image?query=Glossy%20shine%20coat%20wall%20finish%20with%20high-gloss%20lustre%2C%20light-reflecting%20surface%2C%20and%20elegant%20shiny%20appearance%20in%20contemporary%20interior%20design&width=300&height=200&seq=shine1&orientation=landscape'
    },
    {
      title: 'OBD & Emulsions',
      description: 'Premium OBD paints and emulsions from the Finix range for lasting beauty',
      image: 'https://PentAarch.ai/api/search-image?query=Premium%20wall%20paint%20finish%20with%20smooth%20emulsion%20coating%2C%20vibrant%20color%2C%20and%20professional%20paint%20application%20in%20modern%20home%20interior%20setting&width=300&height=200&seq=emulsion1&orientation=landscape'
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
                backgroundImage: `url('https://PentAarch.ai/api/search-image?query=Professional%20wall%20painting%20artist%20applying%20decorative%20finish%20with%20specialized%20tools%2C%20artistic%20wall%20texture%20creation%2C%20and%20skilled%20craftsman%20working%20on%20premium%20wall%20treatment&width=600&height=400&seq=painting1&orientation=landscape')`
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