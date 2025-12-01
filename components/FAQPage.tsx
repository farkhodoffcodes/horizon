import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "How secure is the DeFi Horizon wallet?",
    a: "We use industry-leading encryption and non-custodial architecture, meaning your private keys never leave your device. We also undergo regular security audits by top firms."
  },
  {
    q: "What chains do you support?",
    a: "Currently we support Ethereum, Solana, Polygon, Avalanche, and Binance Smart Chain. We are actively adding support for more Layer 2 solutions."
  },
  {
    q: "Are there any hidden fees?",
    a: "No. Our pricing is transparent. Basic wallet features are free. Network fees (gas) are paid directly to miners/validators, not us."
  },
  {
    q: "How does the AI feature work?",
    a: "Our Gemini-powered AI analyzes on-chain data and market sentiment to provide summaries and risk assessments. It does not execute trades on your behalf automatically."
  },
  {
    q: "Can I import my existing wallet?",
    a: "Yes, you can import any standard 12 or 24-word seed phrase from Metamask, Phantom, or Ledger devices securely."
  }
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-28 px-4 pb-20 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-center animate-slide-up">Frequently Asked Questions</h1>
      
      <div className="space-y-4 animate-slide-up" style={{animationDelay: '0.1s'}}>
        {faqs.map((item, idx) => (
          <div 
            key={idx} 
            className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-white/5 border-white/20' : ''}`}
          >
            <button 
              className="w-full p-6 flex items-center justify-between text-left"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-medium text-lg pr-4">{item.q}</span>
              {openIndex === idx ? <Minus className="w-5 h-5 text-emerald-400" /> : <Plus className="w-5 h-5 text-gray-500" />}
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-gray-400 leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;