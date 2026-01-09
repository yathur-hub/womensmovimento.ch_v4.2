
import React, { useEffect } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  description?: string;
  imageUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, imageUrl }) => (
  <div className="bg-white p-6 rounded-[2rem] border border-[#C49E85]/10 shadow-sm flex flex-col items-center text-center">
    <div className="w-32 h-32 bg-[#f8f8f8] rounded-full mb-4 overflow-hidden border-2 border-[#f6e4b9] shrink-0">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-[#C49E85]/20">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
    <h3 className="text-xl font-bold mb-1 text-[#121212]">{name}</h3>
    <p className="text-[#C49E85] font-bold text-[10px] uppercase tracking-widest mb-3">{role}</p>
    {description && <p className="text-[#121212]/70 text-xs leading-relaxed">{description}</p>}
  </div>
);

interface TeamProps {
  onNavigate: (view: 'home' | 'team') => void;
}

const Team: React.FC<TeamProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamGretzenbach = [
    { name: "Selina Rea", role: "Founder & Ausbilderin", description: "Kangoo Power Pro-, Bungeefit-, & Pre/Postnatal-Instructor." },
    { name: "Luanah Lehmann", role: "Filialleiterin Gretzenbach", description: "Bungeefit-, Kangoo Power- und Pilates-Instructor." },
    { name: "Concettina Fischetti", role: "Yoga & Groupfitnessinstructor", description: "SAFS-zertifizierte Instructorin." },
    { name: "Fliz Keles", role: "Instructorin", description: "Kangoo Power-, & Boxfit-Instructor." },
    { name: "Leda Shtufi", role: "Instructorin", description: "Kangoo Power- Instructor." },
    { name: "Emina Alagic", role: "Instructorin", description: "Women‘s HIIT Instructor." },
    { name: "Nurcin Dogan", role: "Instructorin", description: "Kangoo Power-Instructor." },
    { name: "Melanie Fux", role: "Instructorin (STV)", description: "STV. Kangoo Power-Instructor." },
    { name: "Melanie Tsitsiamis", role: "Instructorin (STV)", description: "STV. Bungeefit." },
    { name: "Helin Cark", role: "Marketing", description: "Marketingverantwortliche." }
  ];

  const teamLugano = [
    { name: "Selina Rea", role: "Founder & Ausbilderin", description: "Kangoo Power Pro-, Bungeefit-, & Pre/Postnatal-Instructor." },
    { name: "Camilla Cigoli", role: "Instructorin", description: "Kangoo Power-, & Bungeefit Instructor." },
    { name: "Sabatina Longo", role: "Instructorin", description: "Kangoo Power Instructor." },
    { name: "Sara Balliana", role: "Instructorin", description: "Kangoo Power-, & Women‘s HIIT Instructor." },
    { name: "Francesca Davi", role: "Instructorin", description: "Pilates, & Kids Yoga Instructor." },
    { name: "Vincenza Botti", role: "Instructorin / Personal Trainer", description: "Pilates & Women’s HIIT Instructor." }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Section 1: Einstieg */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h1 className="text-5xl md:text-6xl text-[#121212] mb-8 leading-tight">
          Das Team hinter <br />der Arbeit
        </h1>
        <p className="text-lg md:text-xl text-[#121212]/80 leading-relaxed mb-12">
          Women’s Movimento wird von qualifizierten Expertinnen an zwei Standorten getragen. 
          Unsere Struktur stellt sicher, dass jede Teilnehmerin – ob in der Deutschschweiz oder im Tessin – von fundierter Fachkompetenz und persönlicher Begleitung profitiert.
        </p>
        <div className="w-16 h-1 bg-[#C49E85] rounded-full"></div>
      </section>

      {/* Section 2: Team Gretzenbach */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-3xl md:text-4xl text-[#121212]">Team Gretzenbach</h2>
          <div className="flex-grow h-px bg-[#C49E85]/20"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamGretzenbach.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Section 2: Team Lugano */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-3xl md:text-4xl text-[#121212]">Team Lugano</h2>
          <div className="flex-grow h-px bg-[#C49E85]/20"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamLugano.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Section 3: Arbeitsverständnis */}
      <section className="bg-[#f8f8f8] py-24 mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl text-[#121212] mb-8">Wie wir arbeiten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg font-bold mb-3 text-[#121212]">Klare Verantwortlichkeiten</h4>
              <p className="text-[#121212]/70 text-sm leading-relaxed">
                Jedes Teammitglied betreut einen spezifischen Fachbereich. Dies stellt sicher, dass unsere Kundinnen stets mit qualifizierten Ansprechpartnerinnen zusammenarbeiten, die über tiefgehendes Wissen in ihrer Disziplin verfügen.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3 text-[#121212]">Methodik vor Emotion</h4>
              <p className="text-[#121212]/70 text-sm leading-relaxed">
                Unsere Programme basieren auf bewährten Trainingsmethoden. Wir setzen auf Struktur und Reproduzierbarkeit von Ergebnissen, um Sicherheit und Fortschritt für jede Teilnehmerin planbar zu machen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Rückführung */}
      <section className="max-w-7xl mx-auto px-6 text-center pt-16">
        <p className="text-[#121212]/60 text-sm mb-8">Haben Sie Fragen zu unserem Team oder unseren Kompetenzen?</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="text-[#C49E85] font-bold text-sm uppercase tracking-widest hover:text-[#121212] transition-colors"
          >
            Zurück zur Startseite
          </a>
          <span className="hidden sm:inline text-[#121212]/20">|</span>
          <a 
            href="#standorte" 
            onClick={(e) => { 
              e.preventDefault(); 
              onNavigate('home');
              setTimeout(() => {
                const element = document.getElementById('standorte');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="text-[#121212]/80 font-bold text-sm uppercase tracking-widest hover:text-[#C49E85] transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
