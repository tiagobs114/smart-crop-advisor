
import React, { useState, useRef, useEffect } from 'react';
import { Send, Info, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Section from '../ui/Section';
import { ScrollArea } from "../ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Exemplos de perguntas para ajudar o usuário a começar (Lei de Hick-Hyman - reduzir sobrecarga cognitiva)
  const exampleQuestions = [
    "Qual a recomendação de calagem para soja em solo com pH 5.2?",
    "Como calcular a adubação NPK para milho?",
    "Quais os micronutrientes recomendados para citros?",
  ];

  // Rolar para o final da mensagem quando uma nova for adicionada (Lei de Doherty - feedback imediato)
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focar no input quando o componente carrega (Lei de Fitts - facilitar acesso)
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Feedback visual imediato (Lei de Doherty)
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    try {
      // Adicionar indicador de progresso (Efeito Zeigarnik - manter engajamento)
      toast({
        title: "Processando sua pergunta",
        description: "Estou consultando o Boletim 100 para encontrar a melhor resposta.",
        duration: 3000,
      });
      
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
      
      // Feedback positivo (Lei de Doherty - feedback imediato)
      toast({
        title: "Resposta pronta",
        description: "Encontrei informações baseadas no Boletim 100 para você.",
        duration: 3000,
      });
      
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
      // Focar no input após enviar (Lei de Fitts - facilitar acesso)
      inputRef.current?.focus();
    }
  };

  // Função para usar uma pergunta de exemplo (Lei de Jakob - consistência)
  const useExampleQuestion = (question: string) => {
    setInput(question);
    inputRef.current?.focus();
  };

  return (
    <Section id="chat" className="bg-muted py-20">
      <Section.Header 
        title="Converse com o SB100"
        subtitle="Faça suas perguntas sobre adubação e calagem baseadas no Boletim 100"
        centered
      />
      
      <div className="max-w-3xl mx-auto mt-8">
        {/* Perguntas de exemplo (Lei de Miller - agrupar informações) */}
        <div className="mb-6 flex flex-wrap gap-2 justify-center">
          <p className="w-full text-center text-sm text-muted-foreground mb-2">Perguntas sugeridas:</p>
          {exampleQuestions.map((question, index) => (
            <Button 
              key={index}
              variant="outline" 
              size="sm"
              className="text-xs text-left"
              onClick={() => useExampleQuestion(question)}
              disabled={isLoading}
            >
              {question}
            </Button>
          ))}
        </div>
      
        <div className="bg-background rounded-xl shadow-lg overflow-hidden border">
          {/* Cabeçalho do chat (Princípio de Proximidade - organização lógica) */}
          <div className="bg-primary/10 p-3 border-b flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-leaf-500"></div>
              <span className="font-medium text-sm">SB100 - Assistente do Boletim 100</span>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Info className="h-4 w-4" />
                    <span className="sr-only">Sobre o assistente</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Este assistente fornece recomendações baseadas no Boletim 100 do IAC para adubação e calagem.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="flex flex-col h-[450px]">
            {/* Área de mensagens com melhor contraste (Lei de Estética-Usabilidade) */}
            <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={cn(
                        "max-w-[85%] rounded-2xl px-4 py-3 shadow-sm",
                        message.isUser 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-foreground border border-border/40"
                      )}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-2xl px-4 py-3 border border-border/40 shadow-sm">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                        <span className="text-sm">Consultando o Boletim 100...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            
            {/* Formulário com botão maior e mais acessível (Lei de Fitts) */}
            <form onSubmit={handleSubmit} className="p-4 border-t bg-background">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Digite sua pergunta sobre adubação e calagem..."
                  className="flex-grow"
                  disabled={isLoading}
                  aria-label="Sua pergunta"
                />
                <Button 
                  type="submit" 
                  size="default"
                  disabled={isLoading || !input.trim()}
                  className="px-4 min-w-[80px]"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Enviar
                      <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Nota sobre o funcionamento (Lei de Tesler - clareza sobre complexidade) */}
        <div className="text-center text-sm text-muted-foreground mt-4 flex justify-center items-center gap-1">
          <Info className="h-3 w-3" />
          <p>O SB100 é alimentado por IA e fornece recomendações baseadas no Boletim 100 do IAC.</p>
        </div>
      </div>
    </Section>
  );
};

export default ChatSection;
