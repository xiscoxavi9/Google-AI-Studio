
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gameFoods } from '../data/gameFoods';
import { nutrientsData } from '../data/nutrients';
import { CheckCircle, XCircle, RotateCw, Home, ArrowLeft } from 'lucide-react';

// Function to shuffle an array
const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const FindTheNutrientGame: React.FC = () => {
  const nutrientChoices = nutrientsData.filter(n => ['hidrats-de-carboni', 'lipids', 'proteines'].includes(n.id));
  
  const [shuffledFoods, setShuffledFoods] = useState(() => shuffleArray(gameFoods));
  const [currentFoodIndex, setCurrentFoodIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const showResults = currentFoodIndex >= shuffledFoods.length;
  const currentFood = shuffledFoods[currentFoodIndex];

  const handleAnswer = (nutrientId: string) => {
    if (isAnswered) return;

    setIsAnswered(true);
    if (nutrientId === currentFood.primaryNutrientId) {
      setScore(prev => prev + 1);
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }

    setTimeout(() => {
      setCurrentFoodIndex(prev => prev + 1);
      setIsAnswered(false);
      setFeedback(null);
    }, 2000);
  };
  
  const resetGame = () => {
    setShuffledFoods(shuffleArray(gameFoods));
    setCurrentFoodIndex(0);
    setScore(0);
    setIsAnswered(false);
    setFeedback(null);
  }

  if (showResults) {
    return (
      <div className="text-center py-10 animate-fade-in-up bg-surface rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-4 text-text-primary">Joc Acabat!</h2>
        <p className="text-5xl font-bold mb-6">
          Puntuació: <span className="text-primary">{score}</span> / {shuffledFoods.length}
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={resetGame} className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
            <RotateCw size={20} />
            <span>Tornar a jugar</span>
          </button>
          <Link to="/games" className="inline-flex items-center gap-2 bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
            <Home size={20} />
            <span>Sala de Jocs</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto animate-fade-in-up">
      <Link to="/games" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-8 transition-colors">
        <ArrowLeft size={20} />
        <span>Torna a la Sala de Jocs</span>
      </Link>
      <div className="bg-surface p-8 rounded-xl shadow-xl text-center">
        <header className="mb-6">
          <p className="text-text-secondary">Aliment {currentFoodIndex + 1} de {shuffledFoods.length}</p>
          <h1 className="text-3xl font-bold text-text-primary">Quin és el nutrient principal de:</h1>
          <h2 className="text-4xl font-bold text-yellow-500 mt-2">{currentFood.name}?</h2>
        </header>

        <div className="relative mb-8">
            <img src={currentFood.image} alt={currentFood.name} className="w-full h-64 object-cover rounded-lg shadow-lg"/>
             {feedback && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-lg">
                    {feedback === 'correct' && <CheckCircle size={120} className="text-green-400 animate-pop-in" />}
                    {feedback === 'incorrect' && <XCircle size={120} className="text-red-400 animate-pop-in" />}
                </div>
            )}
        </div>
       

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {nutrientChoices.map(nutrient => (
            <button
              key={nutrient.id}
              onClick={() => handleAnswer(nutrient.id)}
              disabled={isAnswered}
              className={`p-4 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none
                ${ isAnswered && currentFood.primaryNutrientId === nutrient.id ? 'bg-green-500' : ''}
                ${ isAnswered && feedback === 'incorrect' && currentFood.primaryNutrientId !== nutrient.id ? 'bg-red-500' : ''}
                ${ !isAnswered ? 'bg-secondary hover:bg-blue-600' : ''}
              `}
            >
              {nutrient.title}
            </button>
          ))}
        </div>
         <p className="text-right text-2xl font-bold mt-6 text-text-primary">Puntuació: {score}</p>
      </div>
    </div>
  );
};

export default FindTheNutrientGame;