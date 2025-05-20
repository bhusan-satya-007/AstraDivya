
import React from 'react';
import SanskritSymbol from './SanskritSymbol';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Cosmic background */}
      <div className="absolute inset-0 cosmic-gradient cosmic-dots"></div>
      
      {/* Floating Sanskrit symbols */}
      {Array.from({ length: 15 }).map((_, index) => (
        <div 
          key={index} 
          className="sanskrit-letter"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 5 + 2}rem`,
            opacity: `${Math.random() * 0.1 + 0.05}`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 40 + 20}s`
          }}
        >
          <SanskritSymbol />
        </div>
      ))}
      
      {/* Light orbs */}
      <div className="absolute top-[10%] right-[15%] w-32 h-32 bg-mystic-500/5 rounded-full blur-3xl animate-pulse-light"></div>
      <div className="absolute bottom-[20%] left-[10%] w-40 h-40 bg-mystic-400/5 rounded-full blur-3xl animate-pulse-light" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default BackgroundEffects;
