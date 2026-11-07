"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Bot, Sparkles, ArrowRight, Phone } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  text: string;
  options?: string[];
}

interface StepNode {
  messages: Message[];
  next?: Record<string, number>;
}

const CONCIERGE_FLOW: StepNode[] = [
  {
    messages: [
      {
        role: "assistant",
        text: "Welcome to The Ezekiel Technique. I'm your digital concierge — here to guide you to the right program. What brings you here today?",
        options: [
          "I want to improve my acting",
          "I need help with public speaking",
          "I have a big performance coming up",
          "I want to protect my voice/body",
        ],
      },
    ],
    next: {
      "I want to improve my acting": 1,
      "I need help with public speaking": 2,
      "I have a big performance coming up": 3,
      "I want to protect my voice/body": 4,
    },
  },
  {
    messages: [
      {
        role: "assistant",
        text: "Excellent. Our Acting Exertion Mastery program is designed specifically to expand your emotional and physical range. It's a 12-week intensive that transforms 'safe' performances into electric ones. Where are you in your career?",
        options: ["Just starting out", "Working actor", "Established professional"],
      },
    ],
    next: {
      "Just starting out": 5,
      "Working actor": 5,
      "Established professional": 5,
    },
  },
  {
    messages: [
      {
        role: "assistant",
        text: "Our Performance Science Protocols are perfect for speakers. We use the same frameworks Olympic athletes use — adapted for the stage. You'll learn to turn adrenaline into fuel. How soon do you need results?",
        options: [
          "Urgently — I have an event soon",
          "Within a few months",
          "No rush — ongoing development",
        ],
      },
    ],
    next: {
      "Urgently — I have an event soon": 5,
      "Within a few months": 5,
      "No rush — ongoing development": 5,
    },
  },
  {
    messages: [
      {
        role: "assistant",
        text: "Then our High-Stakes Performance Training is exactly what you need. A focused 6-week intensive that simulates pressure and trains you to thrive in it. We've prepared clients for career-defining auditions and keynotes. What's the event?",
        options: [
          "An audition",
          "A keynote/presentation",
          "A live performance",
          "Something else",
        ],
      },
    ],
    next: {
      "An audition": 5,
      "A keynote/presentation": 5,
      "A live performance": 5,
      "Something else": 5,
    },
  },
  {
    messages: [
      {
        role: "assistant",
        text: "Smart thinking. Vessel Preservation is our program for performers who want a career that lasts decades, not seasons. We address vocal health, tension patterns, and nervous system regulation. What's your main concern?",
        options: [
          "Vocal strain",
          "Physical fatigue",
          "Performance anxiety",
          "Overall longevity",
        ],
      },
    ],
    next: {
      "Vocal strain": 5,
      "Physical fatigue": 5,
      "Performance anxiety": 5,
      "Overall longevity": 5,
    },
  },
  {
    messages: [
      {
        role: "assistant",
        text: "Perfect — I have enough to guide you. The best next step is to take our 5-question Quest, which will give you a personalised protocol and estimated investment. Or you can book your assessment directly. What feels right?",
        options: [
          "Take the Quest",
          "Book my assessment",
          "Call to speak with someone",
        ],
      },
    ],
    next: {
      "Take the Quest": 6,
      "Book my assessment": 6,
      "Call to speak with someone": 6,
    },
  },
  {
    messages: [
      {
        role: "assistant",
        text: "Great choice. You can start the Quest by scrolling to the Quest section, or book directly by calling (424) 653-9123. I'll close this chat — just tap me if you need more help. Your transformation starts now.",
      },
    ],
  },
];

export default function Concierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNode, setCurrentNode] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const deliverMessages = (nodeIdx: number) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, ...CONCIERGE_FLOW[nodeIdx].messages]);
      setCurrentNode(nodeIdx);
    }, 900);
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      deliverMessages(0);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const selectOption = (opt: string) => {
    setMessages((prev) => [...prev, { role: "user", text: opt }]);
    const nextIdx = CONCIERGE_FLOW[currentNode].next?.[opt];
    if (nextIdx !== undefined) {
      deliverMessages(nextIdx);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentNode(0);
    deliverMessages(0);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center shadow-gold-lg transition-all duration-300 hover:scale-110 cursor-pointer ${
          isOpen ? "rotate-90" : ""
        }`}
        aria-label="AI Assistant"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-ink-950" />
        ) : (
          <MessageCircle className="w-6 h-6 text-ink-950" />
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent-500 border-2 border-ink-950 animate-pulse" />
        )}
      </button>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[520px] max-h-[70vh] flex flex-col rounded-3xl bg-glass-strong border-glass shadow-premium overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="p-4 border-b border-white/5 flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center">
                <Bot className="w-5 h-5 text-ink-950" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent-400 border-2 border-ink-900" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-ink-50 text-sm">
                Ezekiel Concierge
              </div>
              <div className="text-xs text-accent-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                Online · Ready to help
              </div>
            </div>
            <button
              onClick={resetChat}
              className="text-xs text-ink-400 hover:text-gold-300 transition-colors duration-300 px-2 py-1 rounded-lg hover:bg-gold-400/10 cursor-pointer"
            >
              Reset
            </button>
          </div>

          {/* Messages Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, idx) => (
              <div key={idx} className="animate-fade-up">
                {m.role === "assistant" ? (
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-lg gradient-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-ink-950" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-glass-light border-glass rounded-2xl rounded-tl-sm p-3.5">
                        <p className="text-sm text-ink-100 leading-relaxed">
                          {m.text}
                        </p>
                      </div>
                      {m.options && (
                        <div className="mt-2 space-y-1.5">
                          {m.options.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => selectOption(opt)}
                              className="w-full text-left px-3.5 py-2.5 rounded-xl bg-gold-400/8 border border-gold-400/20 text-sm text-gold-200 hover:bg-gold-400/15 hover:border-gold-400/35 transition-all duration-300 flex items-center justify-between group cursor-pointer"
                            >
                              <span>{opt}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <div className="gradient-gold text-ink-950 rounded-2xl rounded-tr-sm p-3.5 max-w-[80%]">
                      <p className="text-sm font-medium">{m.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Animation */}
            {isTyping && (
              <div className="flex gap-2 animate-fade-in">
                <div className="w-7 h-7 rounded-lg gradient-gold flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-ink-950" />
                </div>
                <div className="bg-glass-light border-glass rounded-2xl rounded-tl-sm p-4">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-gold-400/60 animate-bounce"
                        style={{ animationDelay: `${i * 150}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-white/5 flex items-center justify-between">
            <a
              href="tel:4246539123"
              className="flex items-center gap-1.5 text-xs text-ink-400 hover:text-gold-300 transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              Or call (424) 653-9123
            </a>
            <span className="text-xs text-ink-600">AI-guided</span>
          </div>
        </div>
      )}
    </>
  );
}

