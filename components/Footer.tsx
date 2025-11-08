
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface mt-12 border-t border-slate-200">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} Projecte de Consciència Alimentària CEIPIESO Gabriel Vallseca
        </p>
      </div>
    </footer>
  );
};

export default Footer;
