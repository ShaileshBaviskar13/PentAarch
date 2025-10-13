'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300${scrolled ? ' navbar-shrink' : ''}`}>
      <div className={`container mx-auto px-4 transition-all duration-300${scrolled ? ' py-2' : ' py-4'}`}>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'serif' }}>
            PentaArch
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer nav-glow">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer nav-glow">About Us</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer nav-glow">Services</Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer nav-glow">Portfolio</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer nav-glow">Contact</Link>
            
            {/* Authentication Links */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
              <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer nav-glow">Login</Link>
              <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer animated-btn">
                Sign Up
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 cursor-pointer animated-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            title={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`ri-menu-line text-2xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors py-2 cursor-pointer nav-glow">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors py-2 cursor-pointer nav-glow">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors py-2 cursor-pointer nav-glow">Services</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors py-2 cursor-pointer nav-glow">Portfolio</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2 cursor-pointer nav-glow">Contact</Link>
              
              {/* Mobile Authentication Links */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 mt-4">
                <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors py-2 cursor-pointer nav-glow">Sign In</Link>
              </div>
            </div>
          </nav>
        )}
      </div>


    </header>
  );
}