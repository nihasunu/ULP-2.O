import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Coffee, Heart, Shuffle, Star } from 'lucide-react';
import CircusHub from './components/CircusHub';
import WheelOfMisfortune from './components/WheelOfMisfortune';
import CupcakeUniverse from './components/CupcakeUniverse';
import CooldownLounge from './components/CooldownLounge';
import JuiceSelector from './components/JuiceSelector';
import OracleImpersonator from './components/OracleImpersonator';
import StoryMode from './components/StoryMode';

type Page = 'hub' | 'wheel' | 'cupcake' | 'cooldown' | 'juice' | 'impersonator' | 'story';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('hub');
  const [backgroundEffect, setBackgroundEffect] = useState('');

  useEffect(() => {
    const effects = ['rainbow-rain', 'cosmic-drift', 'sparkle-shower', 'duck-parade'];
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    setBackgroundEffect(randomEffect);
    
    const interval = setInterval(() => {
      const newEffect = effects[Math.floor(Math.random() * effects.length)];
      setBackgroundEffect(newEffect);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'wheel':
        return <WheelOfMisfortune onBack={() => setCurrentPage('hub')} />;
      case 'cupcake':
        return <CupcakeUniverse onBack={() => setCurrentPage('hub')} />;
      case 'cooldown':
        return <CooldownLounge onBack={() => setCurrentPage('hub')} />;
      case 'juice':
        return <JuiceSelector onBack={() => setCurrentPage('hub')} />;
      case 'impersonator':
        return <OracleImpersonator onBack={() => setCurrentPage('hub')} />;
      case 'story':
        return <StoryMode onBack={() => setCurrentPage('hub')} />;
      default:
        return <CircusHub onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${backgroundEffect}`}>
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 opacity-90"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-yellow-500/20"></div>
      {renderPage()}
    </div>
  );
}

export default App;