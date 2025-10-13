'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import IntroSection from './IntroSection';
import ServicesSection from './ServicesSection';
import WhyChooseSection from './WhyChooseSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}