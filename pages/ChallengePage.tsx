
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { escapeRoomData } from '../data/escapeRoomData';
import { Activity } from '../types';
import { ArrowLeft, Lightbulb } from 'lucide-react';

const ChallengePage: React.FC = () => {
  const { challengeId } = useParams<{ challengeId: string }>();
  const challenge = escapeRoomData.challenges.find(c => c.id === challengeId);

  const [activities, setActivities] = useState<Activity[]>(challenge?.activities || []);
  const [showClue, setShowClue] = useState(false);

  useEffect(() => {
    // Reset state if challenge changes
    setActivities(challenge?.activities || []);
    setShowClue(false);
  }, [challengeId]);

  if (!challenge) {
    return <div>Repte no trobat.</div>;
  }

  const handleInputChange = (activityIndex: number, inputIndex: number, value: string | string[]) => {
    const newActivities = [...activities];
    if (!newActivities[activityIndex].userInputs) {
      newActivities[activityIndex].userInputs = [];
    }
    newActivities[activityIndex].userInputs![inputIndex] = value;
    setActivities(newActivities);
  };
  
  const checkAnswers = () => {
      const newActivities = activities.map(activity => {
          let allCorrect = true;
          // Logic to check each activity type would go here.
          // For simplicity, we'll just assume they got it right for the demo.
          // In a real scenario, you'd compare userInputs with solutions.
          return {...activity, isCorrect: [true]} // Simplified for demonstration
      });
      setActivities(newActivities);
      
      // Check if all activities are completed correctly
      const allDone = newActivities.every(a => a.isCorrect?.[0]);
      if(allDone) {
          setShowClue(true);
      } else {
          alert("Algunes respostes no són correctes. Revisa-les!");
      }
  }

  const renderActivity = (activity: Activity, activityIndex: number) => {
    switch (activity.type) {
      case 'fill-in-blanks':
        return (
          <div>
            <p>{activity.instructions}</p>
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              {activity.data.text.map((segment: string, i: number) => (
                <React.Fragment key={i}>
                  {segment}
                  {i < activity.data.solutions.length && (
                    <input
                      type="text"
                      className="border-b-2 border-primary bg-transparent mx-1 px-1 w-24 text-center"
                      onChange={(e) => handleInputChange(activityIndex, i, e.target.value)}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        );
      case 'classification':
         return (
            <div>
              <p>{activity.instructions}</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {activity.data.categories.map((cat: string, catIndex: number) => (
                    <div key={catIndex} className="bg-slate-100 p-4 rounded-lg">
                        <h4 className="font-bold text-center mb-2">{cat}</h4>
                        {/* Placeholder for drag & drop or selection */}
                        <div className="min-h-[100px] border-2 border-dashed rounded-lg p-2">
                            <p className="text-xs text-slate-400 text-center">Arrossega els aliments aquí</p>
                        </div>
                    </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                  {activity.data.items.map((item: any, itemIndex: number) => (
                      <div key={itemIndex} className="p-2 bg-white rounded-full shadow-sm text-2xl cursor-pointer">
                          {item.image}
                      </div>
                  ))}
              </div>
            </div>
         );
       case 'timeline':
            return (
                <div>
                    <p>{activity.instructions}</p>
                    <div className="relative mt-12 mb-8 px-4">
                        <div className="h-1 bg-slate-300"></div>
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-red-500 -translate-y-1/2"></div>
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full"></div>
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                        <div className="absolute top-full left-0 text-sm font-bold text-green-600">{activity.data.labelStart}</div>
                        <div className="absolute top-full right-0 text-sm font-bold text-red-600">{activity.data.labelEnd}</div>
                    </div>
                     <p className="text-center text-sm text-slate-500">Imagina que col·loques aquí: {activity.data.items.join(', ')}</p>
                </div>
            )
      default:
        return <p>Activitat de tipus '{activity.type}' no implementada.</p>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <Link to="/games/escape-room" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-8 transition-colors font-semibold">
        <ArrowLeft size={20} />
        <span>Tornar a l'Escape Room</span>
      </Link>

      <header className="text-center mb-8">
        <h1 className="text-4xl font-black text-text-primary">{challenge.title}</h1>
      </header>

      <div className="bg-surface p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-bold mb-3">Objectius del repte:</h2>
        <ul className="list-disc list-inside space-y-1 text-text-secondary">
          {challenge.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
        </ul>
      </div>

      <div className="space-y-8">
        {activities.map((activity, index) => (
          <div key={index} className="bg-surface p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-text-primary mb-4">{activity.title}</h3>
            {renderActivity(activity, index)}
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
          <button 
            onClick={checkAnswers}
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-focus transition-colors text-lg"
          >
              He acabat, comprova les respostes!
          </button>
      </div>

      {showClue && (
          <div className="mt-8 p-6 bg-yellow-100 border-l-4 border-yellow-400 rounded-r-lg animate-fade-in-up">
              <div className="flex items-center gap-4">
                <Lightbulb size={40} className="text-yellow-500"/>
                <div>
                    <h3 className="text-xl font-bold text-yellow-800">Pista per a la xifra!</h3>
                    <p className="text-yellow-700 mt-2">{challenge.clue.question}</p>
                    <p className="text-3xl font-black text-yellow-800 mt-2">
                        La teva xifra és: {typeof challenge.clue.getCorrectAnswer === 'function' ? challenge.clue.getCorrectAnswer(activities) : challenge.clue.getCorrectAnswer}
                    </p>
                </div>
              </div>
          </div>
      )}

    </div>
  );
};

export default ChallengePage;