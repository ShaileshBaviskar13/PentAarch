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
        'https://PentAarch.ai/api/search-image?query=Modern%20living%20room%20interior%20design%20with%20contemporary%20furniture%2C%20elegant%20sofa%20set%2C%20stylish%20coffee%20table%2C%20and%20sophisticated%20decor%20in%20luxury%20home%20setting&width=400&height=300&seq=project1&orientation=landscape',
        'https://PentAarch.ai/api/search-image?query=Modern%20living%20room%20interior%20design%20alternative%20angle%20showing%20dining%20area%2C%20contemporary%20furniture%20arrangement%2C%20and%20elegant%20home%20decor&width=400&height=300&seq=project1b&orientation=landscape'
      ],
      description: 'Complete interior transformation of a 3BHK apartment with modern furniture and elegant decor'
    },
    {
      id: 2,
      name: 'Luxury Kitchen Design',
      category: 'Interior',
      images: [
        'https://PentAarch.ai/api/search-image?query=Luxury%20modular%20kitchen%20design%20with%20premium%20cabinets%2C%20granite%20countertops%2C%20modern%20appliances%2C%20and%20sophisticated%20kitchen%20interior&width=400&height=300&seq=project2&orientation=landscape',
        'https://PentAarch.ai/api/search-image?query=Luxury%20modular%20kitchen%20design%20showing%20island%20counter%2C%20premium%20finishes%2C%20and%20elegant%20kitchen%20layout&width=400&height=300&seq=project2b&orientation=landscape'
      ],
      description: 'Premium modular kitchen with smart storage solutions and high-end finishes'
    },
    {
      id: 3,
      name: 'Metallic Epoxy Office Floor',
      category: 'Flooring',
      images: [
        'https://PentAarch.ai/api/search-image?query=Stunning%20metallic%20epoxy%20flooring%20in%20modern%20office%20space%20with%20seamless%20metallic%20finish%2C%20contemporary%20design%2C%20and%20professional%20workspace&width=400&height=300&seq=project3&orientation=landscape',
        'https://PentAarch.ai/api/search-image?query=Metallic%20epoxy%20flooring%20close-up%20showing%20beautiful%20metallic%20patterns%2C%20smooth%20surface%2C%20and%20professional%20installation%20quality&width=400&height=300&seq=project3b&orientation=landscape'
      ],
      description: 'Seamless metallic epoxy flooring for a corporate office with stunning visual effects'
    },
    {
      id: 4,
      name: 'Stucco Marble Wall Texture',
      category: 'Wall Textures',
      images: [
        'https://PentAarch.ai/api/search-image?query=Beautiful%20stucco%20marble%20wall%20texture%20with%20elegant%20marble-like%20finish%2C%20sophisticated%20texture%20pattern%2C%20and%20luxury%20interior%20wall%20treatment&width=400&height=300&seq=project4&orientation=landscape',
        'https://PentAarch.ai/api/search-image?query=Stucco%20marble%20wall%20texture%20detail%20showing%20craftsmanship%2C%20texture%20depth%2C%20and%20professional%20wall%20finishing%20technique&width=400&height=300&seq=project4b&orientation=landscape'
      ],
      description: 'Elegant stucco marble texture application in a luxury hotel lobby'
    },
    {
      id: 5,
      name: 'Residential Construction',
      category: 'Civil',
      images: [
        'https://PentAarch.ai/api/search-image?query=Modern%20residential%20house%20construction%20with%20contemporary%20architecture%2C%20quality%20construction%20work%2C%20and%20professional%20building%20development&width=400&height=300&seq=project5&orientation=landscape',
        'https://PentAarch.ai/api/search-image?query=Residential%20construction%20showing%20interior%20structure%2C%20quality%20building%20materials%2C%20and%20skilled%20construction%20workmanship&width=400&height=300&seq=project5b&orientation=landscape'
      ],
      description: 'Complete construction of a modern 4BHK villa with contemporary design'
    },
    {
      id: 6,
      name: 'Restaurant Interior Design',
      category: 'Interior',
      images: [
        'https://PentAarch.ai/api/search-image?query=Elegant%20restaurant%20interior%20design%20with%20modern%20dining%20furniture%2C%20sophisticated%20lighting%2C%20and%20upscale%20dining%20atmosphere&width=400&height=300&seq=project6&orientation=landscape',
        'https://PentAarch.ai/api/search-image?query=Restaurant%20interior%20design%20showing%20bar%20area%2C%20contemporary%20seating%2C%20and%20professional%20restaurant%20ambiance&width=400&height=300&seq=project6b&orientation=landscape'
      ],
      description: 'Complete interior design for a fine dining restaurant with elegant ambiance'
    },
    {
      id: 7,
      name: '3D Epoxy Flooring',
      category: 'Flooring',
      images: [
        'https://PentAarch.ai/api/search-image?query=Amazing%203D%20epoxy%20flooring%20with%20optical%20illusion%20patterns%2C%20stunning%20visual%20effects%2C%20and%20artistic%20floor%20design%20in%20modern%20space&width=400&height=300&seq=project7&orientation=landscape',
        'https://PentAarch.ai/api/search-image?query=3D%20epoxy%20flooring%20showing%20depth%20effect%2C%20artistic%20patterns%2C%20and%20professional%20installation%20in%20contemporary%20interior&width=400&height=300&seq=project7b&orientation=landscape'
      ],
      description: 'Stunning 3D epoxy flooring with optical illusion effects for a showroom'
    },
    {
      id: 8,
      name: 'Velvet Paint Finish',
      category: 'Wall Textures',
      images: [
        'https://PentAarch.ai/api/search-image?query=Luxurious%20velvet%20paint%20finish%20on%20bedroom%20walls%20with%20soft%20texture%2C%20elegant%20appearance%2C%20and%20sophisticated%20wall%20treatment&width=400&height=300&seq=project8&orientation=landscape',
        'https://PentAarch.ai/api/search-image?query=Velvet%20paint%20finish%20detail%20showing%20smooth%20texture%2C%20rich%20color%20depth%2C%20and%20professional%20paint%20application%20technique&width=400&height=300&seq=project8b&orientation=landscape'
      ],
      description: 'Premium velvet paint finish for a luxury bedroom suite'
    },
    {
      id: 9,
      name: 'Commercial Building Construction',
      category: 'Civil',
      images: [
        'https://PentAarch.ai/api/search-image?query=Modern%20commercial%20building%20construction%20with%20contemporary%20architecture%2C%20professional%20construction%20quality%2C%20and%20skilled%20building%20development&width=400&height=300&seq=project9&orientation=landscape',
        'https://PentAarch.ai/api/search-image?query=Commercial%20building%20construction%20showing%20structural%20work%2C%20modern%20building%20techniques%2C%20and%20quality%20construction%20materials&width=400&height=300&seq=project9b&orientation=landscape'
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