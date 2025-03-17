
import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { MessageSquare, BarChart, Lightbulb } from 'lucide-react';

const stepsData = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Pergunte sobre adubação e calagem",
    description: "Faça uma pergunta específica sobre sua cultura, solo ou necessidade de recomendação de adubação ou calagem."
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "A IA analisa os dados do Boletim 100",
    description: "Nossa IA processa sua pergunta e consulta a base de conhecimento do Boletim 100 do IAC para fornecer a resposta mais precisa."
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Receba recomendações personalizadas",
    description: "Obtenha respostas específicas e recomendações técnicas baseadas nos parâmetros informados, com referências ao Boletim 100."
  }
];

const HowItWorks = () => {
  return (
    <Section id="how-it-works" className="bg-gradient-to-b from-white to-secondary/30">
      <Section.Header
        chip="Processo"
        title="Como Funciona?"
        subtitle="Três simples passos para obter recomendações técnicas baseadas no Boletim 100 do IAC:"
        centered={true}
      />
      
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-6rem)] bg-leaf-200 hidden md:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {stepsData.map((step, index) => (
            <div 
              key={index}
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <Card className="relative z-10 h-full hover:translate-y-[-8px] transition-transform duration-300">
                <Card.Content className="text-center">
                  <div className="w-16 h-16 bg-leaf-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white relative">
                    {step.icon}
                    <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white flex items-center justify-center text-leaf-700 font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <Card.Title>{step.title}</Card.Title>
                  <Card.Description>{step.description}</Card.Description>
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
