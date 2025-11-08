
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NutrientsPage from './pages/NutrientsPage';
import NutrientDetailPage from './pages/NutrientDetailPage';
import PlaceholderPage from './pages/PlaceholderPage';
import Header from './components/Header';
import Footer from './components/Footer';
import GamesPage from './pages/GamesPage';
import QuizPage from './pages/QuizPage';
import FindTheNutrientGame from './pages/FindTheNutrientGame';
import FoodAnalysisPage from './pages/FoodAnalysisPage';
import FoodCategoryPage from './pages/FoodCategoryPage';
import GeneralConclusionsPage from './pages/GeneralConclusionsPage';
import EscapeRoomPage from './pages/EscapeRoomPage';
import ChallengePage from './pages/ChallengePage';


import { TestTube, Stethoscope, HeartPulse } from 'lucide-react';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-background min-h-screen text-text-primary font-sans flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nutrients" element={<NutrientsPage />} />
            <Route path="/nutrients/:id" element={<NutrientDetailPage />} />
            
            <Route path="/games" element={<GamesPage />} />
            <Route path="/games/quiz" element={<QuizPage />} />
            <Route path="/games/find-the-nutrient" element={<FindTheNutrientGame />} />
            <Route path="/games/escape-room" element={<EscapeRoomPage />} />
            <Route path="/games/escape-room/:challengeId" element={<ChallengePage />} />
            
            <Route path="/aliments" element={<FoodAnalysisPage />} />
            <Route path="/aliments/conclusions" element={<GeneralConclusionsPage />} />
            <Route path="/aliments/:categoryId" element={<FoodCategoryPage />} />

            <Route path="/analysis" element={
              <PlaceholderPage 
                icon={<TestTube size={64} className="text-accent" />} 
                title="Sala d'Anàlisi" 
                description="Proximament: Aquí podràs trobar comparatives i anàlisis detallades dels aliments que consumim cada dia" 
              />
            } />
            <Route path="/nutritionist" element={
              <PlaceholderPage 
                icon={<Stethoscope size={64} className="text-secondary" />} 
                title="Sala del Nutricionista" 
                description="Proximament: Consulta amb el nostre expert en nutrició i dietètica" 
              />
            } />
             <Route path="/avaluacio-nutricional" element={
              <PlaceholderPage 
                icon={<HeartPulse size={64} className="text-primary" />} 
                title="Avaluació Nutricional" 
                description="Proximament: Eines per avaluar la teva dieta i obtenir recomanacions personalitzades." 
              />
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
