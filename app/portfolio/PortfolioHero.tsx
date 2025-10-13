'use client';

export default function PortfolioHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://PentAarch.ai/api/search-image?query=Professional%20portfolio%20showcase%20with%20multiple%20interior%20design%20projects%2C%20architectural%20drawings%2C%20finished%20spaces%2C%20and%20design%20portfolio%20presentation%20in%20elegant%20gallery%20setting&width=1200&height=600&seq=portfolio1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Explore our diverse collection of successful projects across interior design, construction, and architectural solutions
        </p>
      </div>
    </section>
  );
}