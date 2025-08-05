import React, { useEffect } from 'react';
import HeaderNavbar from './components/HeaderNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhoAmI from './components/WhoAmI';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Handle anchor scrolling on page load
    const handleAnchorScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to ensure all components are rendered
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Run on initial load
    handleAnchorScroll();

    // Also handle hash changes (if user clicks on anchor links)
    window.addEventListener('hashchange', handleAnchorScroll);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleAnchorScroll);
    };
  }, []);

  return (
    <div className="bg-stone-50 min-h-screen">
      <HeaderNavbar />
      <Hero />
      <About />
      <Services />
      <WhoAmI />
      <Contact />
    </div>
  );
}

export default App;