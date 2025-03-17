
import React from 'react';
import Section from '../ui/Section';
import { Sprout, Beaker, Database, GraduationCap } from 'lucide-react';

const featuresData = [
  {
    icon: <Sprout className="h-6 w-6" />,
    title: "Nutrientes e Culturas",
    description: "Quantidades de nutrientes absorvidos e exportados pelas diferentes culturas."
  },
  {
    icon: <Beaker className="h-6 w-6" />,
    title: "Fertilizantes",
    description: "Recomendações precisas de fertilizantes para diferentes condições de solo e culturas."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Valores de Referência",
    description: "Teores de nutrientes nos solos e folhas para avaliação precisa da fertilidade."
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Aspectos Teóricos",
    description: "Fundamentos científicos que embasam as recomendações técnicas do Boletim 100."
  }
];

const Features = () => {
  return (
    <Section id="features">
      <Section.Header
        chip="Recursos"
        title="O que o Boletim 100 traz?"
        subtitle="O Boletim Técnico 100 do IAC é o documento de referência para adubação e calagem no estado de São Paulo. O SB100 facilita o acesso a essas informações:"
        centered={true}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresData.map((feature, index) => (
          <div 
            key={index}
            className="bg-secondary rounded-2xl p-6 animate-fade-in opacity-0"
            style={{ animationDelay: `${0.2 + index * 0.15}s`, animationFillMode: 'forwards' }}
          >
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 shadow-sm">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;
