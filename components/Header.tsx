
import React, { useState, useEffect } from 'react';
import Button from './Button';

interface HeaderProps {
  onNavigate: (view: 'home' | 'team') => void;
  currentView: 'home' | 'team';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Schliesst das Menü beim Navigieren oder Fensteränderung
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentView]);

  const handleLinkClick = (e: React.MouseEvent, sectionId?: string, view: 'home' | 'team' = 'home') => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (view !== currentView) {
      onNavigate(view);
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" onClick={(e) => handleLinkClick(e, undefined, 'home')} className="flex items-center group relative z-[110]">
            <span className="text-lg md:text-xl font-bold tracking-widest uppercase text-[#121212] transition-opacity duration-300 group-hover:opacity-70">
              Women’s <span className="text-[#C49E85]">Movimento</span>
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#kurse" onClick={(e) => handleLinkClick(e, 'kurse')} className="text-xs font-bold uppercase tracking-widest text-[#121212]/70 hover:text-[#C49E85] transition-colors">Kurse</a>
          <a href="#mitgliedschaften" onClick={(e) => handleLinkClick(e, 'mitgliedschaften')} className="text-xs font-bold uppercase tracking-widest text-[#121212]/70 hover:text-[#C49E85] transition-colors">Preise</a>
          <a href="/team" onClick={(e) => handleLinkClick(e, undefined, 'team')} className="text-xs font-bold uppercase tracking-widest text-[#121212]/70 hover:text-[#C49E85] transition-colors">Team</a>
          <Button 
            label="Mitglied werden" 
            variant="primary" 
            className="py-2.5 px-6 text-[10px]" 
            href="#mitgliedschaften"
            onClick={(e) => handleLinkClick(e, 'mitgliedschaften')}
          />
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center md:hidden relative z-[110]">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#121212] focus:outline-none"
            aria-label="Menü öffnen"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[100] transition-transform duration-500 ease-in-out transform md:hidden ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center pt-20">
          <a href="/" onClick={(e) => handleLinkClick(e, undefined, 'home')} className="text-2xl font-light text-[#121212]">Home</a>
          <a href="#kurse" onClick={(e) => handleLinkClick(e, 'kurse')} className="text-2xl font-light text-[#121212]">Kurse & Training</a>
          <a href="#stundenplan" onClick={(e) => handleLinkClick(e, 'stundenplan')} className="text-2xl font-light text-[#121212]">Stundenplan</a>
          <a href="#mitgliedschaften" onClick={(e) => handleLinkClick(e, 'mitgliedschaften')} className="text-2xl font-light text-[#121212]">Mitgliedschaften</a>
          <a href="/team" onClick={(e) => handleLinkClick(e, undefined, 'team')} className="text-2xl font-light text-[#121212]">Unser Team</a>
          <a href="#standorte" onClick={(e) => handleLinkClick(e, 'standorte')} className="text-2xl font-light text-[#121212]">Standorte</a>
          
          <div className="pt-8 border-t border-[#f8f8f8] w-full flex flex-col items-center">
            <p className="text-[#C49E85] text-xs font-bold uppercase tracking-widest mb-6 italic">A Place to Load Your Energy</p>
            <div className="flex space-x-6">
              <a href="#" className="w-10 h-10 rounded-full border border-[#f8f8f8] flex items-center justify-center text-[#121212]/40">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#f8f8f8] flex items-center justify-center text-[#121212]/40">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
