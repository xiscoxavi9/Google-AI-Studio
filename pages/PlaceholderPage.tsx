
import React from 'react';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-20 animate-fade-in-up">
      <div className="mb-6">{icon}</div>
      <h1 className="text-4xl font-black text-text-primary mb-4">{title}</h1>
      <p className="text-lg text-text-secondary max-w-md mb-2">{description}</p>
      <p className="px-4 py-2 bg-yellow-400/20 text-yellow-600 font-bold rounded-full text-sm mb-8">
        En construcció
      </p>
      <Link
        to="/"
        className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-focus transition-colors duration-300"
      >
        Torna a l'inici
      </Link>
    </div>
  );
};

export default PlaceholderPage;