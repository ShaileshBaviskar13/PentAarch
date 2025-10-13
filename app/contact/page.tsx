'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <div className="grid md:grid-cols-2 gap-0">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
      <Footer />
    </div>
  );
}