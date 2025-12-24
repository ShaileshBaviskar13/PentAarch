'use client';

import Link from 'next/link';

export default function InteriorDesign() {
  const services = [
    {
      title: 'Modular Kitchens',
      description: 'Custom-designed modular kitchen solutions with premium finishes and smart storage',
      image: 'https://i.pinimg.com/1200x/5e/c8/4e/5ec84e9403478fee24065dc348f0d197.jpg'
    },
    {
      title: 'Furniture Layouts',
      description: 'Space-optimized furniture arrangements for maximum functionality and aesthetics',
      image: 'https://i.pinimg.com/736x/27/dc/7f/27dc7fdf3fd3efab20703655dc395fca.jpg'
    },
    {
      title: 'Ceiling & Lighting',
      description: 'Innovative ceiling designs with strategic lighting solutions for ambiance',
      image: 'https://i.pinimg.com/736x/8b/35/49/8b354963a074593888b0c77aa0376ed3.jpg'
    },
    {
      title: 'Turnkey Interiors',
      description: 'Complete interior solutions from concept to completion with end-to-end service',
      image: 'https://i.pinimg.com/1200x/c8/79/ba/c879ba8c9772160014b0c740c85c8933.jpg'
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
                backgroundImage: `url('https://i.pinimg.com/1200x/29/01/48/290148fea19fd1b999cd29fbe0409e39.jpg')`
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