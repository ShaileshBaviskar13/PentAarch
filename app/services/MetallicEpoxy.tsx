'use client';

import Link from 'next/link';

export default function MetallicEpoxy() {
  const flooringTypes = [
    {
      title: '3D Flooring Effects',
      description: 'Stunning three-dimensional patterns that create optical illusions',
      image: 'https://PentAarch.ai/api/search-image?query=Amazing%203D%20epoxy%20flooring%20with%20three-dimensional%20optical%20illusion%20patterns%2C%20stunning%20visual%20effects%2C%20and%20artistic%20floor%20design%20in%20modern%20interior%20space&width=300&height=200&seq=3d1&orientation=landscape'
    },
    {
      title: 'Marble-like Finishes',
      description: 'Elegant marble appearance with the durability of epoxy',
      image: 'https://PentAarch.ai/api/search-image?query=Luxurious%20marble-like%20epoxy%20flooring%20with%20elegant%20stone%20appearance%2C%20sophisticated%20marble%20patterns%2C%20and%20premium%20floor%20finish%20in%20upscale%20interior&width=300&height=200&seq=marble1&orientation=landscape'
    },
    {
      title: 'Seamless Metallic Effects',
      description: 'Continuous metallic surfaces with no joints or seams',
      image: 'https://PentAarch.ai/api/search-image?query=Seamless%20metallic%20epoxy%20flooring%20with%20continuous%20metallic%20surface%2C%20no%20joints%2C%20glossy%20finish%2C%20and%20contemporary%20industrial%20aesthetic%20in%20modern%20space&width=300&height=200&seq=metallic1&orientation=landscape'
    }
  ];

  return (
    <section id="metallic-epoxy" className="py-16 bg-white">
      <div className="container mx-auto px-8 pt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Metallic Epoxy & Flooring</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Revolutionary Flooring Solutions</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Experience the future of flooring with our metallic epoxy solutions. These innovative floors 
                combine artistic beauty with industrial strength, creating surfaces that are both stunning and practical.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Seamless and hygienic surface
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Chemical and stain resistant
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Easy maintenance and cleaning
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Unlimited design possibilities
                </li>
              </ul>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Enquire Now
              </Link>
            </div>
            <div 
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://PentAarch.ai/api/search-image?query=Professional%20metallic%20epoxy%20flooring%20installation%20process%20with%20skilled%20technician%20applying%20metallic%20epoxy%20coating%2C%20specialized%20tools%2C%20and%20modern%20flooring%20equipment&width=600&height=400&seq=epoxy1&orientation=landscape')`
              }}
            ></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {flooringTypes.map((flooring, index) => (
              <div key={index} className="service-animated-card">
                <div className="service-slide service-slide1">
                  <div className="service-img-full" style={{ backgroundImage: `url(${flooring.image})` }}></div>
                </div>
                <div className="service-slide service-slide2">
                  <div className="service-content">
                    <h4>{flooring.title}</h4>
                    <p>{flooring.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 bg-blue-100 rounded-lg p-12">
            <h3 className="text-2xl font-bold text-center mb-6">Why Choose Metallic Epoxy?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-timer-line text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Long-lasting</h4>
                <p className="text-sm text-gray-600">20+ years durability</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-drop-line text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Waterproof</h4>
                <p className="text-sm text-gray-600">Complete moisture protection</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-brush-line text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Easy Clean</h4>
                <p className="text-sm text-gray-600">Simple maintenance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-palette-line text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Customizable</h4>
                <p className="text-sm text-gray-600">Unlimited designs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}