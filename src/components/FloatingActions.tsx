import { useState, useEffect, useRef } from 'react';
import { Phone, Instagram, Youtube, Send, X, ArrowUpRight, Sparkles, AlertCircle, Linkedin } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    {
      role: 'assistant',
      content: "Namaste! 🙏 I am Framey, your With Frame Creator studio assistant. Let me help you design your dream shoot, choose the perfect package, or coordinate with Sumit. How can we make your occasion magical today?"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for a subtle fade-in of actions
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto scroll to latest chat messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isLoading]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || message;
    if (!textToSend.trim() || isLoading) return;

    const newUserMessage = { role: 'user' as const, content: textToSend };
    setHistory((prev) => [...prev, newUserMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: history.slice(-8) // Send recent context to Gemini
        })
      });

      if (!response.ok) throw new Error("Chat service unavailable");
      const data = await response.json();
      
      setHistory((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      console.error(err);
      setHistory((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Aapka message mil gaya! Since our lines are extremely busy, please contact Sumit directly at +91 82876 15770 for immediate assistance. Thank you!"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickChips = [
    "Check pricing packages",
    "Plan my shoot with AI",
    "Book Sumit",
    "Where is the studio?"
  ];

  return (
    <>
      {/* Floating Action Group - Fixed Stacked Vertically */}
      <div className="fixed right-[20px] bottom-[20px] z-[100] flex flex-col gap-1.5 w-[104px] sm:w-[116px] items-stretch">
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918287615770"
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="flex items-center gap-1.5 bg-[#00A884] hover:bg-[#008f6f] text-white p-0.5 pr-2 rounded-full shadow-lg transition-transform hover:scale-102 font-bold text-[9px] w-full font-display"
          title="Chat on WhatsApp"
        >
          <div className="w-[18px] h-[18px] rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-[10px] h-[10px] text-white fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <span className="flex-1 text-center font-extrabold tracking-wide">WhatsApp</span>
        </a>

        {/* Call Now Button */}
        <a
          href="tel:+918287615770"
          id="floating-call-btn"
          className="flex items-center gap-1.5 border border-[#E1BA6D]/40 bg-[rgba(11,11,11,0.18)] text-white p-0.5 pr-2 rounded-full shadow-lg transition-transform hover:scale-102 hover:bg-[rgba(11,11,11,0.35)] font-bold text-[9px] w-full font-display"
          title="Call Now"
        >
          <div className="w-[18px] h-[18px] rounded-full bg-[rgba(11,11,11,0.4)] flex items-center justify-center shrink-0">
            <Phone className="w-[10px] h-[10px] text-white fill-white" />
          </div>
          <span className="flex-1 text-center font-extrabold tracking-wide font-display">Call Now</span>
        </a>

        {/* Social Media Row */}
        <div className="flex items-center justify-between gap-1 w-full">
          {/* Instagram */}
          <a
            href={STUDIO_DETAILS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-instagram-btn"
            className="flex-1 h-[24px] rounded-md border border-[#E1BA6D]/40 bg-[rgba(11,11,11,0.18)] text-white flex items-center justify-center hover:bg-[rgba(11,11,11,0.35)] hover:border-[#E1BA6D] transition-all"
            title="Instagram Profile"
          >
            <Instagram className="w-[11px] h-[11px] text-white" />
          </a>
          
          {/* YouTube */}
          <a
            href="https://youtube.com/@withframecreator"
            target="_blank"
            rel="noopener noreferrer"
            id="floating-youtube-btn"
            className="flex-1 h-[24px] rounded-md border border-[#E1BA6D]/40 bg-[rgba(11,11,11,0.18)] text-white flex items-center justify-center hover:bg-[rgba(11,11,11,0.35)] hover:border-[#E1BA6D] transition-all"
            title="YouTube Channel"
          >
            <Youtube className="w-[11px] h-[11px] text-white" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            id="floating-linkedin-btn"
            className="flex-1 h-[24px] rounded-md border border-[#E1BA6D]/40 bg-[rgba(11,11,11,0.18)] text-white flex items-center justify-center hover:bg-[rgba(11,11,11,0.35)] hover:border-[#E1BA6D] transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-[11px] h-[11px] text-white" />
          </a>
        </div>

        {/* Smart Chatbot Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="floating-chatbot-btn"
          className="flex items-center gap-1.5 bg-[#E1BA6D] hover:bg-[#d5ac59] text-black font-extrabold p-0.5 pr-3 rounded-full shadow-2xl transition-transform hover:scale-102 cursor-pointer w-full font-display"
        >
          <div className="w-[18px] h-[18px] rounded-full bg-black/15 flex items-center justify-center shrink-0">
            <Sparkles className="w-[10px] h-[10px] fill-black text-black animate-pulse" />
          </div>
          <span className="flex-1 text-center text-[9px] font-extrabold tracking-wide">Smart Chatbot</span>
        </button>
      </div>

      {/* Chat Dialogue Box Modal */}
      {isOpen && (
        <div className="fixed right-[20px] bottom-[180px] z-[110] w-[92vw] sm:w-[380px] bg-charcoal-light border border-white/5 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[50vh] sm:max-h-[60vh] animate-in slide-in-from-bottom-6 duration-250">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-gold via-gold-light to-gold p-4 flex items-center justify-between text-charcoal-dark">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-charcoal-dark flex items-center justify-center text-gold text-xs font-black relative font-display">
                WFC
                <span className="w-2 h-2 rounded-full bg-[#00A884] border border-charcoal-dark absolute bottom-0 right-0" />
              </div>
              <div className="text-left font-display">
                <h4 className="text-xs font-extrabold tracking-wide">With Frame Creator</h4>
                <p className="text-[9px] font-bold text-zinc-800 flex items-center gap-1">
                  <span>Framey • AI Assistant</span>
                  <span className="bg-charcoal-dark/20 px-1.5 py-0.5 rounded text-[8px] font-black uppercase">24/7 Online</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-charcoal-dark/10 text-charcoal-dark transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-charcoal-dark/40 font-sans">
            {history.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-start gap-2 text-left`}
              >
                {msg.role !== 'user' && (
                  <div className="w-6 h-6 rounded-full bg-charcoal-dark border border-white/5 flex items-center justify-center text-[8px] font-bold text-gold shrink-0 mt-0.5">
                    🤖
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? "bg-gold text-charcoal-dark font-medium rounded-tr-none"
                      : "bg-charcoal-dark text-zinc-200 border border-white/5 rounded-tl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* AI Typing Indicator */}
            {isLoading && (
              <div className="flex justify-start items-center gap-2 text-left">
                <div className="w-6 h-6 rounded-full bg-charcoal-dark border border-white/5 flex items-center justify-center text-[8px] font-bold text-gold shrink-0">
                  🤖
                </div>
                <div className="bg-charcoal-dark text-zinc-400 border border-white/5 rounded-2xl rounded-tl-none px-4 py-2.5 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick-reply Suggestion Chips */}
          <div className="p-2 border-t border-white/5 bg-charcoal-light/30 flex gap-1.5 overflow-x-auto select-none no-scrollbar font-sans">
            {quickChips.map((chip) => (
              <button
                key={chip}
                onClick={() => handleSendMessage(chip)}
                className="px-2.5 py-1 bg-charcoal-dark hover:bg-charcoal-light border border-white/5 hover:border-gold text-[10px] text-zinc-300 rounded-lg whitespace-nowrap transition-colors cursor-pointer shrink-0"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            className="p-3 bg-charcoal-light border-t border-white/5 flex items-center gap-2"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask Framey (pricing, team, packages)..."
              disabled={isLoading}
              className="flex-1 bg-charcoal-dark border border-white/5 focus:border-gold focus:outline-none rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 font-sans"
            />
            <button
              type="submit"
              disabled={!message.trim() || isLoading}
              className="p-2.5 rounded-xl bg-gold hover:bg-gold-light disabled:bg-charcoal-dark text-charcoal-dark disabled:text-zinc-600 transition-colors flex items-center justify-center cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
