
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const Cta = () => {
  return (
    <div className="bg-soil-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-leaf-500"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-leaf-500"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6">
              Decisões inteligentes para o campo
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Experimente o SB100 agora e tenha recomendações precisas para a sua lavoura!
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Acesse conhecimento técnico especializado de forma simples e direta, e otimize o manejo nutricional das suas culturas.
          </p>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button size="lg" className="bg-white text-soil-800 hover:bg-white/90">
              Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
