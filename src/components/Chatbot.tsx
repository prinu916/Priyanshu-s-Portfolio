import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Bot, User, Send, Loader2, MessageSquare, User as UserIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent as SheetDialogContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar as ShAvatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/components/ui/use-toast';
import { profile, skills, projects, achievements, education, currentlyWorking } from '@/data/portfolio';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Initial greeting
      setTimeout(() => {
        addBotMessage(`Hi! I'm Priyanshu's portfolio assistant. Ask me about ${profile.name}, skills, projects, achievements, education, resume, or contact! 😊`);
      }, 500);
    } else {
      setMessages([]);
      setInputValue('');
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen]);

  const addBotMessage = (content: string) => {
    const id = Date.now().toString();
    setMessages(prev => [...prev, { id, role: 'bot', content }]);
  };

  const addUserMessage = (content: string) => {
    const id = Date.now().toString();
    setMessages(prev => [...prev, { id, role: 'user', content }]);
  };

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase().trim();

    // About me
    if (lowerInput.includes('about') || lowerInput.includes('who are you') || lowerInput.includes('bio')) {
      return `**${profile.name}** - ${profile.role}\n\n${profile.tagline}\n\n${profile.bio.map((b: string) => `• ${b}`).join('\n')}\n\nCheck full details on the About section!`;
    }

    // Skills
    if (lowerInput.includes('skill') || lowerInput.includes('tech')) {
      return `**Skills:**\n\n**Languages:** ${skills.Languages.join(', ')}\n**Frontend:** ${skills.Frontend.join(', ')}\n**Backend:** ${skills.Backend.join(', ')}\n**Databases:** ${skills.Databases.join(', ')}\n**Tools:** ${skills.Tools.join(', ')}`;
    }

    // Projects
    if (lowerInput.includes('project') || lowerInput.includes('work')) {
      const topProjects = projects.slice(0, 3);
      return `**Featured Projects:**\n\n${topProjects.map((p, i) => `${i+1}. **${p.title}** - ${p.description}\nGitHub: ${p.github}\nDemo: ${p.demo || 'N/A'}`).join('\n\n')}\n\nSee full list in Projects section!`;
    }

    // Achievements
    if (lowerInput.includes('achievement') || lowerInput.includes('award')) {
      return `**Achievements:**\n\n${achievements.slice(0, 5).map(a => `• ${a}`).join('\n')}\n\nMore in Achievements! 🏆`;
    }

    // Education
    if (lowerInput.includes('education') || lowerInput.includes('college')) {
      return `**Education:**\n\n${education.map((e, i) => `${i+1}. **${e.degree}** @ ${e.school}\n${e.period} | ${e.detail}`).join('\n\n')}`;
    }

    // Resume
    if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
      return `Download my **Resume**: [${profile.resume}](javascript:void(0);) (Click to download)\n\nOr view on the site!`;
    }

    // Contact/Socials
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('social')) {
      return `**Connect with me:**\n• GitHub: ${profile.socials.github}\n• LinkedIn: ${profile.socials.linkedin}\n• LeetCode: ${profile.socials.leetcode}\n• Instagram: ${profile.socials.instagram}\n\nScroll to Contact section or click 'Let's Talk'! 📧`;
    }

    // Currently working
    if (lowerInput.includes('working') || lowerInput.includes('current')) {
      return `**Currently Working On:**\n\n${currentlyWorking.map((w, i) => `${i+1}. **${w.title}** (${w.progress}%) - ${w.description}\nTags: ${w.tags.join(', ')}`).join('\n\n')}`;
    }

    // Default
    return `I can tell you about ${profile.name}'s background, skills, projects, achievements, education, or resume. Try: "about me", "skills", "projects", "resume", "contact". Or scroll to Contact! 😄`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed || isLoading) return;

    addUserMessage(trimmed);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const response = getBotResponse(trimmed);
      addBotMessage(response);
      setIsLoading(false);
      toast({ description: 'Bot replied!' });
    }, 800 + Math.random() * 500);
  };

  const Content = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col h-[70vh] md:h-[80vh] max-w-md md:max-w-lg mx-auto p-0 md:p-6 gap-4 bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl"
    >
      <div className="p-6 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShAvatar className="h-10 w-10">
            <AvatarImage src={profile.avatar} />
            <AvatarFallback>{profile.name.slice(0,2).toUpperCase()}</AvatarFallback>
          </ShAvatar>
          <div>
            <h3 className="font-bold text-lg">{profile.name}'s Assistant</h3>
            <p className="text-sm text-muted-foreground">{profile.role}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="flex-1 px-6 py-2">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={cn(
                'mb-4 flex',
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              <div className={cn(
                'max-w-[80%] p-3 rounded-2xl shadow-md',
                msg.role === 'user'
                  ? 'bg-gradient-primary text-primary-foreground ml-auto'
                  : 'bg-secondary text-foreground'
              )}>
                <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="flex items-center gap-2 bg-secondary p-3 rounded-2xl shadow-md">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Typing...</span>
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-6 pt-0 border-t border-border/50 bg-background/50 rounded-b-2xl">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about Priyanshu..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={!inputValue.trim() || isLoading}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>
      </form>
    </motion.div>
  );

  return (
    <>
      {isMobile ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <motion.div
              className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-gradient-primary text-primary-foreground rounded-2xl shadow-2xl border-4 border-white/20 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              aria-label="Chat with Priyanshu's assistant"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          </SheetTrigger>
          <SheetDialogContent side="right" className="!p-0 max-w-md">
            <Content />
          </SheetDialogContent>
        </Sheet>
      ) : (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <motion.div
              className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-gradient-primary text-primary-foreground rounded-2xl shadow-2xl border-4 border-white/20 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              aria-label="Chat with Priyanshu's assistant"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          </DialogTrigger>
          <DialogContent className="!p-0 max-w-md mx-auto">
            <Content />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Chatbot;

