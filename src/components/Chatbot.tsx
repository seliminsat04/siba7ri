import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../lib/i18n';
import { MessageSquare, X, Send, Mic, MicOff, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Message = {
  id: string;
  role: 'user' | 'ai';
  text: string;
};

export default function Chatbot() {
  const { dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Detect scroll to avoid Footer overlap
  useEffect(() => {
    const handleScroll = () => {
      // Check if we are near the bottom of the document
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomThreshold = document.documentElement.scrollHeight - 100;
      setIsNearBottom(scrollPosition >= bottomThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  // Handle first open
  useEffect(() => {
    if (isOpen && !hasOpenedBefore) {
      setHasOpenedBefore(true);
      // Simulate Bot typing first greeting
      setIsLoading(true);
      setTimeout(() => {
        setMessages([
          {
            id: Date.now().toString(),
            role: 'ai',
            text: "عسلامة يا رايس! 🌊 أنا الرّايس، دليلك في حارس الخليج. تحب نعاونك تلقى أحسن بلاصة للصيد ليوم، ولا نعطيك حالة الطقس والنّو؟"
          }
        ]);
        setIsLoading(false);
      }, 800);
    }
  }, [isOpen, hasOpenedBefore]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map(m => ({ role: m.role, text: m.text }))
        })
      });
      
      const data = await response.json();
      
      if (data.reply) {
        setMessages(prev => [...prev, { id: Date.now().toString(), role: 'ai', text: data.reply }]);
      } else {
        throw new Error("Invalid reply");
      }
    } catch (err) {
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'ai', text: "سامحني يا رايس، فما مشكلة في الريزو، عاود جرب من بعد." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const startRecording = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("خاصية الصوت مش مدعومة في المتصفح هذا.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ar-TN'; // Tunisian Arabic
    recognition.interimResults = false;
    
    recognition.onstart = () => setIsRecording(true);
    recognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      setInputValue(prev => prev ? prev + " " + transcript : transcript);
    };
    recognition.onerror = () => setIsRecording(false);
    recognition.onend = () => setIsRecording(false);
    
    recognition.start();
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className={`fixed ${isNearBottom ? 'bottom-20 md:bottom-6' : 'bottom-6'} transition-all duration-300 ${dir === 'rtl' ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,191,165,0.4)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(0,191,165,0.5)] z-50`}
          >
            <MessageSquare className="w-6 h-6" />
            
            {/* Notification Badge */}
            {!hasOpenedBefore && (
              <span className="absolute top-0 right-0 w-3 h-3 bg-destructive rounded-full border-2 border-background animate-pulse"></span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={`fixed ${isNearBottom ? 'bottom-20 md:bottom-6' : 'bottom-6'} transition-all duration-300 ${dir === 'rtl' ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} w-[calc(100vw-32px)] sm:w-[400px] h-[550px] max-h-[85vh] bg-card glass border border-border shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-2xl flex flex-col z-50 overflow-hidden`}
          >
            {/* Chat Header */}
            <div className="bg-primary px-5 py-4 flex items-center justify-between text-primary-foreground shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-xl">⚓</span>
                </div>
                <div>
                  <h3 className="font-bold">الرّايس (المُمثّل الآلي)</h3>
                  <div className="flex items-center gap-1.5 text-xs text-primary-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span> يخدم توة
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className={`flex-1 overflow-y-auto p-5 scrollbar-thin scrollbar-thumb-border flex flex-col gap-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? (dir === 'rtl' ? 'justify-end' : 'justify-end') : 'justify-start'} w-full`}>
                  <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-secondary text-white rounded-tr-sm' 
                      : 'bg-muted text-foreground rounded-tl-sm border border-border/50'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Suggestion Chips (Only show if exactly 1 message exists) */}
              {messages.length === 1 && !isLoading && (
                <div className="flex flex-wrap gap-2 mt-2">
                   <button onClick={() => sendMessage("وين تنصحني نصطاد ليوم؟")} className="text-xs bg-card border border-primary/20 hover:bg-primary/5 text-primary px-3 py-2 rounded-full transition-colors font-medium">وين تنصحني نصطاد ليوم؟ 🗺️</button>
                   <button onClick={() => sendMessage("شنوة حالة الطقس؟")} className="text-xs bg-card border border-primary/20 hover:bg-primary/5 text-primary px-3 py-2 rounded-full transition-colors font-medium">شنوة حالة الطقس؟ ⛅</button>
                   <button onClick={() => sendMessage("فسرلي كيفاش يخدم التطبيق")} className="text-xs bg-card border border-primary/20 hover:bg-primary/5 text-primary px-3 py-2 rounded-full transition-colors font-medium">كيفاش يخدم حارس الخليج؟ 📱</button>
                </div>
              )}

              {isLoading && (
                <div className="flex justify-start w-full">
                  <div className="bg-muted p-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                    <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                    <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-card border-t border-border">
              <form 
                onSubmit={(e) => { e.preventDefault(); sendMessage(inputValue); }}
                className="flex items-center gap-2"
                dir={dir}
              >
                <div className="flex-1 relative flex items-center">
                  <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="أسأل الرّايس..."
                    className="w-full h-12 bg-muted/50 rounded-full px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:bg-background border border-border transition-all text-sm"
                  />
                  <button 
                    type="button" 
                    onClick={startRecording}
                    className={`absolute ${dir === 'rtl' ? 'left-2' : 'right-2'} w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isRecording ? 'bg-destructive text-white animate-pulse' : 'text-muted-foreground hover:text-primary hover:bg-primary/10'}`}
                  >
                    {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>
                </div>
                <button 
                  type="submit" 
                  disabled={!inputValue.trim() || isLoading}
                  className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  <Send className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180 -ml-1' : 'ml-1'}`} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
