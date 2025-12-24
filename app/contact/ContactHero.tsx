'use client';

export default function ContactHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://Pentaarch.ai/api/search-image?query=Professional%20consultation%20meeting%20with%20clients%2C%20architectural%20discussion%2C%20project%20planning%2C%20and%20business%20communication%20in%20modern%20office%20environment%20with%20natural%20lighting&width=1200&height=600&seq=contact1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Ready to transform your space? Contact our experts for a free consultation
        </p>
      </div>
    </section>
  );
}