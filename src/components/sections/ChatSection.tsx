
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Section from '../ui/Section';
import { ScrollArea } from "../ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();

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
    
    try {
      // Call OpenRouter API
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'SB100 - Assistente de Adubação e Calagem'
        },
        body: JSON.stringify({
          model: 'google/gemma-3-1b-it:free',
          messages: [
            {
              role: 'system',
              content: 'Você é o SB100, um assistente especializado em recomendações de adubação e calagem baseadas no Boletim 100 do IAC (Instituto Agronômico de Campinas). Seu objetivo é auxiliar agricultores e técnicos com recomendações precisas sobre a quantidade de fertilizantes e calcário que devem ser aplicados em diferentes culturas, considerando as análises de solo e as necessidades específicas de cada planta. Forneça respostas técnicas, mas de fácil compreensão, sempre baseadas nas diretrizes oficiais do Boletim 100.'
            },
            ...messages.filter(msg => msg.id > 1).map(msg => ({
              role: msg.isUser ? 'user' : 'assistant',
              content: msg.text
            })),
            {
              role: 'user',
              content: input
            }
          ]
        })
      });
      
      if (!response.ok) {
        throw new Error('Falha na comunicação com a API');
      }
      
      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || 'Desculpe, não consegui processar sua solicitação.';
      
      // Add AI message
      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        isUser: false
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling OpenRouter API:', error);
      toast({
        title: "Erro de comunicação",
        description: "Não foi possível conectar ao serviço de IA. Tente novamente mais tarde.",
        variant: "destructive"
      });
      
      // Add fallback error message from AI
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "Desculpe, estou enfrentando dificuldades técnicas no momento. Por favor, tente novamente mais tarde.",
        isUser: false
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
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
        <p>O SB100 é alimentado por IA e fornece recomendações baseadas no Boletim 100 do IAC.</p>
      </div>
    </Section>
  );
};

export default ChatSection;
