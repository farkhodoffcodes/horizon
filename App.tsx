import React, { useEffect, useState } from 'react';
import LiquidBackground from './components/LiquidBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DeFiDashboard from './components/DeFiDashboard';
import AssetsPage from './components/AssetsPage';
import FeaturesPage from './components/FeaturesPage';
import PricingPage from './components/PricingPage';
import FAQPage from './components/FAQPage';
import CreateAccountPage from './components/CreateAccountPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const renderPage = () => {
    switch(currentPage) {
      case 'Home': return <Hero onNavigate={setCurrentPage} />;
      case 'DeFi App': return <DeFiDashboard />;
      case 'Assets': return <AssetsPage />;
      case 'Features': return <FeaturesPage />;
      case 'Pricing': return <PricingPage />;
      case 'FAQ': return <FAQPage />;
      case 'Create Account': return <CreateAccountPage />;
      default: return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-emerald-500/30">
      <div className="bg-noise"></div>
      
      <LiquidBackground />
      
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="transition-opacity duration-500 ease-in-out">
        {renderPage()}
      </main>

      <Footer />
      
      {/* Decorative gradient overlay at the bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-0"></div>
    </div>
  );
};

export default App;