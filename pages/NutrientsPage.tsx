
import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-black text-center mb-12 text-text-primary">Sala de Nutrients</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nutrientsData.map((nutrient) => (
          <NutrientCard key={nutrient.id} nutrient={nutrient} />
        ))}
      </div>
    </div>
  );
};

export default NutrientsPage;