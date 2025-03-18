
import React from 'react';
import Section from '../ui/Section';
import { LeafyGreen, BarChart, Zap } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const benefitsData = [
  {
    icon: <LeafyGreen className="h-8 w-8" />,
    title: "Otimização de Recursos",
    description: "Ajuda os produtores a otimizar o uso de fertilizantes e bioinsumos, reduzindo desperdícios e impactos ambientais."
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Índices Multicritério",
    description: "Desenvolve índices multicritério para auxiliar na escolha de insumos agrícolas, promovendo maior produtividade e eficiência."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Aumento de Competitividade",
    description: "Ao combinar ciência de dados e práticas agrícolas, aumenta a competitividade dos produtores no mercado global."
  }
];

const Benefits = () => {
  return (
    <Section id="benefits" className="bg-muted">
      <Section.Header
        chip="Vantagens"
        title="Benefícios da IA ao produtor rural"
        subtitle="A Smart B100 torna o conhecimento científico acessível e prático, integrando ciência de dados e práticas agrícolas tradicionais para transformar o agronegócio paulista."
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
