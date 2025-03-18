
import React from 'react';
import Section from '../ui/Section';
import { ExternalLink } from 'lucide-react';

const Funding = () => {
  return (
    <Section className="py-10 bg-soil-50">
      <div className="flex flex-col items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold text-soil-800 mb-2 text-center">Projeto CCD da FAPESP</h3>
          <p className="text-soil-700 mb-3 max-w-3xl mx-auto text-center">
            O CCD SB100 é uma das 21 iniciativas dos Centros de Ciência para o Desenvolvimento (CCD) 
            financiados pela Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP).
          </p>
          <p className="text-soil-700 max-w-3xl mx-auto text-center">
            O projeto destaca-se por sua capacidade de levar inovações diretamente ao campo, 
            promovendo o desenvolvimento rural e econômico do estado.
          </p>
        </div>
        <div className="flex items-center gap-4">
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
