import React, { useState } from 'react';
import { ArrowLeft, Crown, Sparkles, Theater } from 'lucide-react';

interface OracleImpersonatorProps {
  onBack: () => void;
}

const OracleImpersonator: React.FC<OracleImpersonatorProps> = ({ onBack }) => {
  const [currentPersona, setCurrentPersona] = useState<string | null>(null);
  const [wisdom, setWisdom] = useState('');

  const personas = [
    {
      id: 'disco-yeti',
      name: 'The Disco Yeti Oracle',
      emoji: '🕺',
      color: 'from-purple-500 to-pink-500',
      description: 'Groovy wisdom from the frozen dance floor',
      greeting: "Welcome to the cosmic disco, baby! Your aura is totally tubular, but your chakras need some serious Saturday Night Fever realignment. *strikes pose while cosmic snow falls*",
      wisdom: "The universe is like a giant disco ball - it only makes sense when you're spinning. Your spirit guide, the Funky Penguin, suggests you boogie your way through life's confusion while wearing platform shoes made of stardust."
    },
    {
      id: 'shakespeare-oracle',
      name: 'The Shakespearean Oracle',
      emoji: '🎭',
      color: 'from-amber-600 to-red-600',
      description: 'Elizabethan wisdom with cosmic flair',
      greeting: "Hark! What cosmic wanderer doth approach mine mystical realm? Thy questions shall be answered in the most eloquent of nonsensical verses!",
      wisdom: "To be or not to be a pineapple, that is the question. Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fruit identification, or take arms against this sea of produce confusion. Your spirit guide, the Dramatic Hedgehog, doth proclaim: 'All the world's a stage, and all the vegetables merely players.'"
    },
    {
      id: 'space-cowboy',
      name: 'The Space Cowboy Oracle',
      emoji: '🤠',
      color: 'from-orange-500 to-yellow-500',
      description: 'Frontier wisdom from the cosmic range',
      greeting: "Well howdy there, cosmic partner! Welcome to the wildest saloon this side of the Milky Way. Pull up a asteroid and let me rustle up some interdimensional wisdom for ya!",
      wisdom: "Out here in the cosmic frontier, we got three rules: always tip your hat to passing comets, never trust a cactus that speaks French, and remember that every tumbleweed is just a sphere looking for its purpose. Your spirit guide, the Philosophical Horse, says: 'Yeehaw to that, partner!'"
    },
    {
      id: 'zen-dragon',
      name: 'The Zen Dragon Oracle',
      emoji: '🐉',
      color: 'from-green-500 to-teal-500',
      description: 'Ancient wisdom with a dash of fire',
      greeting: "Greetings, small seeker of cosmic truth. I have been meditating on the sound of one hand clapping for 847 years. The answer is 'purple', but only on Wednesdays.",
      wisdom: "The path to enlightenment is like a river made of cosmic soup - it flows in all directions simultaneously while making no sense whatsoever. Your spirit guide, the Meditative Goldfish, swims in circles of infinite wisdom and suggests you contemplate the philosophical implications of bubble wrap."
    },
    {
      id: 'pirate-oracle',
      name: 'The Cosmic Pirate Oracle',
      emoji: '🏴‍☠️',
      color: 'from-blue-600 to-purple-600',
      description: 'Seafaring wisdom from the astral ocean',
      greeting: "Ahoy there, ye cosmic landlubber! Welcome aboard the good ship Bewilderment, where the treasure is confusion and the compass points to 'maybe'!",
      wisdom: "X marks the spot where logic walks the plank, matey! The seven seas of cosmic confusion be vast and full of philosophical sea monsters. Your spirit guide, the Nautical Parrot, squawks: 'Pieces of eight... theoretical dimensions!' Now go forth and sail the choppy waters of existential bewilderment!"
    },
    {
      id: 'robot-oracle',
      name: 'The Malfunctioning Robot Oracle',
      emoji: '🤖',
      color: 'from-gray-500 to-blue-500',
      description: 'Glitchy wisdom from the digital realm',
      greeting: "GREETINGS, CARBON-BASED LIFE FORM. ERROR 404: LOGIC NOT FOUND. INITIATING COSMIC NONSENSE PROTOCOL... *BEEP BOOP*",
      wisdom: "CALCULATING... CALCULATING... RESULT: THE MEANING OF LIFE IS 42.7, BUT ONLY IF YOU CARRY THE ONE AND ACCOUNT FOR LEAP YEARS IN ALTERNATE DIMENSIONS. YOUR SPIRIT GUIDE, THE BINARY HAMSTER, COMPUTES: '01001000 01100101 01101100 01110000' WHICH TRANSLATES TO 'WHY DO HUMANS PUT PINEAPPLE ON PIZZA?' *SYSTEM OVERLOAD*"
    }
  ];

  const handlePersonaSelect = (persona: typeof personas[0]) => {
    setCurrentPersona(persona.id);
    setWisdom(persona.wisdom);
  };

  const selectedPersonaData = personas.find(p => p.id === currentPersona);

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
            🎭 Oracle Impersonator Theater 🎭
          </h1>
          <p className="text-white/80 text-lg">
            Meet the Oracle's theatrical personas - each more absurd than the last
          </p>
        </div>

        {/* Current Performance */}
        {selectedPersonaData && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20 animate-fade-in">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4 animate-bounce">
                {selectedPersonaData.emoji}
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {selectedPersonaData.name}
              </h2>
              <p className="text-white/70 italic mb-6">
                {selectedPersonaData.greeting}
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Theater className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Persona Wisdom:</span>
              </div>
              <p className="text-white text-lg italic leading-relaxed text-center">
                "{wisdom}"
              </p>
            </div>
          </div>
        )}

        {/* Persona Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {personas.map((persona, index) => (
            <div
              key={persona.id}
              className={`group cursor-pointer transform hover:scale-105 transition-all duration-300 ${currentPersona === persona.id ? 'ring-4 ring-yellow-400' : ''}`}
              onClick={() => handlePersonaSelect(persona)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${persona.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl border border-white/20 backdrop-blur-sm h-full flex flex-col`}>
                <div className="text-center flex-grow">
                  <div className="text-5xl mb-4 animate-bounce">
                    {persona.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                    {persona.name}
                  </h3>
                  <p className="text-white/80 text-sm italic mb-4">
                    {persona.description}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <Crown className="w-4 h-4 text-white/70" />
                    <span className="text-white/70 text-xs">Performance Ready</span>
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

        {/* Theater Instructions */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            🎪 Impersonator Theater Protocol 🎪
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80">
            <div>
              <h4 className="font-semibold text-purple-400 mb-3">Performance Notes:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Each persona has unique cosmic wisdom</li>
                <li>• All performances are simultaneously authentic and absurd</li>
                <li>• Spirit guides change based on the character</li>
                <li>• Reality may temporarily adopt the persona's theme</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-pink-400 mb-3">Audience Participation:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Applaud wildly regardless of quality</li>
                <li>• Ask questions that make no sense</li>
                <li>• Embrace the theatrical chaos</li>
                <li>• Remember: Method acting meets cosmic bewilderment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/60">
          <p className="text-sm">
            🌟 All personas are equally valid and equally ridiculous 🌟
          </p>
          <p className="text-xs mt-2">
            No actual oracles were harmed in the making of these impersonations
          </p>
        </div>
      </div>
    </div>
  );
};

export default OracleImpersonator;