'use client';

import Link from 'next/link';

export default function CivilContracting() {
  const services = [
    {
      title: 'New Construction',
      description: 'Complete construction services for residential and commercial buildings',
      image: 'https://PentAarch.ai/api/search-image?query=New%20construction%20project%20with%20modern%20building%20construction%2C%20steel%20framework%2C%20concrete%20work%2C%20and%20skilled%20construction%20workers%20in%20active%20building%20site&width=300&height=200&seq=construction1&orientation=landscape'
    },
    {
      title: 'Renovations',
      description: 'Transform existing spaces with modern renovation techniques',
      image: 'https://PentAarch.ai/api/search-image?query=Home%20renovation%20project%20showing%20before%20and%20after%20transformation%2C%20modern%20renovation%20work%2C%20updated%20interiors%2C%20and%20construction%20improvement%20activities&width=300&height=200&seq=renovation1&orientation=landscape'
    },
    {
      title: 'Structural Modifications',
      description: 'Safe and efficient structural changes to optimize space utilization',
      image: 'https://PentAarch.ai/api/search-image?query=Structural%20modification%20work%20with%20engineering%20precision%2C%20beam%20installation%2C%20wall%20modifications%2C%20and%20professional%20structural%20engineering%20in%20construction%20project&width=300&height=200&seq=structural1&orientation=landscape'
    },
    {
      title: 'Turnkey Projects',
      description: 'End-to-end construction solutions from design to completion',
      image: 'https://PentAarch.ai/api/search-image?query=Turnkey%20construction%20project%20showing%20complete%20building%20development%20from%20foundation%20to%20finish%2C%20modern%20architecture%2C%20and%20comprehensive%20construction%20services&width=300&height=200&seq=turnkey2&orientation=landscape'
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
                backgroundImage: `url('https://PentAarch.ai/api/search-image?query=Professional%20construction%20team%20working%20on%20civil%20engineering%20project%20with%20heavy%20machinery%2C%20construction%20equipment%2C%20and%20skilled%20workers%20in%20modern%20building%20construction&width=600&height=400&seq=civil1&orientation=landscape')`
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