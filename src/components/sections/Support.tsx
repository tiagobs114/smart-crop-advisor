
import React from 'react';
import Section from '../ui/Section';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

const Support = () => {
  const partners = [
    {
      name: "Fatec Cotia",
      image: "/lovable-uploads/87664ebc-8bd2-451c-8de2-0bfdd41a2bbd.png",
    },
    {
      name: "CPS - Centro Paula Souza",
      image: "/lovable-uploads/67c32641-f592-44b0-9b05-2ab0eeac9e73.png",
    },
    {
      name: "Fatec Pompeia Shunji Nishimura",
      image: "/lovable-uploads/8eed017a-a32b-47ce-9588-0800b6370adf.png",
    },
    {
      name: "ESALQ - Escola Superior de Agricultura Luiz de Queiroz",
      image: "/lovable-uploads/afa473b4-5f48-4169-83c9-3dec79ce8d3e.png",
    },
    {
      name: "Fundação Shunji Nishimura de Tecnologia",
      image: "/lovable-uploads/2b14a18c-1bec-486a-854e-42b9b8aeec3f.png",
    }
  ];

  return (
    <Section className="py-12 bg-white" id="apoio">
      <div className="animate-on-scroll">
        <Section.Header 
          title="Apoio Institucional"
          subtitle="Instituições parceiras que tornam o projeto Smart B100 possível"
          centered
        />
        
        <div className="mt-10 px-6 md:px-12">
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 flex items-center justify-center">
                  <div className="flex items-center justify-center p-4 h-32">
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className="max-h-24 w-auto object-contain" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-4" />
            <CarouselNext className="right-0 lg:-right-4" />
          </Carousel>
        </div>
      </div>
    </Section>
  );
};

export default Support;
