"use client";

import { RiEyeLine, RiCrosshairLine, RiShieldCheckLine, RiLightbulbLine, RiHeartLine } from 'react-icons/ri';

export default function VisionMission() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <RiEyeLine className="text-3xl text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading architectural and interior design firm that transforms spaces into inspiring 
                environments, combining innovative design with traditional wisdom to create sustainable and 
                harmonious living and working spaces.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <RiCrosshairLine className="text-3xl text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide exceptional architectural and interior design services that exceed client expectations 
                through creative solutions, quality craftsmanship, and personalized service. We are committed to 
                delivering projects on time, within budget, and with the highest standards of excellence.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RiShieldCheckLine className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-600">We never compromise on quality and use only the finest materials and skilled craftsmanship.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RiLightbulbLine className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">We embrace new technologies and design trends to deliver cutting-edge solutions.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RiHeartLine className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-gray-600">We conduct business with honesty, transparency, and respect for all stakeholders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}