
import React from 'react';

const BrandPromise: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl mb-8 text-[#121212]">
          A Place to Load Your Energy
        </h2>
        <p className="text-lg md:text-xl text-[#121212]/90 leading-relaxed">
          Women’s Movimento inspiriert Frauen, ihre körperliche und mentale Batterie auf ein neues Level zu bringen.
          Mit aussergewöhnlichen Trainingsformen, Musik, Gemeinschaft und Freude schaffen wir ein Umfeld, in dem Bewegung nicht Pflicht, sondern Energiequelle ist.
        </p>
        <div className="mt-12 flex justify-center">
          <div className="w-16 h-1 bg-[#C49E85] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandPromise;
