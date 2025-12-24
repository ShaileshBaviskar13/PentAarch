'use client';

import Link from 'next/link';

export default function VastuConsultation() {
  return (
    <section id="vastu-consultation" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Vastu Consultation</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Harmonious Living Spaces</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Integrate ancient Vastu principles with modern design to create spaces that promote positive 
                energy flow, prosperity, and well-being. Our Vastu consultants work seamlessly with our 
                design and construction teams to ensure your space is both beautiful and harmonious.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Certified Vastu consultants
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Modern design integration
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Positive energy optimization
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Practical implementation
                </li>
              </ul>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Schedule Consultation
              </Link>
            </div>
            <div 
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://i.pinimg.com/736x/7b/f4/1c/7bf41c9af6fc88f17586b511a014d198.jpg')`
              }}
            ></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-animated-card">
              <div className="service-slide service-slide1">
                <img
                  src="https://i.pinimg.com/736x/78/21/bf/7821bfe8b908d562c927ff280d48d7e9.jpg"
                  alt="Energy Balancing"
                  className="service-img-full object-cover"
                />
              </div>
              <div className="service-slide service-slide2">
                <div className="service-content">
                  <h4>Energy Balancing</h4>
                  <p>Optimize the flow of positive energy throughout your space using traditional Vastu principles.</p>
                </div>
              </div>
            </div>
            <div className="service-animated-card">
              <div className="service-slide service-slide1">
                <img
                  src="https://i.pinimg.com/736x/7b/f4/1c/7bf41c9af6fc88f17586b511a014d198.jpg"
                  alt="Directional Design"
                  className="service-img-full object-cover"
                />
              </div>
              <div className="service-slide service-slide2">
                <div className="service-content">
                  <h4>Directional Design</h4>
                  <p>Strategic placement of rooms and elements based on cardinal directions for optimal results.</p>
                </div>
              </div>
            </div>
            <div className="service-animated-card">
              <div className="service-slide service-slide1">
                <img
                  src="https://i.pinimg.com/736x/07/1d/6c/071d6c64f831c379655781ad31a8ffc4.jpg"
                  alt="Seamless Integration"
                  className="service-img-full object-cover"
                />
              </div>
              <div className="service-slide service-slide2">
                <div className="service-content">
                  <h4>Seamless Integration</h4>
                  <p>Blend Vastu principles with contemporary design without compromising on aesthetics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}