
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { quizQuestions } from '../data/quizQuestions';
import { RotateCw, Home, ArrowLeft, Check, X } from 'lucide-react';

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isAnswered = selectedAnswerIndex !== null;

  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;

    setSelectedAnswerIndex(index);
    if (index === currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswerIndex(null);
    } else {
      setShowResults(true);
    }
  };
  
  const resetQuiz = () => {
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedAnswerIndex(null);
      setShowResults(false);
  }

  const getResultFeedback = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "Excel·lent! Ets un expert/a en nutrició! 🏆";
    if (percentage >= 50) return "Bon treball! Continua aprenent per millorar encara més. 👍";
    return "No et preocupis! Repassa la Sala de Nutrients i torna-ho a intentar. 💪";
  }

  if (showResults) {
    return (
      <div className="text-center py-10 animate-fade-in-up bg-surface rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-4 text-text-primary">Resultats del Qüestionari</h2>
        <p className="text-5xl font-bold mb-4">
          Has encertat <span className="text-primary">{score}</span> de {quizQuestions.length}
        </p>
        <p className="text-lg text-text-secondary mb-8">{getResultFeedback()}</p>
        <div className="flex justify-center gap-4">
          <button onClick={resetQuiz} className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
            <RotateCw size={20}/>
            <span>Tornar a intentar</span>
          </button>
           <Link to="/games" className="inline-flex items-center gap-2 bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
            <Home size={20}/>
            <span>Sala de Jocs</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto animate-fade-in-up">
        <Link to="/games" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={20} />
            <span>Torna a la Sala de Jocs</span>
        </Link>
        <div className="bg-surface p-8 rounded-xl shadow-xl">
            {/* Progress Bar and Counter */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2 text-sm font-bold text-text-secondary">
                    <p>Pregunta {currentQuestionIndex + 1} de {quizQuestions.length}</p>
                     <p>Puntuació: {score}</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full transition-all duration-500" style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}></div>
                </div>
            </div>

            {/* Question */}
            <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">{currentQuestion.question}</h2>

            {/* Options */}
            <div className="space-y-4">
            {currentQuestion.options.map((option, index) => {
                const isCorrect = index === currentQuestion.correctAnswerIndex;
                const isSelected = index === selectedAnswerIndex;
                
                let buttonClass = 'bg-surface border-slate-300 hover:bg-primary/10 hover:border-primary text-text-primary';
                if(isAnswered) {
                    if(isCorrect) {
                        buttonClass = 'bg-green-500 border-green-500 text-white';
                    } else if (isSelected) {
                        buttonClass = 'bg-red-500 border-red-500 text-white';
                    } else {
                        buttonClass = 'bg-slate-100 border-slate-200 text-text-secondary opacity-70';
                    }
                }

                return (
                    <button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        disabled={isAnswered}
                        className={`w-full text-left p-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-102 disabled:transform-none border-2 flex justify-between items-center ${buttonClass}`}
                    >
                        <span>{option}</span>
                        {isAnswered && isCorrect && <Check size={24} />}
                        {isAnswered && isSelected && !isCorrect && <X size={24} />}
                    </button>
                );
            })}
            </div>

            {/* Feedback and Next Button */}
            {isAnswered && (
                <div className="mt-6 p-4 bg-slate-100 rounded-lg animate-fade-in-up">
                    <p className="text-text-secondary">{currentQuestion.explanation}</p>
                    <button
                        onClick={handleNextClick}
                        className="w-full mt-4 bg-accent text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        {currentQuestionIndex < quizQuestions.length - 1 ? 'Següent Pregunta' : 'Veure Resultats'}
                    </button>
                </div>
            )}
        </div>
    </div>
  );
};

export default QuizPage;