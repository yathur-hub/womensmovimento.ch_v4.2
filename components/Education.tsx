
import React from 'react';
import Button from './Button';

interface EducationProps {
  onNavigate?: (view: 'home' | 'team') => void;
}

const EducationItem: React.FC<{
  title: string;
  description: string;
  subtitle?: string;
  isSpecial?: boolean;
}> = ({ title, description, subtitle, isSpecial }) => (
  <div className={`p-8 rounded-3xl transition-all duration-300 hover:border-[#C49E85] border border-transparent bg-white shadow-sm ${isSpecial ? 'bg-[#f6e4b9]/20 border-[#C49E85]/30' : ''}`}>
    <h4 className="text-xl font-bold mb-2 text-[#121212]">{title}</h4>
    {subtitle && <p className="text-xs uppercase tracking-widest text-[#C49E85] mb-4">{subtitle}</p>}
    <p className="text-[#121212]/70 text-sm leading-relaxed">{description}</p>
  </div>
);

const Education: React.FC<EducationProps> = ({ onNavigate }) => {
  return (
    <section id="weiterbildungen" className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-[#C49E85] font-bold text-sm uppercase tracking-widest mb-4">Perspektiven</p>
            <h2 className="text-4xl md:text-5xl text-[#121212] mb-6 leading-tight">Werde Instructor</h2>
            <p className="text-[#121212]/80 leading-relaxed mb-8">
              Baue dir mit unseren zertifizierten Weiterbildungen eine neue Perspektive im Fitnessbereich auf – praxisnah, inspirierend und international anerkannt.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 items-center">
              <Button 
                label="Instructor werden" 
                variant="primary" 
                className="px-4 sm:px-6 py-3 text-xs sm:text-sm whitespace-nowrap" 
                href="#" 
              />
              <Button 
                label="Team kennenlernen" 
                variant="secondary" 
                className="px-4 sm:px-6 py-3 text-xs sm:text-sm whitespace-nowrap" 
                href="/team" 
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('team');
                  }
                }}
              />
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <EducationItem 
              title="Aerobic Workshops"
              description="Zertifizierte Ausbildung für Einsteiger. Vermittlung von Unterrichtsgrundlagen, Musiklehre, Bewegungsabläufen und Motivationstechniken. Bald auch online verfügbar."
            />
            <EducationItem 
              title="International Kangoo Power Instructor"
              subtitle="in Kooperation mit Kangoo Jumps"
              description="Internationale Zertifizierung für angehende Kangoo Power Trainerinnen. Umfassendes Wissen zu Technik, Reboundschuhen, Methodik und Marke – weltweit einsetzbar."
              isSpecial={true}
            />
            <EducationItem 
              title="Personal Coaching"
              description="Individuelle Begleitung für deine persönlichen Fitnessziele. Massgeschneiderte Trainingspläne, persönliche Betreuung und nachhaltige Motivation."
            />
            <EducationItem 
              title="Firmentraining"
              description="Energiegeladene Gruppenfitness für Unternehmen. Fördert Teamgeist, Gesundheit und Leistungsfähigkeit der Mitarbeitenden. Ideal für eine moderne, gesunde Unternehmenskultur."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
