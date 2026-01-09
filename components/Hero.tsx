
import React from 'react';
import Button from './Button';

interface HeroProps {
  onNavigate?: (view: 'home' | 'team') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const scrollToMemberships = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('mitgliedschaften');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTeamClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('team');
    }
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#f6e4b9]">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f8f8f8] -skew-x-12 transform translate-x-1/4 z-0 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#C49E85] text-[#C49E85] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C49E85]"></span>
            <span>Krankenkassenanerkannt</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light mb-6 leading-[1.1] text-[#121212]">
            Willkommen bei <br className="hidden sm:block" />
            <span className="italic font-normal">Women’s Movimento</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-light text-[#121212] mb-4">
            Dein Ort für innovative Frauenfitness, echte Gemeinschaft und neue Energie.
          </p>
          
          <p className="text-sm md:text-lg text-[#121212]/80 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Women’s Movimento steht für einzigartige Sportkonzepte, inspirierende Events, Retreats und qualifizierte Weiterbildungen – speziell für Frauen. 
            Hier stärkst du Körper und Geist und wirst Teil einer Community, die dich trägt.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              label="Mitglied werden" 
              variant="primary" 
              href="#mitgliedschaften" 
              onClick={scrollToMemberships}
              className="text-xs tracking-widest"
            />
            <Button 
              label="Unser Team" 
              variant="secondary" 
              href="/team" 
              onClick={handleTeamClick}
              className="text-xs tracking-widest"
            />
          </div>
        </div>
        
        <div className="relative hidden lg:block">
           <img 
             src="https://womensmovimento.ch/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-05-at-08.58.03.jpeg" 
             alt="Women’s Movimento Fitness" 
             className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
           />
           <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl border border-[#f6e4b9] max-w-xs">
              <p className="text-[#C49E85] font-bold text-sm uppercase tracking-widest mb-2">A Place to Load Your Energy</p>
              <p className="text-[#121212] text-sm">Entdecke Kurse, die dich nicht nur fordern, sondern beflügeln.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
