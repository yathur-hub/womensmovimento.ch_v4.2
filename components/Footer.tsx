
import React, { useState } from 'react';
import Button from './Button';

interface FooterProps {
  onNavigate?: (view: 'home' | 'team') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [formState, setFormState] = useState({
    vorname: '',
    name: '',
    email: '',
    telefon: '',
    nachricht: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const scrollToTop = (e: React.MouseEvent, view: 'home' | 'team') => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(view);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({
      vorname: '',
      name: '',
      email: '',
      telefon: '',
      nachricht: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="bg-[#f6e4b9] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD6AF]/30 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C49E85]/20 rounded-full -ml-24 -mb-24" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl text-[#121212] mb-6 italic font-light">
                Bereit für dein <span className="font-normal not-italic">Movimento?</span>
              </h2>
              <p className="text-lg text-[#121212]/80 leading-relaxed max-w-2xl mx-auto">
                Hast du Fragen zu unseren Mitgliedschaften, Kursen oder möchtest ein Probetraining vereinbaren? Schreib uns – wir freuen uns auf dich.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl text-center border border-[#C49E85]/20 animate-fade-in">
                <div className="w-16 h-16 bg-[#C49E85] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Vielen Dank!</h3>
                <p className="text-[#121212]/70">Deine Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei dir.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-2">
                  <label htmlFor="vorname" className="block text-xs font-bold uppercase tracking-widest text-[#C49E85] ml-1">Vorname</label>
                  <input
                    type="text"
                    id="vorname"
                    name="vorname"
                    required
                    value={formState.vorname}
                    onChange={handleChange}
                    placeholder="Dein Vorname"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-[#C49E85] focus:ring-0 outline-none transition-all placeholder:text-[#121212]/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-[#C49E85] ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Dein Nachname"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-[#C49E85] focus:ring-0 outline-none transition-all placeholder:text-[#121212]/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-[#C49E85] ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="email@beispiel.ch"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-[#C49E85] focus:ring-0 outline-none transition-all placeholder:text-[#121212]/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefon" className="block text-xs font-bold uppercase tracking-widest text-[#C49E85] ml-1">Telefon</label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formState.telefon}
                    onChange={handleChange}
                    placeholder="+41 00 000 00 00"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-[#C49E85] focus:ring-0 outline-none transition-all placeholder:text-[#121212]/30"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="nachricht" className="block text-xs font-bold uppercase tracking-widest text-[#C49E85] ml-1">Nachricht</label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    rows={4}
                    required
                    value={formState.nachricht}
                    onChange={handleChange}
                    placeholder="Wie können wir dir helfen?"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-[#C49E85] focus:ring-0 outline-none transition-all placeholder:text-[#121212]/30 resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2 text-center mt-4">
                  <button
                    type="submit"
                    className="px-12 py-5 rounded-full font-bold bg-[#FFD6AF] text-[#121212] hover:opacity-90 active:scale-95 transition-all shadow-lg text-sm uppercase tracking-widest"
                  >
                    Nachricht senden
                  </button>
                </div>
              </form>
            )}

            <div className="mt-20 text-center border-t border-[#C49E85]/10 pt-10">
              <p className="text-xl font-medium text-[#121212] italic">
                Dein Körper. Deine Energie. Dein Movimento.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-[#f8f8f8] flex flex-col md:flex-row justify-between items-center text-sm text-[#121212]/50">
          <div className="mb-6 md:mb-0">
            <a href="/" onClick={(e) => scrollToTop(e, 'home')} className="font-bold tracking-widest uppercase text-[#121212]">
              Women’s <span className="text-[#C49E85]">Movimento</span>
            </a>
            <p className="mt-2">© {new Date().getFullYear()} Alle Rechte vorbehalten.</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="/team" onClick={(e) => scrollToTop(e, 'team')} className="hover:text-[#C49E85] transition-colors">Team</a>
            <a href="#" className="hover:text-[#C49E85] transition-colors">Impressum</a>
            <a href="#" className="hover:text-[#C49E85] transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-[#C49E85] transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
