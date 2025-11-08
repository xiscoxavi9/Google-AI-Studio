import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { foodAnalysisData } from '../data/foodAnalysis';
import { ArrowLeft, ChevronDown, ChevronUp, BarChart2, ListOrdered, Beaker } from 'lucide-react';
import { Product } from '../types';

const CollapsibleSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-surface rounded-lg shadow-sm border border-slate-200">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-4 font-bold text-text-primary">
        <span className="flex items-center gap-3">
          {icon}
          <span className="text-lg">{title}</span>
        </span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && <div className="p-4 border-t border-slate-200">{children}</div>}
    </div>
  );
};

const SugarBarChart: React.FC<{products: Product[]}> = ({ products }) => {
  const maxSugar = Math.max(...products.map(p => p.sugarComparison || 0), 0);
  if (maxSugar === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-text-primary mb-2">Comparativa de Sucre (per 100g/ml)</h3>
      {products.map(product => (
        <div key={product.name}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-semibold">{product.name}</span>
            <span className="text-sm font-bold text-accent">{product.sugarComparison || 0}g</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-accent h-4 rounded-full" 
              style={{ width: `${((product.sugarComparison || 0) / maxSugar) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

const FoodCategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = foodAnalysisData.categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-text-primary">Categoria no trobada</h2>
        <Link to="/aliments" className="text-primary hover:underline mt-4 inline-block">
          Torna a la Sala d'Aliments
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto animate-fade-in-up">
      <Link to="/aliments" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-8 transition-colors font-semibold">
        <ArrowLeft size={20} />
        <span>Totes les categories</span>
      </Link>

      <header className="text-center mb-12">
        <h1 className="text-5xl font-black text-text-primary">{category.name} {category.emoji}</h1>
        <p className="text-lg text-text-secondary mt-2">{category.description}</p>
      </header>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-6 text-text-primary">Productes Analitzats</h2>
        <div className="flex flex-wrap justify-center items-end gap-6">
          {category.products.map(product => (
            <div key={product.name} className="text-center group cursor-pointer">
              <img src={product.image} alt={product.name} className="h-48 object-contain transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-2" />
              <p className="mt-2 font-semibold text-sm transition-colors duration-300 group-hover:text-primary">{product.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="space-y-6">
        <CollapsibleSection title="Gràfic Comparatiu" icon={<BarChart2 className="text-accent"/>}>
          <SugarBarChart products={category.products} />
        </CollapsibleSection>
        
        {category.analysis.map((section, index) => (
          <section key={index} className="bg-surface p-6 rounded-lg shadow-sm border-l-4 border-secondary animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
            <h2 className="text-2xl font-bold text-text-primary mb-4">{section.title}</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
            {section.content.map((item, idx) => {
              if (typeof item === 'string') return <p key={idx}>{item}</p>;
              if (item.type === 'p') return <p key={idx}>{item.text}</p>;
              if (item.type === 'ul') return (
                <ul key={idx} className="list-disc list-inside space-y-2">
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

export default FoodCategoryPage;