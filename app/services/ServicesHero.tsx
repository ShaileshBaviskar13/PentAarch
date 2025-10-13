'use client';

export default function ServicesHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://PentAarch.ai/api/search-image?query=Professional%20construction%20and%20interior%20design%20services%20showcase%20with%20various%20tools%2C%20materials%2C%20paint%20samples%2C%20flooring%20options%2C%20and%20architectural%20elements%20displayed%20in%20organized%20workshop%20setting&width=1200&height=600&seq=services1&orientation=landscape')`
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