"use client";

import { RiUserStarLine, RiMoneyDollarCircleLine, RiShieldCheckLine, RiCustomerServiceLine, RiTimeLine } from 'react-icons/ri';

export default function WhyChooseSection() {
  const reasons = [
    {
      icon: RiUserStarLine,
      title: 'Expert Professionals',
      description: 'Our team consists of certified architects, interior designers, and skilled craftsmen with years of experience in the industry.'
    },
    {
      icon: RiMoneyDollarCircleLine,
      title: 'Cost-Effective Solutions',
      description: 'We provide transparent pricing with no hidden costs, ensuring you get the best value for your investment.'
    },
    {
      icon: RiShieldCheckLine,
      title: 'Quality Assurance',
      description: 'We use only premium materials and follow strict quality control measures to ensure lasting results.'
    },
    {
      icon: RiCustomerServiceLine,
      title: '24/7 Support',
      description: 'Our dedicated support team is available round-the-clock to address any concerns or queries you may have.'
    },
    {
      icon: RiTimeLine,
      title: 'Timely Completion',
      description: 'We respect your time and ensure all projects are completed within the agreed timeline without compromising quality.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose PentaArch?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We stand out in the industry with our commitment to excellence and customer satisfaction
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}