
import React from 'react';
import Section from '../ui/Section';
import { BookOpen, Clock, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const benefitsData = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Recomendações Confiáveis",
    description: "Baseado no Boletim 100 do IAC, referência técnica para adubação e calagem no estado de São Paulo."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Respostas Instantâneas",
    description: "Nossa IA responde em segundos, eliminando a necessidade de pesquisar manualmente em documentos técnicos."
  },
  {
    icon: <ThumbsUp className="h-8 w-8" />,
    title: "Fácil de Usar",
    description: "Interface intuitiva, sem complicações. Faça perguntas em linguagem natural e obtenha respostas diretas."
  }
];

const Benefits = () => {
  return (
    <Section id="benefits" className="bg-muted">
      <Section.Header
        chip="Vantagens"
        title="Por que usar o SB100?"
        subtitle="Nossa solução simplifica o acesso às informações técnicas do Boletim 100, transformando conhecimento científico em respostas práticas para o campo."
        centered={true}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefitsData.map((item, index) => (
          <div 
            key={index} 
            className="animate-fade-in opacity-0" 
            style={{ animationDelay: `${0.2 + index * 0.2}s`, animationFillMode: 'forwards' }}
          >
            <Card className="h-full hover:translate-y-[-8px] transition-transform duration-300">
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
