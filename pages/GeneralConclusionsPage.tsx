
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { foodAnalysisData } from '../data/foodAnalysis';

const GeneralConclusionsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <Link to="/aliments" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-8 transition-colors font-semibold">
        <ArrowLeft size={20} />
        <span>Torna a la Sala d'Aliments</span>
      </Link>
      
      <header className="text-center mb-12">
        <h1 className="text-5xl font-black text-text-primary">Conclusions Generals 🤔</h1>
        <p className="text-xl text-text-secondary mt-2">Què hem après després d'investigar les etiquetes?</p>
      </header>

      <div className="space-y-8">
        {foodAnalysisData.generalConclusions.map((section, index) => (
          <section key={index} className="bg-surface p-6 rounded-lg shadow-sm border-l-4 border-primary animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
            <h2 className="text-3xl font-bold text-text-primary mb-4">{section.title}</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
            {section.content.map((item, idx) => {
              if (typeof item === 'string') return <p key={idx}>{item}</p>;
              if (item.type === 'p') return <p key={idx}>{item.text}</p>;
              if (item.type === 'ul') return (
                <ul key={idx} className="list-disc list-inside space-y-3">
                  {item.items.map((li, li_idx) => <li key={li_idx}>{li}</li>)}
                </ul>
              );
              return null;
            })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default GeneralConclusionsPage;
