
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FeaturedReadingProps {
  title: string;
  description: string;
  imageSrc: string;
  badges: string[];
  price: number;
}

const FeaturedReading: React.FC<FeaturedReadingProps> = ({
  title,
  description,
  imageSrc,
  badges,
  price,
}) => {
  return (
    <Card className="card-mystic overflow-hidden transition-all duration-300 hover:mystic-border-glow flex flex-col md:flex-row">
      <div className="relative h-48 md:w-1/3 md:h-auto overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {badges.map((badge) => (
              <Badge key={badge} className="bg-mystic-500/20 text-mystic-300 hover:bg-mystic-500/30">
                {badge}
              </Badge>
            ))}
          </div>

          <h3 className="text-xl font-mystic font-semibold mystic-gradient mystic-glow mb-2">{title}</h3>
          
          <p className="text-gray-400 mb-4">{description}</p>
        </div>
        
        <div className="flex justify-between items-center mt-auto">
          <div>
            {price > 0 ? (
              <div className="flex items-baseline">
                <span className="text-2xl font-semibold mystic-gradient">${price}</span>
                <span className="text-gray-500 ml-2">one-time</span>
              </div>
            ) : (
              <span className="text-lg font-medium text-mystic-400">Free</span>
            )}
          </div>
          
          <button className="bg-gradient-mystic text-white px-6 py-2 rounded-full hover:opacity-90 transition-all">
            View Details
          </button>
        </div>
      </div>
    </Card>
  );
};

export default FeaturedReading;
