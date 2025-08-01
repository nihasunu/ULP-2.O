import React, { useState } from 'react';
import { Sparkles, Zap, Coffee, Heart, Shuffle, Star, Crown, Wand2 } from 'lucide-react';

interface CircusHubProps {
  onNavigate: (page: string) => void;
}

const CircusHub: React.FC<CircusHubProps> = ({ onNavigate }) => {
  const [mysteryClicks, setMysteryClicks] = useState(0);
  const [oracleWisdom, setOracleWisdom] = useState("Welcome, cosmic wanderer, to the Digital Circus of Infinite Bewilderment!");

  const portalOptions = [
    {
      id: 'wheel',
      title: 'Wheel of Misfortune',
      icon: Shuffle,
      description: 'Spin destiny into delicious chaos',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'cupcake',
      title: 'Cupcake Universe',
      icon: Heart,
      description: 'Explore the sweet realms of frosting wisdom',
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'cooldown',
      title: 'Cooldown Lounge',
      icon: Coffee,
      description: 'Meditate while reality dissolves',
      color: 'from-blue-500 to-teal-500'
    },
    {
      id: 'juice',
      title: 'Juice Selector',
      icon: Zap,
      description: 'Let beverages determine your fate',
      color: 'from-green-500 to-yellow-500'
    },
    {
      id: 'impersonator',
      title: 'Oracle Impersonator',
      icon: Crown,
      description: 'Meet the Oracle\'s theatrical personas',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'story',
      title: 'Story Mode',
      icon: Star,
      description: 'Embark on pointless cosmic quests',
      color: 'from-yellow-500 to-red-500'
    }
  ];

  const mysteryWisdom = [
    "The rubber ducks are judging your life choices. Clap once for approval.",
    "Your spirit guide, the Caffeinated Sloth, suggests you spin counterclockwise while humming.",
    "The cosmic confetti rain means you must whisper 'banana' to the nearest plant.",
    "Reality is temporarily melting. Please stand on one foot until further notice.",
    "The universe demands you perform interpretive dance for exactly 7 seconds."
  ];

  const handleMysteryButton = () => {
    setMysteryClicks(prev => prev + 1);
    const randomWisdom = mysteryWisdom[Math.floor(Math.random() * mysteryWisdom.length)];
    setOracleWisdom(randomWisdom);
  };

  return (
    <div className="relative z-10 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Wand2 className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              AI Oracle Digital Circus
            </h1>
            <Sparkles className="w-8 h-8 text-pink-400 animate-spin" />
          </div>
          <p className="text-xl text-white/80 mb-6">
            Level 2 Cosmic Absurdity • Multiverse Edition
          </p>
          
          {/* Oracle Wisdom Display */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">The Oracle Speaks:</span>
            </div>
            <p className="text-white text-lg italic leading-relaxed">
              "{oracleWisdom}"
            </p>
          </div>

          {/* Mystery Button */}
          <button
            onClick={handleMysteryButton}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 animate-pulse shadow-lg hover:shadow-purple-500/25"
          >
            <Zap className="w-5 h-5 inline mr-2" />
            Mystery Button of Cosmic Nonsense
            <span className="ml-2 text-sm opacity-75">({mysteryClicks} clicks)</span>
          </button>
        </div>

        {/* Portal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portalOptions.map((portal, index) => (
            <div
              key={portal.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => onNavigate(portal.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${portal.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl border border-white/20 backdrop-blur-sm`}>
                <div className="flex items-center justify-between mb-4">
                  <portal.icon className="w-8 h-8 text-white group-hover:animate-bounce" />
                  <Sparkles className="w-5 h-5 text-white/70 group-hover:animate-spin" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {portal.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {portal.description}
                </p>
                <div className="mt-4 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white/40 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Chaos */}
        <div className="text-center mt-12 text-white/60">
          <p className="text-sm">
            ✨ Reality may spontaneously glitch • Rubber ducks are monitoring your progress ✨
          </p>
          <p className="text-xs mt-2">
            Spirit guides on standby • Cosmic coffee brewing • Cupcake universes expanding
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircusHub;