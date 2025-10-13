"use client";

import { style } from 'framer-motion/client';
import Link from 'next/link';
import { RiHome4Line, RiBrushLine, RiDropLine, RiBuildingLine, RiCompassLine } from 'react-icons/ri';

export default function ServicesSection() {
  const services = [
    {
      icon: RiHome4Line,
      title: 'Interior Design',
      description: 'Complete interior solutions including modular kitchens, furniture layouts, and turnkey interiors.',
      image: 'https://i.pinimg.com/1200x/c6/fe/b0/c6feb0f2ab58c74a4bfad3e8a15df56c.jpg'
    },
    {
      icon: RiBrushLine,
      title: 'Decorative Wall Painting',
      description: 'Premium wall finishes including PU Deco, Finix Royale Velvet, and Stucco Marble textures.',
      image: 'https://i.pinimg.com/1200x/c4/75/36/c4753600c95ec3e98007ccd634df16be.jpg'
    },
    {
      icon: RiDropLine,
      title: 'Metallic Epoxy Flooring',
      description: '3D flooring effects with seamless metallic finishes and marble-like appearances.',
      image: 'https://i.pinimg.com/1200x/e5/07/41/e50741313d61a664fb769aa3dd3c11ad.jpg'
    },
    {
      icon: RiBuildingLine,
      title: 'Civil Contracting',
      description: 'Complete construction services from new builds to renovations and structural modifications.',
      image: 'https://i.pinimg.com/736x/88/dc/49/88dc49dbcfc2ebc7837c72510e1f36ce.jpg'
    },
    {
      icon: RiCompassLine,
      title: 'Vastu Consultation',
      description: 'Traditional Vastu principles integrated with modern design for positive energy flow.',
      image: 'https://i.pinimg.com/736x/7b/f4/1c/7bf41c9af6fc88f17586b511a014d198.jpg'
    }
  ];

  return (
    <section className="py-16 bg-gray-60">
      <div className="container mx-auto px-9">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions for all your architectural and interior design needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={service.image} alt={service.title} className="w-full h-40  object-cover" />
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer whitespace-nowrap">
                    Learn More →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}