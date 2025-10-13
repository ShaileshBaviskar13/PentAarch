'use client';

export default function ContactInfo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-phone-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone Numbers</h3>
                  <p className="text-gray-600">Call us anytime</p>
                </div>
              </div>
              <div className="space-y-2">
                <a href="tel:+919139979899" className="block text-blue-600 hover:text-blue-800 cursor-pointer">
                  +91 9139979899
                </a>
                <a href="tel:+917219326600" className="block text-blue-600 hover:text-blue-800 cursor-pointer">
                  +91 7219326600
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-mail-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email Address</h3>
                  <p className="text-gray-600">Send us a message</p>
                </div>
              </div>
              <a href="mailto:contact@pentaarch.com" className="text-blue-600 hover:text-blue-800 cursor-pointer">
                contact@pentaarch.com
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-whatsapp-line text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">WhatsApp</h3>
                  <p className="text-gray-600">Quick chat support</p>
                </div>
              </div>
              <a 
                href="https://wa.me/919139979899" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap inline-block"
              >
                Chat on WhatsApp
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-time-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Business Hours</h3>
                  <p className="text-gray-600">We're available</p>
                </div>
              </div>
              <div className="space-y-2 text-gray-700">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
          
          {/* Google Map */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Our Location</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PentaArch Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}