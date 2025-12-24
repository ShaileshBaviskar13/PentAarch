'use client';

export default function FounderSection() {
  const founders = [
    {
      name: 'Hrishikesh Pokharkar',
      role: 'Founder & Chief Architect',
      image: '"C:\\Users\\shail\\Desktop\\Pentaarch-Copy\\Hrishikesh_pokharkar.jpg"',
      bio: 'With over 15 years of experience in architecture and interior design, Arjun founded PentaArch with a vision to create spaces that inspire and transform lives. He holds a Master\'s degree in Architecture and is passionate about sustainable design practices.',
      expertise: ['Architectural Design', 'Project Management', 'Sustainable Building']
    },
    {
      name: 'Girish Kakad',
      role: 'Co-Founder & Interior Design Director',
      image: '"C:\\Users\\shail\\Desktop\\Pentaarch-Copy\\Girish_kakad.jpg"',
      bio: 'Girish brings creativity and precision to every project. With a background in Fine Arts and Interior Design, she specializes in creating functional yet beautiful spaces. Her attention to detail and innovative approach has earned recognition in the industry.',
      expertise: ['Interior Design', 'Color Theory', 'Space Planning']
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Founders</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-80 bg-cover bg-center" style={{ backgroundImage: `url(${founder.image})` }}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{founder.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{founder.bio}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}