
import React from 'react';
import Section from '../ui/Section';
import { Sprout, Beaker, Database, GraduationCap } from 'lucide-react';

const featuresData = [
  {
    icon: <Sprout className="h-6 w-6" />,
    title: "Foco em Culturas Estratégicas",
    description: "Atendimento especializado para culturas de citros e cana-de-açúcar, com expansão prevista para outras culturas."
  },
  {
    icon: <Beaker className="h-6 w-6" />,
    title: "Manejo Sustentável",
    description: "Recomendações para uso criterioso de fertilizantes e promoção de práticas agrícolas sustentáveis."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Integração de Dados",
    description: "Combina métricas de saúde do solo, ciclo de carbono e respostas fisiológicas das plantas."
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Suporte Institucional",
    description: "Desenvolvido com apoio da Unesp, USP/Esalq, Fatecs, Fundação Shunji Nishimura e Secretaria de Agricultura de SP."
  }
];

const Features = () => {
  return (
    <Section id="features">
      <Section.Header
        chip="Recursos"
        title="Funcionalidades da Smart B100"
        subtitle="Uma das 21 iniciativas lançadas pela Fapesp para oferecer soluções tecnológicas em áreas estratégicas, destacando-se por levar inovações diretamente ao campo:"
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
