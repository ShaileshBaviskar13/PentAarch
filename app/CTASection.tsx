'use client';


import Link from 'next/link';
import React from 'react';

export default function CTASection() {
  // Slide-up animation logic
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = React.useState(false);
  React.useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://PentAarch.ai/api/search-image?query=Modern%20architectural%20consultation%20meeting%20with%20blueprints%2C%20construction%20plans%2C%20interior%20design%20sketches%2C%20and%20professional%20consultation%20setup%20in%20elegant%20office%20environment%20with%20natural%20lighting&width=1200&height=600&seq=cta1&orientation=landscape')`
      }}
    >
      <div className={`container mx-auto px-4 text-center cta-slide-up${revealed ? ' revealed' : ''}`}>
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Space?</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Get in touch with our experts for a free consultation and let us bring your vision to life
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="animated-btn pulse-glow bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Book a Site Visit
          </Link>
          <Link href="/contact" className="animated-btn pulse-glow bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Get Free Consultation
          </Link>
          <a href="https://wa.me/919139979899" className="animated-btn bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-whatsapp-line mr-2"></i>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}