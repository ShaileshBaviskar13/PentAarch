'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from './ServicesHero';
import InteriorDesign from './InteriorDesign';
import WallPainting from './WallPainting';
import MetallicEpoxy from './MetallicEpoxy';
import CivilContracting from './CivilContracting';
import VastuConsultation from './VastuConsultation';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <InteriorDesign />
        <WallPainting />
        <MetallicEpoxy />
        <CivilContracting />
        <VastuConsultation />
      </main>
      <Footer />
    </div>
  );
}