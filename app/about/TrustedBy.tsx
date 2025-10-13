'use client';


import React from 'react';

export default function TrustedBy() {
  // Replace these URLs with your actual client logo URLs
  const clientLogos = [
    { name: 'Reliance Industries', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Reliance_Industries_Logo.svg' },
    { name: 'Tata Group', url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Tata_Group_logo.svg' },
    { name: 'Mahindra & Mahindra', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Mahindra_logo.svg' },
    { name: 'Bajaj Auto', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Bajaj_Auto_logo.svg' },
    { name: 'Godrej Group', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Godrej_Logo.svg' },
    { name: 'Wipro Limited', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'Infosys', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Infosys_logo.svg' },
    { name: 'Tech Mahindra', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Tech_Mahindra_logo.svg' },
    { name: 'L&T Construction', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Larsen_%26_Toubro_logo.svg' },
    { name: 'Adani Group', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Adani_Logo.svg' },
    { name: 'Birla Group', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Aditya_Birla_Group_logo.svg' },
    { name: 'ITC Limited', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/ITC_Limited_Logo.svg' },
  ];

  // Animated numbers state (fix hydration mismatch)
  const [mounted, setMounted] = React.useState(false);
  const [projects, setProjects] = React.useState(150);
  const [clients, setClients] = React.useState(50);
  const [years, setYears] = React.useState(6);

  React.useEffect(() => {
    setMounted(true);
    let proj = 0, cli = 0, yrs = 0;
    const projTarget = 150, cliTarget = 50, yrsTarget = 6;
    const duration = 1200; // ms
    const steps = 40;
    const projStep = Math.ceil(projTarget / steps);
    const cliStep = Math.ceil(cliTarget / steps);
    const yrsStep = Math.ceil(yrsTarget / steps);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      proj = Math.min(proj + projStep, projTarget);
      cli = Math.min(cli + cliStep, cliTarget);
      yrs = Math.min(yrs + yrsStep, yrsTarget);
      setProjects(proj);
      setClients(cli);
      setYears(yrs);
      if (count >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Trusted By Leading Companies</h2>
          <p className="text-lg text-gray-600 mb-12">
            We have had the privilege of working with some of India's most prestigious companies and organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                <img
                  src={client.url}
                  alt={client.name + ' logo'}
                  className="h-12 object-contain max-w-[120px] grayscale hover:grayscale-0 transition-all duration-300"
                  title={client.name}
                />
              </div>
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-500">{mounted ? projects : 150}+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-500">{mounted ? clients : 50}+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-500">{mounted ? years : 6}+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}