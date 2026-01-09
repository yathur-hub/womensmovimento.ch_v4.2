
import React, { useState, useEffect } from 'react';
import Button from './Button';

interface HeaderProps {
  onNavigate: (view: 'home' | 'team') => void;
  currentView: 'home' | 'team';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMemberships = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentView !== 'home') {
      onNavigate('home');
      // Timeout um sicherzustellen, dass die Home-Komponente gerendert ist
      setTimeout(() => {
        const element = document.getElementById('mitgliedschaften');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById('mitgliedschaften');
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" onClick={handleLogoClick} className="flex items-center group">
            <span className="text-xl font-bold tracking-widest uppercase text-[#121212] transition-opacity duration-300 group-hover:opacity-70">
              Women’s <span className="text-[#C49E85]">Movimento</span>
            </span>
          </a>
        </div>
        
        <nav className="flex items-center">
          <Button 
            label="Jetzt Mitglied werden" 
            variant="primary" 
            className="py-2.5 px-6 text-xs" 
            href="#mitgliedschaften"
            onClick={scrollToMemberships}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
