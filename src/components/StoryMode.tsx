import React, { useState } from 'react';
import { ArrowLeft, Book, Star, MapPin } from 'lucide-react';

interface StoryModeProps {
  onBack: () => void;
}

const StoryMode: React.FC<StoryModeProps> = ({ onBack }) => {
  const [currentQuest, setCurrentQuest] = useState<string | null>(null);
  const [questProgress, setQuestProgress] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const quests = [
    {
      id: 'rubber-duck-prophecy',
      title: 'The Great Rubber Duck Prophecy',
      emoji: '🦆',
      color: 'from-yellow-500 to-orange-500',
      description: 'Seek the legendary rubber duck that holds the secrets of bath time enlightenment',
      tasks: [
        'Find a bathroom and stare at the faucet for exactly 47 seconds',
        'Whisper "quack" to three different mirrors',
        'Contemplate the philosophical implications of soap bubbles',
        'Practice your interpretive duck dance',
        'Ask a houseplant about its bathing preferences'
      ],
      reward: 'You have achieved Rubber Duck Enlightenment! Your spirit guide, the Philosophical Duck, is proud but also confused about why this was necessary.'
    },
    {
      id: 'spoon-dimension',
      title: 'The Lost Spoon Dimension Quest',
      emoji: '🥄',
      color: 'from-purple-500 to-blue-500',
      description: 'Journey to find the mystical dimension where all lost spoons congregate',
      tasks: [
        'Open every drawer in your kitchen while humming mysteriously',
        'Apologize to a spoon for any past soup-related trauma',
        'Perform the ancient ritual of "stirring air"',
        'Count backwards from 17 while holding a fork (as a decoy)',
        'Meditate on the question: "If a spoon falls in the forest..."'
      ],
      reward: 'The Spoon Dimension has acknowledged your quest! Unfortunately, they\'re not returning any utensils, but they appreciate the effort. The Existential Teaspoon approves.'
    },
    {
      id: 'cosmic-sandwich',
      title: 'The Cosmic Sandwich Construction',
      emoji: '🥪',
      color: 'from-green-500 to-yellow-500',
      description: 'Build a sandwich that exists in multiple dimensions simultaneously',
      tasks: [
        'Select bread while contemplating the meaning of carbohydrates',
        'Add ingredients in order of their cosmic significance',
        'Name each ingredient and thank it for its sacrifice',
        'Cut the sandwich into a shape that defies geometry',
        'Eat it while standing on one foot and facing magnetic north'
      ],
      reward: 'Your interdimensional sandwich has achieved sentience and has applied for citizenship in three alternate realities. The Hungry Philosopher Mouse is taking notes.'
    },
    {
      id: 'sock-mystery',
      title: 'The Case of the Vanishing Sock',
      emoji: '🧦',
      color: 'from-red-500 to-pink-500',         
      description: 'Solve the greatest mystery known to laundry-kind',
      tasks: [
        'Interview your washing machine about its sock consumption habits',
        'Check under every piece of furniture while narrating like a detective',
        'Create a conspiracy board connecting all your mismatched socks',
        'Write a formal complaint to the Sock Dimension',
        'Perform a séance to communicate with lost socks'
      ],
      reward: 'The sock mystery remains unsolved, but you\'ve uncovered a conspiracy involving dryer lint and fabric softener. The Detective Chipmunk is impressed by your investigative skills.'
    }
  ];

  const handleQuestSelect = (quest: typeof quests[0]) => {
    setCurrentQuest(quest.id);
    setQuestProgress(0);
    setCompletedTasks([]);
  };

  const handleTaskComplete = (task: string) => {
    if (!completedTasks.includes(task)) {
      setCompletedTasks([...completedTasks, task]);
      setQuestProgress(prev => prev + 1);
    }
  };

  const currentQuestData = quests.find(q => q.id === currentQuest);
  const isQuestComplete = currentQuestData && completedTasks.length === currentQuestData.tasks.length;

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
            📖 Cosmic Quest Story Mode 📖
          </h1>
          <p className="text-white/80 text-lg">
            Embark on pointless adventures with absolutely no meaningful rewards
          </p>
        </div>

        {/* Active Quest Display */}
        {currentQuestData && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20 animate-fade-in">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4 animate-bounce">
                {currentQuestData.emoji}
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {currentQuestData.title}
              </h2>
              <p className="text-white/70 italic mb-4">
                {currentQuestData.description}
              </p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400">
                  Progress: {completedTasks.length}/{currentQuestData.tasks.length}
                </span>
              </div>
            </div>

            {/* Quest Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-3 mb-6 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${(completedTasks.length / currentQuestData.tasks.length) * 100}%` }}
              ></div>
            </div>

            {/* Quest Tasks */}
            <div className="space-y-3 mb-6">
              {currentQuestData.tasks.map((task, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${
                    completedTasks.includes(task)
                      ? 'bg-green-500/20 border-green-400/50 text-green-200'
                      : 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10 cursor-pointer'
                  }`}
                  onClick={() => handleTaskComplete(task)}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    completedTasks.includes(task)
                      ? 'border-green-400 bg-green-400'
                      : 'border-white/40'
                  }`}>
                    {completedTasks.includes(task) && <span className="text-white text-sm">✓</span>}
                  </div>
                  <span className={completedTasks.includes(task) ? 'line-through' : ''}>
                    {task}
                  </span>
                </div>
              ))}
            </div>

            {/* Quest Completion */}
            {isQuestComplete && (
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-400/30 animate-fade-in">
                <div className="text-center">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3 animate-spin" />
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">Quest Complete!</h3>
                  <p className="text-white italic leading-relaxed">
                    {currentQuestData.reward}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Quest Selection */}
        {!currentQuest && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {quests.map((quest, index) => (
              <div
                key={quest.id}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => handleQuestSelect(quest)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${quest.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl border border-white/20 backdrop-blur-sm h-full flex flex-col`}>
                  <div className="text-center flex-grow">
                    <div className="text-5xl mb-4 animate-bounce">
                      {quest.emoji}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {quest.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {quest.description}
                    </p>
                    <div className="flex items-center justify-center gap-1">
                      <Book className="w-4 h-4 text-white/70" />
                      <span className="text-white/70 text-xs">Epic Quest Available</span>
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
        )}

        {/* Back to Quest Selection */}
        {currentQuest && (
          <div className="text-center mb-8">
            <button
              onClick={() => {
                setCurrentQuest(null);
                setCompletedTasks([]);
                setQuestProgress(0);
              }}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full border border-white/20 transition-all duration-300"
            >
              Choose Different Quest
            </button>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            🎭 Quest Mode Guidelines 🎭
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80">
            <div>
              <h4 className="font-semibold text-purple-400 mb-3">Quest Rules:</h4>
              <ul className="space-y-2 text-sm">
                <li>• All tasks are completely optional and pointless</li>
                <li>• Rewards are meaningless but satisfying</li>
                <li>• Spirit guides will judge your commitment</li>
                <li>• Physics and logic are purely suggestions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-400 mb-3">Important Notes:</h4>
              <ul className="space-y-2 text-sm">
                <li>• No actual adventure will occur</li>
                <li>• Side effects include: mild confusion, sudden wisdom</li>
                <li>• Quests may spontaneously evolve or disappear</li>
                <li>• Your participation is both crucial and irrelevant</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-white/60">
          <p className="text-sm">
            🌟 Remember: The journey is meaningless, but the confusion is real 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryMode;