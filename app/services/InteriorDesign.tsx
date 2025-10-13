'use client';

import Link from 'next/link';

export default function InteriorDesign() {
  const services = [
    {
      title: 'Modular Kitchens',
      description: 'Custom-designed modular kitchen solutions with premium finishes and smart storage',
      image: 'https://PentAarch.ai/api/search-image?query=Modern%20modular%20kitchen%20design%20with%20sleek%20cabinets%2C%20granite%20countertops%2C%20premium%20appliances%2C%20smart%20storage%20solutions%2C%20and%20contemporary%20lighting%20in%20elegant%20home%20interior&width=400&height=300&seq=kitchen1&orientation=landscape'
    },
    {
      title: 'Furniture Layouts',
      description: 'Space-optimized furniture arrangements for maximum functionality and aesthetics',
      image: 'https://PentAarch.ai/api/search-image?query=Professional%20furniture%20layout%20design%20in%20modern%20living%20room%20with%20contemporary%20seating%2C%20coffee%20table%2C%20storage%20units%2C%20and%20optimal%20space%20utilization%20in%20stylish%20home%20interior&width=400&height=300&seq=furniture1&orientation=landscape'
    },
    {
      title: 'Ceiling & Lighting',
      description: 'Innovative ceiling designs with strategic lighting solutions for ambiance',
      image: 'https://PentAarch.ai/api/search-image?query=Elegant%20ceiling%20design%20with%20modern%20lighting%20fixtures%2C%20recessed%20lights%2C%20pendant%20lamps%2C%20and%20sophisticated%20illumination%20in%20contemporary%20interior%20space&width=400&height=300&seq=lighting1&orientation=landscape'
    },
    {
      title: 'Turnkey Interiors',
      description: 'Complete interior solutions from concept to completion with end-to-end service',
      image: 'https://PentAarch.ai/api/search-image?query=Complete%20turnkey%20interior%20design%20project%20showing%20finished%20living%20space%20with%20furniture%2C%20decor%2C%20lighting%2C%20and%20all%20design%20elements%20perfectly%20coordinated%20in%20luxury%20home%20setting&width=400&height=300&seq=turnkey1&orientation=landscape'
    }
  ];

  return (
    <section id="interior-design" className="py-16 bg-white">
      <div className="container mx-auto px-8 pt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Interior Design & Execution</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Transform Your Space</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our interior design services combine functionality with aesthetics to create spaces that reflect 
                your personality and lifestyle. From concept to completion, we handle every aspect of your interior 
                design project with precision and creativity.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Custom design solutions tailored to your needs
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Premium materials and finishes
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  3D visualization and planning
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Complete project management
                </li>
              </ul>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Enquire Now
              </Link>
            </div>
            <div 
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://PentAarch.ai/api/search-image?query=Luxury%20interior%20design%20showcase%20with%20elegant%20furniture%2C%20sophisticated%20decor%2C%20premium%20materials%2C%20and%20professional%20interior%20design%20elements%20in%20modern%20home%20setting&width=600&height=400&seq=interior1&orientation=landscape')`
              }}
            ></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-28 mt-[-40px]">
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