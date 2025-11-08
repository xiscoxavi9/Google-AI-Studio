
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { nutrientsData } from '../data/nutrients';

const NutrientCard: React.FC<{ nutrient: typeof nutrientsData[0] }> = ({ nutrient }) => {
  return (
    <Link to={`/nutrients/${nutrient.id}`} className="block group">
      <div className={`bg-surface rounded-xl shadow-md overflow-hidden transform group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300 border ${nutrient.color.replace('border-', 'border-')}/30`}>
        <img className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" src={nutrient.image} alt={nutrient.title} />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-text-primary">{nutrient.title}</h3>
        </div>
      </div>
    </Link>
  );
};


const NutrientsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const filteredNutrients = categoryFilter
    ? nutrientsData.filter(nutrient => nutrient.category === categoryFilter)
    : nutrientsData;

  const getTitle = () => {
    switch(categoryFilter) {
      case 'macronutrient':
        return 'Macronutrients';
      case 'micronutrient':
        return 'Micronutrients';
      case 'other':
        return 'Aigua';
      default:
        return 'Tots els Nutrients';
    }
  }

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-black text-center mb-12 text-text-primary">
        Sala de Nutrients: <span className="text-primary">{getTitle()}</span>
      </h1>
      {filteredNutrients.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNutrients.map((nutrient) => (
            <NutrientCard key={nutrient.id} nutrient={nutrient} />
          ))}
        </div>
      ) : (
         <p className="text-center text-text-secondary">No s'han trobat nutrients per a aquesta categoria.</p>
      )}
    </div>
  );
};

export default NutrientsPage;
