import React from 'react';
import { Nutrient } from '../types';
import { Share2 } from 'lucide-react';

interface ConceptMapProps {
  conceptMap: Nutrient['conceptMap'];
  color: string;
}

const colorStyles: { [key: string]: { text: string; bg: string; border: string; borderLeft: string; } } = {
  'border-accent': {
    text: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent',
    borderLeft: 'border-l-accent',
  },
  'border-yellow-500': {
    text: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500',
    borderLeft: 'border-l-yellow-500',
  },
  'border-red-500': {
    text: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500',
    borderLeft: 'border-l-red-500',
  },
  'border-secondary': {
    text: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary',
    borderLeft: 'border-l-secondary',
  },
  'border-purple-500': {
    text: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500',
    borderLeft: 'border-l-purple-500',
  },
  'border-blue-400': {
    text: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400',
    borderLeft: 'border-l-blue-400',
  },
};


const ConceptMap: React.FC<ConceptMapProps> = ({ conceptMap, color }) => {
  const styles = colorStyles[color] || colorStyles['border-secondary'];

  return (
    <section className="bg-surface p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 animate-fade-in-up">
      <h2 className="flex items-center justify-center gap-3 text-3xl font-black text-center mb-10 text-text-primary">
        <Share2 className={styles.text} size={32} />
        {conceptMap.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {conceptMap.mainPoints.map((mainPoint, index) => (
          <div key={index} className="flex flex-col animate-pop-in" style={{animationDelay: `${index * 100}ms`}}>
            <div className={`p-4 rounded-t-lg ${styles.bg} border-2 border-b-0 ${styles.border}`}>
              <h4 className="font-bold text-lg text-text-primary">{mainPoint.point}</h4>
            </div>
            <div className={`p-4 rounded-b-lg bg-slate-50 border-2 border-t-0 ${styles.border} h-full`}>
                <ul className="space-y-3 text-text-secondary">
                {mainPoint.subpoints.map((subpoint, subIndex) => (
                    <li key={subIndex} className={`pl-4 border-l-4 ${styles.borderLeft}`}>
                        {subpoint.trim().startsWith('-') ? subpoint.replace('-','').trim() : subpoint}
                    </li>
                ))}
                </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConceptMap;
