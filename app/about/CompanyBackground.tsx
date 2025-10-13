'use client';

export default function CompanyBackground() {
  const timeline = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'PentaArch was established with a vision to revolutionize interior design and construction in the region.'
    },
    {
      year: '2019',
      title: 'First Major Project',
      description: 'Completed our first commercial interior design project for a leading corporate office.'
    },
    {
      year: '2020',
      title: 'Service Expansion',
      description: 'Added decorative wall painting and metallic epoxy flooring to our service portfolio.'
    },
    {
      year: '2021',
      title: 'Vastu Integration',
      description: 'Introduced Vastu consultation services to blend traditional wisdom with modern design.'
    },
    {
      year: '2022',
      title: 'Major Milestone',
      description: 'Completed 100+ successful projects across residential and commercial sectors.'
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Continuing to innovate and deliver exceptional architectural and interior solutions.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          
          <div className="mb-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded with a passion for creating exceptional spaces, PentaArch has grown from a small design studio 
              to a comprehensive architectural and interior design firm. Our commitment to quality, innovation, and 
              customer satisfaction has made us a trusted name in the industry.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in transforming ordinary spaces into extraordinary environments through our expertise in 
              interior design, decorative wall painting, metallic epoxy flooring, civil contracting, and Vastu consultation. 
              Each project is approached with creativity, precision, and a deep understanding of our clients' needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}