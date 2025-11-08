import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { nutrientsData } from '../data/nutrients';
import { ArrowLeft } from 'lucide-react';
import ConceptMap from '../components/ConceptMap';

const NutrientDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const nutrient = nutrientsData.find((n) => n.id === id);

  if (!nutrient) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-text-primary">Nutrient no trobat</h2>
        <Link to="/nutrients" className="text-primary hover:underline mt-4 inline-block">
          Torna a la Sala de Nutrients
        </Link>
      </div>
    );
  }
  
  const borderColorClass = nutrient.color;

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
       <Link to="/nutrients" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-8 transition-colors font-semibold">
        <ArrowLeft size={20} />
        <span>Torna a la Sala de Nutrients</span>
      </Link>

      <article>
        <header className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl mb-12">
           <img src={nutrient.bannerImage} alt={`Banner de ${nutrient.title}`} className="absolute inset-0 w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/50"></div>
           <div className="relative h-full flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-black text-white text-center drop-shadow-lg">{nutrient.title}</h1>
           </div>
        </header>

        <div className="space-y-8">
          {nutrient.content.sections.map((section, index) => (
            <section key={index} className={`bg-surface p-6 rounded-lg shadow-sm animate-slide-in-left border-l-4 ${borderColorClass}`} style={{ animationDelay: `${index * 100}ms` }}>
              <h2 className="text-2xl font-bold text-text-primary mb-4">{section.title}</h2>
              {section.text && <p className="text-text-secondary leading-relaxed">{section.text}</p>}
              {section.points && (
                <ul className="list-disc list-inside space-y-2 mt-4 text-text-secondary">
                  {section.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm text-left text-text-secondary">
                    <thead className="text-xs text-text-primary uppercase bg-slate-100">
                      <tr>
                        {section.table.headers.map((header, hIndex) => (
                          <th key={hIndex} scope="col" className="px-6 py-3">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rIndex) => (
                        <tr key={rIndex} className="border-b border-slate-200">
                          {row.map((cell, cIndex) => (
                            <td key={cIndex} className={`px-6 py-4 ${cIndex === 0 ? 'font-medium text-text-primary' : ''}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
          
          <ConceptMap conceptMap={nutrient.conceptMap} color={nutrient.color} />

          <section className="bg-surface p-6 rounded-lg shadow-sm animate-slide-in-left" style={{ animationDelay: `${nutrient.content.sections.length * 100}ms`}}>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Vídeo explicatiu 🎥</h2>
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
              <iframe
                className="w-full h-full aspect-video"
                src={`https://www.youtube.com/embed/${nutrient.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default NutrientDetailPage;
