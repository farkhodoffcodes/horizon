import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'Home', label: 'Home' },
    { id: 'DeFi App', label: 'DeFi App' },
    { id: 'Assets', label: 'Assets' },
    { id: 'Features', label: 'Features' },
    { id: 'Pricing', label: 'Pricing' },
    { id: 'FAQ', label: 'FAQ' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
        <div className="w-full max-w-7xl flex items-center justify-between glass-panel rounded-full px-6 py-3 transition-all duration-300">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick('Home')}
          >
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-5 h-5 relative">
                  <div className="absolute inset-0 border-2 border-black rounded-full" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'}}></div>
                  <div className="absolute inset-0 border-2 border-black rounded-full rotate-180 scale-50"></div>
              </div>
            </div>
            <span className="font-bold text-white tracking-wide hidden sm:block">Horizon</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  currentPage === item.id 
                    ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 group hover:border-blue-500/30 transition-colors">
              <span className="text-xs text-gray-300 group-hover:text-white">Protection</span>
              <ArrowIcon />
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <Shield className="w-3 h-3 text-black" />
              </div>
            </div>
            
            <button 
              onClick={() => handleNavClick('Create Account')}
              className="text-xs font-medium text-white hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center">
                  <span className="w-full h-full rounded-full bg-gray-600 scale-50"></span>
              </div>
              Create Account
            </button>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-32 px-6 animate-fade-in md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)}
                className={`text-2xl font-light text-left py-4 border-b border-white/10 ${
                  currentPage === item.id ? 'text-white' : 'text-gray-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('Create Account')}
              className="text-2xl font-light text-left py-4 border-b border-white/10 text-blue-400"
            >
              Create Account
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const ArrowIcon = () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 w-2.5 h-2.5">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
)

export default Navbar;