
import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Apple, ChevronDown, Compass, HeartPulse } from 'lucide-react';
import { foodAnalysisData } from '../data/foodAnalysis';

const baseNavLinks = [
  { to: '/', text: 'Inici' },
  { to: '/games', text: 'Jocs' },
  { to: '/avaluacio-nutricional', text: 'Avaluació Nutricional' },
];

const finalNavLinks = [
  { to: '/analysis', text: 'Anàlisi' },
  { to: '/nutritionist', text: 'Nutricionista' },
];

const nutrientFilters = [
    { name: 'Tots els Nutrients', filter: 'all', to: '/nutrients' },
    { name: 'Macronutrients', filter: 'macronutrient', to: '/nutrients?category=macronutrient' },
    { name: 'Micronutrients', filter: 'micronutrient', to: '/nutrients?category=micronutrient' },
    { name: 'Aigua', filter: 'other', to: '/nutrients?category=other' },
];

const Header: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isFoodDropdownOpen, setIsFoodDropdownOpen] = useState(false);
  const [isNutrientsDropdownOpen, setIsNutrientsDropdownOpen] = useState(false);
  
  const foodDropdownRef = useRef<HTMLLIElement>(null);
  const nutrientsDropdownRef = useRef<HTMLLIElement>(null);
  
  const [activeNutrientFilter, setActiveNutrientFilter] = useState<string>('all');

  useEffect(() => {
    const savedFilter = localStorage.getItem('nutrientFilter');
    if (savedFilter && nutrientFilters.some(f => f.filter === savedFilter)) {
      setActiveNutrientFilter(savedFilter);
    }
  }, []);

  const handleFilterClick = (filter: string) => {
    localStorage.setItem('nutrientFilter', filter);
    setActiveNutrientFilter(filter);
    setIsNutrientsDropdownOpen(false);
  };

  const linkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300";
  const activeLinkClasses = "bg-primary text-white shadow-md";
  const inactiveLinkClasses = "text-text-secondary hover:bg-primary/10 hover:text-primary";
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (foodDropdownRef.current && !foodDropdownRef.current.contains(event.target as Node)) {
        setIsFoodDropdownOpen(false);
      }
      if (nutrientsDropdownRef.current && !nutrientsDropdownRef.current.contains(event.target as Node)) {
        setIsNutrientsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const nutrientsNav = (
    <li ref={nutrientsDropdownRef} className="relative" onMouseEnter={() => setIsNutrientsDropdownOpen(true)} onMouseLeave={() => setIsNutrientsDropdownOpen(false)}>
      <NavLink to="/nutrients" className={({ isActive, isPending }) => `${linkClasses} flex items-center gap-1 ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>
        <span>Sala de Nutrients</span>
        <ChevronDown size={16} />
      </NavLink>
      {isNutrientsDropdownOpen && (
        <ul className="absolute left-0 mt-2 w-56 bg-surface rounded-md shadow-lg py-1 z-50 animate-fade-in-up" style={{animationDuration: '300ms'}}>
          {nutrientFilters.map(item => (
             <li key={item.filter}>
              <Link 
                to={item.to} 
                onClick={() => handleFilterClick(item.filter)}
                className={`block px-4 py-2 text-sm w-full text-left transition-colors ${activeNutrientFilter === item.filter ? 'font-bold text-primary bg-primary/10' : 'text-text-secondary hover:bg-primary/10 hover:text-primary'}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  const foodNav = (
     <li ref={foodDropdownRef} className="relative" onMouseEnter={() => setIsFoodDropdownOpen(true)} onMouseLeave={() => setIsFoodDropdownOpen(false)}>
      <NavLink to="/aliments" className={({ isActive }) => `${linkClasses} flex items-center gap-1 ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>
        <span>Sala d'Aliments</span>
        <ChevronDown size={16} />
      </NavLink>
      {isFoodDropdownOpen && (
        <ul className="absolute left-0 mt-2 w-64 bg-surface rounded-md shadow-lg py-1 z-50 animate-fade-in-up" style={{animationDuration: '300ms'}}>
          <li>
            <NavLink to="/aliments" className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:bg-primary/10 hover:text-primary w-full text-left font-semibold" onClick={() => setIsFoodDropdownOpen(false)}>
              <Compass size={16} /> Anàlisi General d'Aliments
            </NavLink>
          </li>
          <li><hr className="my-1 border-slate-200" /></li>
          {foodAnalysisData.categories.map(cat => (
             <li key={cat.id}>
              <NavLink to={`/aliments/${cat.id}`} className="block px-4 py-2 text-sm text-text-secondary hover:bg-primary/10 hover:text-primary w-full text-left" onClick={() => setIsFoodDropdownOpen(false)}>
                {cat.emoji} {cat.name}
              </NavLink>
            </li>
          ))}
          <li><hr className="my-1 border-slate-200" /></li>
          <li>
            <NavLink to="/aliments/conclusions" className="block px-4 py-2 text-sm text-text-secondary hover:bg-primary/10 hover:text-primary w-full text-left" onClick={() => setIsFoodDropdownOpen(false)}>
              🤔 Conclusions Generals
            </NavLink>
          </li>
        </ul>
      )}
    </li>
  );

  return (
    <header className="bg-surface/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 text-text-primary font-bold text-xl">
              <Apple className="text-primary h-8 w-8"/>
              <span>Consciència Alimentària</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              {baseNavLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses} ${link.to === '/avaluacio-nutricional' ? 'flex items-center gap-1.5' : ''}`}>
                    {link.to === '/avaluacio-nutricional' && <HeartPulse size={16} />}
                    <span>{link.text}</span>
                  </NavLink>
                </li>
              ))}
              {nutrientsNav}
              {foodNav}
              {finalNavLinks.map((link) => (
                 <li key={link.to}>
                  <NavLink to={link.to} className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              type="button"
              className="bg-surface inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-surface" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[...baseNavLinks, { to: '/nutrients', text: "Sala de Nutrients" }, { to: '/aliments', text: "Sala d'Aliments" }, ...finalNavLinks].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => `block ${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
