"use client";

import { useState } from "react";

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const filters = ["All", "Interior", "Flooring", "Wall Textures", "Civil"];

  const projects = [
    {
      id: 1,
      name: 'Modern Living Room Design',
      category: 'Interior',
      images: [
        'https://i.pinimg.com/1200x/0e/d8/f9/0ed8f902b06edf50ceab654d22c555e0.jpg',
        'https://i.pinimg.com/1200x/2f/59/06/2f5906be2620ca5d21aca8dfb3343dae.jpg'
      ],
      description: 'Complete interior transformation of a 3BHK apartment with modern furniture and elegant decor'
    },
    {
      id: 2,
      name: 'Luxury Kitchen Design',
      category: 'Interior',
      images: [
        'https://i.pinimg.com/1200x/8c/25/25/8c25256a69be09fb1fea374e655e372f.jpg',
        'https://i.pinimg.com/1200x/cb/8b/ab/cb8babe838137d6c562f6d87eef37567.jpg'
      ],
      description: 'Premium modular kitchen with smart storage solutions and high-end finishes'
    },
    {
      id: 3,
      name: 'Metallic Epoxy Office Floor',
      category: 'Flooring',
      images: [
        'https://i.pinimg.com/736x/23/ef/89/23ef896e325cc76dc5e26aea72ced5f0.jpg',
        'https://i.pinimg.com/1200x/df/4d/67/df4d6756598a9a0c6235f2461c76e8df.jpg'
      ],
      description: 'Seamless metallic epoxy flooring for a corporate office with stunning visual effects'
    },
    {
      id: 4,
      name: 'Stucco Marble Wall Texture',
      category: 'Wall Textures',
      images: [
        'https://i.pinimg.com/1200x/98/81/dc/9881dc4a0cd1f95713a55a67372e3cbd.jpg',
        'https://i.pinimg.com/736x/32/95/08/329508d57ade9bf0a19abb61c25d004b.jpg'
      ],
      description: 'Elegant stucco marble texture application in a luxury hotel lobby'
    },
    {
      id: 5,
      name: 'Residential Construction',
      category: 'Civil',
      images: [
        'https://i.pinimg.com/736x/11/ee/db/11eedbcad239c00c7da87839d9c43587.jpg',
        'https://i.pinimg.com/1200x/73/69/22/7369227c976d3ddddcf6ca9fb11f6a47.jpg'
      ],
      description: 'Complete construction of a modern 4BHK villa with contemporary design'
    },
    {
      id: 6,
      name: 'Restaurant Interior Design',
      category: 'Interior',
      images: [
        'https://i.pinimg.com/1200x/97/d8/33/97d83368da20e0b09038e62aa0ac095c.jpg',
        'https://i.pinimg.com/736x/9a/5d/b6/9a5db6665e040adf7ea908159bf95a31.jpg'
      ],
      description: 'Complete interior design for a fine dining restaurant with elegant ambiance'
    },
    {
      id: 7,
      name: '3D Epoxy Flooring',
      category: 'Flooring',
      images: [
        'https://i.pinimg.com/1200x/40/3e/d9/403ed97d3385acc38a8204d47543ada8.jpg',
        'https://i.pinimg.com/1200x/4a/e8/9a/4ae89ad476348840e7a29e0803b8c77a.jpg'
      ],
      description: 'Stunning 3D epoxy flooring with optical illusion effects for a showroom'
    },
    {
      id: 8,
      name: 'Velvet Paint Finish',
      category: 'Wall Textures',
      images: [
        'https://i.pinimg.com/1200x/1b/e9/5d/1be95d8b01c3140192bf038fc52cd25b.jpg',
        'https://i.pinimg.com/1200x/53/99/70/539970f517f29bb8ec3d11b7765f4a8b.jpg'
      ],
      description: 'Premium velvet paint finish for a luxury bedroom suite'
    },
    {
      id: 9,
      name: 'Commercial Building Construction',
      category: 'Civil',
      images: [
        'https://i.pinimg.com/736x/12/21/3e/12213eaf3dfd43e1c7b4012866cba46d.jpg',
        'https://i.pinimg.com/1200x/23/5c/4a/235c4ac10448ed5f0a200bfe22738cd2.jpg'
      ],
      description: 'Construction of a modern commercial complex with advanced building techniques'
    }
  ];
  
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-8">Our Projects</h2>
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap animated-btn ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          {/* Stacked Cards Projects Grid */}
          <div className="stacked-cards-grid">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="stacked-card bg-white rounded-lg overflow-hidden"
                style={{ zIndex: idx + 1 }}
              >
                <div className="relative group h-64">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover object-top gallery-img"
                    onClick={() => setLightbox({ src: project.images[0], alt: project.name })}
                  />
                  <div className="absolute inset-0 pointer-events-none gallery-img-overlay"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${project.name} ${index + 1}`}
                        className="w-16 h-16 object-cover object-top rounded cursor-pointer gallery-img-thumb"
                        onClick={() => setLightbox({ src: image, alt: `${project.name} ${index + 1}` })}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Lightbox Overlay */}
          {lightbox && (
            <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
              <img src={lightbox.src} alt={lightbox.alt} className="gallery-lightbox-img" />
              <button
                className="gallery-lightbox-close"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          )}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}