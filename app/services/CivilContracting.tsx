'use client';

import Link from 'next/link';

export default function CivilContracting() {
  const services = [
    {
      title: 'New Construction',
      description: 'Complete construction services for residential and commercial buildings',
      image: 'https://i.pinimg.com/736x/22/44/cb/2244cb7777a9393d6bc1f9a739aef27f.jpg'
    },
    {
      title: 'Renovations',
      description: 'Transform existing spaces with modern renovation techniques',
      image: 'https://i.pinimg.com/1200x/6e/d3/f6/6ed3f649c70e77b071b0b0d9cb7dd763.jpg'
    },
    {
      title: 'Structural Modifications',
      description: 'Safe and efficient structural changes to optimize space utilization',
      image: 'https://i.pinimg.com/736x/13/dd/4b/13dd4bc6b45a303a6a5d47a70dd92cf8.jpg'
    },
    {
      title: 'Turnkey Projects',
      description: 'End-to-end construction solutions from design to completion',
      image: 'https://i.pinimg.com/736x/95/e7/f9/95e7f939e62dfa8cb48ed536dc87fdc9.jpg'
    }
  ];

  return (
    <section id="civil-contracting" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Civil Contracting</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div 
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://i.pinimg.com/736x/47/75/93/477593fdb78a813aafccb3d1cedaa0df.jpg')`
              }}
            ></div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Build Your Dreams</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our civil contracting services cover everything from new construction to major renovations. 
                With experienced engineers and skilled craftsmen, we deliver projects that meet the highest 
                standards of quality and safety.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Licensed and insured contractors
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Quality materials and techniques
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Timely project completion
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Safety compliance standards
                </li>
              </ul>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Get Quote
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-28">
            {services.map((service, index) => (
              <div key={index} className="service-animated-card">
                <div className="service-slide service-slide1">
                  <div className="service-img-full" style={{ backgroundImage: `url(${service.image})` }}></div>
                </div>
                <div className="service-slide service-slide2">
                  <div className="service-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
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