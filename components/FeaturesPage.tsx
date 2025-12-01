import React from 'react';
import { Shield, Zap, Lock, Globe, Cpu, Layers } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    title: "Bank-Grade Security",
    description: "Your assets are protected by military-grade encryption and multi-signature wallets."
  },
  {
    icon: <Zap className="w-6 h-6 text-red-400" />,
    title: "Lightning Fast",
    description: "Experience transaction speeds up to 100x faster than traditional banking systems."
  },
  {
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    title: "AI Powered Insights",
    description: "Gemini-driven analytics predict market trends to optimize your portfolio automatically."
  },
  {
    icon: <Globe className="w-6 h-6 text-indigo-400" />,
    title: "Global Access",
    description: "Trade and manage assets from anywhere in the world without geographical restrictions."
  },
  {
    icon: <Lock className="w-6 h-6 text-rose-400" />,
    title: "Non-Custodial",
    description: "You own your private keys. We never have access to your funds or personal data."
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-400" />,
    title: "Cross-Chain Support",
    description: "Seamlessly bridge assets between Ethereum, Solana, and Polygon networks."
  }
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-28 px-4 pb-20 max-w-7xl mx-auto min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Built for the Future</h1>
        <p className="text-gray-400 text-lg">
          Experience the next generation of decentralized finance with our comprehensive suite of tools designed for pros and beginners alike.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="glass-card p-8 rounded-3xl hover:bg-glass-100 transition-all duration-500 group animate-slide-up"
            style={{animationDelay: `${0.1 * idx}s`}}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.2)]">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;