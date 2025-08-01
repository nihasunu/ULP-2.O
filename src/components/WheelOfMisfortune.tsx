import React, { useState } from 'react';
import { ArrowLeft, Shuffle, Zap, Star } from 'lucide-react';

interface WheelOfMisfortuneProps {
  onBack: () => void;
}

const WheelOfMisfortune: React.FC<WheelOfMisfortuneProps> = ({ onBack }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState('');
  const [spiritGuide, setSpiritGuide] = useState('The Confused Penguin');

  const wheelOptions = [
    "Eat soup with a fork for cosmic enlightenment",
    "Whisper your deepest secrets to a houseplant",
    "Dance like a noodle in a windstorm",
    "Contemplate the philosophical implications of toast",
    "Sing the alphabet backwards while hopping",
    "Stare intensely at a spoon until it apologizes",
    "Practice interpretive mathematics",
    "Have a serious conversation with your shadow"
  ];

  const spiritGuides = [
    "The Overcaffeinated Platypus",
    "The Sarcastic Unicorn",
    "The Anxious Phoenix",
    "The Judgmental Sloth",
    "The Philosophical Hamster",
    "The Dramatic Llama"
  ];

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setResult('');
    
    // Change spirit guide
    const newGuide = spiritGuides[Math.floor(Math.random() * spiritGuides.length)];
    setSpiritGuide(newGuide);
    
    setTimeout(() => {
      const randomResult = wheelOptions[Math.floor(Math.random() * wheelOptions.length)];
      setResult(randomResult);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="relative z-10 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Circus Hub
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🎰 Wheel of Misfortune 🎰
          </h1>
          <p className="text-white/80 text-lg">
            Spin the cosmic wheel of beautifully useless destiny!
          </p>
        </div>

        {/* Wheel Container */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative mb-8">
            <div className={`w-80 h-80 rounded-full bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center border-8 border-white shadow-2xl ${isSpinning ? 'animate-spin' : ''}`}>
              <div className="w-60 h-60 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Shuffle className={`w-16 h-16 text-white ${isSpinning ? 'animate-pulse' : ''}`} />
              </div>
            </div>
            {/* Wheel Pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
            </div>
          </div>

          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 text-white px-8 py-4 rounded-full text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {isSpinning ? (
              <>
                <Zap className="w-6 h-6 inline mr-2 animate-spin" />
                Consulting the Cosmos...
              </>
            ) : (
              <>
                <Star className="w-6 h-6 inline mr-2" />
                Spin the Wheel of Chaos!
              </>
            )}
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                🎭 The Wheel Has Spoken! 🎭
              </h2>
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-6 mb-6">
                <p className="text-white text-xl italic leading-relaxed">
                  "{result}"
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Your Spirit Guide, {spiritGuide}, says:</span>
              </div>
              <p className="text-white/80 text-center italic">
                "Well, that's certainly... a choice. *{spiritGuide === 'The Sarcastic Unicorn' ? 'rolls eyes magically' : spiritGuide === 'The Anxious Phoenix' ? 'nervously ruffles feathers' : spiritGuide === 'The Overcaffeinated Platypus' ? 'spills cosmic coffee' : 'adjusts tiny glasses'}*"
              </p>
            </div>
          </div>
        )}

        {/* Fun Instructions */}
        <div className="mt-8 text-center text-white/60">
          <p className="text-sm">
            💫 Pro tip: The wheel works better if you hum while it spins 💫
          </p>
          <p className="text-xs mt-2">
            Side effects may include: enlightenment, confusion, sudden urge to collect rubber ducks
          </p>
        </div>
      </div>
    </div>
  );
};

export default WheelOfMisfortune;