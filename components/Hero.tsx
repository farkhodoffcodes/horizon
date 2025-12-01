import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Shield, Hexagon } from 'lucide-react';
import { generateDefenseVisual } from '../services/geminiService';
import StatsCard from './StatsCard';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';

const chartData1 = [
  { value: 400 }, { value: 300 }, { value: 500 }, { value: 450 }, { value: 600 }, { value: 550 }, { value: 700 }
];
const chartData2 = [
  { value: 100 }, { value: 200 }, { value: 150 }, { value: 300 }, { value: 250 }, { value: 400 }, { value: 350 }
];

// Central detailed chart data
const mainChartData = Array.from({ length: 30 }, (_, i) => ({
  name: i,
  value: 500 + Math.random() * 400 + Math.sin(i * 0.5) * 200,
  value2: 300 + Math.random() * 200 + Math.sin(i * 0.5) * 100
}));

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerateVisuals = async () => {
    setIsLoading(true);
    const result = await generateDefenseVisual();
    setBgImage(result);
    setIsLoading(false);
    setHasGenerated(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-24 pb-12 overflow-hidden">
      
      {/* Floating Elements (Background UI) - Repositioned for better balance */}
      <div className="absolute top-[20%] left-[5%] xl:left-[10%] hidden xl:block animate-float">
        <div className="glass-card p-4 rounded-2xl flex items-center gap-3 backdrop-blur-md border border-white/5 w-48">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          <div>
            <div className="text-xs text-gray-400">Cortex Protocol</div>
            <div className="text-sm font-mono text-blue-400">20.945 TPS</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[25%] right-[5%] xl:right-[10%] hidden xl:block animate-float-delayed">
        <div className="glass-card p-4 rounded-2xl flex items-center gap-3 backdrop-blur-md border border-white/5 w-48">
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-xs text-gray-400">Security Level</div>
            <div className="text-sm font-bold text-white">Maximum</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center w-full">
        
        {/* Badge */}
        <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <button 
            onClick={handleGenerateVisuals}
            className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 backdrop-blur-xl cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></span>
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-medium bg-gradient-to-r from-blue-200 to-rose-200 bg-clip-text text-transparent">
              {isLoading ? "Generating Visuals..." : "Unlock Your Assets Spark!"}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
          One-click for <br className="hidden md:block" />
          <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">Asset Defense</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-lg text-gray-400 font-light leading-relaxed mb-10 animate-slide-up opacity-0 px-4" style={{ animationDelay: '0.3s' }}>
          Dive into the art of assets, where innovative blockchain technology meets financial expertise. Protect your wealth with military-grade encryption.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <button 
             onClick={() => onNavigate('Features')}
             className="px-8 py-3.5 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 group"
          >
            Discover More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
             onClick={() => onNavigate('DeFi App')}
             className="px-8 py-3.5 glass-card rounded-full font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-2 group"
          >
            Open App
            <ArrowRight className="w-4 h-4 opacity-50 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Visual Showcase (Gemini Generated) */}
        <div className="mt-20 w-full relative animate-slide-up opacity-0 px-4 md:px-0" style={{ animationDelay: '0.6s' }}>
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black">
            {/* Background Image Area */}
            {bgImage ? (
               <img 
                 src={bgImage} 
                 alt="Generated Asset Defense" 
                 className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-90 hover:scale-105 transition-transform duration-[20s]"
               />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-black to-red-900/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
              </div>
            )}
            
            {/* Glass Overlay UI on top of image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            {/* Central Chart Diagram */}
            <div className="absolute inset-0 flex items-end justify-center pb-20 px-8 md:px-20 pointer-events-none">
              <div className="w-full h-[60%] md:h-[70%] max-w-4xl relative">
                {/* Chart Glow */}
                <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full"></div>
                
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mainChartData}>
                    <defs>
                      <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorSec" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3b82f6" 
                      strokeWidth={3} 
                      fill="url(#colorMain)" 
                      animationDuration={2000}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value2" 
                      stroke="#f43f5e" 
                      strokeWidth={2} 
                      fill="url(#colorSec)" 
                      strokeDasharray="5 5"
                      animationDuration={2500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Floating Glass Cards inside the Hero Image */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4 justify-between items-end z-20">
              <div className="flex items-center gap-4">
                 <div className="glass-card w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                    <Play className="w-4 h-4 text-white fill-current ml-1" />
                 </div>
                 <span className="text-sm font-mono text-white/70">02/03 . Scroll down</span>
              </div>

              <div className="hidden md:flex gap-4">
                 <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-xl bg-black/40">
                    <Hexagon className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-white">Polygon</span>
                 </div>
                 <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-xl bg-black/40">
                    <Zap className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-white">Lightning</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Decorative stats floating - Adjusted positions to be more "center" aligned relative to container edges but not overlapping content */}
          <div className="absolute -right-2 md:-right-12 top-10 hidden lg:block animate-float z-30">
             <StatsCard 
               title="Growth" 
               value="+124.5%" 
               subtitle="Last 24h" 
               chartData={chartData1} 
               chartColor="#3b82f6"
               className="w-56 backdrop-blur-xl bg-black/80 border-white/10 shadow-2xl"
             />
          </div>
          <div className="absolute -left-2 md:-left-12 bottom-20 hidden lg:block animate-float-delayed z-30">
             <StatsCard 
               title="Shield" 
               value="99.9%" 
               subtitle="Uptime" 
               chartColor="#f43f5e"
               chartData={chartData2} 
               className="w-48 backdrop-blur-xl bg-black/80 border-white/10 shadow-2xl"
             />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;