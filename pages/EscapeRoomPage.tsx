
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { escapeRoomData } from '../data/escapeRoomData';
import { nutrientsData } from '../data/nutrients';
import { Lock, Unlock, ArrowRight } from 'lucide-react';

const EscapeRoomPage: React.FC = () => {
  const [finalCode, setFinalCode] = useState('');
  const [isCodeCorrect, setIsCodeCorrect] = useState<boolean | null>(null);

  const checkCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalCode === escapeRoomData.finalCode) {
      setIsCodeCorrect(true);
    } else {
      setIsCodeCorrect(false);
    }
  };

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-text-primary">{escapeRoomData.title}</h1>
        <p className="text-xl text-text-secondary mt-2 max-w-2xl mx-auto">
          Supera els 6 reptes sobre nutrients, aconsegueix una xifra a cada un i desxifra el codi final per escapar!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {escapeRoomData.challenges.map((challenge, index) => {
          const nutrient = nutrientsData.find(n => n.id === challenge.nutrientId);
          return (
            <Link 
              key={challenge.id} 
              to={`/games/escape-room/${challenge.id}`}
              className="block group bg-surface rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-center">
                   <h3 className="text-2xl font-bold text-text-primary">{challenge.title}</h3>
                   <span className="text-4xl font-black text-primary/20">{index + 1}</span>
                </div>
                <p className="text-text-secondary mt-2">Un repte sobre {nutrient?.title || 'nutrients'}.</p>
                <div className="mt-4 text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Començar repte <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="max-w-md mx-auto bg-surface p-8 rounded-xl shadow-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">Codi Final</h2>
        <p className="text-text-secondary mb-6">Introdueix les 6 xifres que has aconseguit per obrir el cadenat.</p>
        <form onSubmit={checkCode} className="flex items-center justify-center gap-4">
          <input 
            type="text"
            value={finalCode}
            onChange={(e) => setFinalCode(e.target.value.replace(/[^0-9]/g, ''))}
            maxLength={6}
            className="w-48 text-center text-3xl font-bold tracking-[.5em] bg-slate-100 border-2 border-slate-300 rounded-lg p-2 focus:border-primary focus:ring-primary"
            placeholder="------"
          />
          <button type="submit" className="bg-primary text-white p-3 rounded-lg hover:bg-primary-focus transition-colors">
            <Unlock size={24} />
          </button>
        </form>
        {isCodeCorrect === true && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 font-bold rounded-lg animate-fade-in-up">
            🎉 Felicitats! Has obert el cadenat i has escapat! Ets un/a crack de la nutrició!
          </div>
        )}
        {isCodeCorrect === false && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 font-bold rounded-lg animate-fade-in-up">
            ❌ Codi incorrecte. Revisa les teves pistes i torna-ho a intentar!
          </div>
        )}
      </div>
    </div>
  );
};

export default EscapeRoomPage;