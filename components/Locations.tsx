
import React from 'react';

const LocationCard: React.FC<{
  city: string;
  address: string;
  zip: string;
  mapEmbedUrl: string;
}> = ({ city, address, zip, mapEmbedUrl }) => (
  <div className="bg-white rounded-[2rem] overflow-hidden border border-[#C49E85]/20 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="h-64 w-full">
      <iframe
        title={`Map ${city}`}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapEmbedUrl}
        className="grayscale hover:grayscale-0 transition-all duration-700"
      ></iframe>
    </div>
    <div className="p-8">
      <h3 className="text-2xl mb-2 text-[#121212]">{city}</h3>
      <p className="text-[#121212]/70 leading-relaxed">
        {address}<br />
        {zip} {city}
      </p>
      <div className="mt-6">
        <a 
          href={`https://www.google.com/maps/search/${encodeURIComponent(address + ' ' + zip + ' ' + city)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold uppercase tracking-widest text-[#C49E85] hover:text-[#FFD6AF] transition-colors inline-flex items-center"
        >
          <span>Route planen</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

const Locations: React.FC = () => {
  return (
    <section id="standorte" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C49E85] font-bold text-sm uppercase tracking-widest mb-4">Besuche uns</p>
          <h2 className="text-4xl md:text-5xl text-[#121212]">Unsere Standorte</h2>
          <div className="w-24 h-1 bg-[#f6e4b9] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <LocationCard 
            city="Breganzona"
            address="Via S. Carlo 7"
            zip="6932"
            mapEmbedUrl="https://maps.google.com/maps?q=Via%20S.%20Carlo%207,%206932%20Breganzona&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
          <LocationCard 
            city="Gretzenbach"
            address="Bodenackerstrasse 7"
            zip="5014"
            mapEmbedUrl="https://maps.google.com/maps?q=Bodenackerstrasse%207,%205014%20Gretzenbach&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </section>
  );
};

export default Locations;
