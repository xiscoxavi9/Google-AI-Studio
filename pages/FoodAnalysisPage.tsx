
import React from 'react';
import { Link } from 'react-router-dom';
import { foodAnalysisData } from '../data/foodAnalysis';

const CategoryCard: React.FC<{ category: typeof foodAnalysisData.categories[0] }> = ({ category }) => {
  return (
    <Link to={`/aliments/${category.id}`} className="block group">
      <div className="bg-surface rounded-xl shadow-md overflow-hidden transform group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
        <div className="relative">
          <img className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" src={category.image} alt={category.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h3 className="absolute bottom-4 left-4 text-3xl font-black text-white">{category.name} {category.emoji}</h3>
        </div>
        <div className="p-6">
          <p className="text-text-secondary">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};

const FoodAnalysisPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-text-primary">Sala d'Aliments</h1>
        <p className="text-xl text-text-secondary mt-2 max-w-2xl mx-auto">Analitzem i comparem productes reals del supermercat. Sabem realment què mengem?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodAnalysisData.categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default FoodAnalysisPage;
