
import React from 'react';

const sanskritSymbols = ["ॐ", "ऋ", "ॠ", "ऌ", "ॡ", "अः", "ज्ञ", "श्र", "क्ष", "त्र"];

interface SanskritSymbolProps {
  className?: string;
}

export const SanskritSymbol: React.FC<SanskritSymbolProps> = ({ className }) => {
  const randomSymbol = sanskritSymbols[Math.floor(Math.random() * sanskritSymbols.length)];
  
  return (
    <span className={`sanskritSymbol ${className || ''}`}>
      {randomSymbol}
    </span>
  );
};

export default SanskritSymbol;
