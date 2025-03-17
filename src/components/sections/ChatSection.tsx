
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Section from '../ui/Section';
import { ScrollArea } from "../ui/scroll-area";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Olá! Sou o SB100, seu assistente para consultas sobre adubação e calagem baseadas no Boletim 100 do IAC. Como posso ajudar você hoje?", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      const aiResponses = [
        "Com base no Boletim 100 do IAC, para essa cultura e condição de solo, recomendo uma adubação de 80 kg/ha de N, 120 kg/ha de P2O5 e 60 kg/ha de K2O.",
        "Para calagem, considerando o método de saturação por bases, recomendo aplicar 2 toneladas de calcário por hectare para elevar a saturação a 70%.",
        "Essa cultura requer atenção especial aos micronutrientes. Considere aplicar 2 kg/ha de zinco e 1 kg/ha de boro para um desenvolvimento adequado.",
        "Segundo o Boletim 100, para solos com alto teor de matéria orgânica como o seu, a adubação nitrogenada pode ser reduzida em 20%."
      ];
      
      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        isUser: false
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Section id="chat" className="bg-muted py-20">
      <Section.Header 
        title="Converse com o SB100"
        subtitle="Faça suas perguntas sobre adubação e calagem"
        centered
      />
      
      <div className="max-w-3xl mx-auto mt-8 bg-background rounded-xl shadow-lg overflow-hidden border">
        <div className="flex flex-col h-[500px]">
          <ScrollArea className="flex-grow p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.isUser 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground rounded-2xl px-4 py-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-foreground/60 animate-bounce delay-300"></div>
                      <div className="w-2 h-2 rounded-full bg-foreground/60 animate-bounce delay-500"></div>
                      <div className="w-2 h-2 rounded-full bg-foreground/60 animate-bounce delay-700"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <form onSubmit={handleSubmit} className="p-4 border-t bg-background">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Digite sua pergunta sobre adubação e calagem..."
                className="flex-grow"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="text-center text-sm text-muted-foreground mt-4">
        <p>Esta demonstração simula respostas. Em produção, será conectado a uma IA treinada com o Boletim 100.</p>
      </div>
    </Section>
  );
};

export default ChatSection;
