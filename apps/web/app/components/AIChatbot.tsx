'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize chatbot conversation
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          sender: 'bot',
          text: 'Hello, dear. I am your Haven Companion. 🌸 I am here to offer a safe, warm, and completely private space to listen, guide, and support you during your separation. How are you feeling today?',
          timestamp: new Date()
        }
      ]);
    }
  }, [messages]);

  // Auto-scroll chat body
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // NLP matching rules for client-side free assistant
  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return 'Hello there! It is wonderful to connect with you. Please know that whatever you are carrying today, you are safe here. What is on your mind?';
    }
    
    if (input.includes('lonely') || input.includes('sad') || input.includes('depressed') || input.includes('cry') || input.includes('hurt')) {
      return 'I hear you, and it is completely natural to feel this way. Divorce is a profound loss, and grieving is a vital part of healing. Please be gentle with yourself. Have you had a chance to look at our "Emotional Trauma Recovery" guides or connect with a peer group in our community? You do not have to carry this alone.';
    }
    
    if (input.includes('job') || input.includes('career') || input.includes('resume') || input.includes('work') || input.includes('employment') || input.includes('money')) {
      return 'Re-entering the workforce or managing finances as a single income earner is a major milestone. I highly recommend checking out our "Employment Guide: Re-entering the Job Market" which has tools to turn caregiving gaps into professional assets, and professional networking links! Let me know if you would like me to link you directly.';
    }
    
    if (input.includes('legal') || input.includes('lawyer') || input.includes('court') || input.includes('mediation') || input.includes('custody') || input.includes('attorney')) {
      return 'Legal proceedings can feel overwhelming. We always advocate for mediation or collaborative law where possible to keep conflict low and save costs. We have an extensive database of certified mediators, legal checklists, and child custody schedule models in our Legal Resources category. Remember to keep everything documented in a separate folder!';
    }
    
    if (input.includes('child') || input.includes('kid') || input.includes('children') || input.includes('parenting') || input.includes('co-parenting')) {
      return 'Protecting children from conflict is the most loving thing you can do. Our child psychologists recommend business-like communication (using dedicated co-parenting apps) and establishing consistent routines. In high-conflict situations, "parallel parenting" is an excellent boundary strategy. Check out our Co-Parenting boundary articles!';
    }

    if (input.includes('adsense') || input.includes('ads') || input.includes('revenue')) {
      return 'Haven is fully optimized for programmatic revenue! Our layouts incorporate high-converting Adsense slot hooks, semantic content layout maps, and a curated Retail Media Network grid to maximize sponsor payouts while retaining our premium look. Visit our SEO and Ads Performance Report at /seo-report to see the live metrics!';
    }

    if (input.includes('help') || input.includes('resource') || input.includes('guide')) {
      return 'We offer 100+ comprehensive contextual guides across Legal, Finance, Career, Co-Parenting, and Well-being. All resources are localized for 190 countries dynamically! Simply type your focus, e.g., "tell me about career transition" or "co-parenting boundaries".';
    }

    return 'Thank you for sharing that with me. I appreciate your courage. I want you to remember that you are strong, you are resilient, and your current circumstances do not define your future. Would you like me to guide you to our supportive community circles, transition career checklists, or legal planners?';
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    
    const userMsg: Message = {
      sender: 'user',
      text,
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate smart streaming/typing delay
    setTimeout(() => {
      const botReply = getBotResponse(text);
      const botMsg: Message = {
        sender: 'bot',
        text: botReply,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleQuickReply = (label: string) => {
    handleSendMessage(label);
  };

  return (
    <>
      {/* Trigger floating button with hover animation */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-charcoal hover:bg-dusty-rose text-white p-4 rounded-full-xl shadow-glow hover:shadow-xl-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border border-light-gray/20"
        aria-label="Haven Support Chatbot"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-soft-sage opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-success-green"></span>
        </span>
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <span className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="font-heading text-body-sm font-semibold hidden md:inline">Support Assistant</span>
          </span>
        )}
      </button>

      {/* Chat window container */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-dark-surface border border-light-gray dark:border-dark-elevated rounded-xl-2xl shadow-xl-2xl overflow-hidden flex flex-col transition-all duration-300 animate-pulse-gentle">
          
          {/* Header block */}
          <div className="bg-charcoal text-warm-ivory p-4 border-b border-light-gray dark:border-dark-elevated flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full-xl bg-dusty-rose/20 flex items-center justify-center text-dusty-rose font-serif italic font-bold">
                H
              </div>
              <div>
                <h4 className="font-heading text-body-sm font-bold leading-none">Haven Assistant</h4>
                <span className="text-[10px] text-soft-sage font-mono font-semibold">Compassionate AI Companion</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-warm-ivory/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Chat Body */}
          <div 
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto space-y-4 bg-warm-ivory/15 dark:bg-dark-elevated/10"
          >
            {messages.map((msg, idx) => (
              <div 
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-md-lg text-body-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-dusty-rose text-white rounded-br-none' 
                      : 'bg-white dark:bg-dark-elevated text-charcoal dark:text-warm-ivory border border-light-gray/40 dark:border-dark-surface rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Mock Typing State */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-dark-elevated p-3 rounded-md-lg rounded-bl-none border border-light-gray/40 dark:border-dark-surface flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-dusty-rose rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-dusty-rose rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-dusty-rose rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies chips bar */}
          <div className="px-4 py-2 border-t border-light-gray/40 dark:border-dark-elevated/40 bg-warm-ivory/5 dark:bg-dark-elevated/5 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none">
            <button 
              onClick={() => handleQuickReply('How to find a job?')}
              className="text-[11px] font-semibold bg-white hover:bg-light-gray dark:bg-dark-surface dark:hover:bg-dark-elevated border border-light-gray dark:border-dark-elevated px-2.5 py-1 rounded-full-xl transition-all"
            >
              💼 Career Guide
            </button>
            <button 
              onClick={() => handleQuickReply('Child Custody Support')}
              className="text-[11px] font-semibold bg-white hover:bg-light-gray dark:bg-dark-surface dark:hover:bg-dark-elevated border border-light-gray dark:border-dark-elevated px-2.5 py-1 rounded-full-xl transition-all"
            >
              🧸 Child Custody
            </button>
            <button 
              onClick={() => handleQuickReply('Need emotional healing')}
              className="text-[11px] font-semibold bg-white hover:bg-light-gray dark:bg-dark-surface dark:hover:bg-dark-elevated border border-light-gray dark:border-dark-elevated px-2.5 py-1 rounded-full-xl transition-all"
            >
              🌸 Emotional Trauma
            </button>
            <button 
              onClick={() => handleQuickReply('Explain Adsense integration')}
              className="text-[11px] font-semibold bg-white hover:bg-light-gray dark:bg-dark-surface dark:hover:bg-dark-elevated border border-light-gray dark:border-dark-elevated px-2.5 py-1 rounded-full-xl transition-all"
            >
              💰 Adsense Setup
            </button>
          </div>

          {/* Message Input Box */}
          <div className="p-3 border-t border-light-gray dark:border-dark-elevated flex gap-2 bg-white dark:bg-dark-surface">
            <input 
              type="text"
              placeholder="Ask anything, private..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage(inputValue);
              }}
              className="flex-1 p-2 bg-warm-ivory/20 dark:bg-dark-elevated/40 border border-light-gray dark:border-dark-elevated rounded-sm-md font-body text-body-sm outline-hidden focus:border-dusty-rose"
            />
            <button 
              onClick={() => handleSendMessage(inputValue)}
              className="bg-charcoal hover:bg-dusty-rose text-white px-4 py-2 rounded-sm-md text-body-sm font-semibold transition-colors active:scale-95"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
}
