import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

interface ZodiacCardProps {
  sign: string;
  dates: string;
  element: string;
  ruling: string;
  iconUrl: string;
}

const zodiacInfo = {
  Aries: {
    description: "The first sign of the zodiac, Aries represents new beginnings and leadership. Known for their courage, determination, and pioneering spirit.",
    traits: ["Bold", "Adventurous", "Independent", "Energetic", "Confident"],
    compatibility: "Best with Leo and Sagittarius"
  },
  Taurus: {
    description: "The grounded earth sign, Taurus values stability, security, and sensual pleasures. They are known for their patience, reliability, and strong work ethic.",
    traits: ["Practical", "Loyal", "Patient", "Determined", "Sensual"],
    compatibility: "Best with Virgo and Capricorn"
  },
  Gemini: {
    description: "The curious air sign, Gemini represents communication, adaptability, and intellectual curiosity. They are known for their quick wit and versatility.",
    traits: ["Adaptable", "Curious", "Communicative", "Intellectual", "Playful"],
    compatibility: "Best with Libra and Aquarius"
  },
  Cancer: {
    description: "The nurturing water sign, Cancer represents emotions, intuition, and family. They are known for their empathy, protective nature, and strong intuition.",
    traits: ["Nurturing", "Intuitive", "Emotional", "Protective", "Loyal"],
    compatibility: "Best with Scorpio and Pisces"
  },
  Leo: {
    description: "The regal fire sign, Leo represents creativity, leadership, and self-expression. They are known for their generosity, warmth, and natural leadership.",
    traits: ["Confident", "Creative", "Generous", "Loyal", "Dramatic"],
    compatibility: "Best with Aries and Sagittarius"
  },
  Virgo: {
    description: "The analytical earth sign, Virgo represents service, perfection, and attention to detail. They are known for their practicality and helpful nature.",
    traits: ["Analytical", "Practical", "Detail-oriented", "Helpful", "Reliable"],
    compatibility: "Best with Taurus and Capricorn"
  },
  Libra: {
    description: "The harmonious air sign, Libra represents balance, relationships, and justice. They are known for their diplomacy and love of beauty.",
    traits: ["Diplomatic", "Social", "Fair-minded", "Romantic", "Idealistic"],
    compatibility: "Best with Gemini and Aquarius"
  },
  Scorpio: {
    description: "The intense water sign, Scorpio represents transformation, power, and deep emotions. They are known for their passion and investigative nature.",
    traits: ["Passionate", "Resourceful", "Determined", "Intense", "Loyal"],
    compatibility: "Best with Cancer and Pisces"
  },
  Sagittarius: {
    description: "The adventurous fire sign, Sagittarius represents freedom, philosophy, and exploration. They are known for their optimism and love of adventure.",
    traits: ["Optimistic", "Adventurous", "Philosophical", "Honest", "Independent"],
    compatibility: "Best with Aries and Leo"
  },
  Capricorn: {
    description: "The ambitious earth sign, Capricorn represents discipline, responsibility, and achievement. They are known for their determination and practical wisdom.",
    traits: ["Ambitious", "Disciplined", "Responsible", "Patient", "Practical"],
    compatibility: "Best with Taurus and Virgo"
  },
  Aquarius: {
    description: "The innovative air sign, Aquarius represents originality, humanitarianism, and independence. They are known for their progressive thinking and unique perspective.",
    traits: ["Original", "Independent", "Humanitarian", "Inventive", "Friendly"],
    compatibility: "Best with Gemini and Libra"
  },
  Pisces: {
    description: "The dreamy water sign, Pisces represents intuition, compassion, and artistic expression. They are known for their empathy and creative imagination.",
    traits: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise"],
    compatibility: "Best with Cancer and Scorpio"
  }
};

const ZodiacCard: React.FC<ZodiacCardProps> = ({ sign, dates, element, ruling, iconUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const info = zodiacInfo[sign as keyof typeof zodiacInfo];

  return (
    <Card 
      className="card-mystic overflow-hidden transition-all duration-500 hover:mystic-border-glow group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-40 overflow-hidden bg-cosmic-800/50 flex items-center justify-center">
        {iconUrl ? (
          <img 
            src={iconUrl} 
            alt={sign}
            className="h-24 w-24 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <span className="text-7xl mystic-gradient mystic-glow group-hover:scale-110 transition-transform duration-500"></span>
        )}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-mystic font-semibold mystic-gradient mystic-glow">{sign}</h3>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-400">{dates}</p>
        <div className="my-3 flex space-x-4 text-xs text-gray-300">
          <span className="inline-flex items-center">
            <span className="w-2 h-2 bg-mystic-400 rounded-full mr-1"></span>
            {element}
          </span>
          <span className="inline-flex items-center">
            <span className="w-2 h-2 bg-mystic-400 rounded-full mr-1"></span>
            {ruling}
          </span>
        </div>

        {/* Expandable Content */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isHovered ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 space-y-4 border-t border-cosmic-700">
            <p className="text-sm text-gray-300 leading-relaxed">{info.description}</p>
            
            <div>
              <h4 className="text-xs font-medium text-mystic-300 mb-2">Key Traits</h4>
              <div className="flex flex-wrap gap-2">
                {info.traits.map((trait, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-cosmic-700 text-mystic-300 border border-mystic-500/20"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-mystic-300">
              <span className="text-gray-400">Compatibility:</span> {info.compatibility}
            </p>
          </div>
        </div>
        
        <Button 
          asChild 
          variant="outline" 
          className={`w-full mt-4 border-mystic-500/30 hover:border-mystic-500 hover:bg-mystic-500/10 transition-all duration-300 ${
            isHovered ? 'translate-y-2' : ''
          }`}
        >
          <NavLink to={`/horoscope/${sign.toLowerCase()}`}>
            Today's Horoscope
          </NavLink>
        </Button>
      </div>
    </Card>
  );
};

export default ZodiacCard;
