'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './AboutHero';
import CompanyBackground from './CompanyBackground';
import FounderSection from './FounderSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <CompanyBackground />
        <FounderSection />
      </main>
      <Footer />
    </div>
  );
}
