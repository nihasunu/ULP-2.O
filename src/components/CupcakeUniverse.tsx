import React, { useState } from 'react';
import { ArrowLeft, Heart, Sparkles, Cookie } from 'lucide-react';

interface CupcakeUniverseProps {
  onBack: () => void;
}

const CupcakeUniverse: React.FC<CupcakeUniverseProps> = ({ onBack }) => {
  const [selectedCupcake, setSelectedCupcake] = useState<string | null>(null);
  const [oracleWisdom, setOracleWisdom] = useState('');

  const cupcakes = [
    {
      id: 'cosmic-vanilla',
      name: 'Cosmic Vanilla of Infinite Regret',
      emoji: '🧁',
      color: 'from-blue-400 to-purple-500',
      wisdom: "This cupcake holds the secrets of why socks disappear in the dryer. Your spirit guide, the Melancholic Giraffe, suggests you eat it while contemplating the sound of one hand clapping."
    },
    {
      id: 'chaos-chocolate',
      name: 'Chaos Chocolate Supreme',
      emoji: '🍫',
      color: 'from-brown-500 to-red-600',
      wisdom: "The chocolate chips are actually tiny portals to alternate dimensions where everything is slightly off-center. The Hyperactive Turtle recommends eating this while standing on one leg and humming your favorite color."
    },
    {
      id: 'rainbow-rebellion',
      name: 'Rainbow Rebellion Delight',
      emoji: '🌈',
      color: 'from-pink-400 to-yellow-400',
      wisdom: "Each rainbow layer represents a different existential crisis. Your spirit guide, the Philosophical Octopus, notes that the sprinkles are judging your life choices. Proceed with caution and jazz hands."
    },
    {
      id: 'mystery-mint',
      name: 'Mystery Mint Madness',
      emoji: '🍃',
      color: 'from-green-400 to-teal-500',
      wisdom: "This minty marvel tastes like the concept of Tuesday mixed with forgotten dreams. The Dramatic Flamingo insists you must pirouette twice before each bite to unlock its full mystical potential."
    },
    {
      id: 'stellar-strawberry',
      name: 'Stellar Strawberry Chaos',
      emoji: '🍓',
      color: 'from-pink-500 to-red-400',
      wisdom: "The strawberries were harvested under a confused moon by bewildered space farmers. Your spirit guide, the Caffeinated Koala, suggests you whisper sweet nothings to the frosting before consumption."
    },
    {
      id: 'void-velvet',
      name: 'Void Velvet Catastrophe',
      emoji: '🖤',
      color: 'from-gray-700 to-purple-900',
      wisdom: "This cupcake exists in a state of beautiful contradiction - both everything and nothing simultaneously. The Existential Penguin recommends eating it while questioning the nature of reality itself."
    }
  ];

  const handleCupcakeSelect = (cupcake: typeof cupcakes[0]) => {
    setSelectedCupcake(cupcake.id);
    setOracleWisdom(cupcake.wisdom);
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
            🧁 The Cupcake Universe 🧁
          </h1>
          <p className="text-white/80 text-lg">
            Where frosting wisdom meets cosmic confectionery chaos
          </p>
        </div>

        {/* Oracle Wisdom */}
        {oracleWisdom && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Cookie className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Cupcake Oracle Speaks:</span>
            </div>
            <p className="text-white text-lg italic leading-relaxed text-center">
              "{oracleWisdom}"
            </p>
          </div>
        )}

        {/* Cupcake Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cupcakes.map((cupcake, index) => (
            <div
              key={cupcake.id}
              className={`group cursor-pointer transform hover:scale-105 transition-all duration-300 ${selectedCupcake === cupcake.id ? 'ring-4 ring-yellow-400' : ''}`}
              onClick={() => handleCupcakeSelect(cupcake)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${cupcake.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl border border-white/20 backdrop-blur-sm`}>
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-bounce">
                    {cupcake.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                    {cupcake.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1">
                    <Heart className="w-4 h-4 text-white/70" />
                    <span className="text-white/70 text-sm">Mystically Delicious</span>
                    <Sparkles className="w-4 h-4 text-white/70 group-hover:animate-spin" />
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
        <div className="mt-12 text-center">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              🎭 Cupcake Universe Protocol 🎭
            </h3>
            <div className="text-white/80 space-y-2">
              <p>1. Select a cupcake to receive cosmic confectionery wisdom</p>
              <p>2. Listen carefully to your assigned spirit guide's recommendations</p>
              <p>3. Perform any suggested ritual dances for maximum flavor enhancement</p>
              <p>4. Remember: All cupcakes are simultaneously real and imaginary</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/60">
          <p className="text-sm">
            🌟 Warning: Side effects may include sudden urge to bake at 3 AM 🌟
          </p>
          <p className="text-xs mt-2">
            Frosting may contain traces of stardust and existential dread
          </p>
        </div>
      </div>
    </div>
  );
};

export default CupcakeUniverse;