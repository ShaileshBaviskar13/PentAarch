'use client';

export default function PortfolioHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.pinimg.com/736x/af/9f/e2/af9fe28d68ebe728166354f9b1543c39.jpg')`
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