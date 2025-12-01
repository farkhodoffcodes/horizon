import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "Perfect for beginners exploring DeFi",
    features: ["Standard Wallet", "Basic Market Analytics", "5 Transactions / day", "Email Support"],
    highlight: false
  },
  {
    name: "Pro",
    price: "$29",
    desc: "For serious traders and investors",
    features: ["Multi-Chain Support", "AI-Powered Predictions", "Unlimited Transactions", "Priority 24/7 Support", "Zero Fees on Swaps"],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Institutional grade security & volume",
    features: ["Dedicated Account Manager", "API Access", "Custom Integration", "Audit Logs", "White-label Options"],
    highlight: false
  }
];

const PricingPage: React.FC = () => {
  return (
    <div className="pt-28 px-4 pb-20 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16 animate-slide-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-gray-400">Choose the plan that fits your trading style.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`glass-card p-8 rounded-[2rem] relative transition-transform duration-500 hover:-translate-y-2 animate-slide-up ${plan.highlight ? 'border-blue-500/30 bg-blue-900/10' : ''}`}
            style={{animationDelay: `${0.1 * idx}s`}}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                Most Popular
              </div>
            )}
            
            <h3 className="text-lg font-medium text-gray-300 mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-2 text-white">
              {plan.price} <span className="text-sm font-normal text-gray-500">{plan.price !== 'Custom' && '/ month'}</span>
            </div>
            <p className="text-sm text-gray-400 mb-8">{plan.desc}</p>
            
            <button className={`w-full py-3 rounded-xl font-medium mb-8 transition-all ${plan.highlight ? 'bg-blue-500 text-white hover:bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'bg-white/10 text-white hover:bg-white/20'}`}>
              Get Started
            </button>

            <ul className="space-y-4">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;