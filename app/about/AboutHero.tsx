'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://PentAarch.ai/api/search-image?query=Professional%20architectural%20team%20working%20on%20blueprints%20and%20construction%20plans%20in%20modern%20office%20environment%20with%20natural%20lighting%2C%20teamwork%20collaboration%2C%20and%20architectural%20design%20tools%20showcasing%20company%20culture%20and%20expertise&width=1200&height=600&seq=about1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">About PentaArch</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Building dreams with expertise, innovation, and unwavering commitment to quality
        </p>
      </div>
    </section>
  );
}