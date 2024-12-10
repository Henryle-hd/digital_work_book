  'use client'
  import { useState, useEffect } from 'react';
  import Link from 'next/link';
  import { usePathname } from 'next/navigation';

  export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-indigo-900 via-sky-900 to-blue-800 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className={`text-2xl font-bold ${isHome || isScrolled ? 'text-white' : 'text-sky-900'}`}>
              <span className="text-blue-500">Work</span><span className="text-blue-50">Book.</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`${isHome || isScrolled ? 'text-white' : 'text-sky-900'} hover:text-cyan-300 transition-colors`}>
                Home
              </Link>
              {isHome && (
                <Link href="#plans" className={`${isHome || isScrolled ? 'text-white' : 'text-sky-900'} hover:text-cyan-300 transition-colors`}>
                  Plans
                </Link>
              )}
              {!isHome && (
                <span className="text-green-400 font-semibold">PAID</span>
              )}
              <Link href="/" className={`${isHome || isScrolled ? 'text-white' : 'text-sky-900'} hover:text-cyan-300 transition-colors`}>
                About
              </Link>
              <Link href="/" className={`${isHome || isScrolled ? 'text-white' : 'text-sky-900'} hover:text-cyan-300 transition-colors`}>
                Contact
              </Link>
              {isHome && (
                <Link 
                  href="#plans" 
                  className="bg-white text-sky-900 px-6 py-2 rounded-lg hover:bg-sky-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
              )}
            </div>

            <button className={`md:hidden ${isHome || isScrolled ? 'text-white' : 'text-sky-900'}`} title='Menu'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  }
