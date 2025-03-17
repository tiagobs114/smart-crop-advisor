
import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Benefits from '../components/sections/Benefits';
import Features from '../components/sections/Features';
import HowItWorks from '../components/sections/HowItWorks';
import ChatSection from '../components/sections/ChatSection';
import Cta from '../components/sections/Cta';
import Funding from '../components/sections/Funding';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.animate-on-scroll');
      
      scrollElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const elementPosition = htmlElement.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if (elementPosition < viewportHeight * 0.85) {
          htmlElement.classList.add('animate-fade-in');
          htmlElement.style.opacity = '1';
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div id="home">
          <Hero />
        </div>
        <About />
        <Benefits />
        <Features />
        <HowItWorks />
        <ChatSection />
        <Cta />
        <Funding />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
