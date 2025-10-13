"use client";

import Link from 'next/link';
import { RiAwardLine, RiPaletteLine, RiTimeLine } from 'react-icons/ri';

export default function IntroSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">About PentaArch</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            PentaArch is a premier architectural and interior design firm specializing in creating stunning, 
            functional spaces that reflect your unique style and vision. With years of experience in interior 
            design, decorative wall painting, metallic epoxy flooring, civil contracting, and Vastu consultation, 
            we bring your dream spaces to life.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RiAwardLine className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RiPaletteLine className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Solutions</h3>
              <p className="text-gray-600">Innovative designs tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RiTimeLine className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p className="text-gray-600">Projects completed on time and within budget</p>
            </div>
          </div>
          <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}