
import React from 'react';
import Section from '../ui/Section';
import { ExternalLink } from 'lucide-react';

const Funding = () => {
  return (
    <Section className="py-10 bg-soil-50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-soil-800 mb-2">Projeto de CCD da FAPESP</h3>
          <p className="text-soil-700">
            Este é um projeto de Centros de Ciência para o Desenvolvimento (CCD) financiado pela Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP).
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/8bedc30a-bd6c-4fc9-b2c9-c200838698e2.png" 
            alt="Logo da FAPESP" 
            className="h-16 object-contain"
          />
          <a 
            href="https://fapesp.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-primary hover:text-primary/90 transition-colors"
          >
            Saiba mais sobre a FAPESP
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Funding;
