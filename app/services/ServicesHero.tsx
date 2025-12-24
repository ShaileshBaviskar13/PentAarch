'use client';

export default function ServicesHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.pinimg.com/736x/45/54/fb/4554fbfdb36baa36c9c704ae150a009b.jpg')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Comprehensive architectural and interior design solutions for all your needs
        </p>
      </div>
    </section>
  );
}