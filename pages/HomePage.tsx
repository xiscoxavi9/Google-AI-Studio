import React from 'react';
import { Link } from 'react-router-dom';

interface RoomCardProps {
  to: string;
  title: string;
  description: string;
  imageUrl: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ to, title, description, imageUrl }) => (
  <Link to={to} className="relative block group rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up">
    <img 
      src={imageUrl} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 brightness-[.6] group-hover:brightness-100" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="relative h-full flex flex-col justify-end p-6 text-white">
      <h3 className="text-3xl font-black mb-2 drop-shadow-md">{title}</h3>
      <p className="text-sm opacity-90 drop-shadow-md">{description}</p>
    </div>
  </Link>
);

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-7xl font-black text-text-primary mb-4 animate-fade-in-up">
          Centre de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-text">Consciència Alimentària</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Un espai per explorar, aprendre i entendre el que mengem.
        </p>
      </section>

      {/* Quick Access Rooms */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{gridAutoRows: '1fr'}}>
          <RoomCard
            to="/nutrients"
            title="Sala de Nutrients"
            description="Explora els blocs fonamentals de la teva alimentació: hidrats, lípids, proteïnes i més."
            imageUrl="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1470&auto=format&fit=crop"
          />
           <RoomCard
            to="/aliments"
            title="Sala d'Aliments"
            description="Analitzem i comparem productes reals del supermercat. Sabem realment què mengem?"
            imageUrl="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=1470&auto=format&fit=crop"
          />
          <RoomCard
            to="/games"
            title="Sala de Jocs"
            description="Posa a prova els teus coneixements amb jocs interactius i un Escape Room."
            imageUrl="https://images.unsplash.com/photo-1608111295325-03489832261b?q=80&w=1470&auto=format&fit=crop"
          />
          <RoomCard
            to="/analysis"
            title="Sala d'Anàlisi"
            description="[En construcció] Compara i analitza els aliments que consumeixes cada dia."
            imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
          />
          <RoomCard
            to="/nutritionist"
            title="Sala del Nutricionista"
            description="[En construcció] Consulta amb el nostre expert en nutrició i dietètica."
            imageUrl="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?q=80&w=1374&auto=format&fit=crop"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;