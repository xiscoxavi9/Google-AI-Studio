
import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Target, KeyRound } from 'lucide-react';

const GameCard: React.FC<{ to: string; icon: React.ReactNode; title: string; description: string; color: string; iconColor: string; }> = ({ to, icon, title, description, color, iconColor }) => (
  <Link to={to} className={`bg-surface p-8 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center animate-fade-in-up border-b-4 ${color}`}>
    <div className={`mb-4 p-4 rounded-full ${iconColor}/10`}>{icon}</div>
    <h3 className="text-2xl font-bold text-text-primary mb-2">{title}</h3>
    <p className="text-text-secondary text-sm flex-grow">{description}</p>
  </Link>
);

const GamesPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-black text-center mb-12 text-text-primary">Sala de Jocs</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GameCard
          to="/games/quiz"
          icon={<HelpCircle size={56} className="text-accent" />}
          title="Qüestionari: Saber Nutricional"
          description="Respon 10 preguntes de tipus test per comprovar quant saps sobre els nutrients essencials."
          color="border-accent"
          iconColor="bg-accent"
        />
        <GameCard
          to="/games/find-the-nutrient"
          icon={<Target size={56} className="text-primary" />}
          title="Joc: Troba el Nutrient"
          description="Identifica el nutrient principal en diferents aliments. Posa a prova la teva rapidesa i coneixement!"
          color="border-primary"
          iconColor="bg-primary"
        />
        <GameCard
          to="/games/escape-room"
          icon={<KeyRound size={56} className="text-secondary" />}
          title="Escape Room: Consciència Alimentària"
          description="Supera 6 reptes sobre nutrients, aconsegueix les pistes i desxifra el codi final. T'hi atreveixes?"
          color="border-secondary"
          iconColor="bg-secondary"
        />
      </div>
    </div>
  );
};

export default GamesPage;