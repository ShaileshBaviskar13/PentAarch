'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { apiUtils, authAPI } from '../lib/api';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null as any);
  const router = useRouter();
  // const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // If authenticated, fetch profile to show name
    if (apiUtils.isAuthenticated()) {
      authAPI.getProfile().then(res => {
        if (res && res.data) setUser(res.data.user || res.data);
      }).catch((err) => {
        // token may be invalid/expired – clear it so we don't keep
        // sending unauthorized requests and send user to login page.
        console.warn('Profile fetch failed, clearing auth state', err);
        apiUtils.removeAuthToken();
        setUser(null);
        router.push('/login');
      });
    }
  }, []);

  const handleLogout = async () => {
    await authAPI.logout();
    setUser(null);
    router.push('/');
  };



  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav-scrolled' : 'glass-nav'
      }`}
    >
      <div className={`container mx-auto px-4 transition-all duration-300${scrolled ? ' py-1' : ' py-2'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="h-8 overflow-visible flex items-center">
              <Image src="/Image/Pentaarch_logo.png" alt="Pentaarch logo" width={200} height={56} className="object-contain -translate-y-1" />
            </div>
            <span className="sr-only">PentaARCH</span>
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
              {!user ? (
                <>
                  <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer nav-glow">Login</Link>
                  <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer animated-btn">
                    Sign Up
                  </Link>
                </>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link href="/profile" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">{user.name || user.fullName || user.email}</Link>
                  <button onClick={handleLogout} className="text-sm text-red-600 hover:text-red-700 px-3 py-2 rounded-md border border-red-100">Logout</button>
                </div>
              )}
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