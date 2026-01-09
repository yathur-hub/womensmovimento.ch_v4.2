
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandPromise from './components/BrandPromise';
import Courses from './components/Courses';
import Schedules from './components/Schedules';
import Memberships from './components/Memberships';
import Education from './components/Education';
import Locations from './components/Locations';
import Footer from './components/Footer';
import Team from './components/Team';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'team'>('home');

  // Safer initial routing and popstate handling
  useEffect(() => {
    const handlePopState = () => {
      try {
        const path = window.location.pathname;
        if (path && (path === '/team' || path.endsWith('/team'))) {
          setCurrentView('team');
        } else {
          setCurrentView('home');
        }
      } catch (err) {
        // Fallback for environments with restricted location access
        console.warn('Navigation listener error:', err);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Check initial state
    handlePopState();

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view: 'home' | 'team') => {
    try {
      const path = view === 'team' ? '/team' : '/';
      // Only attempt pushState if available and not restricted
      if (window.history && typeof window.history.pushState === 'function') {
        window.history.pushState({}, '', path);
      }
    } catch (err) {
      // Ignore pushState errors in restricted environments, purely relying on React state
      console.warn('History API restricted:', err);
    }
    
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={navigateTo} currentView={currentView} />
      <main>
        {currentView === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <BrandPromise />
            <Courses />
            <Schedules />
            <Memberships />
            <Education onNavigate={navigateTo} />
            <Locations />
          </>
        ) : (
          <Team onNavigate={navigateTo} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
