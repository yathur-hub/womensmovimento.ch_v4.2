
import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  usp?: string;
  extra?: string;
  isDark?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, usp, extra, isDark }) => (
  <div className={`p-6 md:p-10 rounded-3xl transition-all duration-500 hover:shadow-xl border border-[#C49E85]/20 ${
    isDark ? 'bg-[#f6e4b9]' : 'bg-white'
  }`}>
    <h3 className="text-xl md:text-3xl mb-4 text-[#121212]">{title}</h3>
    <p className="text-sm md:text-base text-[#121212]/80 leading-relaxed mb-6">
      {description}
    </p>
    {extra && (
      <p className="text-sm md:text-base text-[#121212]/80 leading-relaxed mb-6 italic">
        {extra}
      </p>
    )}
    {usp && (
      <div className="pt-6 border-t border-[#C49E85]/30">
        <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#C49E85]">USP: {usp}</p>
      </div>
    )}
  </div>
);

const Courses: React.FC = () => {
  const courses = [
    {
      title: "Kangoo Power",
      description: "Intensives Ganzkörpertraining mit Reboundschuhen. Steigert den Kalorienverbrauch um bis zu 20 %, entlastet Gelenke durch bis zu 80 % Rückprallabsorption und fördert Muskelaufbau sowie Körperhaltung.",
      usp: "Dynamisch. Effektiv. Gelenkschonend."
    },
    {
      title: "Bungeefit",
      description: "Training mit elastischen Gummibändern für zusätzlichen Widerstand. Schont die Gelenke, aktiviert die Tiefenmuskulatur und sorgt für ein intensives, aber sicheres Workout.",
      isDark: true
    },
    {
      title: "Mom’s HIIT",
      description: "Speziell für Mamas mit Babys und Kleinkindern. Sanfte HIIT-Intervalle kombiniert mit Kräftigungsübungen für den idealen Wiedereinstieg nach der Geburt.",
      extra: "Dank Silent-Kopfhörern trainierst du fokussiert, während dein Kind ruhig und entspannt bleibt.",
    },
    {
      title: "Yoga",
      description: "Die perfekte Ergänzung zu intensiven Trainings. Fliessende Bewegungen und bewusste Atmung fördern Flexibilität, Balance und eine tiefere Verbindung zu dir selbst."
    },
    {
      title: "Women’s HIIT",
      description: "Ein energiegeladenes High-Intensity-Workout, speziell für Frauen. Kraft, Cardio und funktionelles Training – unterstützt durch Silent-Kopfhörer für maximale Konzentration.",
      extra: "Ein einzigartiges Gruppenerlebnis mit Silent-Disco-Technologie.",
      isDark: true
    },
    {
      title: "Boxfit",
      description: "Lerne die Grundlagen des Boxens in einem geführten Gruppentraining. Kraft, Ausdauer, Koordination und mentale Stärke – fordernd, motivierend, befreiend."
    },
    {
      title: "Pilates Barre",
      description: "Die Kombination aus klassischem Pilates und Barre-Elementen aus dem Ballett. Stärkt die Tiefenmuskulatur, verbessert die Haltung und erhöht die Flexibilität."
    }
  ];

  return (
    <section id="kurse" className="py-16 md:py-24 bg-[#f8f8f8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <p className="text-[#C49E85] font-bold text-xs uppercase tracking-widest mb-4">Programm</p>
          <h2 className="text-3xl md:text-5xl text-[#121212]">Kurse & Angebote</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
