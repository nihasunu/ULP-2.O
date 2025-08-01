import React, { useState, useEffect } from 'react';
import { ArrowLeft, Coffee, Clock, Waves } from 'lucide-react';

interface CooldownLoungeProps {
  onBack: () => void;
}

const CooldownLounge: React.FC<CooldownLoungeProps> = ({ onBack }) => {
  const [meditationTimer, setMeditationTimer] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);
  const [currentMantra, setCurrentMantra] = useState('');
  const [backgroundDissolving, setBackgroundDissolving] = useState(false);

  const mantras = [
    "I am one with the cosmic confusion",
    "My thoughts are like floating rubber ducks",
    "The universe is pausing... buffering... please wait",
    "I breathe in chaos, I breathe out glitter",
    "My chakras are realigning to the frequency of bewilderment",
    "I am a pineapple in the grand fruit salad of existence"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMeditationTimer(prev => prev + 1);
      
      // Change mantra every 10 seconds
      if (meditationTimer % 10 === 0) {
        const randomMantra = mantras[Math.floor(Math.random() * mantras.length)];
        setCurrentMantra(randomMantra);
      }
      
      // Trigger background dissolution randomly
      if (Math.random() < 0.1) {
        setBackgroundDissolving(true);
        setTimeout(() => setBackgroundDissolving(false), 3000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [meditationTimer]);

  const startBreathingExercise = () => {
    setIsBreathing(true);
    setTimeout(() => setIsBreathing(false), 17000); // 17 breaths as requested by the Oracle
  };

  return (
    <div className={`relative z-10 min-h-screen p-6 transition-all duration-3000 ${backgroundDissolving ? 'bg-gradient-to-br from-yellow-400/20 via-pink-400/20 to-purple-400/20' : ''}`}>
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
            ☕ Cooldown Lounge ☕
          </h1>
          <p className="text-white/80 text-lg">
            Where the universe pauses and reality gently dissolves into confetti
          </p>
        </div>

        {/* Timer Display */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-4">
              <Clock className="w-6 h-6 text-blue-400" />
              <span className="text-2xl font-mono text-white">
                {Math.floor(meditationTimer / 60)}:{(meditationTimer % 60).toString().padStart(2, '0')}
              </span>
              <Coffee className="w-6 h-6 text-brown-400 animate-pulse" />
            </div>
            <p className="text-white/60 text-sm mt-2 text-center">
              Time spent in cosmic contemplation
            </p>
          </div>
        </div>

        {/* Main Meditation Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Breathing Exercise */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              🌊 Cosmic Breathing Station 🌊
            </h3>
            <div className="text-center">
              <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center transition-all duration-2000 ${isBreathing ? 'scale-110 shadow-2xl shadow-blue-500/30' : 'scale-100'}`}>
                <Waves className={`w-16 h-16 text-white ${isBreathing ? 'animate-pulse' : ''}`} />
              </div>
              <button
                onClick={startBreathingExercise}
                disabled={isBreathing}
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 disabled:opacity-50 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                {isBreathing ? 'Breathing in Cosmic Harmony...' : 'Begin 17-Breath Journey'}
              </button>
              {isBreathing && (
                <p className="text-white/70 text-sm mt-4 animate-fade-in">
                  Breathe out 17 times while pondering: "Am I a pineapple?"
                </p>
              )}
            </div>
          </div>

          {/* Mantra Display */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              🧘 Floating Wisdom Mantras 🧘
            </h3>
            <div className="min-h-32 flex items-center justify-center">
              <p className="text-white text-lg italic text-center leading-relaxed animate-fade-in">
                "{currentMantra || 'The cosmic wisdom is loading... please hum quietly.'}"
              </p>
            </div>
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  const randomMantra = mantras[Math.floor(Math.random() * mantras.length)];
                  setCurrentMantra(randomMantra);
                }}
                className="text-yellow-400 hover:text-yellow-300 text-sm underline transition-colors"
              >
                Request New Cosmic Mantra
              </button>
            </div>
          </div>
        </div>

        {/* Oracle Instructions */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4 text-center">
            🎭 The Anxious Phoenix's Meditation Guidelines 🎭
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
            <div>
              <h4 className="font-semibold text-white mb-2">Do:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Hum in silence (paradoxically)</li>
                <li>• Wonder about your pineapple status</li>
                <li>• Notice the confetti dissolution</li>
                <li>• Embrace cosmic confusion</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Don't:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Worry about the rubber duck rain</li>
                <li>• Question the logic</li>
                <li>• Take anything seriously</li>
                <li>• Forget to breathe (obviously)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reality Status */}
        {backgroundDissolving && (
          <div className="text-center bg-yellow-400/20 rounded-xl p-4 border border-yellow-400/30 animate-fade-in">
            <p className="text-yellow-200 font-semibold">
              🌈 Reality Dissolution Event in Progress 🌈
            </p>
            <p className="text-white/70 text-sm mt-1">
              This is normal. Continue breathing. The confetti is scheduled.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-white/60">
          <p className="text-sm">
            💫 The universe is buffering... please maintain your zen 💫
          </p>
          <p className="text-xs mt-2">
            Side effects may include: enlightenment, temporal displacement, sudden urge to collect crystals
          </p>
        </div>
      </div>
    </div>
  );
};

export default CooldownLounge;