import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Sell Music', href: '/sell-music' },
    { label: 'Services', href: '/services' },
    { label: 'Artists', href: '/artists' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.jpg" alt="GOGO Digital Media" className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm text-label transition-colors duration-200 ${
                    location.pathname === link.href
                      ? 'text-[#D32F2F]'
                      : 'text-[#A0A0A0] hover:text-[#D32F2F]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-6 py-2 rounded-lg animate-pulse-glow transition-all duration-200 hover:scale-105"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 right-0 left-0 glass m-4 p-8 rounded-2xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-lg text-label transition-colors duration-200 ${
                    location.pathname === link.href
                      ? 'text-[#D32F2F]'
                      : 'text-[#A0A0A0] hover:text-[#D32F2F]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-6 py-3 rounded-lg mt-4">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
