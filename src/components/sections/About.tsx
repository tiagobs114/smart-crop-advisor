
import React from 'react';
import Section from '../ui/Section';
import { BookOpen } from 'lucide-react';

const About = () => {
  return (
    <Section id="about" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <Section.Header
            chip="Inteligência Artificial"
            title="O que é a Smart B100?"
            centered={false}
          />
          
          <p className="text-lg mb-6">
            A Smart B100 é uma IA alimentada por dados do <span className="font-medium">Boletim 100 do IAC</span>, 
            publicação que reúne informações essenciais sobre práticas agrícolas como adubação e calagem.
          </p>
          
          <p className="text-lg mb-6">
            Nossa plataforma integra métricas de saúde do solo, ciclo de carbono e respostas fisiológicas das 
            plantas, com foco inicial nas culturas de citros e cana-de-açúcar.
          </p>
          
          <p className="text-lg">
            "Esta é uma oportunidade de utilizar a tecnologia para integrar conhecimento científico ao dia a 
            dia dos agricultores, promovendo ganhos em eficiência e sustentabilidade", diz Mattos Jr.
          </p>
          
          <div className="mt-8 flex items-center space-x-4">
            <div className="p-3 rounded-full bg-accent">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-medium">Baseado nas diretrizes oficiais do Instituto Agronômico de Campinas</p>
          </div>
        </div>
        
        <div className="relative animate-slide-in-right opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <div className="aspect-video bg-gradient-to-br from-leaf-800 to-leaf-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-black/10 rounded-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Análise de solo" 
                  className="w-full h-full object-cover rounded-2xl opacity-90"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg glass-card">
            <p className="text-sm font-medium text-soil-800">Baseado no Boletim Técnico 100</p>
            <p className="text-xs text-soil-600">Instituto Agronômico de Campinas</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
