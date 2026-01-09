
import React, { useState } from 'react';

const Schedules: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gretzenbach' | 'lugano'>('gretzenbach');

  const locations = {
    gretzenbach: {
      name: 'Gretzenbach SO',
      url: 'https://www.eversports.ch/widget/w/6qQsvQ',
    },
    lugano: {
      name: 'Lugano TI',
      url: 'https://www.eversports.ch/widget/w/2rqm10',
    },
  };

  return (
    <section id="stundenplan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C49E85] font-bold text-sm uppercase tracking-widest mb-4">Deine Zeit für Energie</p>
          <h2 className="text-4xl md:text-5xl text-[#121212]">Stundenpläne</h2>
          <div className="w-24 h-1 bg-[#f6e4b9] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-[#f8f8f8] rounded-full border border-[#C49E85]/20">
            <button
              onClick={() => setActiveTab('gretzenbach')}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                activeTab === 'gretzenbach'
                  ? 'bg-[#FFD6AF] text-[#121212] shadow-sm'
                  : 'text-[#121212]/60 hover:text-[#121212]'
              }`}
            >
              Gretzenbach
            </button>
            <button
              onClick={() => setActiveTab('lugano')}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                activeTab === 'lugano'
                  ? 'bg-[#FFD6AF] text-[#121212] shadow-sm'
                  : 'text-[#121212]/60 hover:text-[#121212]'
              }`}
            >
              Lugano TI
            </button>
          </div>
        </div>

        <div className="bg-[#f8f8f8] rounded-[2.5rem] p-4 md:p-8 border border-[#C49E85]/10 shadow-inner overflow-hidden">
          <div className="relative w-full" style={{ height: '850px' }}>
            {activeTab === 'gretzenbach' && (
              <iframe
                title="Stundenplan Gretzenbach"
                width="100%"
                height="800px"
                src={locations.gretzenbach.url}
                frameBorder="0"
                className="rounded-2xl bg-white"
              ></iframe>
            )}
            {activeTab === 'lugano' && (
              <iframe
                title="Stundenplan Lugano"
                width="100%"
                height="800px"
                src={locations.lugano.url}
                frameBorder="0"
                className="rounded-2xl bg-white"
              ></iframe>
            )}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-[#121212]/50 italic">
              Bequem online buchen und Platz sichern.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedules;
