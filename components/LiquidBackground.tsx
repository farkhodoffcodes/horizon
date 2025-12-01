import React, { useMemo } from 'react';

const LiquidBackground: React.FC = () => {
  // Generate random stars
  const stars = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.7 + 0.3
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-black">
      {/* Stars Layer */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              opacity: star.opacity
            }}
          />
        ))}
      </div>

      {/* Aurora / Liquid Blobs - Red and Blue Theme */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-800/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-50"></div>
      <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] bg-red-900/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 opacity-50"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[60vw] bg-indigo-900/15 rounded-full mix-blend-screen filter blur-[130px] animate-blob animation-delay-4000 opacity-40"></div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)] z-0"></div>
    </div>
  );
};

export default LiquidBackground;