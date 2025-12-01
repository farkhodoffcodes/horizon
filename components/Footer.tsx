import React from 'react';
import { Cpu, Globe, CheckCircle2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-black/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500">
        
        <div className="flex gap-8 items-center">
            <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                <span className="font-semibold text-gray-400">Vercel</span>
            </div>
            <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="font-semibold text-gray-400">Loom</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-serif italic font-bold text-xl">$</span>
                <span className="font-semibold text-gray-400">Cash App</span>
            </div>
        </div>

        <div className="flex gap-8 items-center">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-gray-500"></div>
                <span className="font-semibold text-gray-400">Loops</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-bold">_zapier</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-400">ramp</span>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-semibold text-gray-400">Raycast</span>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;