'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.pinimg.com/1200x/77/24/28/77242899b0a81751b8c7b8b0d4fbc023.jpg')`
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