'use client';

import Link from 'next/link';
import { RiCheckLine, RiTimerLine, RiDropLine, RiBrushLine, RiPaletteLine } from 'react-icons/ri';

export default function MetallicEpoxy() {
  const flooringTypes = [
    {
      title: '3D Flooring Effects',
      description: 'Stunning three-dimensional patterns that create optical illusions',
      image: 'https://i.pinimg.com/736x/ff/84/67/ff8467f8b582acb9b2276653baebdac4.jpg'
    },
    {
      title: 'Marble-like Finishes',
      description: 'Elegant marble appearance with the durability of epoxy',
      image: 'https://i.pinimg.com/736x/f9/88/7b/f9887b8bbfc92f093d57245a11cda555.jpg'
    },
    {
      title: 'Seamless Metallic Effects',
      description: 'Continuous metallic surfaces with no joints or seams',
      image: 'https://i.pinimg.com/1200x/08/49/a4/0849a427e01bada2442e6da80adceac9.jpg'
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
              <img
                src="https://i.pinimg.com/1200x/85/a8/87/85a887e62e793eaad82c4a9b84d98b0e.jpg"
                alt="Metallic epoxy installation"
                className="w-full h-96 object-cover rounded-lg"
              />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {flooringTypes.map((flooring, index) => (
              <div key={index} className="service-animated-card">
                <div className="service-slide service-slide1">
                  <img src={flooring.image} alt={flooring.title} className="service-img-full object-cover" />
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
                  <RiTimerLine className="text-white text-xl" />
                </div>
                <h4 className="font-semibold mb-2">Long-lasting</h4>
                <p className="text-sm text-gray-600">20+ years durability</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <RiDropLine className="text-white text-xl" />
                </div>
                <h4 className="font-semibold mb-2">Waterproof</h4>
                <p className="text-sm text-gray-600">Complete moisture protection</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <RiBrushLine className="text-white text-xl" />
                </div>
                <h4 className="font-semibold mb-2">Easy Clean</h4>
                <p className="text-sm text-gray-600">Simple maintenance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <RiPaletteLine className="text-white text-xl" />
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