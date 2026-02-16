import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#1A1A1A] pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <img src="/logo.jpg" alt="GOGO Digital Media" className="h-12 w-auto mb-6" />
            <p className="text-[#A0A0A0] mb-6 leading-relaxed">
              Empowering independent artists with global music distribution across all major
              streaming platforms.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-[#D32F2F] transition-all duration-200"
              >
                <Facebook size={18} className="text-[#A0A0A0] hover:text-[#D32F2F]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-[#D32F2F] transition-all duration-200"
              >
                <Twitter size={18} className="text-[#A0A0A0] hover:text-[#D32F2F]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-[#D32F2F] transition-all duration-200"
              >
                <Instagram size={18} className="text-[#A0A0A0] hover:text-[#D32F2F]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-[#D32F2F] transition-all duration-200"
              >
                <Youtube size={18} className="text-[#A0A0A0] hover:text-[#D32F2F]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-[#D32F2F] transition-all duration-200"
              >
                <Linkedin size={18} className="text-[#A0A0A0] hover:text-[#D32F2F]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#A0A0A0] hover:text-[#D32F2F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sell-music" className="text-[#A0A0A0] hover:text-[#D32F2F] transition-colors">
                  Sell Music
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#A0A0A0] hover:text-[#D32F2F] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/artists" className="text-[#A0A0A0] hover:text-[#D32F2F] transition-colors">
                  Artists
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#A0A0A0] hover:text-[#D32F2F] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#A0A0A0] hover:text-[#D32F2F] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-[#A0A0A0]">Music Distribution</li>
              <li className="text-[#A0A0A0]">Rights Management</li>
              <li className="text-[#A0A0A0]">Royalty Tracking</li>
              <li className="text-[#A0A0A0]">Copyright Protection</li>
              <li className="text-[#A0A0A0]">Marketing Tools</li>
              <li className="text-[#A0A0A0]">Analytics Dashboard</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#D32F2F] mt-1" />
                <span className="text-[#A0A0A0]">contact@gogodigital.media</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#D32F2F] mt-1" />
                <span className="text-[#A0A0A0]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#D32F2F] mt-1" />
                <span className="text-[#A0A0A0]">
                  Music District, Creative Avenue
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1A1A1A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#A0A0A0] text-sm">
              © {currentYear} GOGO Digital Media. All rights reserved.
            </p>
            <p className="text-[#A0A0A0] text-sm">
              Founded by <span className="text-[#D32F2F] font-semibold">Pawan Kushwaha</span>
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[#A0A0A0] hover:text-[#D32F2F] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#A0A0A0] hover:text-[#D32F2F] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
