'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHero from './PortfolioHero';
import ProjectGallery from './ProjectGallery';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PortfolioHero />
        <ProjectGallery />
      </main>
      <Footer />
    </div>
  );
}