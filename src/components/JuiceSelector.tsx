import React, { useState } from 'react';
import { ArrowLeft, Zap, Droplets, Star } from 'lucide-react';

interface JuiceSelectorProps {
  onBack: () => void;
}

const JuiceSelector: React.FC<JuiceSelectorProps> = ({ onBack }) => {
  const [selectedJuice, setSelectedJuice] = useState<string | null>(null);
  const [destiny, setDestiny] = useState('');

  const juices = [
    {
      id: 'cosmic-beet-ginger',
      name: 'Lukewarm Beet-Ginger Destiny Soda',
      emoji: '🥤',
      color: 'from-red-600 to-orange-500',
      description: 'Rooty yet zesty',
      destiny: "Your destiny is to become the person who brings unusual snacks to parties. The Judgmental Sloth approves of your earthy yet spicy life choices. Expect unexpected root vegetable encounters."
    },
    {
      id: 'purple-confusion',
      name: 'Purple Confusion Elixir',
      emoji: '🍇',
      color: 'from-purple-600 to-indigo-500',
      description: 'Mysteriously grape-adjacent',
      destiny: "You will spend the next week questioning whether purple is a real color or just a conspiracy by interior designers. The Philosophical Hamster suggests you contemplate this while standing in produce aisles."
    },
    {
      id: 'chaos-carrot',
      name: 'Chaos Carrot Vision Juice',
      emoji: '🥕',
      color: 'from-orange-500 to-yellow-500',
      description: 'Enhances ability to see nonsense',
      destiny: "Your third eye will open, but only to witness the cosmic ballet of misplaced car keys. The Dramatic Llama insists you must now speak only in vegetable metaphors for 24 hours."
    },
    {
      id: 'mystical-mango',
      name: 'Mystical Mango Bewilderment Blend',
      emoji: '🥭',
      color: 'from-yellow-500 to-orange-400',
      description: 'Tropical confusion in liquid form',
      destiny: "You are destined to become fluent in a language that consists entirely of tropical fruit names. The Caffeinated Koala suggests you practice by ordering coffee in Mango-Papaya dialect."
    },
    {
      id: 'quantum-kale',
      name: 'Quantum Kale Enlightenment Smoothie',
      emoji: '🥬',
      color: 'from-green-600 to-emerald-500',
      description: 'Exists in multiple health dimensions',
      destiny: "Your life will be simultaneously healthy and chaotic. You'll crave salads while buying donuts. The Existential Penguin finds this deeply relatable and mildly concerning."
    },
    {
      id: 'time-tomato',
      name: 'Time-Traveling Tomato Temporal Juice',
      emoji: '🍅',
      color: 'from-red-500 to-pink-500',
      description: 'Technically a fruit, technically confusing',
      destiny: "You will become stuck in a temporal loop where every conversation becomes a debate about whether tomatoes are fruits or vegetables. The Overcaffeinated Platypus finds this exhausting but accurate."
    }
  ];

  const handleJuiceSelect = (juice: typeof juices[0]) => {
    setSelectedJuice(juice.id);
    setDestiny(juice.destiny);
  };

  return (
    <div className="relative z-10 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Circus Hub
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🥤 Cosmic Juice Selector 🥤
          </h1>
          <p className="text-white/80 text-lg">
            Let beverages determine the chaotic trajectory of your existence
          </p>
        </div>

        {/* Oracle Destiny */}
        {destiny && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Droplets className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Your Beverage Destiny Revealed:</span>
            </div>
            <p className="text-white text-lg italic leading-relaxed text-center">
              "{destiny}"
            </p>
          </div>
        )}

        {/* Juice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {juices.map((juice, index) => (
            <div
              key={juice.id}
              className={`group cursor-pointer transform hover:scale-105 transition-all duration-300 ${selectedJuice === juice.id ? 'ring-4 ring-blue-400' : ''}`}
              onClick={() => handleJuiceSelect(juice)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${juice.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl border border-white/20 backdrop-blur-sm h-full flex flex-col`}>
                <div className="text-center flex-grow">
                  <div className="text-5xl mb-4 animate-bounce">
                    {juice.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                    {juice.name}
                  </h3>
                  <p className="text-white/80 text-sm italic mb-4">
                    {juice.description}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <Zap className="w-4 h-4 text-white/70" />
                    <span className="text-white/70 text-xs">Destiny-Altering</span>
                    <Star className="w-4 h-4 text-white/70 group-hover:animate-spin" />
                  </div>
                </div>
                <div className="mt-4 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white/40 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            🎭 Juice Oracle Protocol 🎭
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80">
            <div>
              <h4 className="font-semibold text-blue-400 mb-3">Selection Process:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Close your eyes and point dramatically</li>
                <li>• Let your cosmic confusion guide you</li>
                <li>• Trust in the wisdom of produce</li>
                <li>• Accept your beverage-based destiny</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-400 mb-3">Spirit Guide Notes:</h4>
              <ul className="space-y-2 text-sm">
                <li>• All juices are simultaneously real and imaginary</li>
                <li>• Temperature is a social construct</li>
                <li>• Vegetables posing as fruits are encouraged</li>
                <li>• Your destiny may vary based on local fruit availability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/60">
          <p className="text-sm">
            🌟 Warning: May cause sudden understanding of produce aisle politics 🌟
          </p>
          <p className="text-xs mt-2">
            All juices are ethically sourced from confused interdimensional farmers
          </p>
        </div>
      </div>
    </div>
  );
};

export default JuiceSelector;