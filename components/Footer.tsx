"use client";

import Link from 'next/link';
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill, RiMailLine, RiPhoneLine, RiWhatsappLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Wave Animation Background */}
      <div className="footer-wave-bg">
        <svg className="footer-wave-svg" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 brand-font">PentaArch</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for interior design, construction, and architectural solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center social-glow facebook transition-colors cursor-pointer" title="Facebook" aria-label="Facebook">
                <RiFacebookFill className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center social-glow instagram transition-colors cursor-pointer" title="Instagram" aria-label="Instagram">
                <RiInstagramFill className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center social-glow youtube transition-colors cursor-pointer" title="YouTube" aria-label="YouTube">
                <RiYoutubeFill className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Interior Design</span></li>
              <li><span className="text-gray-400">Wall Painting</span></li>
              <li><span className="text-gray-400">Metallic Epoxy</span></li>
              <li><span className="text-gray-400">Civil Contracting</span></li>
              <li><span className="text-gray-400">Vastu Consultation</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <RiMailLine className="mr-2" />
                contact@pentaarch.com
              </p>
              <p className="flex items-center">
                <RiPhoneLine className="mr-2" />
                9139979899
              </p>
              <p className="flex items-center">
                <RiPhoneLine className="mr-2" />
                7219326600
              </p>
              <a href="https://wa.me/919139979899" className="flex items-center text-green-400 hover:text-green-300 transition-colors cursor-pointer">
                <RiWhatsappLine className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PentaArch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}