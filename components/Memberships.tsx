
import React from 'react';
import Button from './Button';

const MembershipCard: React.FC<{
  name: string;
  price: string;
  features: string[];
  isBestseller?: boolean;
  frequency?: string;
  subtitle?: string;
}> = ({ name, price, features, isBestseller, frequency = "/ Monat", subtitle = "A Place to Load Your Energy" }) => (
  <div className={`relative p-8 rounded-3xl flex flex-col h-full transition-all duration-300 ${
    isBestseller ? 'bg-white shadow-2xl lg:scale-105 z-10 border-2 border-[#FFD6AF]' : 'bg-[#f8f8f8] border border-[#C49E85]/20'
  }`}>
    {isBestseller && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFD6AF] text-[#121212] text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-md">
        Bestseller
      </div>
    )}
    
    <div className="mb-8">
      <h3 className="text-2xl mb-2 text-[#121212]">{name}</h3>
      <p className="text-xs uppercase tracking-widest text-[#C49E85] mb-6">{subtitle}</p>
      <div className="flex items-baseline space-x-1">
        <span className="text-4xl font-light text-[#121212]">{price}</span>
        <span className="text-sm text-[#121212]/60">{frequency}</span>
      </div>
      <p className="text-xs text-[#121212]/50 mt-1">exkl. MWST</p>
    </div>

    <ul className="space-y-4 mb-10 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start space-x-3 text-[#121212]/80">
          <svg className="w-5 h-5 text-[#C49E85] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>

    <Button 
      label="Jetzt anmelden" 
      variant={isBestseller ? 'primary' : 'secondary'} 
      className="w-full"
      href="https://taplink.cc/womensmovimento"
      target="_blank"
    />
    
    {name !== "Probelektion 5er Package" && (
      <p className="text-center text-xs text-[#121212]/50 mt-4 italic">
        Cashback beim Probeabo
      </p>
    )}
  </div>
);

const Memberships: React.FC = () => {
  return (
    <section id="mitgliedschaften" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#121212] mb-4">Wähle die Mitgliedschaft, die zu dir passt</h2>
          <div className="w-24 h-1 bg-[#f6e4b9] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-10">
          <MembershipCard 
            name="Probelektion 5er Package"
            price="CHF 50"
            frequency="einmalig"
            subtitle="Du wählst wann"
            features={[
              "Yoga",
              "Pilates",
              "Kangoo Power",
              "Tabata",
              "Bungee Fit",
              "Women‘s HIIT",
              "Schuhmiete separat",
              "100% Cashback"
            ]}
          />
          <MembershipCard 
            name="Silver"
            price="CHF 99"
            features={[
              "Bis zu 3 Trainings pro Woche",
              "Yoga, Pilates, Kangoo Power, Tabata, Bungeefit, Women’s HIIT",
              "Cashback beim Probeabo"
            ]}
          />
          <MembershipCard 
            name="Gold"
            price="CHF 150"
            isBestseller={true}
            features={[
              "Unlimitierte Lektionen",
              "Rabatt auf Events, Retreats & Personal Coachings",
              "Zugang zu allen Kursen",
              "Exklusive INA LINE Leggings",
              "Laufzeit 6 oder 12 Monate",
              "Cashback beim Probeabo"
            ]}
          />
        </div>
        
        <p className="text-center text-sm text-[#121212]/40 mt-16">
          Alle Preise exkl. MWST
        </p>
      </div>
    </section>
  );
};

export default Memberships;
